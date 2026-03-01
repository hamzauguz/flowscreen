// Scoped CSS for maintenance-under-construction template. Centered layout with image, title, description, "Refresh page" button.

export const maintenanceUnderConstructionStyles = `
@keyframes ef-maintenance-uc-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ef-maintenance-under-construction.flowscreen-error-container {
  --ef-maintenance-uc-bg: #fafafa;
  --ef-maintenance-uc-text: #1a1a1a;
  --ef-maintenance-uc-muted: #6b7280;
  --ef-maintenance-uc-btn-bg: #e5e7eb;
  --ef-maintenance-uc-btn-color: #374151;
  --ef-maintenance-uc-btn-hover-bg: #d1d5db;
  --ef-maintenance-uc-img-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-maintenance-uc-text);
  background: var(--ef-maintenance-uc-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ef-maintenance-under-construction *,
.ef-maintenance-under-construction *::before,
.ef-maintenance-under-construction *::after {
  box-sizing: border-box;
}

.ef-maintenance-under-construction-main {
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 460px;
  width: 100%;
  animation: ef-maintenance-uc-fade-in 0.5s ease-out forwards;
}

.ef-maintenance-under-construction-image-wrap {
  margin: 0 auto 1.5rem;
  line-height: 0;
}

.ef-maintenance-under-construction-image-wrap img {
  max-width: 520px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  border-radius: 0;
  box-shadow: var(--ef-maintenance-uc-img-shadow);
}

.ef-maintenance-under-construction-title {
  font-size: var(--ef-title-size, 1.5rem);
  font-weight: var(--ef-title-weight, 600);
  line-height: 1.3;
  margin: 0 0 0.75rem;
  color: var(--ef-title-color, var(--ef-maintenance-uc-text));
}

.ef-maintenance-under-construction-description {
  font-size: var(--ef-description-size, 1rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-maintenance-uc-muted));
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.ef-maintenance-under-construction-description p {
  margin: 0 0 0.5rem;
}

.ef-maintenance-under-construction-description p:first-child {
  margin-top: 0;
}

.ef-maintenance-under-construction-description p:last-child {
  margin-bottom: 0;
}

.ef-maintenance-under-construction-button-wrap {
  margin-top: 1rem;
  text-align: center;
}

.ef-maintenance-under-construction-button-wrap:empty {
  display: none;
}

.ef-maintenance-under-construction .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 0.9375rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-maintenance-uc-btn-color));
  background: var(--ef-button-background, var(--ef-maintenance-uc-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 8px);
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.02s ease;
}

.ef-maintenance-under-construction .flowscreen-error-button:hover {
  background: var(--ef-maintenance-uc-btn-hover-bg);
}

.ef-maintenance-under-construction .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-maintenance-uc-text);
  outline-offset: 2px;
}

.ef-maintenance-under-construction .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-maintenance-under-construction .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-maintenance-uc-text);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .ef-maintenance-under-construction-main {
    padding: 1.5rem 1rem;
  }

  .ef-maintenance-under-construction-image-wrap img {
    max-width: 320px;
  }

  .ef-maintenance-under-construction-title {
    font-size: 1.25rem;
  }

  .ef-maintenance-under-construction-description {
    font-size: 0.9375rem;
  }
}

@media (prefers-color-scheme: dark) {
  .ef-maintenance-under-construction.flowscreen-error-container {
    --ef-maintenance-uc-bg: #111827;
    --ef-maintenance-uc-text: #f9fafb;
    --ef-maintenance-uc-muted: #9ca3af;
    --ef-maintenance-uc-btn-bg: #374151;
    --ef-maintenance-uc-btn-color: #f9fafb;
    --ef-maintenance-uc-btn-hover-bg: #4b5563;
    --ef-maintenance-uc-img-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ef-maintenance-under-construction-main {
    animation: ef-maintenance-uc-fade-in 0.4s ease-out forwards;
  }
}
`;
