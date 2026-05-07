import React, { FunctionComponent } from "react";
import RefinementLoop from "./RefinementLoop";
import ValidationGrid from "./ValidationGrid";
import InfraSection from "./InfraSection";

const AgenticDiagram: FunctionComponent = () => (
  <>
    <div className="agentic-diagram-top">
      <RefinementLoop />
      <div className="agentic-diagram-col">
        <ValidationGrid />
        <p>
          Validation is strict by design — every change must pass the full pipeline. A custom complexity threshold ensures tests are written for non-trivial logic only, not for coverage metrics.
        </p>
      </div>
    </div>
    <div className="example-bar">
      <InfraSection />
      <p>
        The dev environment runs fully locally — Docker services and the agent host are orchestrated together, with queues feeding work continuously into the loop.
      </p>
      <div className="text-right">
        <a className="btn-source" href="https://github.com/dee-gmiterko/eslint-formatter-actionable" target="_blank" rel="noreferrer">eslint-formatter-actionable ▷</a>
        <a className="btn-source" href="https://github.com/dee-gmiterko/eslint-plugin-defensive-coding" target="_blank" rel="noreferrer">eslint-plugin-defensive-coding ▷</a>
      </div>
    </div>
  </>
);

export default AgenticDiagram;
