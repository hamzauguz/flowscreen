// Empty state template: "No results found". FREE. Illustration (magnifier + X), title, description, Refresh page button.

import type { FlowScreenTemplate } from "../../types";
import { emptyNoResultsStyles } from "./styles";

const ILLUSTRATION_SVG = `<svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="36" cy="36" r="22" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M52 52l16 16" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M28 28L44 44M44 28L28 44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

export const emptyNoResultsTemplate: FlowScreenTemplate = {
  html: `<div class="ef-empty-no-results flowscreen-error-container">
  <main class="ef-empty-no-results-main" role="main">
    <div class="ef-empty-no-results-illustration">${ILLUSTRATION_SVG}</div>
    <h1 class="ef-empty-no-results-title">{{title}}</h1>
    <div class="ef-empty-no-results-description flowscreen-error-message">{{description}}</div>
    <div class="ef-empty-no-results-button-wrap">{{button}}</div>
  </main>
</div>`,
  css: emptyNoResultsStyles,
};
