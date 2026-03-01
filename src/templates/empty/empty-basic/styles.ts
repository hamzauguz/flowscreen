// Scoped CSS for empty-basic template. Minimal, centered empty state with entrance animation.

export const emptyBasicStyles = `
@keyframes ef-empty-basic-fade-in {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ef-empty-basic-float {
 0%, 100% {
   transform: translateY(0);
 }
 50% {
   transform: translateY(-4px);
 }
}

.ef-empty-basic.flowscreen-error-container {
  --ef-empty-basic-bg: #fafafa;
  --ef-empty-basic-text: #1a1a1a;
  --ef-empty-basic-muted: #6b7280;
  --ef-empty-basic-btn-bg: #1a1a1a;
  --ef-empty-basic-btn-color: #fff;
  --ef-empty-basic-btn-hover-bg: #374151;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-empty-basic-text);
  background: var(--ef-empty-basic-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ef-empty-basic *,
.ef-empty-basic *::before,
.ef-empty-basic *::after {
  box-sizing: border-box;
}

.ef-empty-basic-main {
  text-align: center;
  padding: 2rem 1.5rem;
  max-width: 420px;
  width: 100%;
  animation: ef-empty-basic-fade-in 0.5s ease-out forwards;
}

.ef-empty-basic-main.ef-empty-basic-animated {
  animation: ef-empty-basic-fade-in 0.5s ease-out forwards,
             ef-empty-basic-float 4s ease-in-out 0.6s infinite;
}

.ef-empty-basic-code {
  font-size: var(--ef-code-size, 0.8125rem);
  font-weight: var(--ef-code-weight, 500);
  color: var(--ef-code-color, var(--ef-empty-basic-muted));
  margin: 0 0 0.5rem;
  letter-spacing: 0.02em;
}

.ef-empty-basic-code:empty {
  display: none;
}

.ef-empty-basic-title {
  font-size: var(--ef-title-size, 1.5rem);
  font-weight: var(--ef-title-weight, 600);
  line-height: 1.3;
  margin: 0 0 0.75rem;
  color: var(--ef-title-color, var(--ef-empty-basic-text));
}

.ef-empty-basic-description {
  font-size: var(--ef-description-size, 1rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-empty-basic-muted));
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.ef-empty-basic-description p {
  margin: 0 0 0.5rem;
}

.ef-empty-basic-description p:first-child {
  margin-top: 0;
}

.ef-empty-basic-description p:last-child {
  margin-bottom: 0;
}

.ef-empty-basic-button-wrap {
  margin-top: 1rem;
  text-align: center;
}

.ef-empty-basic-button-wrap:empty {
  display: none;
}

.ef-empty-basic .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 0.9375rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-empty-basic-btn-color));
  background: var(--ef-button-background, var(--ef-empty-basic-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 6px);
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.02s ease;
}

.ef-empty-basic .flowscreen-error-button:hover {
  background: var(--ef-empty-basic-btn-hover-bg);
}

.ef-empty-basic .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-empty-basic-text);
  outline-offset: 2px;
}

.ef-empty-basic .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-empty-basic .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-empty-basic-text);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .ef-empty-basic-main {
    padding: 1.5rem 1rem;
  }

  .ef-empty-basic-title {
    font-size: 1.25rem;
  }

  .ef-empty-basic-description {
    font-size: 0.9375rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ef-empty-basic-main.ef-empty-basic-animated {
    animation: ef-empty-basic-fade-in 0.4s ease-out forwards;
  }
}
`;
