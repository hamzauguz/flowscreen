// Minimal error page template - clean and simple

import type { FlowScreenTemplate } from "../../types";

export const minimalErrorTemplate: FlowScreenTemplate = {
  html: `<div class="flowscreen-error-container">
  <div class="flowscreen-error-content">
    <h1 class="flowscreen-error-code">Error</h1>
    <h2 class="flowscreen-error-title">Something went wrong</h2>
    <div class="flowscreen-error-message"></div>
  </div>
</div>`,
  css: `.flowscreen-error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: #ffffff;
}

.flowscreen-error-content {
  text-align: center;
  padding: 3rem;
  max-width: 500px;
}

.flowscreen-error-code {
  font-size: 3rem;
  font-weight: 300;
  margin: 0 0 1rem 0;
  color: #000;
  letter-spacing: -0.02em;
}

.flowscreen-error-title {
  font-size: 1.25rem;
  font-weight: 400;
  margin: 0 0 1.5rem 0;
  color: #333;
}

.flowscreen-error-message {
  font-size: 0.9375rem;
  line-height: 1.6;
  color: #666;
}

.flowscreen-error-message p {
  margin: 0.75rem 0;
}

.flowscreen-error-message p:first-child {
  margin-top: 0;
}

.flowscreen-error-message p:last-child {
  margin-bottom: 0;
}`,
};
