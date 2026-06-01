import React from "react";

import diagramSvg from "!!raw-loader!../../images/content/styloma/architecture-diagram.svg";

const StylomaArchitectureDiagram = () => (
  <div className="styloma-architecture-diagram svg-diagram" dangerouslySetInnerHTML={{__html: diagramSvg}} />
)

export default StylomaArchitectureDiagram;