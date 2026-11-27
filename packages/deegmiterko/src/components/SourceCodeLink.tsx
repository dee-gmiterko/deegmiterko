import React, { AnchorHTMLAttributes, FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const SourceCodeLink: FunctionComponent<
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    disabled?: boolean;
  }
> = ({ disabled, ...props }) => {
  const content = (
    <>
      <FontAwesomeIcon icon={faCode} /> Browse source code
    </>
  );

  if (disabled) {
    return <span className="btn-source disabled">{content}</span>;
  }

  return (
    <a className="btn-source" {...props}>
      {content}
    </a>
  );
};

export default SourceCodeLink;
