// Mailchimp PRO: same layout as error-mailchimp but with GIF illustration (404 Horse).
// access: premium (pro).

import type { FlowScreenTemplate } from "../../types";
import { FLOWSCREEN_ASSETS_BASE_URL } from "../../../constants";
import { mailchimpProErrorStyles } from "./styles";

const MAILCHIMP_PRO_GIF_URL = `${FLOWSCREEN_ASSETS_BASE_URL}/images/404Horse.gif`;

export const mailchimpProErrorTemplate: FlowScreenTemplate = {
  html: `<div class="ef-mailchimp-pro flowscreen-error-container">
  <main class="ef-mailchimp-pro-main" role="main">
    <div class="ef-mailchimp-pro-content">
      <p class="ef-mailchimp-pro-code flowscreen-error-code" aria-label="Error code">{{code}}</p>
      <h1 class="ef-mailchimp-pro-title flowscreen-error-title">{{title}}</h1>
      <div class="ef-mailchimp-pro-description flowscreen-error-message">{{description}}</div>
    </div>
    <div class="ef-mailchimp-pro-button-wrap">{{button}}</div>
    <div class="ef-mailchimp-pro-illustration" aria-hidden="true">
      <img src="${MAILCHIMP_PRO_GIF_URL}" alt="" class="ef-mailchimp-pro-illustration-img" width="400" height="300" loading="lazy" />
    </div>
  </main>
  <footer class="ef-mailchimp-pro-band">
    <span class="ef-mailchimp-pro-band-text">FlowScreen</span>
  </footer>
</div>`,
  css: mailchimpProErrorStyles,
};
