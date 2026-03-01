"use client";

/**
 * Full-screen skeleton shown while bootstrap (plan/template) is resolving.
 * Used by ScreenFlowProvider to avoid flashing the basic template before Pro template loads.
 * No branding, no text, no logo — minimal developer-tool aesthetic.
 */

export function FlowScreenSkeleton() {
  return (
    <div
      className="ef-flowscreen-skeleton"
      style={skeletonStyles.container}
      aria-hidden="true"
    >
      <div
        className="ef-flowscreen-skeleton__block"
        style={skeletonStyles.block}
      />
      <style>{skeletonStyles.css}</style>
    </div>
  );
}

const skeletonStyles = {
  container: {
    position: "fixed",
    inset: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    zIndex: 9999,
    animation: "ef-skeleton-fade-in 0.15s ease-out",
  } as React.CSSProperties,
  block: {
    width: 120,
    height: 24,
    borderRadius: 6,
    backgroundColor: "#e8e8e8",
    animation: "ef-skeleton-pulse 1.2s ease-in-out infinite",
  } as React.CSSProperties,
  css: `
    @keyframes ef-skeleton-fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes ef-skeleton-pulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }
  `,
};
