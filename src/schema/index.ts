// Schema types for error pages

export interface TextBlock {
  type: "text";
  content: string;
}

export interface FlowScreenSchema {
  type: "error";
  blocks: TextBlock[];
}
