import React from "react";

import diagramSvg from "!!raw-loader!../../images/content/tooling/file-converters-diagram.svg";

const FileConvertersDiagram = () => (
  <div
    className="file-converters-diagram svg-diagram"
    dangerouslySetInnerHTML={{ __html: diagramSvg }}
  />
);

export default FileConvertersDiagram;
