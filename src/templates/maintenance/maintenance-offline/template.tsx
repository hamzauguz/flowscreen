// Maintenance template: offline. PRO. Full-viewport background + dim layer + content on top.

import type { ReactNode } from "react";
import { classNames } from "./styles";

export interface MaintenanceOfflineTemplateProps {
  code?: string;
  title?: string;
  description?: ReactNode;
  primaryAction?: { label: string; onClick: () => void };
}

const defaultTitle = "We'll be back soon";
const defaultDescription =
  "We're performing scheduled maintenance. Please try again in a few minutes.";

export function MaintenanceOfflineTemplate({
  code = "",
  title = defaultTitle,
  description = defaultDescription,
  primaryAction,
}: MaintenanceOfflineTemplateProps) {
  const descriptionContent =
    typeof description === "string" ? (
      <p>{description}</p>
    ) : (
      description
    );

  return (
    <div className={classNames.container} role="main">
      <div className={classNames.background} aria-hidden="true" />
      <div className={classNames.dim} aria-hidden="true" />
      <div className={classNames.content}>
        {code ? (
          <p className={classNames.code} aria-label="Status code">
            {code}
          </p>
        ) : null}
        <h1 className={classNames.title}>{title}</h1>
        <div className={classNames.description}>{descriptionContent}</div>
        {primaryAction ? (
          <div className={classNames.buttonWrap}>
            <button
              type="button"
              className={classNames.button}
              onClick={primaryAction.onClick}
            >
              {primaryAction.label}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
