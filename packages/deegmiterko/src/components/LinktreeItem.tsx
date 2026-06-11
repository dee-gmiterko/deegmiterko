import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Props {
  link: string;
  title: string;
  icon: IconDefinition;
}

function LinktreeItem({ link, title, icon }: Props) {
  const content = (
    <div className="item">
      <span>{title}</span>
      <FontAwesomeIcon icon={icon} />
    </div>
  );

  if (link.startsWith("http")) {
    return <OutboundLink href={link}>{content}</OutboundLink>;
  } else {
    return <AnchorLink to={link}>{content}</AnchorLink>;
  }
}

LinktreeItem.defaultProps = {
  link: "/",
};

export default LinktreeItem;
