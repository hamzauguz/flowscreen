// Maintenance template: offline. PRO. Full-viewport background + dim + content on top.

import type { FlowScreenTemplate } from "../../types";
import { maintenanceOfflineStyles } from "./styles";

export const maintenanceOfflineTemplate: FlowScreenTemplate = {
  html: `<div class="ef-maintenance-offline flowscreen-error-container" role="main">
  <div class="ef-mo-background" aria-hidden="true"></div>
  <div class="ef-mo-dim" aria-hidden="true"></div>
  <div class="ef-mo-content">
    <p class="ef-mo-code flowscreen-error-code" aria-label="Status code">{{code}}</p>
    <h1 class="ef-mo-title">{{title}}</h1>
    <div class="ef-mo-description flowscreen-error-message">{{description}}</div>
    <div class="ef-mo-button-wrap">{{button}}</div>
  </div>
</div>`,
  css: maintenanceOfflineStyles,
};
