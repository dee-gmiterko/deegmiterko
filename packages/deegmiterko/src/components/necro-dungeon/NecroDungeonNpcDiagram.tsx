import React from "react";

import diagramSvg from "!!raw-loader!../../images/content/necro-dungeon/npc-behavior-diagram.svg";

const NecroDungeonNpcDiagram = () => (
  <div
    className="necro-dungeon-npc-diagram svg-diagram"
    dangerouslySetInnerHTML={{ __html: diagramSvg }}
  />
);

export default NecroDungeonNpcDiagram;
