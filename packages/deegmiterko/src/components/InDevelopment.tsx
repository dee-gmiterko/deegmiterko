import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";

const InDevelopment: FunctionComponent = () => (
  <span className="btn-source in-development">
    <FontAwesomeIcon icon={faWrench} /> In development
  </span>
);

export default InDevelopment;
