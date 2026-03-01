// Amazon-inspired full-page error. Works for any error code (4xx/5xx).
// Original design: full-page layout, two columns, left-aligned content. No card.
// Illustration: random dog image on each refresh (injected by React wrapper).

import type { FlowScreenTemplate } from "../../types";
import { amazonErrorStyles } from "./styles";

export const amazonErrorTemplate: FlowScreenTemplate = {
  html: `<div class="ef-amazon flowscreen-error-container">
  <header class="ef-amazon-header" role="banner">
    <div class="ef-amazon-header-inner"></div>
  </header>
  <main class="ef-amazon-main" role="main">
    <div class="ef-amazon-content">
      <p class="ef-amazon-code flowscreen-error-code" aria-label="Error code">{{code}}</p>
      <h1 class="ef-amazon-title flowscreen-error-title">{{title}}</h1>
      <div class="ef-amazon-description">{{description}}</div>
      <div class="ef-amazon-actions">
        <span class="ef-amazon-button-wrap">{{button}}</span>
        <a href="#" class="ef-amazon-back" data-ef-back>Go back</a>
      </div>
    </div>
    <div class="ef-amazon-illustration">
      <img src="{{illustrationSrc}}" alt="" class="ef-amazon-illustration-img" width="400" height="400" loading="lazy" />
      <div class="ef-amazon-caption">
        <span class="ef-amazon-caption-name">{{petName}}</span>
        <span class="ef-amazon-caption-tagline">Meet the pets of FlowScreen</span>
      </div>
    </div>
  </main>
</div>`,
  css: amazonErrorStyles,
};
