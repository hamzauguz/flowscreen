// Utility to get default messages for status codes
// Follows SOLID principles: Single Responsibility - handles message retrieval

import defaultMessages from "./default-messages.json";

export interface DefaultMessage {
  title: string;
  description: string;
  hint: string;
}

export function getDefaultMessages(statusCode: string): DefaultMessage {
  // Check if exact match exists
  if (statusCode in defaultMessages) {
    return defaultMessages[statusCode as keyof typeof defaultMessages];
  }

  // Fallback for 4xx errors
  if (statusCode.startsWith("4")) {
    return {
      title: "Client Error",
      description: "The request could not be completed.",
      hint: "Please check your request and try again.",
    };
  }

  // Fallback for 5xx errors
  if (statusCode.startsWith("5")) {
    return {
      title: "Server Error",
      description: "Something went wrong on our end. We're working to fix it.",
      hint: "Please try again later or contact support if the problem persists.",
    };
  }

  // Default fallback (generic for any code)
  return {
    title: "Sorry, something went wrong.",
    description: "We couldn't complete your request. Please try again.",
    hint: "If the problem continues, contact support.",
  };
}
