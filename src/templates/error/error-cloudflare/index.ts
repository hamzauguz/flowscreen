// Cloudflare-style error page: layout and structure match Cloudflare's 500 page.
// Header (title + code badge + timestamp), gradient diagnostic bar, What happened / What can I do, footer.

import type { FlowScreenTemplate } from "../../types";

const iconBrowser =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 81'%3E%3Cpath d='M89.84.16H10.16C4.64.16.16 4.64.16 10.17v60.4c0 5.52 4.48 10 10 10h79.67c5.52 0 10-4.48 10-10V10.17C99.83 4.64 95.35.16 89.84.16zM22.83 9.61a3.55 3.55 0 1 1 0 7.1 3.55 3.55 0 0 1 0-7.1zm-9.94 0a3.55 3.55 0 1 1 0 7.1 3.55 3.55 0 0 1 0-7.1zM89.83 70.14H9.73V24.2h80.1v45.94zM89.83 16.16H29.85v-6h59.98v6z' fill='%23999'/%3E%3C/svg%3E";
const iconCloud =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 152 79'%3E%3Cpath d='M132.3 78v-.03c10.55-.23 19.03-8.88 19.03-19.52 0-10.79-8.72-19.54-19.47-19.54-2.9 0-5.65.66-8.12 1.8C123.33 18.66 105.34.92 83.2.92c-17.83 0-32.95 11.5-38.39 27.49-3.03-2.28-6.78-3.64-10.86-3.64-10.01 0-18.12 8.11-18.12 18.12 0 1.73.26 3.4.71 4.99-.29-.02-.58-.04-.87-.04-8.28 0-14.99 6.75-14.99 15.08 0 8.28 6.64 14.99 14.85 15.07v.01h.11s.02 0 .03 0' fill='%23999'/%3E%3C/svg%3E";
const iconServer =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 95 75'%3E%3Cpath d='M94.01 45.08L81.02 6.58C79.74 2.78 76.17.22 72.16.22l-49.91.01c-4 .01-7.56 2.54-8.85 6.33L1.01 42.84c-.33.97-.5 1.99-.5 3.02l-.01 19.57C0 70.6 4.18 74.79 9.35 74.79h75.3c5.16 0 9.35-4.19 9.35-9.35V48.07c0-1.02-.17-2.03-.49-2.99zM86.8 65.31c0 1.29-1.05 2.34-2.34 2.34H9.98c-1.29 0-2.34-1.05-2.34-2.34V47.18c0-1.29 1.05-2.34 2.34-2.34h74.48c1.29 0 2.34 1.05 2.34 2.34v18.13z' fill='%23999'/%3E%3Ccircle cx='74.63' cy='56.19' r='4.73' fill='%23999'/%3E%3Ccircle cx='59.15' cy='56.19' r='4.73' fill='%23999'/%3E%3C/svg%3E";
const iconOk =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='23.5' fill='%239bca3e'/%3E%3Cpath d='M17.45 24.98l4.27 5.47 8.49-13.6' fill='none' stroke='%23fff' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E";
const iconError =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='23.5' fill='%23bd2426'/%3E%3Cpath d='M19.05 19.08L28.82 28.89M28.82 19.08L19.05 28.89' stroke='%23fff' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E";

export const cloudflareErrorTemplate: FlowScreenTemplate = {
  html: `<div class="flowscreen-error-container ef-cf">
  <div class="ef-cf-body">
    <header class="ef-cf-header">
      <h1 class="ef-cf-heading">
        <span class="flowscreen-error-title">{{title}}</span>
        <span class="ef-cf-code-label">Error code <span class="flowscreen-error-code">{{code}}</span></span>
      </h1>
      <div class="ef-cf-info-line">Visit our documentation for more information.</div>
      <div class="ef-cf-timestamp">{{timestamp}}</div>
    </header>
  </div>
  <div class="ef-cf-gradient">
    <div class="ef-cf-diag-inner">
      <div class="ef-cf-diag">
        <div class="ef-cf-diag-col ef-cf-diag-browser">
          <div class="ef-cf-icon-wrap">
            <span class="ef-cf-icon ef-cf-icon-browser"></span>
            <span class="ef-cf-status ef-cf-status-ok"></span>
          </div>
          <span class="ef-cf-diag-who">You</span>
          <h3 class="ef-cf-diag-label">Browser</h3>
          <span class="ef-cf-diag-status ef-cf-status-text-ok">Working</span>
        </div>
        <div class="ef-cf-diag-col ef-cf-diag-middle">
          <div class="ef-cf-icon-wrap">
            <span class="ef-cf-icon ef-cf-icon-cloud"></span>
            <span class="ef-cf-status ef-cf-status-err"></span>
          </div>
          <span class="ef-cf-diag-who">San Francisco</span>
          <h3 class="ef-cf-diag-label">FlowScreen</h3>
          <span class="ef-cf-diag-status ef-cf-status-text-err">Error</span>
        </div>
        <div class="ef-cf-diag-col ef-cf-diag-host">
          <div class="ef-cf-icon-wrap">
            <span class="ef-cf-icon ef-cf-icon-server"></span>
            <span class="ef-cf-status ef-cf-status-ok"></span>
          </div>
          <span class="ef-cf-diag-who">Website</span>
          <h3 class="ef-cf-diag-label">Host</h3>
          <span class="ef-cf-diag-status ef-cf-status-text-ok">Working</span>
        </div>
      </div>
    </div>
  </div>
  <div class="ef-cf-body ef-cf-content-section">
    <div class="ef-cf-content">
      <div class="ef-cf-col">
        <h2 class="ef-cf-h2">What happened?</h2>
        <div class="flowscreen-error-message"></div>
      </div>
      <div class="ef-cf-col">
        <h2 class="ef-cf-h2">What can I do?</h2>
        <p class="ef-cf-what-to-do">{{hint}}</p>
      </div>
    </div>
    <footer class="ef-cf-footer">
      <p class="ef-cf-footer-p">
        <span class="ef-cf-ray">Ray ID: <strong>{{rayId}}</strong></span>
        <span class="ef-cf-sep">&bull;</span>
        <span>Performance &amp; security by FlowScreen</span>
      </p>
    </footer>
  </div>
</div>`,
  css: `.ef-cf.flowscreen-error-container {
  margin: 0;
  padding: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  color: #404040;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}

.ef-cf *,
.ef-cf *::before,
.ef-cf *::after {
  box-sizing: border-box;
}

.ef-cf-body {
  max-width: 60rem;
  margin: 0 auto;
  padding: 2.5rem 2rem 2rem;
}

.ef-cf-header {
  margin-bottom: 2rem;
}

.ef-cf-heading {
  font-weight: 300;
  font-size: 60px;
  line-height: 1.25;
  color: #404040;
  margin: 0 0.5rem 0 0;
  display: inline-block;
}

.ef-cf-code-label {
  display: inline-block;
  background-color: #d9d9d9;
  color: #313131;
  font-weight: 500;
  border-radius: 1.25rem;
  font-size: 0.75rem;
  line-height: 1.4;
  padding: 0.35rem 0.75rem;
  white-space: nowrap;
  vertical-align: middle;
}

.ef-cf .flowscreen-error-code {
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: 0;
}

.ef-cf-info-line {
  margin-top: 0.5rem;
  font-size: 15px;
  color: #404040;
}

.ef-cf-timestamp {
  margin-top: 0.75rem;
  font-size: 15px;
  color: #404040;
}

.ef-cf-gradient {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(180deg, #dedede 0%, #ebebeb 3%, #ebebeb 97%, #dedede 100%);
  --ef-cf-divider-offset: 0px;
}

.ef-cf-diag-inner {
  max-width: 60rem;
  margin: 0 auto;
  padding: 3.75rem 2rem;
}

.ef-cf-diag {
  display: table;
  width: 100%;
}

.ef-cf-diag-col {
  display: table-cell;
  width: 33.333%;
  padding: 0 1rem;
  text-align: center;
  vertical-align: top;
}

.ef-cf-diag-middle {
  position: relative;
}

/* Shadow layer: same shape as diamond, masked to top half only so no artifact on white section */
.ef-cf-gradient::before {
  content: "";
  position: absolute;
  bottom: var(--ef-cf-divider-offset, 0);
  left: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  box-shadow: 0 -4px 8px 0 #dedede;
  transform: translate(-50%, 50%) rotate(45deg);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 50%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 50%);
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  pointer-events: none;
}

/* Diamond centered on divider: no shadow (shadow is on ::before, masked to top half) */
.ef-cf-gradient::after {
  content: "";
  position: absolute;
  bottom: var(--ef-cf-divider-offset, 0);
  left: 50%;
  width: 2.5rem;
  height: 2.5rem;
  background: #fff;
  transform: translate(-50%, 50%) rotate(45deg);
}

.ef-cf-icon-wrap {
  position: relative;
  margin-bottom: 2.5rem;
}

.ef-cf-icon {
  display: block;
  height: 5rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.ef-cf-icon-browser {
  background-image: url("${iconBrowser}");
}

.ef-cf-icon-cloud {
  background-image: url("${iconCloud}");
}

.ef-cf-icon-server {
  background-image: url("${iconServer}");
}

.ef-cf-status {
  position: absolute;
  width: 3rem;
  height: 3rem;
  left: 50%;
  bottom: -1rem;
  margin-left: -1.5rem;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.ef-cf-status-ok {
  background-image: url("${iconOk}");
}

.ef-cf-status-err {
  background-image: url("${iconError}");
}

.ef-cf-diag-who {
  display: block;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ef-cf-diag-label {
  font-size: 1.5rem;
  font-weight: 300;
  color: #999;
  line-height: 1.3;
  margin: 0.75rem 0 0 0;
}

.ef-cf-diag-middle .ef-cf-diag-label {
  color: #2f7bbf;
}

.ef-cf-diag-status {
  display: block;
  font-size: 1.5rem;
  line-height: 1.3;
  margin-top: 0.25rem;
}

.ef-cf-status-text-ok {
  color: #9bca3e;
}

.ef-cf-status-text-err {
  color: #bd2426;
}

.ef-cf-content {
  margin-bottom: 2rem;
  overflow: hidden;
}

.ef-cf-content::after {
  content: "";
  display: table;
  clear: both;
}

.ef-cf-col {
  width: 50%;
  float: left;
  padding-right: 1.5rem;
  line-height: 1.625;
}

.ef-cf-col:last-child {
  padding-right: 0;
}

.ef-cf-h2 {
  font-size: 1.875rem;
  font-weight: 400;
  line-height: 1.3;
  margin: 0 0 1rem 0;
  color: #404040;
}

.ef-cf .flowscreen-error-message {
  font-size: 15px;
  line-height: 1.5;
  color: #404040;
  margin: 0;
}

.ef-cf .flowscreen-error-message p {
  margin: 0 0 0.5rem 0;
}

.ef-cf .flowscreen-error-message p:last-child {
  margin-bottom: 0;
}

.ef-cf-what-to-do {
  font-size: 15px;
  line-height: 1.5;
  margin: 0;
  color: #404040;
}

.ef-cf-footer {
  padding: 2.5rem 0 1rem;
  border-top: 1px solid #ebebeb;
  text-align: center;
}

.ef-cf-footer-p {
  font-size: 13px;
  margin: 0;
  color: #404040;
}

.ef-cf-ray {
  margin-right: 0.25rem;
}

.ef-cf-sep {
  margin: 0 0.5rem;
}

.ef-cf .flowscreen-error-button {
  margin: 1rem 0 1.5rem 0;
  padding: 0.5rem 1rem;
  font-size: 13px;
  font-weight: 500;
  color: #0051c3;
  background: #fff;
  border: 1px solid #0045a6;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.ef-cf .flowscreen-error-button:hover {
  color: #fff;
  background-color: #003681;
  border-color: #003681;
}

.ef-cf .flowscreen-error-button:active {
  background-color: #002a66;
}

.ef-cf .flowscreen-error-button:focus {
  outline: none;
}

.ef-cf .flowscreen-error-button:focus-visible {
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #0051c3;
}

@media (max-width: 720px) {
  .ef-cf-heading {
    font-size: 1.875rem;
    display: block;
    margin-bottom: 0.5rem;
  }
  .ef-cf-gradient::before,
  .ef-cf-gradient::after {
    display: none;
  }
  .ef-cf-diag-col {
    display: block;
    width: 100%;
    padding: 2rem 2rem;
    text-align: left;
    border-bottom: 1px solid #dedede;
  }
  .ef-cf-diag-col:last-child {
    border-bottom: 0;
  }
  .ef-cf-icon-wrap {
    margin-bottom: 0;
  }
  .ef-cf-status {
    left: auto;
    right: 0;
    top: 0;
    margin-left: 0;
    bottom: auto;
  }
  .ef-cf-icon {
    display: none;
  }
  .ef-cf-diag-label {
    display: inline-block;
    margin-top: 0;
  }
  .ef-cf-col {
    width: 100%;
    float: none;
    padding-right: 0;
    padding-bottom: 2.5rem;
  }
  .ef-cf-footer {
    text-align: left;
    padding: 1rem 2rem;
  }
}`,
};
