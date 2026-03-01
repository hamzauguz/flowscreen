// Scoped CSS for maintenance-electric-pro template. PRO. Full-screen GIF background + overlay + content on top.

export const classNames = {
  container: "ef-maintenance-electric-pro flowscreen-container",
  main: "ef-mep-main",
  content: "ef-mep-content",
  title: "ef-mep-title",
  description: "ef-mep-description",
  buttonWrap: "ef-mep-button-wrap",
  button: "flowscreen-error-button",
  imageWrap: "ef-mep-image-wrap",
} as const;

export const maintenanceElectricProStyles = `
@keyframes ef-mep-fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ef-maintenance-electric-pro.flowscreen-container {
  --ef-mep-text: #ffffff;
  --ef-mep-muted: rgba(255, 255, 255, 0.88);
  --ef-mep-btn-bg: #2563eb;
  --ef-mep-btn-color: #ffffff;
  --ef-mep-btn-hover-bg: #1d4ed8;
  --ef-mep-overlay: rgba(0, 0, 0, 0.35);
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-mep-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

.ef-maintenance-electric-pro *,
.ef-maintenance-electric-pro *::before,
.ef-maintenance-electric-pro *::after {
  box-sizing: border-box;
}

/* Full-screen GIF background layer */
.ef-mep-image-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
  line-height: 0;
}

.ef-mep-image-wrap img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Overlay on top of GIF for readability */
.ef-maintenance-electric-pro.flowscreen-container::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: var(--ef-mep-overlay);
  pointer-events: none;
}

/* Content container above overlay */
.ef-mep-main {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 35vh;
  animation: ef-mep-fade-in 0.45s ease-out forwards;
}

.ef-mep-content {
  width: 100%;
  max-width: 420px;
  text-align: left;
}

.ef-mep-title {
  font-size: var(--ef-title-size, 1.75rem);
  font-weight: var(--ef-title-weight, 700);
  line-height: 1.25;
  margin: 0 0 0.75rem;
  color: var(--ef-title-color, var(--ef-mep-text));
}

.ef-mep-description {
  font-size: var(--ef-description-size, 1rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-mep-muted));
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.ef-mep-description p {
  margin: 0 0 0.5rem;
}

.ef-mep-description p:first-child {
  margin-top: 0;
}

.ef-mep-description p:last-child {
  margin-bottom: 0;
}

.ef-mep-button-wrap {
  margin-top: 0.25rem;
}

.ef-mep-button-wrap:empty {
  display: none;
}

.ef-maintenance-electric-pro .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 0.9375rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-mep-btn-color));
  background: var(--ef-button-background, var(--ef-mep-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 8px);
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.02s ease;
}

.ef-maintenance-electric-pro .flowscreen-error-button:hover {
  background: var(--ef-mep-btn-hover-bg);
}

.ef-maintenance-electric-pro .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-mep-text);
  outline-offset: 2px;
}

.ef-maintenance-electric-pro .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-maintenance-electric-pro .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-mep-text);
  outline-offset: 2px;
}

/* Desktop: content left-aligned, ~35% from top */
@media (min-width: 900px) {
  .ef-mep-main {
    align-items: flex-start;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    padding-top: 35vh;
  }

  .ef-mep-content {
    max-width: 420px;
    text-align: left;
  }

  .ef-mep-title {
    font-size: var(--ef-title-size, 2rem);
  }
}

/* Mobile: content centered with padding */
@media (max-width: 899px) {
  .ef-mep-main {
    align-items: center;
    padding: 2rem 1.5rem;
    padding-top: 40%;
    justify-content: flex-start;
  }

  .ef-mep-content {
    text-align: center;
  }

  .ef-mep-button-wrap {
    text-align: center;
  }

  .ef-mep-title {
    font-size: 1.375rem;
  }

  .ef-mep-description {
    font-size: 0.9375rem;
  }
}

@media (prefers-color-scheme: dark) {
  .ef-maintenance-electric-pro.flowscreen-container {
    --ef-mep-text: #ffffff;
    --ef-mep-muted: rgba(255, 255, 255, 0.88);
    --ef-mep-btn-bg: #3b82f6;
    --ef-mep-btn-color: #ffffff;
    --ef-mep-btn-hover-bg: #2563eb;
    --ef-mep-overlay: rgba(0, 0, 0, 0.5);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ef-mep-main {
    animation-duration: 0.25s;
  }
}
`;
