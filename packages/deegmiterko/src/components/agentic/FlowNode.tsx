import React, { FunctionComponent, ReactNode } from "react";

const FlowNode: FunctionComponent<{ label: string; icon: ReactNode; className?: string }> = ({ label, icon, className }) => (
  <div className={`agentic-flow-node${className ? ` ${className}` : ""}`}>
    <div className="agentic-flow-node-icon">{icon}</div>
    <div className="agentic-flow-node-label">{label}</div>
  </div>
);

export default FlowNode;
