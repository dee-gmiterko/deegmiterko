import React, { FunctionComponent } from "react";

const IconBug: FunctionComponent<{ size?: number }> = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#3F2B96" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 2l1.5 1.5" />
    <path d="M14.5 3.5L16 2" />
    <path d="M9 9H4" />
    <path d="M20 9h-5" />
    <path d="M9 15H4" />
    <path d="M20 15h-5" />
    <path d="M12 22v-4" />
    <path d="M10 4a2 2 0 0 0-2 2v7a4 4 0 0 0 8 0V6a2 2 0 0 0-2-2h-4z" />
  </svg>
);

export default IconBug;
