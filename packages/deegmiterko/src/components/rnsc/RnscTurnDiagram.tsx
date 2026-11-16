import React from "react";

import diagramSvg from "!!raw-loader!../../images/content/rnsc/turn-diagram.svg";

const RnscTurnDiagram = () => (
  <div
    className="rnsc-turn-diagram svg-diagram"
    dangerouslySetInnerHTML={{ __html: diagramSvg }}
  />
);

export default RnscTurnDiagram;
