"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ScreenFlowContext, FREE_CONTEXT, type Plan } from "./ScreenFlowContext";
import {
  getCachedBootstrap,
  getCachedBootstrapStale,
  setCachedBootstrap,
} from "./bootstrapCache";
import { FlowScreenSkeleton } from "./FlowScreenSkeleton";

/** Default TTL in seconds when API omits it (6h). */
const DEFAULT_TTL_SECONDS = 21600;

/** Revalidate cache in background if older than this (ms). Ensures Pro upgrade is picked up within ~1 min. */
const REVALIDATE_AFTER_MS = 60_000;

/** Response from POST /bootstrap. Backend returns only this (no HTML/CSS/JS). */
export interface BootstrapResponse {
  plan: Plan;
  enabledTemplates: string[];
  ttl: number;
}

/** Default FlowScreen backend base URL. Override with apiBaseUrl for development. */
export const DEFAULT_BOOTSTRAP_BASE_URL = "https://bootstrap.errorflow.io";

export interface ScreenFlowProviderProps {
  /** Project public key for entitlement. */
  projectKey: string;
  children: ReactNode;
  /** Backend base URL. Provider calls POST {apiBaseUrl}/bootstrap. */
  apiBaseUrl?: string;
  /** When true, skip cache and refetch (e.g. after changing plan in DB). */
  disableCache?: boolean;
}

/**
 * Optional. Use only for pro/enterprise; without Provider, SDK works in free mode (no network).
 */
function buildBootstrapUrl(apiBaseUrl: string | undefined): string {
  const base = apiBaseUrl ?? DEFAULT_BOOTSTRAP_BASE_URL;
  const normalized = base.replace(/\/$/, "");
  return `${normalized}/bootstrap`;
}

type BootstrapState = {
  resolved: boolean;
  plan: Plan;
  enabledTemplates: string[];
  ttl: number;
};

/**
 * Initial state is always unresolved so server and client render the same HTML (skeleton),
 * avoiding hydration mismatch. Cache is applied in useEffect after mount (client-only).
 */
function getInitialBootstrapState(): BootstrapState {
  return {
    resolved: false,
    plan: FREE_CONTEXT.plan,
    enabledTemplates: FREE_CONTEXT.enabledTemplates,
    ttl: FREE_CONTEXT.ttl,
  };
}

export function ScreenFlowProvider({
  projectKey,
  children,
  apiBaseUrl,
  disableCache = false,
}: ScreenFlowProviderProps) {
  const bootstrapUrl = useMemo(
    () => buildBootstrapUrl(apiBaseUrl),
    [apiBaseUrl]
  );
  const [state, setState] = useState(getInitialBootstrapState);
  const { resolved, plan, enabledTemplates, ttl } = state;

  useEffect(() => {
    let cancelled = false;

    function applyBootstrap(data: {
      plan: Plan;
      enabledTemplates: string[];
      ttl: number;
    }) {
      if (cancelled) return;
      setState((prev) => ({
        ...prev,
        resolved: true,
        plan: data.plan,
        enabledTemplates: data.enabledTemplates,
        ttl: data.ttl,
      }));
    }

    const cached = !disableCache && getCachedBootstrap(projectKey);
    if (cached) {
      applyBootstrap({
        plan: cached.plan,
        enabledTemplates: cached.enabledTemplates,
        ttl: cached.ttl,
      });
      const ageMs = Date.now() - cached.fetchedAt;
      if (ageMs < REVALIDATE_AFTER_MS) {
        return () => {
          cancelled = true;
        };
      }
      // Revalidate in background; don't set resolved false
      void (async () => {
        try {
          const res = await fetch(bootstrapUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ projectKey }),
          });
          const data = (await res.json()) as BootstrapResponse;
          if (cancelled) return;
          if (res.ok) {
            const planVal =
              data.plan === "free" ||
              data.plan === "pro" ||
              data.plan === "enterprise"
                ? data.plan
                : FREE_CONTEXT.plan;
            const enabled = Array.isArray(data.enabledTemplates)
              ? data.enabledTemplates
              : FREE_CONTEXT.enabledTemplates;
            const ttlVal =
              typeof data.ttl === "number" && data.ttl >= 0
                ? data.ttl
                : DEFAULT_TTL_SECONDS;
            setCachedBootstrap(projectKey, {
              plan: planVal,
              enabledTemplates: enabled,
              ttl: ttlVal,
            });
            applyBootstrap({
              plan: planVal,
              enabledTemplates: enabled,
              ttl: ttlVal,
            });
          }
        } catch {
          // Keep existing state
        }
      })();
      return () => {
        cancelled = true;
      };
    }

    setState((prev) => ({ ...prev, resolved: false }));

    async function bootstrap() {
      try {
        const res = await fetch(bootstrapUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ projectKey }),
        });
        const data = (await res.json()) as BootstrapResponse;
        if (cancelled) return;
        if (res.ok) {
          const planVal =
            data.plan === "free" ||
            data.plan === "pro" ||
            data.plan === "enterprise"
              ? data.plan
              : FREE_CONTEXT.plan;
          const enabled = Array.isArray(data.enabledTemplates)
            ? data.enabledTemplates
            : FREE_CONTEXT.enabledTemplates;
          const ttlVal =
            typeof data.ttl === "number" && data.ttl >= 0
              ? data.ttl
              : DEFAULT_TTL_SECONDS;
          setCachedBootstrap(projectKey, {
            plan: planVal,
            enabledTemplates: enabled,
            ttl: ttlVal,
          });
          applyBootstrap({
            plan: planVal,
            enabledTemplates: enabled,
            ttl: ttlVal,
          });
        } else {
          if (!disableCache) {
            const stale = getCachedBootstrapStale(projectKey);
            if (stale) {
              applyBootstrap({
                plan: stale.plan,
                enabledTemplates: stale.enabledTemplates,
                ttl: stale.ttl,
              });
            }
          }
        }
      } catch {
        if (!disableCache) {
          const stale = getCachedBootstrapStale(projectKey);
          if (stale) {
            applyBootstrap({
              plan: stale.plan,
              enabledTemplates: stale.enabledTemplates,
              ttl: stale.ttl,
            });
          }
        }
      }
    }

    bootstrap();
    return () => {
      cancelled = true;
    };
  }, [projectKey, bootstrapUrl, disableCache]);

  const publicValue = useMemo(
    () => ({ plan, enabledTemplates, ttl }),
    [plan, enabledTemplates, ttl]
  );

  if (!resolved) {
    return <FlowScreenSkeleton />;
  }

  return (
    <ScreenFlowContext.Provider value={publicValue}>
      {children}
    </ScreenFlowContext.Provider>
  );
}
