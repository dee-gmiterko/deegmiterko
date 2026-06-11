import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import ImageDepthMap from "react-depth-map";

import { SiteMetadata } from "../types";
import imgBanner from "../images/banner.jpg";
import depthBanner from "../images/banner-depth.jpg";

interface Props {
  siteMetadata: SiteMetadata;
}

const Banner = ({ siteMetadata }: Props) => {
  return (
    <header className="banner">
      <div className="profile">
        <ImageDepthMap
          originalImg={imgBanner}
          depthImg={depthBanner}
          verticalThreshold={20}
          horizontalThreshold={20}
          reverseMotion={true}
          respondTo="scrollOnY"
          useGravity={true}
        />
        {/*
        <StaticImage src="../../images/banner.jpg" alt={siteMetadata.author} layout="constrained" />
        */}
      </div>
      <div className="basic-info">
        <h1 aria-label={siteMetadata.title}>
          <span className="name-variations">
            <span className="main">
              D<span className="deff">ee</span>
            </span>
            <span className="alternate">Dominik</span>
          </span>
          <span> Gmiterko</span>
        </h1>

        <span className="tagline">{siteMetadata.tagline}</span>

        <div className="nav">
          <div className="primary">
            <AnchorLink to={`/#about`}>
              <div className="link-content">Learn more about me</div>
            </AnchorLink>
            <AnchorLink to={`/#contact`}>
              <div className="link-content">Contact me</div>
            </AnchorLink>
          </div>

          <div className="quick-socials">
            <OutboundLink href="https://instagram.com/dee.gmiterko">
              <FontAwesomeIcon icon={faInstagram} aria-label="Instagram" />
            </OutboundLink>
            <OutboundLink href="https://github.com/dee-gmiterko">
              <FontAwesomeIcon icon={faGithub} aria-label="Github" />
            </OutboundLink>
            <AnchorLink to={`/tree`}>More</AnchorLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
