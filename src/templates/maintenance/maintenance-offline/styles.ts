// Scoped CSS for maintenance-offline template. PRO. Full-viewport background layer + dim + content on top.

import { FLOWSCREEN_ASSETS_BASE_URL } from "../../../constants";

const BG_IMAGE_URL = `${FLOWSCREEN_ASSETS_BASE_URL}/images/bg-maintenance-offline-3.png`;

export const classNames = {
  container: "ef-maintenance-offline flowscreen-error-container",
  background: "ef-mo-background",
  dim: "ef-mo-dim",
  content: "ef-mo-content",
  code: "ef-mo-code flowscreen-error-code",
  title: "ef-mo-title",
  description: "ef-mo-description flowscreen-error-message",
  buttonWrap: "ef-mo-button-wrap",
  button: "flowscreen-error-button",
} as const;

export const maintenanceOfflineStyles = `
@keyframes ef-mo-bg-float {
  0%, 100% { transform: scale(1) translateY(0); }
  50% { transform: scale(1.02) translateY(-6px); }
}

@keyframes ef-mo-fade-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

.ef-maintenance-offline.flowscreen-error-container {
  --ef-mo-text: #1a1a1a;
  --ef-mo-muted: #5a6c7d;
  --ef-mo-btn-bg: #2c3e50;
  --ef-mo-btn-color: #fff;
  --ef-mo-btn-hover: #3d5166;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  font-family: var(--ef-font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  font-size: 16px;
  line-height: 1.5;
  color: var(--ef-mo-text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

.ef-maintenance-offline *,
.ef-maintenance-offline *::before,
.ef-maintenance-offline *::after {
  box-sizing: border-box;
}

.ef-mo-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: url("${BG_IMAGE_URL}");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: ef-mo-bg-float 14s ease-in-out infinite;
  transition: filter 0.4s ease;
}

.ef-maintenance-offline:hover .ef-mo-background {
  filter: saturate(1.06) contrast(1.02);
}

@media (prefers-reduced-motion: reduce) {
  .ef-mo-background {
    animation: none;
  }
}

.ef-mo-dim {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06) 0%,
    rgba(255, 255, 255, 0.18) 50%,
    rgba(255, 255, 255, 0.42) 100%
  );
}

.ef-mo-content {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  animation: ef-mo-fade-in 0.5s ease-out forwards;
}

.ef-mo-code {
  font-size: var(--ef-code-size, 0.875rem);
  font-weight: var(--ef-code-weight, 600);
  color: var(--ef-code-color, var(--ef-mo-muted));
  letter-spacing: 0;
  margin: 0 0 0.5rem;
}

.ef-mo-code:empty {
  display: none;
}

.ef-mo-title {
  font-size: var(--ef-title-size, 1.375rem);
  font-weight: var(--ef-title-weight, 600);
  line-height: 1.3;
  margin: 0 0 0.5rem;
  color: var(--ef-title-color, var(--ef-mo-text));
}

.ef-mo-description {
  font-size: var(--ef-description-size, 0.9375rem);
  font-weight: var(--ef-description-weight, 400);
  color: var(--ef-description-color, var(--ef-mo-muted));
  line-height: 1.6;
  margin: 0 0 1.25rem;
}

.ef-mo-description p {
  margin: 0 0 0.4rem;
}

.ef-mo-description p:first-child { margin-top: 0; }
.ef-mo-description p:last-child { margin-bottom: 0; }

.ef-mo-button-wrap {
  margin-top: 0.5rem;
}

.ef-mo-button-wrap:empty {
  display: none;
}

.ef-maintenance-offline .flowscreen-error-button {
  display: inline-block;
  font-family: inherit;
  font-size: var(--ef-button-size, 0.9375rem);
  font-weight: var(--ef-button-weight, 600);
  color: var(--ef-button-color, var(--ef-mo-btn-color));
  background: var(--ef-button-background, var(--ef-mo-btn-bg));
  border: none;
  border-radius: var(--ef-button-radius, 8px);
  padding: 0.625rem 1.25rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.ef-maintenance-offline .flowscreen-error-button:hover {
  background: var(--ef-mo-btn-hover);
}

.ef-maintenance-offline .flowscreen-error-button:focus {
  outline: 2px solid var(--ef-mo-text);
  outline-offset: 2px;
}

.ef-maintenance-offline .flowscreen-error-button:focus:not(:focus-visible) {
  outline: none;
}

.ef-maintenance-offline .flowscreen-error-button:focus-visible {
  outline: 2px solid var(--ef-mo-text);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .ef-mo-content {
    padding: 1.5rem 1rem;
  }
  .ef-mo-title {
    font-size: 1.25rem;
  }
  .ef-mo-description {
    font-size: 0.875rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ef-mo-content {
    animation-duration: 0.3s;
  }
}
`;
