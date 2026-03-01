// Empty state template: Inside Out "Sadness" style (PRO). Random image on refresh, title, description, Refresh page button.

import type { FlowScreenTemplate } from "../../types";
import { emptyInsideOutStyles } from "./styles";

export const emptyInsideOutTemplate: FlowScreenTemplate = {
  html: `<div class="ef-empty-inside-out flowscreen-error-container">
  <main class="ef-empty-inside-out-main" role="main">
    <div class="ef-empty-inside-out-image-wrap">
      <img src="{{imageSrc}}" alt="Inside Out empty state" loading="eager" draggable="false" />
    </div>
    <h1 class="ef-empty-inside-out-title">{{title}}</h1>
    <div class="ef-empty-inside-out-description flowscreen-error-message">{{description}}</div>
    <div class="ef-empty-inside-out-button-wrap">{{button}}</div>
  </main>
</div>`,
  css: emptyInsideOutStyles,
};
