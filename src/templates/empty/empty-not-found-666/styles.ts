// Scoped CSS for empty-not-found-666 template (PRO only). Staggered entrance + subtle float.

export const emptyNotFound666Styles = `
@keyframes ef-empty-not-found-666-fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ef-empty-not-found-666-image-in {
  from {
    opacity: 0;
    transform: scale(0.92) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes ef-empty-not-found-666-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.ef-empty-not-found-666.flowscreen-error-container {
  --ef-empty-not-found-666-bg: #fafafa;
  --ef-empty-not-found-666-text: #1a1a1a;
  --ef-empty-not-found-666-muted: #6b7280;
  --ef-empty-not-found-666-btn-bg: #e5e7eb;
  --ef-empty-not-found-666-btn-color: #374151;
  --ef-empty-not-found-666-btn-hover-bg: #d1d5db;
  --ef-empty-not-found-666-shadow: rgba(0, 0, 0, 0.08);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-empty-not-found-666-text);
  background: var(--ef-empty-not-found-666-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ef-empty-not-found-666 *,
.ef-empty-not-found-666 *::before,
.ef-empty-not-found-666 *::after {
  box-sizing: border-box;
}

.ef-empty-not-found-666-main {
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 420px;
  width: 100%;
  animation: ef-empty-not-found-666-fade-in 0.4s ease-out forwards;
}

.ef-empty-not-found-666-image-wrap {
  margin: 0 auto 1.5rem;
  line-height: 0;
  filter: drop-shadow(0 8px 16px var(--ef-empty-not-found-666-shadow));
}

.ef-empty-not-found-666-image-wrap img {
  max-width: 280px;
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
  vertical-align: middle;
  animation: ef-empty-not-found-666-image-in 0.55s ease-out 0.05s forwards,
             ef-empty-not-found-666-float 4s ease-in-out 0.65s infinite;
}

.ef-empty-not-found-666-title {
  font-size: var(--ef-title-size, 1.5rem);
  font-weight: var(--ef-title-weight, 700);
  line-height: 1.3;
  margin: 0 0 0.75rem;
  color: var(--ef-title-color, var(--ef-empty-not-found-666-text));
  opacity: 0;
  animation: ef-empty-not-found-666-fade-in 0.4s ease-out 0.25s forwards;
}

.ef-empty-not-found-666-description {
  font-size: var(--ef-description-size, 1rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-empty-not-found-666-muted));
  line-height: 1.6;
  margin: 0 0 1.5rem;
  opacity: 0;
  animation: ef-empty-not-found-666-fade-in 0.4s ease-out 0.4s forwards;
}

.ef-empty-not-found-666-description p {
  margin: 0 0 0.5rem;
}

.ef-empty-not-found-666-description p:first-child {
  margin-top: 0;
}

.ef-empty-not-found-666-description p:last-child {
  margin-bottom: 0;
}

.ef-empty-not-found-666-button-wrap {
  margin-top: 0.25rem;
  text-align: center;
  opacity: 0;
  animation: ef-empty-not-found-666-fade-in 0.35s ease-out 0.55s forwards;
}

.ef-empty-not-found-666-button-wrap:empty {
  display: none;
}

.ef-empty-not-found-666 .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 0.9375rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-empty-not-found-666-btn-color));
  background: var(--ef-button-background, var(--ef-empty-not-found-666-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 8px);
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.ef-empty-not-found-666 .flowscreen-error-button:hover {
  background: var(--ef-empty-not-found-666-btn-hover-bg);
}

.ef-empty-not-found-666 .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-empty-not-found-666-text);
  outline-offset: 2px;
}

.ef-empty-not-found-666 .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-empty-not-found-666 .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-empty-not-found-666-text);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .ef-empty-not-found-666-main {
    padding: 1.5rem 1rem;
  }

  .ef-empty-not-found-666-image-wrap img {
    max-width: 220px;
  }

  .ef-empty-not-found-666-image-wrap {
    margin-bottom: 1.25rem;
  }

  .ef-empty-not-found-666-title {
    font-size: 1.25rem;
  }

  .ef-empty-not-found-666-description {
    font-size: 0.9375rem;
  }
}

@media (prefers-color-scheme: dark) {
  .ef-empty-not-found-666.flowscreen-error-container {
    --ef-empty-not-found-666-bg: #111827;
    --ef-empty-not-found-666-text: #f9fafb;
    --ef-empty-not-found-666-muted: #9ca3af;
    --ef-empty-not-found-666-btn-bg: #374151;
    --ef-empty-not-found-666-btn-color: #f3f4f6;
    --ef-empty-not-found-666-btn-hover-bg: #4b5563;
    --ef-empty-not-found-666-shadow: rgba(0, 0, 0, 0.2);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ef-empty-not-found-666-main {
    animation: none;
  }

  .ef-empty-not-found-666-image-wrap img {
    animation: ef-empty-not-found-666-image-in 0.4s ease-out 0.05s forwards;
  }

  .ef-empty-not-found-666-title,
  .ef-empty-not-found-666-description,
  .ef-empty-not-found-666-button-wrap {
    opacity: 1;
    animation: none;
  }
}
`;
