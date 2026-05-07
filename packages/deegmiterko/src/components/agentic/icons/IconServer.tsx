import React, { FunctionComponent } from "react";

const IconServer: FunctionComponent<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3F2B96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

export default IconServer;
