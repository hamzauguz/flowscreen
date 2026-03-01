// Mailchimp-style error page. Full-page, no header; center content; playful illustration; yellow footer band.

import type { FlowScreenTemplate } from "../../types";
import { FLOWSCREEN_ASSETS_BASE_URL } from "../../../constants";
import { mailchimpErrorStyles } from "./styles";

const MAILCHIMP_ILLUSTRATION_URL = `${FLOWSCREEN_ASSETS_BASE_URL}/images/machimp.png`;

export const mailchimpErrorTemplate: FlowScreenTemplate = {
  html: `<div class="ef-mailchimp flowscreen-error-container">
  <main class="ef-mailchimp-main" role="main">
    <div class="ef-mailchimp-content">
      <p class="ef-mailchimp-code flowscreen-error-code" aria-label="Error code">{{code}}</p>
      <h1 class="ef-mailchimp-title flowscreen-error-title">{{title}}</h1>
      <div class="ef-mailchimp-description flowscreen-error-message">{{description}}</div>
    </div>
    <div class="ef-mailchimp-button-wrap">{{button}}</div>
    <div class="ef-mailchimp-illustration" aria-hidden="true">
      <img src="${MAILCHIMP_ILLUSTRATION_URL}" alt="" class="ef-mailchimp-illustration-img" width="400" height="auto" loading="lazy" />
    </div>
  </main>
  <footer class="ef-mailchimp-band">
    <span class="ef-mailchimp-band-text">FlowScreen</span>
  </footer>
</div>`,
  css: mailchimpErrorStyles,
};
