import React, { FunctionComponent } from "react";
import FlowNode from "./FlowNode";
import FlowArrow from "./FlowArrow";
import IconBug from "./icons/IconBug";
import IconCode from "./icons/IconCode";
import IconCog from "./icons/IconCog";
import IconCheck from "./icons/IconCheck";

const RefinementLoop: FunctionComponent = () => (
  <div className="agentic-refinement-loop">
    <FlowNode label="Sentry" icon={<IconBug size={40} />} />
    <FlowArrow />
    <FlowNode label="Planner" icon={<IconCog size={40} />} />
    <FlowArrow />
    <FlowNode label="Implementation" icon={<IconCode size={40} />} />
    <FlowArrow />
    <FlowNode label="Validation" icon={<IconCheck size={40} />} />
  </div>
);

export default RefinementLoop;
