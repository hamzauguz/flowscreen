"use client";

/**
 * FlowScreen is currently fully free. No provider is required; no network calls are made.
 * When provider is missing, useFlowScreen() returns FREE_CONTEXT and the SDK works in free mode.
 * ScreenFlowProvider is optional and reserved for future use: analytics, monitoring, alerting.
 */

import { createContext, useContext } from "react";

export type Plan = "free" | "pro" | "enterprise";

/** useFlowScreen() returns only this. Plan is the single source of truth. */
export interface ScreenFlowContextValue {
  plan: Plan;
  enabledTemplates: string[];
  ttl: number;
}

/** All templates are free. Use ["*"] so any consumer that still checks entitlement sees "all allowed". */
const DEFAULT_FREE_TEMPLATES = ["*"];
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

/** Returns context when inside ScreenFlowProvider; otherwise FREE_CONTEXT. No error if provider is missing. */
export function useFlowScreen(): ScreenFlowContextValue {
  const context = useContext(ScreenFlowContext);
  if (context === null) {
    // Free mode fallback: no provider, no analytics, all templates allowed.
    return FREE_CONTEXT;
  }
  return context;
}
