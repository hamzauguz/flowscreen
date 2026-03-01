// Maintenance template: electric-pro. PRO. Full-screen GIF background, content overlaid (left on desktop, centered on mobile).

import type { FlowScreenTemplate } from "../../types";
import { FLOWSCREEN_ASSETS_BASE_URL } from "../../../constants";
import { maintenanceElectricProStyles } from "./styles";

const MAINTENANCE_GIF_URL = `${FLOWSCREEN_ASSETS_BASE_URL}/images/maintenance-electric-pro.gif`;

export const maintenanceElectricProTemplate: FlowScreenTemplate = {
  html: `<div class="ef-maintenance-electric-pro flowscreen-container">
  <div class="ef-mep-image-wrap" aria-hidden="true">
    <img src="${MAINTENANCE_GIF_URL}" alt="Maintenance electric" draggable="false" />
  </div>
  <main class="ef-mep-main" role="main">
    <div class="ef-mep-content">
      <h1 class="ef-mep-title">{{title}}</h1>
      <div class="ef-mep-description flowscreen-error-message">{{description}}</div>
      <div class="ef-mep-button-wrap">{{button}}</div>
    </div>
  </main>
</div>`,
  css: maintenanceElectricProStyles,
};
