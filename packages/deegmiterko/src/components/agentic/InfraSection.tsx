import React, { FunctionComponent } from "react";
import ServiceStack from "./ServiceStack";
import QueueList from "./QueueList";

const InfraSection: FunctionComponent = () => (
  <div className="agentic-infra-section">
    <ServiceStack
      title="Dev server"
      items={["Docker services", "Agent host"]}
    />
    <QueueList
      title="Queues"
      items={["Sentry issues", "Ingestion issues", "Missing mappings"]}
    />
  </div>
);

export default InfraSection;
