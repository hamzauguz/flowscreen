// Scoped CSS for error-mailchimp-pro. Same layout/typography as error-mailchimp; illustration is GIF with max-height and object-fit.

export const mailchimpProErrorStyles = `
.ef-mailchimp-pro.flowscreen-error-container {
  --ef-mailchimp-pro-bg: #ffffff;
  --ef-mailchimp-pro-text: #241c15;
  --ef-mailchimp-pro-muted: #6b5b4f;
  --ef-mailchimp-pro-band: #fae37c;
  --ef-mailchimp-pro-band-icon: #241c15;
  --ef-mailchimp-pro-btn-bg: #241c15;
  --ef-mailchimp-pro-btn-color: #fff;
  --ef-mailchimp-pro-btn-hover-bg: #3d3228;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-mailchimp-pro-text);
  background: var(--ef-mailchimp-pro-bg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.ef-mailchimp-pro *,
.ef-mailchimp-pro *::before,
.ef-mailchimp-pro *::after {
  box-sizing: border-box;
}

/* Center section */
.ef-mailchimp-pro-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.5rem 4rem;
  text-align: center;
}

.ef-mailchimp-pro-content {
  max-width: 520px;
  width: 100%;
}

.ef-mailchimp-pro-code {
  font-size: var(--ef-code-size, 0.75rem);
  font-weight: var(--ef-code-weight, 600);
  color: var(--ef-code-color, var(--ef-mailchimp-pro-muted));
  margin: 0 0 0.5rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.ef-mailchimp-pro-title {
  font-size: var(--ef-title-size, 2.25rem);
  font-weight: var(--ef-title-weight, 700);
  line-height: 1.2;
  margin: 0 0 1rem;
  color: var(--ef-title-color, var(--ef-mailchimp-pro-text));
}

.ef-mailchimp-pro-description {
  font-size: var(--ef-description-size, 1.0625rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-mailchimp-pro-text));
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.ef-mailchimp-pro-description p {
  margin: 0 0 0.5rem;
}

.ef-mailchimp-pro-description p:first-child {
  margin-top: 0;
}

.ef-mailchimp-pro-description p:last-child {
  margin-bottom: 0;
  font-size: var(--ef-hint-size, 0.9375rem);
  color: var(--ef-hint-color, var(--ef-mailchimp-pro-muted));
}

.ef-mailchimp-pro-button-wrap {
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.ef-mailchimp-pro .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 1rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-mailchimp-pro-btn-color));
  background: var(--ef-button-background, var(--ef-mailchimp-pro-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 6px);
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.ef-mailchimp-pro .flowscreen-error-button:hover {
  background: var(--ef-mailchimp-pro-btn-hover-bg);
  transform: translateY(-1px);
}

.ef-mailchimp-pro .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-mailchimp-pro-text);
  outline-offset: 2px;
}

.ef-mailchimp-pro .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-mailchimp-pro .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-mailchimp-pro-text);
  outline-offset: 2px;
}

/* GIF illustration: responsive, no distortion, max-height to avoid huge GIF */
.ef-mailchimp-pro-illustration {
  max-width: 320px;
  width: 100%;
  max-height: 280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ef-mailchimp-pro-illustration-img {
  width: 100%;
  height: 100%;
  max-height: 280px;
  object-fit: contain;
  display: block;
}

/* Bottom band */
.ef-mailchimp-pro-band {
  flex-shrink: 0;
  width: 100%;
  min-height: 72px;
  background: var(--ef-mailchimp-pro-band);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
}

.ef-mailchimp-pro-band-text {
  font-size: 1rem;
  font-weight: 600;
  color: var(--ef-mailchimp-pro-band-icon);
  letter-spacing: -0.02em;
}

/* Responsive */
@media (max-width: 768px) {
  .ef-mailchimp-pro-main {
    padding: 1.5rem 1rem 3rem;
  }

  .ef-mailchimp-pro-title {
    font-size: 1.75rem;
  }

  .ef-mailchimp-pro-illustration {
    max-width: 240px;
    max-height: 200px;
  }

  .ef-mailchimp-pro-illustration-img {
    max-height: 200px;
  }

  .ef-mailchimp-pro-band {
    min-height: 56px;
  }

  .ef-mailchimp-pro-band-text {
    font-size: 0.9375rem;
  }
}
`;
