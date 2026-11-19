import React from "react";

const ToolingTitle = () => (
  <h2 id="tooling">
    <span style={{ position: "relative", display: "inline-block" }}>
      Tooling
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        fill="none"
        stroke="#38174A"
        strokeWidth="0.5"
        strokeLinejoin="round"
        style={{
          position: "absolute",
          left: "105%",
          top: "50%",
          width: "1.9em",
          height: "1.9em",
          marginLeft: "0.1em",
          transform: "translateY(-50%) rotate(15deg)",
          opacity: 0.2,
        }}
      >
        <path d="M12 21S4.5 16.4 2.4 11.8C.9 8.4 2.9 4.5 6.6 4.5c2 0 3.6 1.1 5.4 3.1 1.8-2 3.4-3.1 5.4-3.1 3.7 0 5.7 3.9 4.2 7.3C19.5 16.4 12 21 12 21z" />
      </svg>
    </span>
  </h2>
);

export default ToolingTitle;
