import React, { FunctionComponent } from "react";
import ValidationCell from "./ValidationCell";
import IconCheck from "./icons/IconCheck";
import IconCode from "./icons/IconCode";
import IconDatabase from "./icons/IconDatabase";
import IconEye from "./icons/IconEye";
import IconShield from "./icons/IconShield";
import IconCog from "./icons/IconCog";

const ValidationGrid: FunctionComponent = () => (
  <div className="agentic-validation-grid">
    <ValidationCell label="TypeCheck" description="Strict TypeScript — no any, no implicit returns." icon={<IconCode size={32} />} />
    <ValidationCell label="ESLint" description="Custom rules via eslint-plugin-defensive-coding." icon={<IconCog size={32} />} />
    <ValidationCell label="Unit tests" description="Non-trivial code only — complexity threshold enforced." icon={<IconCheck size={32} />} />
    <ValidationCell label="Integration DB" description="Real database — no mocks." icon={<IconDatabase size={32} />} />
    <ValidationCell label="Visual tests" description="Screenshot diffing against baseline." icon={<IconEye size={32} />} />
    <ValidationCell label="A11y" description="Automated accessibility review." icon={<IconEye size={32} />} />
    <ValidationCell label="E2E" description="Full behavioral and visual end-to-end flows." icon={<IconCheck size={32} />} />
    <ValidationCell label="Security scan" description="Automated vulnerability scanning." icon={<IconShield size={32} />} />
  </div>
);

export default ValidationGrid;
