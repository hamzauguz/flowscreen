// flowscreen - Core SDK + React. Use without provider; all templates are free.

export { renderFlowScreen } from "./core/renderFlowScreen";
export type { RenderFlowScreenOptions } from "./core/renderFlowScreen";
export type { TemplateType } from "./core/registry";
export type { FlowScreenSchema, TextBlock } from "./schema";
export type { FlowScreenTheme } from "./types";

// React component: no provider required; works with import { FlowScreen } from "flowscreen"
export {
  FlowScreen,
  useFlowScreen,
  ScreenFlowProvider,
  DEFAULT_BOOTSTRAP_BASE_URL,
} from "./react";
export type {
  FlowScreenProps,
  FlowLayout,
  ScreenFlowContextValue,
  Plan,
  ScreenFlowProviderProps,
  BootstrapResponse,
} from "./react";
export type { FlowScreenButton } from "./types";
