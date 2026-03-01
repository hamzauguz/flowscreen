// Scoped CSS for maintenance-playful-road template. FREE. Full-screen background image + overlay + badge top-right + content slightly right of center.

export const classNames = {
  container: "ef-maintenance-playful-road flowscreen-container",
  main: "ef-mpr-main",
  content: "ef-mpr-content",
  title: "ef-mpr-title",
  description: "ef-mpr-description",
  buttonWrap: "ef-mpr-button-wrap",
  button: "flowscreen-error-button",
  imageWrap: "ef-mpr-image-wrap",
  badge: "ef-mpr-badge",
} as const;

export const maintenancePlayfulRoadStyles = `
@keyframes ef-mpr-fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.ef-maintenance-playful-road.flowscreen-container {
  --ef-mpr-text: #ffffff;
  --ef-mpr-muted: rgba(255, 255, 255, 0.9);
  --ef-mpr-btn-bg: #ffffff;
  --ef-mpr-btn-color: #1a1a1a;
  --ef-mpr-btn-hover-bg: #f3f4f6;
  --ef-mpr-overlay: rgba(0, 0, 0, 0.5);
  --ef-mpr-badge-bg: rgba(255, 255, 255, 0.15);
  --ef-mpr-badge-border: rgba(255, 255, 255, 0.3);
  margin: 0;
  padding: 0;
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-mpr-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

.ef-maintenance-playful-road *,
.ef-maintenance-playful-road *::before,
.ef-maintenance-playful-road *::after {
  box-sizing: border-box;
}

/* Full-screen background image layer */
.ef-mpr-image-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
  line-height: 0;
}

.ef-mpr-image-wrap img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Dark overlay on top of image for text contrast */
.ef-maintenance-playful-road.flowscreen-container::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: var(--ef-mpr-overlay);
  pointer-events: none;
}

/* Badge top-right */
.ef-mpr-badge {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 3;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--ef-mpr-text);
  background: var(--ef-mpr-badge-bg);
  border: 1px solid var(--ef-mpr-badge-border);
  border-radius: 6px;
  padding: 0.5rem 0.875rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: ef-mpr-fade-in 0.45s ease-out forwards;
}

/* Content container above overlay */
.ef-mpr-main {
  position: relative;
  z-index: 2;
  min-height: 100vh;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  animation: ef-mpr-fade-in 0.45s ease-out forwards;
}

.ef-mpr-content {
  width: 100%;
  max-width: 420px;
  text-align: left;
}

.ef-mpr-title {
  font-size: var(--ef-title-size, 1.75rem);
  font-weight: var(--ef-title-weight, 700);
  line-height: 1.25;
  margin: 0 0 0.75rem;
  color: var(--ef-title-color, var(--ef-mpr-text));
}

.ef-mpr-description {
  font-size: var(--ef-description-size, 1rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-mpr-muted));
  line-height: 1.6;
  margin: 0 0 1.5rem;
}

.ef-mpr-description p {
  margin: 0 0 0.5rem;
}

.ef-mpr-description p:first-child {
  margin-top: 0;
}

.ef-mpr-description p:last-child {
  margin-bottom: 0;
}

.ef-mpr-button-wrap {
  margin-top: 0.25rem;
}

.ef-mpr-button-wrap:empty {
  display: none;
}

.ef-maintenance-playful-road .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 0.9375rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-mpr-btn-color));
  background: var(--ef-button-background, var(--ef-mpr-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 8px);
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.02s ease;
}

.ef-maintenance-playful-road .flowscreen-error-button:hover {
  background: var(--ef-mpr-btn-hover-bg);
}

.ef-maintenance-playful-road .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-mpr-text);
  outline-offset: 2px;
}

.ef-maintenance-playful-road .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-maintenance-playful-road .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-mpr-text);
  outline-offset: 2px;
}

/* Desktop: content right-aligned, centered vertically */
@media (min-width: 900px) {
  .ef-mpr-main {
    align-items: flex-end;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    justify-content: center;
  }

  .ef-mpr-content {
    max-width: 420px;
    text-align: left;
  }

  .ef-mpr-title {
    font-size: var(--ef-title-size, 2rem);
  }

  .ef-mpr-badge {
    top: 2rem;
    right: 2rem;
  }
}

/* Mobile: content centered with padding */
@media (max-width: 899px) {
  .ef-mpr-main {
    align-items: center;
    padding: 2rem 1.5rem;
    justify-content: center;
  }

  .ef-mpr-content {
    text-align: center;
    max-width: 100%;
  }

  .ef-mpr-button-wrap {
    text-align: center;
  }

  .ef-mpr-title {
    font-size: 1.375rem;
  }

  .ef-mpr-description {
    font-size: 0.9375rem;
  }

  .ef-mpr-badge {
    top: 1rem;
    right: 1rem;
    font-size: 0.6875rem;
    padding: 0.4375rem 0.75rem;
  }
}

@media (prefers-color-scheme: dark) {
  .ef-maintenance-playful-road.flowscreen-container {
    --ef-mpr-text: #ffffff;
    --ef-mpr-muted: rgba(255, 255, 255, 0.9);
    --ef-mpr-btn-bg: #ffffff;
    --ef-mpr-btn-color: #1a1a1a;
    --ef-mpr-btn-hover-bg: #f3f4f6;
    --ef-mpr-overlay: rgba(0, 0, 0, 0.6);
    --ef-mpr-badge-bg: rgba(255, 255, 255, 0.15);
    --ef-mpr-badge-border: rgba(255, 255, 255, 0.3);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ef-mpr-main,
  .ef-mpr-badge {
    animation-duration: 0.25s;
  }
}
`;
