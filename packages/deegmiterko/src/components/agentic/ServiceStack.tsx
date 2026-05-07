import React, { FunctionComponent } from "react";
import IconServer from "./icons/IconServer";

const ServiceStack: FunctionComponent<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="agentic-service-stack">
    <div className="agentic-service-stack-title">{title}</div>
    {items.map(item => (
      <div key={item} className="agentic-service-stack-item">
        <IconServer size={20} />
        {item}
      </div>
    ))}
  </div>
);

export default ServiceStack;
