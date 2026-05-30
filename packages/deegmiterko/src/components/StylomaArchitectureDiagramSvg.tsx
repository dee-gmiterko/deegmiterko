import React from "react";

import diagramSvg from "!!raw-loader!../images/content/styloma/architecture-diagram.svg";

const StylomaArchitectureDiagramSvg = () => (
  <div className="styloma-architecture-diagram" dangerouslySetInnerHTML={{__html: diagramSvg}} />
)

export default StylomaArchitectureDiagramSvg
