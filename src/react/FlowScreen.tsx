// React wrapper component for renderFlowScreen. Templates from registry; unknown or disallowed ids fall back to "error-minimal".

"use client";

import { useEffect, useRef } from "react";
import { renderFlowScreen } from "../core/renderFlowScreen";
import type { TemplateType } from "../core/registry";
import {
  getTemplateSafe,
  getResolvedTemplateId,
  isTemplateEnabled,
  DEFAULT_FREE_TEMPLATE_ID,
} from "../core/registry";
import type { FlowScreenSchema } from "../schema";
import type { FlowScreenTheme, FlowScreenButton } from "../types";
import { FLOWSCREEN_ASSETS_BASE_URL } from "../constants";
import { getDefaultMessages } from "./getDefaultMessages";
import { useFlowScreen } from "./ScreenFlowContext";

const ASSETS = `${FLOWSCREEN_ASSETS_BASE_URL}/images`;

/** Pets for error-amazon: one random pet (image + name) per mount, stable across re-renders. */
const AMAZON_PETS: { src: string; name: string; type?: "dog" | "cat" }[] = [
  { src: `${ASSETS}/amazon-dog-2.png`, name: "Biscuit", type: "dog" },
  { src: `${ASSETS}/amazon-dog-3.png`, name: "Mochi", type: "dog" },
  { src: `${ASSETS}/amazon-dog.png`, name: "Luna", type: "dog" },
  { src: `${ASSETS}/compressed_a94c8d14c2b90c895ca72a408ec36bef.webp`, name: "Charlie", type: "dog" },
  { src: `${ASSETS}/Untitled%20design%20(53).png`, name: "Buddy", type: "dog" },
  { src: `${ASSETS}/errorflow-cat-1.png`, name: "Coco", type: "cat" },
  { src: `${ASSETS}/errorflow-cat-2.png`, name: "Pepper", type: "cat" },
  { src: `${ASSETS}/errorflow-cat-3.png`, name: "Milo", type: "cat" },
  { src: `${ASSETS}/errorflow-cat-4.png`, name: "Daisy", type: "cat" },
  { src: `${ASSETS}/errorflow-cat-5.png`, name: "Rocky", type: "cat" },
  { src: `${ASSETS}/errorflow-cat-6.png`, name: "Oliver", type: "cat" },
];

/** Images for empty-inside-out: one random image per mount/refresh, stable across re-renders. */
const INSIDE_OUT_IMAGES = [
  `${ASSETS}/inside-out-1.png`,
  `${ASSETS}/inside-out-2.png`,
  `${ASSETS}/inside-out-4.png`,
];

/** Layout mode for the FlowScreen wrapper. "inline" and "overlay" reserved for future use. */
export type FlowLayout = "fullscreen" | "contained";

const layoutClasses: Record<FlowLayout, string> = {
  fullscreen: "fixed inset-0 min-h-screen z-50",
  contained: "relative w-full",
};

function mergeClasses(...parts: (string | undefined)[]): string {
  return parts.filter(Boolean).join(" ").trim() || "";
}

export interface FlowScreenProps {
  /** Template ID from registry (e.g. "basic", "error-minimal"). Unknown or premium-only in free plan fall back to "error-minimal". */
  template: TemplateType | string;
  code?: string;
  title?: string;
  description?: string;
  hint?: string;
  hideTitle?: boolean;
  hideDescription?: boolean;
  hideHint?: boolean;
  theme?: FlowScreenTheme;
  classNames?: {
    code?: string;
    title?: string;
    description?: string;
    hint?: string;
    button?: string;
  };
  button?: FlowScreenButton;
  hideButton?: boolean;
  /** Wrapper layout: fullscreen (default) covers viewport; contained respects parent layout. */
  layout?: FlowLayout;
  /** Optional CSS class(es) for the wrapper element. */
  className?: string;
}

export function FlowScreen({
  template,
  code,
  title,
  description,
  hint,
  hideTitle = false,
  hideDescription = false,
  hideHint = false,
  theme,
  classNames,
  button,
  hideButton = false,
  layout = "fullscreen",
  className,
}: FlowScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { plan, enabledTemplates } = useFlowScreen();

  // Pro/Enterprise: allow all templates regardless of enabledTemplates
  const effectiveEnabledTemplates =
    plan === "pro" || plan === "enterprise" ? ["*"] : enabledTemplates;

  // Stable random pet for error-amazon (one pet object = image + name; set once on mount, no flicker).
  const petRef = useRef(
    AMAZON_PETS[Math.floor(Math.random() * AMAZON_PETS.length)],
  );

  // Stable random image for empty-inside-out (one URL per mount/refresh).
  const insideOutImageRef = useRef(
    INSIDE_OUT_IMAGES[Math.floor(Math.random() * INSIDE_OUT_IMAGES.length)],
  );

  // Resolve template id; fallback to "error-minimal" if unknown. PRO empty template falls back to empty-basic; PRO maintenance-electric-pro falls back to maintenance-under-construction.
  const requestedId = getResolvedTemplateId(String(template));
  // Entitlement: free templates always allowed; pro/enterprise get all; others only if effectiveEnabledTemplates includes "*" or the template id.
  const resolvedTemplateId = isTemplateEnabled(
    requestedId,
    effectiveEnabledTemplates
  )
    ? requestedId
    : requestedId === "empty-not-found-666"
      ? "empty-basic"
      : requestedId === "maintenance-electric-pro"
        ? "maintenance-under-construction"
        : DEFAULT_FREE_TEMPLATE_ID;
  const templateData = getTemplateSafe(resolvedTemplateId);

  // For empty/maintenance templates, code is optional (default ""); for error templates, default "404".
  const isEmptyTemplate =
    resolvedTemplateId === "empty-basic" ||
    resolvedTemplateId === "empty-no-results" ||
    resolvedTemplateId === "empty-inside-out" ||
    resolvedTemplateId === "empty-not-found-666" ||
    resolvedTemplateId === "maintenance-basic" ||
    resolvedTemplateId === "maintenance-under-construction" ||
    resolvedTemplateId === "maintenance-offline" ||
    resolvedTemplateId === "maintenance-electric-pro" ||
    resolvedTemplateId === "maintenance-playful-road";
  const effectiveCode = isEmptyTemplate ? (code ?? "") : (code ?? "404");
  // Get default messages from JSON data (only used for error templates)
  const defaultMessages = getDefaultMessages(effectiveCode);

  const finalTitle =
    title ??
    (resolvedTemplateId === "maintenance-basic" ||
    resolvedTemplateId === "maintenance-under-construction" ||
    resolvedTemplateId === "maintenance-offline" ||
    resolvedTemplateId === "maintenance-electric-pro"
      ? "We'll be back soon"
      : resolvedTemplateId === "maintenance-playful-road"
        ? "Taking a Short Break"
        : resolvedTemplateId === "empty-basic" ||
          resolvedTemplateId === "empty-not-found-666"
          ? "Nothing here"
          : resolvedTemplateId === "empty-no-results" ||
              resolvedTemplateId === "empty-inside-out"
            ? "No result found"
            : defaultMessages.title);
  const finalDescription =
    description ??
    (resolvedTemplateId === "maintenance-basic" ||
    resolvedTemplateId === "maintenance-under-construction" ||
    resolvedTemplateId === "maintenance-offline"
      ? "We're performing scheduled maintenance. Please try again in a few minutes."
      : resolvedTemplateId === "maintenance-electric-pro"
        ? "We're doing a quick upgrade. Please check back in a few minutes."
        : resolvedTemplateId === "maintenance-playful-road"
          ? "We're improving things behind the scenes. We'll be back shortly."
          : resolvedTemplateId === "empty-basic" ||
            resolvedTemplateId === "empty-not-found-666"
            ? "There is no content to display right now."
            : resolvedTemplateId === "empty-no-results" ||
                resolvedTemplateId === "empty-inside-out"
              ? "We can't find any item matching your search."
              : defaultMessages.description);
  const finalHint = hint ?? defaultMessages.hint;

  // For empty-basic, do not render button when button prop is missing. empty-no-results, empty-inside-out, empty-not-found-666, and maintenance-basic always show a button.
  const effectiveHideButton =
    hideButton || (resolvedTemplateId === "empty-basic" && button == null);

  useEffect(() => {
    if (containerRef.current) {
      // Convert props to schema format
      const blocks: FlowScreenSchema["blocks"] = [];

      blocks.push({ type: "text", content: effectiveCode });
      if (!hideTitle) {
        blocks.push({ type: "text", content: finalTitle });
      }
      if (!hideDescription) {
        blocks.push({ type: "text", content: finalDescription });
      }
      if (!hideHint) {
        blocks.push({ type: "text", content: finalHint });
      }

      const schema: FlowScreenSchema = {
        type: "error",
        blocks,
      };

      // For error-amazon, inject one chosen pet (src + name from same object, stable per mount).
      // For empty-inside-out, inject one chosen image URL (stable per mount/refresh).
      const templateOverrideToUse =
        resolvedTemplateId === "error-amazon"
          ? {
              ...templateData,
              html: templateData.html
                .replace(/\{\{illustrationSrc\}\}/g, petRef.current.src)
                .replace(/\{\{petName\}\}/g, petRef.current.name),
            }
          : resolvedTemplateId === "empty-inside-out"
            ? {
                ...templateData,
                html: templateData.html.replace(
                  /\{\{imageSrc\}\}/g,
                  insideOutImageRef.current,
                ),
              }
            : templateData;

      renderFlowScreen({
        template: resolvedTemplateId,
        schema,
        container: containerRef.current,
        theme,
        templateOverride: templateOverrideToUse,
      });

      // Inject typography theme CSS if provided
      if (theme?.typography && typeof document !== "undefined") {
        const typographyThemeStyleId = `flowscreen-${resolvedTemplateId}-typography-theme`;
        // Remove existing typography theme style if it exists
        const existingStyle = document.getElementById(typographyThemeStyleId);
        if (existingStyle) {
          existingStyle.remove();
        }

        const typographyThemeStyle = document.createElement("style");
        typographyThemeStyle.id = typographyThemeStyleId;
        let typographyCss = "";

        // For parallax, animated-404, sad-bear, character-illustration, sleeping-moon, amazon, mailchimp, and empty templates, use CSS variables
        if (
          resolvedTemplateId === "error-parallax" ||
          resolvedTemplateId === "error-animated" ||
          resolvedTemplateId === "error-sad-bear" ||
          resolvedTemplateId === "error-character-illustration" ||
          resolvedTemplateId === "error-sleeping-moon" ||
          resolvedTemplateId === "error-amazon" ||
          resolvedTemplateId === "error-mailchimp" ||
          resolvedTemplateId === "error-mailchimp-pro" ||
          resolvedTemplateId === "empty-basic" ||
          resolvedTemplateId === "empty-no-results" ||
          resolvedTemplateId === "empty-inside-out" ||
          resolvedTemplateId === "empty-not-found-666" ||
          resolvedTemplateId === "maintenance-basic" ||
          resolvedTemplateId === "maintenance-under-construction" ||
          resolvedTemplateId === "maintenance-offline" ||
          resolvedTemplateId === "maintenance-electric-pro" ||
          resolvedTemplateId === "maintenance-playful-road"
        ) {
          const containerSelector =
            resolvedTemplateId === "error-parallax"
              ? ".ef-parallax-wrapper"
              : resolvedTemplateId === "error-animated"
                ? ".ef-animated-404-wrapper"
                : resolvedTemplateId === "error-sad-bear"
                  ? ".ef-sad-bear-wrapper"
                  : resolvedTemplateId === "error-character-illustration"
                    ? ".ef-character-illustration-wrapper"
                    : resolvedTemplateId === "error-sleeping-moon"
                      ? ".ef-sleeping-moon-wrapper"
                      : resolvedTemplateId === "error-mailchimp"
                        ? ".ef-mailchimp"
                        : resolvedTemplateId === "error-mailchimp-pro"
                          ? ".ef-mailchimp-pro"
                          : resolvedTemplateId === "empty-basic"
                            ? ".ef-empty-basic"
                            : resolvedTemplateId === "empty-no-results"
                              ? ".ef-empty-no-results"
                              : resolvedTemplateId === "empty-inside-out"
                                ? ".ef-empty-inside-out"
                                : resolvedTemplateId === "empty-not-found-666"
                                  ? ".ef-empty-not-found-666"
                                  : resolvedTemplateId === "maintenance-basic"
                                    ? ".ef-maintenance-basic"
                                    : resolvedTemplateId === "maintenance-under-construction"
                                      ? ".ef-maintenance-under-construction"
                                      : resolvedTemplateId === "maintenance-offline"
                                        ? ".ef-maintenance-offline"
                                        : resolvedTemplateId === "maintenance-electric-pro"
                                          ? ".ef-maintenance-electric-pro"
                                          : resolvedTemplateId === "maintenance-playful-road"
                                            ? ".ef-maintenance-playful-road"
                                            : ".ef-amazon";
          const cssVars: string[] = [];

          if (theme.typography.code) {
            if (theme.typography.code.fontSize)
              cssVars.push(`--ef-code-size: ${theme.typography.code.fontSize}`);
            if (theme.typography.code.fontWeight)
              cssVars.push(
                `--ef-code-weight: ${theme.typography.code.fontWeight}`,
              );
            if (theme.typography.code.color)
              cssVars.push(`--ef-code-color: ${theme.typography.code.color}`);
          }

          if (theme.typography.title) {
            if (theme.typography.title.fontSize)
              cssVars.push(
                `--ef-title-size: ${theme.typography.title.fontSize}`,
              );
            if (theme.typography.title.fontWeight)
              cssVars.push(
                `--ef-title-weight: ${theme.typography.title.fontWeight}`,
              );
            if (theme.typography.title.color)
              cssVars.push(`--ef-title-color: ${theme.typography.title.color}`);
          }

          if (theme.typography.description) {
            if (theme.typography.description.fontSize)
              cssVars.push(
                `--ef-description-size: ${theme.typography.description.fontSize}`,
              );
            if (theme.typography.description.fontWeight)
              cssVars.push(
                `--ef-description-weight: ${theme.typography.description.fontWeight}`,
              );
            if (theme.typography.description.color)
              cssVars.push(
                `--ef-description-color: ${theme.typography.description.color}`,
              );
          }

          if (theme.typography.button) {
            if (theme.typography.button.fontSize)
              cssVars.push(
                `--ef-button-size: ${theme.typography.button.fontSize}`,
              );
            if (theme.typography.button.fontWeight)
              cssVars.push(
                `--ef-button-weight: ${theme.typography.button.fontWeight}`,
              );
            if (theme.typography.button.color)
              cssVars.push(
                `--ef-button-color: ${theme.typography.button.color}`,
              );
            if (theme.typography.button.background)
              cssVars.push(
                `--ef-button-background: ${theme.typography.button.background}`,
              );
            if (theme.typography.button.borderRadius)
              cssVars.push(
                `--ef-button-radius: ${theme.typography.button.borderRadius}`,
              );
          }

          if (cssVars.length > 0) {
            typographyCss += `${containerSelector} { ${cssVars.join(
              "; ",
            )}; }\n`;
          }
        } else {
          // Legacy templates - direct class targeting
          // Code typography
          if (theme.typography.code) {
            typographyCss += `.flowscreen-error-code {`;
            if (theme.typography.code.fontSize)
              typographyCss += ` font-size: ${theme.typography.code.fontSize} !important;`;
            if (theme.typography.code.fontWeight)
              typographyCss += ` font-weight: ${theme.typography.code.fontWeight} !important;`;
            if (theme.typography.code.color)
              typographyCss += ` color: ${theme.typography.code.color} !important;`;
            typographyCss += ` }\n`;
          }

          // Title typography
          if (theme.typography.title) {
            typographyCss += `.flowscreen-error-title {`;
            if (theme.typography.title.fontSize)
              typographyCss += ` font-size: ${theme.typography.title.fontSize} !important;`;
            if (theme.typography.title.fontWeight)
              typographyCss += ` font-weight: ${theme.typography.title.fontWeight} !important;`;
            if (theme.typography.title.color)
              typographyCss += ` color: ${theme.typography.title.color} !important;`;
            typographyCss += ` }\n`;
          }

          // Description typography
          if (theme.typography.description) {
            typographyCss += `.flowscreen-error-message {`;
            if (theme.typography.description.fontSize)
              typographyCss += ` font-size: ${theme.typography.description.fontSize} !important;`;
            if (theme.typography.description.fontWeight)
              typographyCss += ` font-weight: ${theme.typography.description.fontWeight} !important;`;
            if (theme.typography.description.color)
              typographyCss += ` color: ${theme.typography.description.color} !important;`;
            typographyCss += ` }\n`;
          }

          // Hint typography
          if (theme.typography.hint) {
            typographyCss += `.flowscreen-error-message p:last-child {`;
            if (theme.typography.hint.fontSize)
              typographyCss += ` font-size: ${theme.typography.hint.fontSize} !important;`;
            if (theme.typography.hint.fontWeight)
              typographyCss += ` font-weight: ${theme.typography.hint.fontWeight} !important;`;
            if (theme.typography.hint.color)
              typographyCss += ` color: ${theme.typography.hint.color} !important;`;
            typographyCss += ` }\n`;
          }

          // Button typography
          if (theme.typography.button) {
            typographyCss += `.flowscreen-error-button {`;
            if (theme.typography.button.background)
              typographyCss += ` background: ${theme.typography.button.background} !important;`;
            if (theme.typography.button.color)
              typographyCss += ` color: ${theme.typography.button.color} !important;`;
            if (theme.typography.button.fontSize)
              typographyCss += ` font-size: ${theme.typography.button.fontSize} !important;`;
            if (theme.typography.button.fontWeight)
              typographyCss += ` font-weight: ${theme.typography.button.fontWeight} !important;`;
            if (theme.typography.button.borderRadius)
              typographyCss += ` border-radius: ${theme.typography.button.borderRadius} !important;`;
            typographyCss += ` }\n`;
          }
        }

        if (typographyCss) {
          typographyThemeStyle.textContent = typographyCss;
          document.head.appendChild(typographyThemeStyle);
        }
      }

      // Apply classNames to DOM elements
      if (classNames && containerRef.current) {
        // Support both legacy and new semantic class names
        let codeSelectors: string[];
        let titleSelectors: string[];
        let descriptionSelectors: string[];

        if (resolvedTemplateId === "error-parallax") {
          codeSelectors = [".ef-code", ".flowscreen-error-code"];
          titleSelectors = [".ef-title", ".flowscreen-error-title"];
          descriptionSelectors = [
            ".ef-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "error-animated") {
          codeSelectors = [
            ".ef-number",
            ".ef-animated-404-numbers",
            ".flowscreen-error-code",
          ];
          titleSelectors = [
            ".ef-animated-404-title",
            ".flowscreen-error-title",
          ];
          descriptionSelectors = [
            ".ef-animated-404-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "error-sad-bear") {
          codeSelectors = [
            ".ef-sad-bear-code",
            "#ef-sad-bear-code",
            ".flowscreen-error-code",
          ];
          titleSelectors = [".ef-sad-bear-title", ".flowscreen-error-title"];
          descriptionSelectors = [
            ".ef-sad-bear-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "error-character-illustration") {
          codeSelectors = [
            ".ef-character-illustration-code",
            ".flowscreen-error-code",
          ];
          titleSelectors = [
            ".ef-character-illustration-title",
            ".flowscreen-error-title",
          ];
          descriptionSelectors = [
            ".ef-character-illustration-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "error-sleeping-moon") {
          codeSelectors = [
            ".ef-sleeping-moon-number",
            ".flowscreen-error-code",
          ];
          titleSelectors = [
            ".ef-sleeping-moon-subtitle",
            ".flowscreen-error-title",
          ];
          descriptionSelectors = [
            ".ef-sleeping-moon-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "error-amazon") {
          codeSelectors = [".ef-amazon-code", ".flowscreen-error-code"];
          titleSelectors = [".ef-amazon-title", ".flowscreen-error-title"];
          descriptionSelectors = [
            ".ef-amazon-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "error-mailchimp") {
          codeSelectors = [".ef-mailchimp-code", ".flowscreen-error-code"];
          titleSelectors = [".ef-mailchimp-title", ".flowscreen-error-title"];
          descriptionSelectors = [
            ".ef-mailchimp-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "error-mailchimp-pro") {
          codeSelectors = [".ef-mailchimp-pro-code", ".flowscreen-error-code"];
          titleSelectors = [
            ".ef-mailchimp-pro-title",
            ".flowscreen-error-title",
          ];
          descriptionSelectors = [
            ".ef-mailchimp-pro-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "empty-basic") {
          codeSelectors = [".ef-empty-basic-code", ".flowscreen-error-code"];
          titleSelectors = [
            ".ef-empty-basic-title",
            ".flowscreen-error-title",
          ];
          descriptionSelectors = [
            ".ef-empty-basic-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "empty-no-results") {
          codeSelectors = [".flowscreen-error-code"];
          titleSelectors = [
            ".ef-empty-no-results-title",
            ".flowscreen-error-title",
          ];
          descriptionSelectors = [
            ".ef-empty-no-results-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "empty-inside-out") {
          codeSelectors = [".flowscreen-error-code"];
          titleSelectors = [
            ".ef-empty-inside-out-title",
            ".flowscreen-error-title",
          ];
          descriptionSelectors = [
            ".ef-empty-inside-out-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "empty-not-found-666") {
          codeSelectors = [".flowscreen-error-code"];
          titleSelectors = [
            ".ef-empty-not-found-666-title",
            ".flowscreen-error-title",
          ];
          descriptionSelectors = [
            ".ef-empty-not-found-666-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "maintenance-under-construction") {
          codeSelectors = [".flowscreen-error-code"];
          titleSelectors = [
            ".ef-maintenance-under-construction-title",
            ".flowscreen-error-title",
          ];
          descriptionSelectors = [
            ".ef-maintenance-under-construction-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "maintenance-offline") {
          codeSelectors = [".ef-mo-code", ".flowscreen-error-code"];
          titleSelectors = [".ef-mo-title", ".flowscreen-error-title"];
          descriptionSelectors = [
            ".ef-mo-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "maintenance-electric-pro") {
          codeSelectors = [".flowscreen-error-code"];
          titleSelectors = [".ef-mep-title", ".flowscreen-error-title"];
          descriptionSelectors = [
            ".ef-mep-description",
            ".flowscreen-error-message",
          ];
        } else if (resolvedTemplateId === "maintenance-playful-road") {
          codeSelectors = [".flowscreen-error-code"];
          titleSelectors = [".ef-mpr-title", ".flowscreen-error-title"];
          descriptionSelectors = [
            ".ef-mpr-description",
            ".flowscreen-error-message",
          ];
        } else {
          codeSelectors = [".flowscreen-error-code"];
          titleSelectors = [".flowscreen-error-title"];
          descriptionSelectors = [".flowscreen-error-message"];
        }

        if (classNames.code) {
          if (resolvedTemplateId === "error-animated") {
            // For animated-404, apply to all number elements
            const numberElements =
              containerRef.current.querySelectorAll(".ef-number");
            if (numberElements.length > 0) {
              numberElements.forEach((el) => {
                el.classList.add(
                  ...classNames.code!.split(" ").filter(Boolean),
                );
              });
            } else {
              // Fallback to container
              const container = containerRef.current.querySelector(
                ".ef-animated-404-numbers",
              );
              if (container) {
                container.classList.add(
                  ...classNames.code.split(" ").filter(Boolean),
                );
              }
            }
          } else {
            for (const selector of codeSelectors) {
              const codeElement = containerRef.current.querySelector(selector);
              if (codeElement) {
                codeElement.classList.add(
                  ...classNames.code.split(" ").filter(Boolean),
                );
                break;
              }
            }
          }
        }
        if (classNames.title) {
          for (const selector of titleSelectors) {
            const titleElement = containerRef.current.querySelector(selector);
            if (titleElement) {
              titleElement.classList.add(
                ...classNames.title.split(" ").filter(Boolean),
              );
              break;
            }
          }
        }
        if (classNames.description) {
          for (const selector of descriptionSelectors) {
            const descriptionElement =
              containerRef.current.querySelector(selector);
            if (descriptionElement) {
              descriptionElement.classList.add(
                ...classNames.description.split(" ").filter(Boolean),
              );
              break;
            }
          }
        }
        if (classNames.hint) {
          const hintSelectors =
            resolvedTemplateId === "error-animated"
              ? [".ef-animated-404-description", ".flowscreen-error-message"]
              : resolvedTemplateId === "error-amazon"
                ? [".ef-amazon-description", ".flowscreen-error-message"]
                : resolvedTemplateId === "error-mailchimp"
                  ? [".ef-mailchimp-description", ".flowscreen-error-message"]
                  : resolvedTemplateId === "error-mailchimp-pro"
                    ? [
                        ".ef-mailchimp-pro-description",
                        ".flowscreen-error-message",
                      ]
                    : resolvedTemplateId === "empty-basic"
                      ? [
                          ".ef-empty-basic-description",
                          ".flowscreen-error-message",
                        ]
                      : resolvedTemplateId === "empty-no-results"
                        ? [
                            ".ef-empty-no-results-description",
                            ".flowscreen-error-message",
                          ]
                        : resolvedTemplateId === "empty-inside-out"
                          ? [
                              ".ef-empty-inside-out-description",
                              ".flowscreen-error-message",
                            ]
                          : resolvedTemplateId === "empty-not-found-666"
                            ? [
                                ".ef-empty-not-found-666-description",
                                ".flowscreen-error-message",
                              ]
                            : resolvedTemplateId === "maintenance-under-construction"
                              ? [
                                  ".ef-maintenance-under-construction-description",
                                  ".flowscreen-error-message",
                                ]
                              : resolvedTemplateId === "maintenance-offline"
                                ? [
                                    ".ef-mo-description",
                                    ".flowscreen-error-message",
                                  ]
                                : resolvedTemplateId === "maintenance-electric-pro"
                                  ? [
                                      ".ef-mep-description",
                                      ".flowscreen-error-message",
                                    ]
                                  : resolvedTemplateId === "maintenance-playful-road"
                                    ? [
                                        ".ef-mpr-description",
                                        ".flowscreen-error-message",
                                      ]
                                    : [".flowscreen-error-message", ".ef-description"];
          for (const selector of hintSelectors) {
            const messageElement = containerRef.current.querySelector(selector);
            if (messageElement) {
              const lastParagraph =
                messageElement.querySelector("p:last-child");
              if (lastParagraph) {
                lastParagraph.classList.add(
                  ...classNames.hint.split(" ").filter(Boolean),
                );
                break;
              }
            }
          }
        }
      }

      // Handle button rendering (after core render)
      if (!effectiveHideButton && containerRef.current) {
        const buttonLabel =
          resolvedTemplateId === "empty-no-results" ||
          resolvedTemplateId === "empty-inside-out" ||
          resolvedTemplateId === "maintenance-basic" ||
          resolvedTemplateId === "maintenance-under-construction" ||
          resolvedTemplateId === "maintenance-offline" ||
          resolvedTemplateId === "maintenance-electric-pro"
            ? (button?.label ?? "Refresh page")
            : resolvedTemplateId === "maintenance-playful-road"
              ? (button?.label ?? "Refresh")
              : button?.label || "Reload page";
        const classNamesButton = classNames?.button || "";

        // Combine classNames: base class + classNames.button
        const combinedClasses = [
          "flowscreen-error-button",
          ...classNamesButton.split(" ").filter(Boolean),
        ]
          .filter(Boolean)
          .join(" ");

        const buttonHtml = `<button class="${escapeHtml(
          combinedClasses,
        )}">${escapeHtml(buttonLabel)}</button>`;

        // For parallax, animated-404, sad-bear, character-illustration, sleeping-moon, and amazon templates, replace {{button}} placeholder
        if (
          resolvedTemplateId === "error-parallax" ||
          resolvedTemplateId === "error-animated" ||
          resolvedTemplateId === "error-sad-bear" ||
          resolvedTemplateId === "error-character-illustration" ||
          resolvedTemplateId === "error-sleeping-moon" ||
          resolvedTemplateId === "error-amazon" ||
          resolvedTemplateId === "error-mailchimp" ||
          resolvedTemplateId === "error-mailchimp-pro" ||
          resolvedTemplateId === "empty-basic" ||
          resolvedTemplateId === "empty-no-results" ||
          resolvedTemplateId === "empty-inside-out" ||
          resolvedTemplateId === "empty-not-found-666" ||
          resolvedTemplateId === "maintenance-basic" ||
          resolvedTemplateId === "maintenance-under-construction" ||
          resolvedTemplateId === "maintenance-offline" ||
          resolvedTemplateId === "maintenance-electric-pro" ||
          resolvedTemplateId === "maintenance-playful-road"
        ) {
          const buttonContainerSelector =
            resolvedTemplateId === "error-parallax"
              ? ".ef-button-container"
              : resolvedTemplateId === "error-animated"
                ? ".ef-animated-404-button-container"
                : resolvedTemplateId === "error-sad-bear"
                  ? ".ef-sad-bear-button-container"
                  : resolvedTemplateId === "error-character-illustration"
                    ? ".ef-character-illustration-button-container"
                    : resolvedTemplateId === "error-sleeping-moon"
                      ? ".ef-sleeping-moon-button-container"
                      : resolvedTemplateId === "error-mailchimp"
                        ? ".ef-mailchimp-button-wrap"
                        : resolvedTemplateId === "error-mailchimp-pro"
                          ? ".ef-mailchimp-pro-button-wrap"
                          : resolvedTemplateId === "empty-basic"
                            ? ".ef-empty-basic-button-wrap"
                            : resolvedTemplateId === "empty-no-results"
                              ? ".ef-empty-no-results-button-wrap"
                              : resolvedTemplateId === "empty-inside-out"
                                ? ".ef-empty-inside-out-button-wrap"
                                : resolvedTemplateId === "empty-not-found-666"
                                  ? ".ef-empty-not-found-666-button-wrap"
                                  : resolvedTemplateId === "maintenance-basic"
                                    ? ".ef-maintenance-basic-button-wrap"
                                    : resolvedTemplateId === "maintenance-under-construction"
                                      ? ".ef-maintenance-under-construction-button-wrap"
                                      : resolvedTemplateId === "maintenance-offline"
                                        ? ".ef-mo-button-wrap"
                                        : resolvedTemplateId === "maintenance-electric-pro"
                                          ? ".ef-mep-button-wrap"
                                          : resolvedTemplateId === "maintenance-playful-road"
                                            ? ".ef-mpr-button-wrap"
                                            : ".ef-amazon-button-wrap";
          const buttonContainer = containerRef.current.querySelector(
            buttonContainerSelector,
          );
          if (
            buttonContainer &&
            buttonContainer.textContent?.includes("{{button}}")
          ) {
            buttonContainer.innerHTML = buttonHtml;
          } else if (buttonContainer) {
            buttonContainer.innerHTML = buttonHtml;
          }

          // Attach click handler immediately after inserting button
          setTimeout(() => {
            const buttonElement = buttonContainer?.querySelector(
              ".flowscreen-error-button",
            ) as HTMLButtonElement;
            if (buttonElement) {
              // Remove any existing listeners by cloning
              const newButton = buttonElement.cloneNode(
                true,
              ) as HTMLButtonElement;
              buttonElement.parentNode?.replaceChild(newButton, buttonElement);

              const handleClick = (e: MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                if (button?.onClick) {
                  button.onClick();
                } else if (typeof window !== "undefined") {
                  window.location.reload();
                }
              };
              newButton.addEventListener("click", handleClick);
            }
          }, 0);
        } else {
          // Legacy templates - add button after error message
          const messageDiv = containerRef.current.querySelector(
            ".flowscreen-error-message",
          );
          if (messageDiv) {
            messageDiv.insertAdjacentHTML("afterend", buttonHtml);
          }
        }

        // Attach click handler for legacy templates
        if (
          resolvedTemplateId !== "error-parallax" &&
          resolvedTemplateId !== "error-animated" &&
          resolvedTemplateId !== "error-sad-bear" &&
          resolvedTemplateId !== "error-character-illustration" &&
          resolvedTemplateId !== "error-sleeping-moon" &&
          resolvedTemplateId !== "error-amazon" &&
          resolvedTemplateId !== "error-mailchimp" &&
          resolvedTemplateId !== "error-mailchimp-pro" &&
          resolvedTemplateId !== "empty-basic" &&
          resolvedTemplateId !== "empty-no-results" &&
          resolvedTemplateId !== "empty-inside-out" &&
          resolvedTemplateId !== "empty-not-found-666" &&
          resolvedTemplateId !== "maintenance-basic" &&
          resolvedTemplateId !== "maintenance-under-construction" &&
          resolvedTemplateId !== "maintenance-offline" &&
          resolvedTemplateId !== "maintenance-electric-pro" &&
          resolvedTemplateId !== "maintenance-playful-road"
        ) {
          setTimeout(() => {
            if (containerRef.current) {
              const buttonElement = containerRef.current.querySelector(
                ".flowscreen-error-button",
              ) as HTMLButtonElement;
              if (buttonElement) {
                const handleClick = (e: MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  if (button?.onClick) {
                    button.onClick();
                  } else {
                    window.location.reload();
                  }
                };
                buttonElement.addEventListener("click", handleClick);
              }
            }
          }, 0);
        }
      } else if (
        (resolvedTemplateId === "error-parallax" ||
          resolvedTemplateId === "error-animated" ||
          resolvedTemplateId === "error-sad-bear" ||
          resolvedTemplateId === "error-character-illustration" ||
          resolvedTemplateId === "error-sleeping-moon" ||
          resolvedTemplateId === "error-amazon" ||
          resolvedTemplateId === "error-mailchimp" ||
          resolvedTemplateId === "error-mailchimp-pro" ||
          resolvedTemplateId === "empty-basic" ||
          resolvedTemplateId === "empty-no-results" ||
          resolvedTemplateId === "empty-inside-out" ||
          resolvedTemplateId === "empty-not-found-666" ||
          resolvedTemplateId === "maintenance-basic" ||
          resolvedTemplateId === "maintenance-under-construction" ||
          resolvedTemplateId === "maintenance-offline" ||
          resolvedTemplateId === "maintenance-electric-pro" ||
          resolvedTemplateId === "maintenance-playful-road") &&
        containerRef.current
      ) {
        // Remove button placeholder if button is hidden
        const buttonContainerSelector =
          resolvedTemplateId === "error-parallax"
            ? ".ef-button-container"
            : resolvedTemplateId === "error-animated"
              ? ".ef-animated-404-button-container"
              : resolvedTemplateId === "error-sad-bear"
                ? ".ef-sad-bear-button-container"
                : resolvedTemplateId === "error-character-illustration"
                  ? ".ef-character-illustration-button-container"
                  : resolvedTemplateId === "error-sleeping-moon"
                    ? ".ef-sleeping-moon-button-container"
                    : resolvedTemplateId === "error-mailchimp"
                      ? ".ef-mailchimp-button-wrap"
                      : resolvedTemplateId === "error-mailchimp-pro"
                        ? ".ef-mailchimp-pro-button-wrap"
                        : resolvedTemplateId === "empty-basic"
                          ? ".ef-empty-basic-button-wrap"
                          : resolvedTemplateId === "empty-no-results"
                            ? ".ef-empty-no-results-button-wrap"
                            : resolvedTemplateId === "empty-inside-out"
                              ? ".ef-empty-inside-out-button-wrap"
                              : resolvedTemplateId === "empty-not-found-666"
                                ? ".ef-empty-not-found-666-button-wrap"
                                : resolvedTemplateId === "maintenance-basic"
                                  ? ".ef-maintenance-basic-button-wrap"
                                  : resolvedTemplateId === "maintenance-under-construction"
                                    ? ".ef-maintenance-under-construction-button-wrap"
                                    : resolvedTemplateId === "maintenance-offline"
                                      ? ".ef-mo-button-wrap"
                                    : resolvedTemplateId === "maintenance-electric-pro"
                                      ? ".ef-mep-button-wrap"
                                      : resolvedTemplateId === "maintenance-playful-road"
                                        ? ".ef-mpr-button-wrap"
                                        : ".ef-amazon-button-wrap";
        const buttonContainer = containerRef.current.querySelector(
          buttonContainerSelector,
        );
        if (
          buttonContainer &&
          buttonContainer.textContent?.includes("{{button}}")
        ) {
          buttonContainer.innerHTML = "";
        }
      }

      // error-amazon: attach "Go back" link handler (runs whether button is shown or hidden)
      if (resolvedTemplateId === "error-amazon" && containerRef.current) {
        setTimeout(() => {
          const backLink = containerRef.current?.querySelector(
            ".ef-amazon-back",
          ) as HTMLAnchorElement;
          if (backLink) {
            const newBackLink = backLink.cloneNode(true) as HTMLAnchorElement;
            backLink.parentNode?.replaceChild(newBackLink, backLink);
            newBackLink.addEventListener("click", (e: MouseEvent) => {
              e.preventDefault();
              window.history.back();
            });
          }
        }, 0);
      }
    }
  }, [
    template,
    templateData,
    resolvedTemplateId,
    plan,
    enabledTemplates,
    effectiveCode,
    finalTitle,
    finalDescription,
    finalHint,
    hideTitle,
    hideDescription,
    hideHint,
    theme,
    classNames,
    button,
    effectiveHideButton,
  ]);

  const wrapperClassName = mergeClasses(layoutClasses[layout], className);

  return <div ref={containerRef} className={wrapperClassName || undefined} />;
}

function escapeHtml(text: string): string {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}
