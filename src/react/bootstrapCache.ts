/**
 * Bootstrap cache: in-memory + localStorage with TTL (in seconds, from API).
 * Reserved for future use when ScreenFlowProvider re-enables bootstrap/entitlement calls.
 * Currently no network requests are made; this cache is unused in the free version.
 */

import type { Plan } from "./ScreenFlowContext";

const CACHE_KEY_PREFIX = "flowscreen_bootstrap_";

export interface CachedBootstrap {
  plan: Plan;
  enabledTemplates: string[];
  ttl: number;
  fetchedAt: number;
}

/** In-memory cache by projectKey for fast reads. */
const memoryCache = new Map<string, CachedBootstrap>();

function storageKey(projectKey: string): string {
  return `${CACHE_KEY_PREFIX}${projectKey}`;
}

/** TTL from API is in seconds. Valid if (now - fetchedAt) / 1000 < ttl. */
function isValid(entry: CachedBootstrap): boolean {
  const ageSeconds = (Date.now() - entry.fetchedAt) / 1000;
  return ageSeconds < entry.ttl && entry.ttl > 0;
}

const VALID_PLANS = ["free", "pro", "enterprise"] as const;

function parseAndValidate(raw: string): CachedBootstrap | null {
  try {
    const entry = JSON.parse(raw) as CachedBootstrap;
    if (
      !entry ||
      typeof entry.plan !== "string" ||
      !VALID_PLANS.includes(entry.plan as (typeof VALID_PLANS)[number]) ||
      !Array.isArray(entry.enabledTemplates) ||
      typeof entry.ttl !== "number" ||
      typeof entry.fetchedAt !== "number"
    ) {
      return null;
    }
    return entry;
  } catch {
    return null;
  }
}

/**
 * Get cached bootstrap: memory first, then localStorage. Returns null if missing or expired.
 */
export function getCachedBootstrap(projectKey: string): CachedBootstrap | null {
  const fromMemory = memoryCache.get(projectKey);
  if (fromMemory && isValid(fromMemory)) return fromMemory;

  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(storageKey(projectKey));
    if (!raw) return null;
    const entry = parseAndValidate(raw);
    if (!entry || !isValid(entry)) return null;
    memoryCache.set(projectKey, entry);
    return entry;
  } catch {
    return null;
  }
}

/**
 * Get cached bootstrap even if expired (for fallback on fetch failure).
 */
export function getCachedBootstrapStale(
  projectKey: string
): CachedBootstrap | null {
  const fromMemory = memoryCache.get(projectKey);
  if (fromMemory) return fromMemory;

  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(storageKey(projectKey));
    if (!raw) return null;
    const entry = parseAndValidate(raw);
    if (!entry) return null;
    memoryCache.set(projectKey, entry);
    return entry;
  } catch {
    return null;
  }
}

/**
 * Store bootstrap in memory and localStorage. ttl is in seconds (from API).
 */
export function setCachedBootstrap(
  projectKey: string,
  data: { plan: Plan; enabledTemplates: string[]; ttl: number }
): void {
  const entry: CachedBootstrap = {
    plan: data.plan,
    enabledTemplates: data.enabledTemplates,
    ttl: data.ttl,
    fetchedAt: Date.now(),
  };
  memoryCache.set(projectKey, entry);
  if (typeof localStorage !== "undefined") {
    try {
      localStorage.setItem(storageKey(projectKey), JSON.stringify(entry));
    } catch {
      // Ignore quota / private mode
    }
  }
}

/**
 * Clear bootstrap cache so the next Provider mount will refetch from the backend.
 * Use when you change plan in the DB and need the app to see the new plan immediately.
 * @param projectKey - If provided, clear only this project's cache; otherwise clear all.
 */
export function clearBootstrapCache(projectKey?: string): void {
  if (projectKey !== undefined) {
    memoryCache.delete(projectKey);
    if (typeof localStorage !== "undefined") {
      try {
        localStorage.removeItem(storageKey(projectKey));
      } catch {
        // ignore
      }
    }
    return;
  }
  memoryCache.clear();
  if (typeof localStorage !== "undefined") {
    try {
      const keys: string[] = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k?.startsWith(CACHE_KEY_PREFIX)) keys.push(k);
      }
      keys.forEach((k) => localStorage.removeItem(k));
    } catch {
      // ignore
    }
  }
}
