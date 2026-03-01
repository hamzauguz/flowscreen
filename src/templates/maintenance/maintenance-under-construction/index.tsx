// Maintenance template: under-construction. Centered layout with image, title, description, "Refresh page" button.

import type { FlowScreenTemplate } from "../../types";
import { FLOWSCREEN_ASSETS_BASE_URL } from "../../../constants";
import { maintenanceUnderConstructionStyles } from "./styles";

const MAINTENANCE_IMAGE_URL = `${FLOWSCREEN_ASSETS_BASE_URL}/images/maintenance-under-construction.png`;

export const maintenanceUnderConstructionTemplate: FlowScreenTemplate = {
  html: `<div class="ef-maintenance-under-construction flowscreen-error-container">
  <main class="ef-maintenance-under-construction-main" role="main">
    <div class="ef-maintenance-under-construction-image-wrap" aria-hidden="true">
      <img src="${MAINTENANCE_IMAGE_URL}" alt="Maintenance under construction" draggable="false" />
    </div>
    <h1 class="ef-maintenance-under-construction-title">{{title}}</h1>
    <div class="ef-maintenance-under-construction-description flowscreen-error-message">{{description}}</div>
    <div class="ef-maintenance-under-construction-button-wrap">{{button}}</div>
  </main>
</div>`,
  css: maintenanceUnderConstructionStyles,
};
