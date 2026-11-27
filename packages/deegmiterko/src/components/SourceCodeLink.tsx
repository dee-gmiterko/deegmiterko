import React, { AnchorHTMLAttributes, FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const SourceCodeLink: FunctionComponent<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">
> = (props) => {
  const title = `Repository: ${props.href?.replace(/\/$/, "").split("/").pop()}`;

  return (
    <a className="btn-source" title={title} {...props}>
      <FontAwesomeIcon icon={faCode} /> Browse source code
    </a>
  );
};

export default SourceCodeLink;
