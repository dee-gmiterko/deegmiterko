import React, { FunctionComponent, ReactNode } from "react";

const ValidationCell: FunctionComponent<{
  label: string;
  description: string;
  icon: ReactNode;
}> = ({ label, description, icon }) => (
  <div className="agentic-validation-cell">
    <div className="agentic-validation-cell-icon">{icon}</div>
    <div className="agentic-validation-cell-label">{label}</div>
    <div className="agentic-validation-cell-desc">{description}</div>
  </div>
);

export default ValidationCell;
