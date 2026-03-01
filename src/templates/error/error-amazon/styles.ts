// Scoped CSS for error-amazon template. Full-page layout, no card. All selectors under .ef-amazon.

export const amazonErrorStyles = `
.ef-amazon.flowscreen-error-container {
  --ef-amazon-bg: #f3f3f3;
  --ef-amazon-header-border: #e0e0e0;
  --ef-amazon-text: #111;
  --ef-amazon-text-muted: #565959;
  --ef-amazon-accent: #007185;
  --ef-amazon-accent-hover: #004f5c;
  --ef-amazon-btn-bg: #ffd814;
  --ef-amazon-btn-border: #fcd200;
  --ef-amazon-btn-hover: #f7ca00;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: "Amazon Ember", "Helvetica Neue", Roboto, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.4;
  color: var(--ef-amazon-text);
  background: var(--ef-amazon-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

.ef-amazon *,
.ef-amazon *::before,
.ef-amazon *::after {
  box-sizing: border-box;
}

/* Subtle top header */
.ef-amazon-header {
  background: #fff;
  border-bottom: 1px solid var(--ef-amazon-header-border);
  padding: 0.75rem 1.5rem;
}

.ef-amazon-header-inner {
  max-width: 1200px;
  margin: 0 auto;
  min-height: 1px;
}

/* Main: two columns, left-aligned content */
.ef-amazon-main {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 3rem;
  min-height: calc(100vh - 52px);
}

/* Left column: text content */
.ef-amazon-content {
  flex: 1 1 380px;
  min-width: 0;
  text-align: left;
  max-width: 520px;
}

.ef-amazon-code {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--ef-amazon-text-muted);
  margin: 0 0 0.5rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.ef-amazon-title {
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.25;
  margin: 0 0 0.75rem;
  color: var(--ef-amazon-text);
}

.ef-amazon-description {
  font-size: 0.9375rem;
  line-height: 1.5;
  color: var(--ef-amazon-text);
  margin: 0 0 1.25rem;
}

.ef-amazon-description p {
  margin: 0 0 0.4rem;
}

.ef-amazon-description p:first-child {
  margin-top: 0;
}

.ef-amazon-description p:last-child {
  margin-bottom: 0;
  font-size: 0.875rem;
  color: var(--ef-amazon-text-muted);
}

/* Actions: primary button + secondary link */
.ef-amazon-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-top: 1rem;
}

.ef-amazon-button-wrap {
  display: inline-block;
}

.ef-amazon .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 600;
  color: #111;
  background: var(--ef-amazon-btn-bg);
  border: 1px solid var(--ef-amazon-btn-border);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;
  box-shadow: 0 1px 2px rgba(15, 17, 17, 0.15);
}

.ef-amazon .flowscreen-error-button:hover {
  background: var(--ef-amazon-btn-hover);
  border-color: #e6b800;
}

.ef-amazon .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-amazon-accent);
  outline-offset: 2px;
}

.ef-amazon .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-amazon .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-amazon-accent);
  outline-offset: 2px;
}

/* Secondary "Go back" link */
.ef-amazon-back {
  font-size: 0.875rem;
  color: var(--ef-amazon-accent);
  text-decoration: none;
  transition: color 0.15s ease, text-decoration 0.15s ease;
}

.ef-amazon-back:hover {
  color: var(--ef-amazon-accent-hover);
  text-decoration: underline;
}

.ef-amazon-back:focus {
  outline: 2px solid var(--ef-amazon-accent);
  outline-offset: 2px;
}

.ef-amazon-back:focus:not(:focus-visible) {
  outline: none;
}

.ef-amazon-back:focus-visible {
  outline: 2px solid var(--ef-amazon-accent);
  outline-offset: 2px;
}

/* Right column: illustration + caption */
.ef-amazon-illustration {
  flex: 0 1 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 0;
  gap: 1rem;
}

.ef-amazon-illustration img.ef-amazon-illustration-img {
  width: 100%;
  max-width: 320px;
  height: auto;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.25s ease;
}

.ef-amazon-illustration:hover img.ef-amazon-illustration-img {
  transform: scale(1.02);
}

/* Pet caption: name (dark) + tagline (#619abf) */
.ef-amazon-caption {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.25rem;
}

.ef-amazon-caption-name {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ef-amazon-text);
}

.ef-amazon-caption-tagline {
  font-size: 0.875rem;
  color: #619abf;
}

/* Responsive: stack vertically, dog on top */
@media (max-width: 768px) {
  .ef-amazon-header {
    padding: 0.5rem 1rem;
  }

  .ef-amazon-main {
    flex-direction: column;
    align-items: stretch;
    padding: 1.5rem 1rem 2rem;
    gap: 1.5rem;
    min-height: auto;
  }

  .ef-amazon-content {
    flex: 1 1 auto;
    max-width: none;
    order: 2;
  }

  .ef-amazon-illustration {
    flex: 0 0 auto;
    order: 1;
    justify-content: center;
  }

  .ef-amazon-illustration img.ef-amazon-illustration-img {
    max-width: 240px;
  }

  .ef-amazon-title {
    font-size: 1.5rem;
  }

  .ef-amazon-description {
    font-size: 0.875rem;
  }

  .ef-amazon-description p:last-child {
    font-size: 0.8125rem;
  }
}
`;
