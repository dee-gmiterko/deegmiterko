import React, { FunctionComponent, ReactNode } from "react";

const FlowNode: FunctionComponent<{ label: string; icon: ReactNode }> = ({ label, icon }) => (
  <div className="agentic-flow-node">
    <div className="agentic-flow-node-icon">{icon}</div>
    <div className="agentic-flow-node-label">{label}</div>
  </div>
);

export default FlowNode;
