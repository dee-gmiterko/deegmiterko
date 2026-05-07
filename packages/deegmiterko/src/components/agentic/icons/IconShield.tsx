import React, { FunctionComponent } from "react";

const IconShield: FunctionComponent<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3F2B96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export default IconShield;
