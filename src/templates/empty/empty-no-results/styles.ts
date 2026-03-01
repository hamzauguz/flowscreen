// Scoped CSS for empty-no-results template.

export const emptyNoResultsStyles = `
@keyframes ef-empty-no-results-fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ef-empty-no-results.flowscreen-error-container {
  --ef-empty-no-results-bg: #fafafa;
  --ef-empty-no-results-text: #1a1a1a;
  --ef-empty-no-results-muted: #6b7280;
  --ef-empty-no-results-btn-bg: #e5e7eb;
  --ef-empty-no-results-btn-color: #374151;
  --ef-empty-no-results-btn-hover-bg: #d1d5db;
  --ef-empty-no-results-illus: #9ca3af;
  --ef-empty-no-results-shadow: rgba(0, 0, 0, 0.06);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-empty-no-results-text);
  background: var(--ef-empty-no-results-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ef-empty-no-results *,
.ef-empty-no-results *::before,
.ef-empty-no-results *::after {
  box-sizing: border-box;
}

.ef-empty-no-results-main {
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 420px;
  width: 100%;
  animation: ef-empty-no-results-fade-in 0.45s ease-out forwards;
}

.ef-empty-no-results-illustration {
  margin: 0 auto 1.5rem;
  width: 80px;
  height: 80px;
  color: var(--ef-empty-no-results-illus);
  filter: drop-shadow(0 4px 8px var(--ef-empty-no-results-shadow));
}

.ef-empty-no-results-illustration svg {
  width: 100%;
  height: 100%;
  display: block;
}

.ef-empty-no-results-title {
  font-size: var(--ef-title-size, 1.5rem);
  font-weight: var(--ef-title-weight, 700);
  line-height: 1.3;
  margin: 0 0 0.75rem;
  color: var(--ef-title-color, var(--ef-empty-no-results-text));
}

.ef-empty-no-results-description {
  font-size: var(--ef-description-size, 1rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-empty-no-results-muted));
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.ef-empty-no-results-description p {
  margin: 0 0 0.5rem;
}

.ef-empty-no-results-description p:first-child {
  margin-top: 0;
}

.ef-empty-no-results-description p:last-child {
  margin-bottom: 0;
}

.ef-empty-no-results-button-wrap {
  margin-top: 0.25rem;
  text-align: center;
}

.ef-empty-no-results-button-wrap:empty {
  display: none;
}

.ef-empty-no-results .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 0.9375rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-empty-no-results-btn-color));
  background: var(--ef-button-background, var(--ef-empty-no-results-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 8px);
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.ef-empty-no-results .flowscreen-error-button:hover {
  background: var(--ef-empty-no-results-btn-hover-bg);
}

.ef-empty-no-results .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-empty-no-results-text);
  outline-offset: 2px;
}

.ef-empty-no-results .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-empty-no-results .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-empty-no-results-text);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .ef-empty-no-results-main {
    padding: 1.5rem 1rem;
  }

  .ef-empty-no-results-illustration {
    width: 64px;
    height: 64px;
    margin-bottom: 1.25rem;
  }

  .ef-empty-no-results-title {
    font-size: 1.25rem;
  }

  .ef-empty-no-results-description {
    font-size: 0.9375rem;
  }
}

@media (prefers-color-scheme: dark) {
  .ef-empty-no-results.flowscreen-error-container {
    --ef-empty-no-results-bg: #111827;
    --ef-empty-no-results-text: #f9fafb;
    --ef-empty-no-results-muted: #9ca3af;
    --ef-empty-no-results-btn-bg: #374151;
    --ef-empty-no-results-btn-color: #f3f4f6;
    --ef-empty-no-results-btn-hover-bg: #4b5563;
    --ef-empty-no-results-illus: #6b7280;
    --ef-empty-no-results-shadow: rgba(0, 0, 0, 0.2);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ef-empty-no-results-main {
    animation: none;
  }
}
`;
