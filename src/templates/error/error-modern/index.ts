// Modern error page template - contemporary design

import type { FlowScreenTemplate } from "../../types";

export const modernErrorTemplate: FlowScreenTemplate = {
  html: `<div class="ef-error-modern flowscreen-error-container">
  <div class="flowscreen-error-content">
    <div class="flowscreen-error-icon">⚠</div>
    <h1 class="flowscreen-error-code">Error</h1>
    <h2 class="flowscreen-error-title">Something went wrong</h2>
    <div class="flowscreen-error-message"></div>
  </div>
</div>`,
  css: `/* Scoped so correct colors apply on first paint; no reliance on inheritance or late theme */
.ef-error-modern.flowscreen-error-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
}

.ef-error-modern .flowscreen-error-content {
  text-align: center;
  padding: 3rem;
  max-width: 600px;
  color: #fff;
}

.ef-error-modern .flowscreen-error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  color: #fff;
}

.ef-error-modern .flowscreen-error-code {
  font-size: 5rem;
  font-weight: 800;
  line-height: 1;
  margin: 0 0 0.5rem 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
}

.ef-error-modern .flowscreen-error-title {
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  opacity: 0.95;
  color: #fff;
}

.ef-error-modern .flowscreen-error-message {
  font-size: 1.125rem;
  line-height: 1.6;
  opacity: 0.9;
  color: #fff;
}

.ef-error-modern .flowscreen-error-message p {
  margin: 0.75rem 0;
  color: #fff;
}

.ef-error-modern .flowscreen-error-message p:first-child {
  margin-top: 0;
}

.ef-error-modern .flowscreen-error-message p:last-child {
  margin-bottom: 0;
}`,
};
