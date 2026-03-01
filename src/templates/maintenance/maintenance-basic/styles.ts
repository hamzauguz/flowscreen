// Scoped CSS for maintenance-basic template. Centered maintenance screen with icon, title, description, button.

export const maintenanceBasicStyles = `
@keyframes ef-maintenance-basic-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ef-maintenance-basic.flowscreen-error-container {
  --ef-maintenance-basic-bg: #fafafa;
  --ef-maintenance-basic-text: #1a1a1a;
  --ef-maintenance-basic-muted: #6b7280;
  --ef-maintenance-basic-btn-bg: #e5e7eb;
  --ef-maintenance-basic-btn-color: #374151;
  --ef-maintenance-basic-btn-hover-bg: #d1d5db;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-maintenance-basic-text);
  background: var(--ef-maintenance-basic-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ef-maintenance-basic *,
.ef-maintenance-basic *::before,
.ef-maintenance-basic *::after {
  box-sizing: border-box;
}

.ef-maintenance-basic-main {
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 420px;
  width: 100%;
  animation: ef-maintenance-basic-fade-in 0.5s ease-out forwards;
}

.ef-maintenance-basic-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin: 0 auto 1.25rem;
  color: var(--ef-maintenance-basic-muted);
}

.ef-maintenance-basic-icon svg {
  width: 100%;
  height: 100%;
}

.ef-maintenance-basic-title {
  font-size: var(--ef-title-size, 1.5rem);
  font-weight: var(--ef-title-weight, 600);
  line-height: 1.3;
  margin: 0 0 0.75rem;
  color: var(--ef-title-color, var(--ef-maintenance-basic-text));
}

.ef-maintenance-basic-description {
  font-size: var(--ef-description-size, 1rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-maintenance-basic-muted));
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.ef-maintenance-basic-description p {
  margin: 0 0 0.5rem;
}

.ef-maintenance-basic-description p:first-child {
  margin-top: 0;
}

.ef-maintenance-basic-description p:last-child {
  margin-bottom: 0;
}

.ef-maintenance-basic-button-wrap {
  margin-top: 1rem;
  text-align: center;
}

.ef-maintenance-basic-button-wrap:empty {
  display: none;
}

.ef-maintenance-basic .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 0.9375rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-maintenance-basic-btn-color));
  background: var(--ef-button-background, var(--ef-maintenance-basic-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 8px);
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.02s ease;
}

.ef-maintenance-basic .flowscreen-error-button:hover {
  background: var(--ef-maintenance-basic-btn-hover-bg);
}

.ef-maintenance-basic .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-maintenance-basic-text);
  outline-offset: 2px;
}

.ef-maintenance-basic .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-maintenance-basic .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-maintenance-basic-text);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .ef-maintenance-basic-main {
    padding: 1.5rem 1rem;
  }

  .ef-maintenance-basic-title {
    font-size: 1.25rem;
  }

  .ef-maintenance-basic-description {
    font-size: 0.9375rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ef-maintenance-basic-main {
    animation: ef-maintenance-basic-fade-in 0.4s ease-out forwards;
  }
}
`;
