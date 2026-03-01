// Shared types and interfaces for flowscreen

export interface FlowScreenTheme {
  fontFamily?: string;
  typography?: {
    code?: {
      fontSize?: string;
      fontWeight?: string;
      color?: string;
    };
    title?: {
      fontSize?: string;
      fontWeight?: string;
      color?: string;
    };
    description?: {
      fontSize?: string;
      fontWeight?: string;
      color?: string;
    };
    hint?: {
      fontSize?: string;
      fontWeight?: string;
      color?: string;
    };
    button?: {
      fontSize?: string;
      fontWeight?: string;
      color?: string;
      background?: string;
      borderRadius?: string;
    };
  };
  background?: string;
}

export interface FlowScreenButton {
  label: string;
  onClick?: () => void;
}
