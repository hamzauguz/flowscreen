"use client";

/**
 * Free plan: Provider not necessary; no network calls.
 * Pro/Enterprise: Provider necessary (bootstrap returns plan + enabledTemplates + ttl).
 */

import { createContext, useContext } from "react";
import { FREE_TEMPLATE_IDS } from "../core/registry";

export type Plan = "free" | "pro" | "enterprise";

/** useFlowScreen() returns only this. Plan is the single source of truth. */
export interface ScreenFlowContextValue {
  plan: Plan;
  enabledTemplates: string[];
  ttl: number;
}

/** Free default allowlist: basic + free templates (error-modern, error-minimal, error-classic, error-cloudflare). */
const DEFAULT_FREE_TEMPLATES = ["basic", ...FREE_TEMPLATE_IDS];
const DEFAULT_TTL = 0;

export const FREE_CONTEXT: ScreenFlowContextValue = {
  plan: "free",
  enabledTemplates: DEFAULT_FREE_TEMPLATES,
  ttl: DEFAULT_TTL,
};

export const FREE_DEFAULT = FREE_CONTEXT;

export const ScreenFlowContext = createContext<ScreenFlowContextValue | null>(
  null
);

export function useFlowScreen(): ScreenFlowContextValue {
  const context = useContext(ScreenFlowContext);
  if (context === null) {
    return FREE_CONTEXT;
  }
  return context;
}
