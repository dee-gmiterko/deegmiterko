import React, { FunctionComponent } from "react";
import { Link } from "gatsby";

const NextPage: FunctionComponent<{
  to: string;
  children: string;
}> = ({ to, children }) => {
  return (
    <div className="next-page">
      <Link to={to}>
        <div className="link-content">{children} →</div>
      </Link>
    </div>
  );
};

export default NextPage;
