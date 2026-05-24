import React, { FunctionComponent } from "react";
import FlowArrow from "./FlowArrow";
import FlowNode from "./FlowNode";
import IconBug from "./icons/IconBug";
import IconCog from "./icons/IconCog";
import IconCode from "./icons/IconCode";
import IconQueue from "./icons/IconQueue";
import IconServer from "./icons/IconServer";
import IconCheck from "./icons/IconCheck";
import IconDatabase from "./icons/IconDatabase";
import IconEye from "./icons/IconEye";
import IconShield from "./icons/IconShield";
import ValidationCell from "./ValidationCell";

const AgenticDiagram: FunctionComponent = () => (
  <div className="agentic-diagram">

    <div className="agentic-upper">
      <div className="agentic-flow">

        <div className="agentic-input-rows">
          <div className="agentic-input-row">
            <FlowNode label="Sentry issues" icon={<IconBug size={40} />} />
            <FlowNode label="CI failures" icon={<IconCog size={40} />} />
            <FlowNode label="Manual input" icon={<IconCode size={40} />} />
          </div>
          <div className="agentic-input-row">
            <FlowNode label="Missing mappings" icon={<IconQueue size={40} />} />
            <FlowNode label="Ingestion issues" icon={<IconBug size={40} />} />
            <FlowNode label="Validation" icon={<IconCog size={40} />} />
          </div>
        </div>

        <FlowArrow />

        <div className="agentic-flow-row">
          <FlowNode label="Task queue" icon={<IconQueue size={40} />} />
        </div>

        <FlowArrow />

        <div className="agentic-flow-row">
          <FlowNode label="Session" icon={<IconCog size={40} />} />
          <FlowNode label="Session" icon={<IconCog size={40} />} />
          <FlowNode label="Session" icon={<IconCog size={40} />} className="agentic-flow-node-many" />
        </div>

        <FlowArrow />

        <div className="agentic-flow-row">
          <FlowNode label="All services" icon={<IconServer size={40} />} className="agentic-flow-node-many" />
          <FlowNode label="Emulators" icon={<IconServer size={40} />} className="agentic-flow-node-many" />
        </div>

      </div>

      <div className="agentic-upper-text">
        <p>
          The dev environment runs fully locally — Docker + dev server taking care of automatic package and image builds, service restarts, orchestrated together.
        </p>
        <p>
          All work is explicitly controlled and validated by the user.
        </p>
      </div>
    </div>

    <div className="example-bar agentic-lower" style={{ marginTop: "2rem" }}>
      <p>
        Validation is strict by design — every change must pass the full pipeline. A custom complexity threshold ensures tests are written for non-trivial logic only, not for coverage metrics.
      </p>

      <div className="agentic-val-verification">

        <div className="agentic-val-col">
          <h4>Validation</h4>
          <div className="agentic-pipeline">
            <ValidationCell label="typecheck" description="" icon={<IconCode size={32} />} />
            <div className="agentic-pipeline-sep">›</div>
            <ValidationCell label="lint" description="100+ rules" icon={<IconCog size={32} />} />
            <div className="agentic-pipeline-sep">›</div>
            <ValidationCell label="format" description="" icon={<IconCode size={32} />} />
            <div className="agentic-pipeline-sep">›</div>
            <ValidationCell label="a11y" description="axe" icon={<IconEye size={32} />} />
            <div className="agentic-pipeline-sep">›</div>
            <ValidationCell label="security" description="" icon={<IconShield size={32} />} />
          </div>
          <div className="text-right">
            <a className="btn-source" href="https://github.com/dee-gmiterko/eslint-formatter-actionable" target="_blank" rel="noreferrer">eslint-formatter-actionable ▷</a>
            <a className="btn-source" href="https://github.com/dee-gmiterko/eslint-plugin-defensive-coding" target="_blank" rel="noreferrer">eslint-plugin-defensive-coding ▷</a>
          </div>
        </div>

        <div className="agentic-verif-col">
          <h4>Verification</h4>
          <div className="agentic-pipeline agentic-pipeline-4">
            <ValidationCell label="unit" description="" icon={<IconCheck size={32} />} />
            <div className="agentic-pipeline-sep">›</div>
            <ValidationCell label="integration" description="real db" icon={<IconDatabase size={32} />} />
            <div className="agentic-pipeline-sep">›</div>
            <ValidationCell label="visual tests" description="pixel drift" icon={<IconEye size={32} />} />
            <div className="agentic-pipeline-sep">›</div>
            <ValidationCell label="e2e" description="behaviour" icon={<IconCheck size={32} />} />
          </div>
        </div>

      </div>
    </div>

  </div>
);

export default AgenticDiagram;
