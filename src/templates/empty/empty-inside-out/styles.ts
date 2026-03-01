// Scoped CSS for empty-inside-out template.

export const emptyInsideOutStyles = `
@keyframes ef-empty-inside-out-fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ef-empty-inside-out.flowscreen-error-container {
  --ef-empty-inside-out-bg: #fafafa;
  --ef-empty-inside-out-text: #1a1a1a;
  --ef-empty-inside-out-muted: #6b7280;
  --ef-empty-inside-out-btn-bg: #e5e7eb;
  --ef-empty-inside-out-btn-color: #374151;
  --ef-empty-inside-out-btn-hover-bg: #d1d5db;
  --ef-empty-inside-out-shadow: rgba(0, 0, 0, 0.08);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-empty-inside-out-text);
  background: var(--ef-empty-inside-out-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ef-empty-inside-out *,
.ef-empty-inside-out *::before,
.ef-empty-inside-out *::after {
  box-sizing: border-box;
}

.ef-empty-inside-out-main {
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 420px;
  width: 100%;
  animation: ef-empty-inside-out-fade-in 0.45s ease-out forwards;
}

.ef-empty-inside-out-image-wrap {
  margin: 0 auto 1.5rem;
  line-height: 0;
  filter: drop-shadow(0 8px 16px var(--ef-empty-inside-out-shadow));
}

.ef-empty-inside-out-image-wrap img {
  max-width: 260px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  vertical-align: middle;
}

.ef-empty-inside-out-title {
  font-size: var(--ef-title-size, 1.5rem);
  font-weight: var(--ef-title-weight, 700);
  line-height: 1.3;
  margin: 0 0 0.75rem;
  color: var(--ef-title-color, var(--ef-empty-inside-out-text));
}

.ef-empty-inside-out-description {
  font-size: var(--ef-description-size, 1rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-empty-inside-out-muted));
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.ef-empty-inside-out-description p {
  margin: 0 0 0.5rem;
}

.ef-empty-inside-out-description p:first-child {
  margin-top: 0;
}

.ef-empty-inside-out-description p:last-child {
  margin-bottom: 0;
}

.ef-empty-inside-out-button-wrap {
  margin-top: 0.25rem;
  text-align: center;
}

.ef-empty-inside-out-button-wrap:empty {
  display: none;
}

.ef-empty-inside-out .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 0.9375rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-empty-inside-out-btn-color));
  background: var(--ef-button-background, var(--ef-empty-inside-out-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 8px);
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.ef-empty-inside-out .flowscreen-error-button:hover {
  background: var(--ef-empty-inside-out-btn-hover-bg);
}

.ef-empty-inside-out .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-empty-inside-out-text);
  outline-offset: 2px;
}

.ef-empty-inside-out .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-empty-inside-out .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-empty-inside-out-text);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .ef-empty-inside-out-main {
    padding: 1.5rem 1rem;
  }

  .ef-empty-inside-out-image-wrap img {
    max-width: 200px;
  }

  .ef-empty-inside-out-image-wrap {
    margin-bottom: 1.25rem;
  }

  .ef-empty-inside-out-title {
    font-size: 1.25rem;
  }

  .ef-empty-inside-out-description {
    font-size: 0.9375rem;
  }
}

@media (prefers-color-scheme: dark) {
  .ef-empty-inside-out.flowscreen-error-container {
    --ef-empty-inside-out-bg: #111827;
    --ef-empty-inside-out-text: #f9fafb;
    --ef-empty-inside-out-muted: #9ca3af;
    --ef-empty-inside-out-btn-bg: #374151;
    --ef-empty-inside-out-btn-color: #f3f4f6;
    --ef-empty-inside-out-btn-hover-bg: #4b5563;
    --ef-empty-inside-out-shadow: rgba(0, 0, 0, 0.2);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ef-empty-inside-out-main {
    animation: none;
  }
}
`;
