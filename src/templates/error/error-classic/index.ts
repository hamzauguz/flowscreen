// Classic error page template - traditional design

import type { FlowScreenTemplate } from "../../types";

export const classicErrorTemplate: FlowScreenTemplate = {
  html: `<div class="flowscreen-error-container">
  <div class="flowscreen-error-content">
    <div class="flowscreen-error-border">
      <h1 class="flowscreen-error-code">Error</h1>
      <h2 class="flowscreen-error-title">Something went wrong</h2>
      <div class="flowscreen-error-message"></div>
    </div>
  </div>
</div>`,
  css: `.flowscreen-error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: Georgia, "Times New Roman", serif;
  background: #fafafa;
}

.flowscreen-error-content {
  text-align: center;
  padding: 2rem;
  max-width: 550px;
}

.flowscreen-error-border {
  border: 2px solid #ddd;
  border-radius: 4px;
  padding: 2.5rem;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.flowscreen-error-code {
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0 0 0.75rem 0;
  color: #2c3e50;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.flowscreen-error-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  color: #34495e;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.flowscreen-error-message {
  font-size: 1rem;
  line-height: 1.7;
  color: #555;
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
