// Template registry - central registry + safe fallback. All templates live in SDK.
// All templates are currently free; premium/free gating is disabled and reserved for future use.

import type { FlowScreenTemplate } from "../templates/types";
import { cloudflareErrorTemplate } from "../templates/error/error-cloudflare";
import { minimalErrorTemplate } from "../templates/error/error-minimal";
import { modernErrorTemplate } from "../templates/error/error-modern";
import { classicErrorTemplate } from "../templates/error/error-classic";
import { parallaxTemplate } from "../templates/error/error-parallax";
import { animated404Template } from "../templates/error/error-animated";
import { sadBearTemplate } from "../templates/error/error-sad-bear";
import { characterIllustrationTemplate } from "../templates/error/error-character-illustration";
import { sleepingMoonTemplate } from "../templates/error/error-sleeping-moon";
import { amazonErrorTemplate } from "../templates/error/error-amazon";
import { mailchimpErrorTemplate } from "../templates/error/error-mailchimp";
import { mailchimpProErrorTemplate } from "../templates/error/error-mailchimp-pro";
import { emptyBasicTemplate, emptyNoResultsTemplate, emptyInsideOutTemplate, emptyNotFound666Template } from "../templates/empty";
import {
  maintenanceBasicTemplate,
  maintenanceUnderConstructionTemplate,
  maintenanceOfflineTemplate,
  maintenanceElectricProTemplate,
  maintenancePlayfulRoadTemplate,
} from "../templates/maintenance";

/** Template IDs that were previously free-only. Kept for backward compatibility; all templates are now free. */
export const FREE_TEMPLATE_IDS = [
  "error-modern",
  "error-minimal",
  "error-classic",
  "error-cloudflare",
  "error-amazon",
  "error-mailchimp",
  "empty-basic",
  "empty-no-results",
  "empty-inside-out",
  "maintenance-basic",
  "maintenance-under-construction",
  "maintenance-playful-road",
] as const;

/** Default fallback template ID for unknown template IDs (safe fallback). */
export const DEFAULT_FREE_TEMPLATE_ID = "error-minimal";

export type TemplateType =
  | "basic"
  | "error-cloudflare"
  | "error-minimal"
  | "error-modern"
  | "error-classic"
  | "error-parallax"
  | "error-animated"
  | "error-sad-bear"
  | "error-character-illustration"
  | "error-sleeping-moon"
  | "error-amazon"
  | "error-mailchimp"
  | "error-mailchimp-pro"
  | "empty-basic"
  | "empty-no-results"
  | "empty-inside-out"
  | "empty-not-found-666"
  | "maintenance-basic"
  | "maintenance-under-construction"
  | "maintenance-offline"
  | "maintenance-electric-pro"
  | "maintenance-playful-road";

// Premium template validation disabled. All templates are currently free.
// Reserved for future entitlement/analytics when backend is re-enabled.
// const templateAccess: Record<string, "free" | "premium"> = {
//   basic: "free",
//   "error-cloudflare": "free",
//   "error-minimal": "free",
//   "error-modern": "free",
//   "error-classic": "free",
//   "error-parallax": "premium",
//   "error-animated": "premium",
//   "error-sad-bear": "premium",
//   "error-character-illustration": "premium",
//   "error-sleeping-moon": "premium",
//   "error-amazon": "free",
//   "error-mailchimp": "free",
//   "error-mailchimp-pro": "premium",
//   "empty-basic": "free",
//   "empty-no-results": "free",
//   "empty-inside-out": "free",
//   "empty-not-found-666": "premium",
//   "maintenance-basic": "free",
//   "maintenance-under-construction": "free",
//   "maintenance-offline": "premium",
//   "maintenance-electric-pro": "premium",
//   "maintenance-playful-road": "free",
// };

const templates: Record<string, FlowScreenTemplate> = {
  basic: minimalErrorTemplate,
  "error-cloudflare": cloudflareErrorTemplate,
  "error-minimal": minimalErrorTemplate,
  "error-modern": modernErrorTemplate,
  "error-classic": classicErrorTemplate,
  "error-parallax": parallaxTemplate,
  "error-animated": animated404Template,
  "error-sad-bear": sadBearTemplate,
  "error-character-illustration": characterIllustrationTemplate,
  "error-sleeping-moon": sleepingMoonTemplate,
  "error-amazon": amazonErrorTemplate,
  "error-mailchimp": mailchimpErrorTemplate,
  "error-mailchimp-pro": mailchimpProErrorTemplate,
  "empty-basic": emptyBasicTemplate,
  "empty-no-results": emptyNoResultsTemplate,
  "empty-inside-out": emptyInsideOutTemplate,
  "empty-not-found-666": emptyNotFound666Template,
  "maintenance-basic": maintenanceBasicTemplate,
  "maintenance-under-construction": maintenanceUnderConstructionTemplate,
  "maintenance-offline": maintenanceOfflineTemplate,
  "maintenance-electric-pro": maintenanceElectricProTemplate,
  "maintenance-playful-road": maintenancePlayfulRoadTemplate,
};

/** Get template by ID. Throws only for type-narrowed TemplateType usage. */
export function getTemplate(type: TemplateType): FlowScreenTemplate {
  const template = templates[type];
  if (!template) {
    throw new Error(`Template "${type}" not found`);
  }
  return template;
}

/** Resolve template by ID. Unknown IDs fall back to error-minimal. Never throws. */
export function getTemplateSafe(id: string): FlowScreenTemplate {
  return (
    templates[id] ?? templates[DEFAULT_FREE_TEMPLATE_ID] ?? minimalErrorTemplate
  );
}

/** Resolved template ID for style/script injection (known id or error-minimal). */
export function getResolvedTemplateId(id: string): string {
  return id in templates ? id : DEFAULT_FREE_TEMPLATE_ID;
}

/**
 * Whether a template is allowed. All templates are currently free; no entitlement check.
 * Premium/free gating disabled. Reserved for future analytics/monitoring when provider is used.
 */
export function isTemplateEnabled(
  _templateId: string,
  _enabledTemplates: string[]
): boolean {
  return true;
  // Premium template validation disabled. All templates are currently free.
  // if (templateAccess[templateId] === "free") return true;
  // if (enabledTemplates.includes("*")) return true;
  // return enabledTemplates.includes(templateId);
}
