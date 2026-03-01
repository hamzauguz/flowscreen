// Empty state template: PRO only. Not-found-666 image, title, description, optional button.
// If Provider is missing or user is not PRO, FlowScreen falls back to empty-basic.

import type { FlowScreenTemplate } from "../../types";
import { FLOWSCREEN_ASSETS_BASE_URL } from "../../../constants";
import { emptyNotFound666Styles } from "./styles";

const NOT_FOUND_666_IMAGE_URL = `${FLOWSCREEN_ASSETS_BASE_URL}/images/not-found-666.png`;

export const emptyNotFound666Template: FlowScreenTemplate = {
  html: `<div class="ef-empty-not-found-666 flowscreen-error-container">
  <main class="ef-empty-not-found-666-main" role="main">
    <div class="ef-empty-not-found-666-image-wrap">
      <img src="${NOT_FOUND_666_IMAGE_URL}" alt="" loading="eager" draggable="false" />
    </div>
    <h1 class="ef-empty-not-found-666-title">{{title}}</h1>
    <div class="ef-empty-not-found-666-description flowscreen-error-message">{{description}}</div>
    <div class="ef-empty-not-found-666-button-wrap">{{button}}</div>
  </main>
</div>`,
  css: emptyNotFound666Styles,
};
