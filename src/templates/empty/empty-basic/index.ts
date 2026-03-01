// Empty state template: basic. Optional code (small/subdued), title, description, optional button.

import type { FlowScreenTemplate } from "../../types";
import { emptyBasicStyles } from "./styles";

export const emptyBasicTemplate: FlowScreenTemplate = {
  html: `<div class="ef-empty-basic flowscreen-error-container">
  <main class="ef-empty-basic-main ef-empty-basic-animated" role="main">
    <p class="ef-empty-basic-code" aria-label="Code">{{code}}</p>
    <h1 class="ef-empty-basic-title">{{title}}</h1>
    <div class="ef-empty-basic-description flowscreen-error-message">{{description}}</div>
    <div class="ef-empty-basic-button-wrap">{{button}}</div>
  </main>
</div>`,
  css: emptyBasicStyles,
};
