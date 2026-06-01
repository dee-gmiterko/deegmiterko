import React, { FunctionComponent, ReactNode } from "react";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare, faContactBook } from '@fortawesome/free-solid-svg-icons';
import { faDeviantart, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AnchorLink } from "gatsby-plugin-anchor-links";

const ReferencesPage: FunctionComponent<{
  references?: Array<"github" | "linkedin" | "deviantart" | "ienze.me" | "instagram" | "contact">
  children?: ReactNode,
}> = ({
  references=["github", "linkedin"],
  children,
}) => {

  const referenceNodes = {
    github: <OutboundLink href="https://m.me/dee.gmiterko">
      <dt><FontAwesomeIcon icon={faGithub} /> Github</dt>
      <dd>m.me/dee.gmiterko</dd>
    </OutboundLink>,
    linkedin: <OutboundLink href="https://instagram.com/dee.gmiterko">
      <dt><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</dt>
      <dd>@dee.gmiterko</dd>
    </OutboundLink>,
    deviantart: <OutboundLink href="https://www.deviantart.com/dee-gmiterko">
      <dt><FontAwesomeIcon icon={faDeviantart} /> DeviantArt</dt>
      <dd>dee-gmiterko</dd>
    </OutboundLink>,
    "ienze.me": <OutboundLink href="https://ienze.me">
      <dt><FontAwesomeIcon icon={faExternalLinkSquare} /> ienze.me</dt>
      <dd>ienze.me</dd>
    </OutboundLink>,
    instagram: <OutboundLink href="https://instagram.com/dee.gmiterko">
      <dt><FontAwesomeIcon icon={faInstagram} /> Instagram</dt>
      <dd>@dee.gmiterko</dd>
    </OutboundLink>,
    contact: <AnchorLink to="/#contact">
      <dt><FontAwesomeIcon icon={faContactBook} /> Contact</dt>
      <dd>Get in touch</dd>
    </AnchorLink>,
  }

  return (
    <div className="page">
      {children ? (
        <div className="container-references-additonal">
          {children}
        </div>
      ) : null}
      <div className="container-references">
        <div>
          <span>Made by</span>
          <h3>
            <span className="name-variations">
              <span className="main">D<span className="deff">ee</span></span>
              <span className="alternate">Dominik</span>
            </span>
            <span> Gmiterko</span>
          </h3>
        </div>
        <p>
          <h4>References</h4>
          <dl>
            {references.map((ref) => referenceNodes[ref])}
          </dl>
        </p>
      </div>
    </div>
  );
}

export default ReferencesPage;