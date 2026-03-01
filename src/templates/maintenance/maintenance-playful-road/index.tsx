// Maintenance template: playful-road. FREE. Full-screen background image with overlay, badge top-right, content slightly right of center.

import type { FlowScreenTemplate } from "../../types";
import { FLOWSCREEN_ASSETS_BASE_URL } from "../../../constants";
import { maintenancePlayfulRoadStyles } from "./styles";

const MAINTENANCE_IMAGE_URL = `${FLOWSCREEN_ASSETS_BASE_URL}/images/maintenance-playful-road.png`;

export const maintenancePlayfulRoadTemplate: FlowScreenTemplate = {
  html: `<div class="ef-maintenance-playful-road flowscreen-container">
  <div class="ef-mpr-image-wrap" aria-hidden="true">
    <img src="${MAINTENANCE_IMAGE_URL}" alt="Maintenance playful road" draggable="false" />
  </div>
  <div class="ef-mpr-badge">MAINTENANCE MODE</div>
  <main class="ef-mpr-main" role="main">
    <div class="ef-mpr-content">
      <h1 class="ef-mpr-title">{{title}}</h1>
      <div class="ef-mpr-description flowscreen-error-message">{{description}}</div>
      <div class="ef-mpr-button-wrap">{{button}}</div>
    </div>
  </main>
</div>`,
  css: maintenancePlayfulRoadStyles,
};
