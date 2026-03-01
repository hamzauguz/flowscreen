// Scoped CSS for error-mailchimp template. Full-page layout, Mailchimp-style playful vibe.
// Uses theme typography CSS variables (--ef-code-*, --ef-title-*, etc.) when provided.

export const mailchimpErrorStyles = `
.ef-mailchimp.flowscreen-error-container {
  --ef-mailchimp-bg: #ffffff;
  --ef-mailchimp-text: #241c15;
  --ef-mailchimp-muted: #6b5b4f;
  --ef-mailchimp-band: #fae37c;
  --ef-mailchimp-band-icon: #241c15;
  --ef-mailchimp-btn-bg: #241c15;
  --ef-mailchimp-btn-color: #fff;
  --ef-mailchimp-btn-hover-bg: #3d3228;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-mailchimp-text);
  background: var(--ef-mailchimp-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.ef-mailchimp *,
.ef-mailchimp *::before,
.ef-mailchimp *::after {
  box-sizing: border-box;
}

/* Center section */
.ef-mailchimp-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem 4rem;
  text-align: center;
}

.ef-mailchimp-content {
  max-width: 520px;
  width: 100%;
}

.ef-mailchimp-code {
  font-size: var(--ef-code-size, 0.75rem);
  font-weight: var(--ef-code-weight, 600);
  color: var(--ef-code-color, var(--ef-mailchimp-muted));
  margin: 0 0 0.5rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.ef-mailchimp-title {
  font-size: var(--ef-title-size, 2.25rem);
  font-weight: var(--ef-title-weight, 700);
  line-height: 1.2;
  margin: 0 0 1rem;
  color: var(--ef-title-color, var(--ef-mailchimp-text));
}

.ef-mailchimp-description {
  font-size: var(--ef-description-size, 1.0625rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-mailchimp-text));
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.ef-mailchimp-description p {
  margin: 0 0 0.5rem;
}

.ef-mailchimp-description p:first-child {
  margin-top: 0;
}

.ef-mailchimp-description p:last-child {
  margin-bottom: 0;
  font-size: var(--ef-hint-size, 0.9375rem);
  color: var(--ef-hint-color, var(--ef-mailchimp-muted));
}

.ef-mailchimp-button-wrap {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.ef-mailchimp .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 1rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-mailchimp-btn-color));
  background: var(--ef-button-background, var(--ef-mailchimp-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 6px);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.ef-mailchimp .flowscreen-error-button:hover {
  background: var(--ef-mailchimp-btn-hover-bg);
  transform: translateY(-1px);
}

.ef-mailchimp .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-mailchimp-text);
  outline-offset: 2px;
}

.ef-mailchimp .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-mailchimp .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-mailchimp-text);
  outline-offset: 2px;
}

/* Playful illustration */
.ef-mailchimp-illustration {
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
  transition: transform 0.35s ease;
}

.ef-mailchimp-illustration:hover {
  transform: scale(1.02);
}

.ef-mailchimp-illustration-img {
  width: 100%;
  height: auto;
  display: block;
}

/* Bottom band */
.ef-mailchimp-band {
  flex-shrink: 0;
  width: 100%;
  min-height: 72px;
  background: var(--ef-mailchimp-band);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
}

.ef-mailchimp-band-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ef-mailchimp-band-icon);
  letter-spacing: -0.02em;
}

/* Responsive */
@media (max-width: 768px) {
  .ef-mailchimp-main {
    padding: 1.5rem 1rem 3rem;
  }

  .ef-mailchimp-title {
    font-size: 1.75rem;
  }

  .ef-mailchimp-illustration {
    max-width: 240px;
  }

  .ef-mailchimp-band {
    min-height: 56px;
  }

  .ef-mailchimp-band-text {
    font-size: 0.9375rem;
  }
}
`;
