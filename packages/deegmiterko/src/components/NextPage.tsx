import React, { FunctionComponent } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";

const NextPage: FunctionComponent<{
  to: string;
  label?: string;
  children: string;
}> = ({ to, label = "read about", children }) => {
  return (
    <div className="next-page">
      <Link to={to}>
        <div className={clsx("link-content", !label && "no-label")}>
          {label && (
            <div className="label">
              <small>{label}</small>
            </div>
          )}
          <div className="title">
            <span>{children}</span>
          </div>
          <div className="caret">
            <FontAwesomeIcon icon={faCaretRight} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NextPage;
