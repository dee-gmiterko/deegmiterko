import React, { FunctionComponent } from "react";
import IconQueue from "./icons/IconQueue";

const QueueList: FunctionComponent<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="agentic-queue-list">
    <div className="agentic-queue-list-title">{title}</div>
    {items.map(item => (
      <div key={item} className="agentic-queue-list-item">
        <IconQueue size={20} />
        {item}
      </div>
    ))}
  </div>
);

export default QueueList;
