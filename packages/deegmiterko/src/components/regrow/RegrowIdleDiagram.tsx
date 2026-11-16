import React from "react";

import diagramSvg from "!!raw-loader!../../images/content/regrow/idle-progress-diagram.svg";

const RegrowIdleDiagram = () => (
  <div
    className="regrow-idle-diagram svg-diagram"
    dangerouslySetInnerHTML={{ __html: diagramSvg }}
  />
);

export default RegrowIdleDiagram;
