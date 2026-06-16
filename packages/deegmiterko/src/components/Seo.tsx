import React, { FunctionComponent } from "react";

import siteImage from "../images/og-banner.jpg";
import { SiteMetadata } from "../types";

const Seo: FunctionComponent<{
  title?: string;
  siteMetadata: SiteMetadata;
  canGoDark?: boolean;
}> = ({ title, siteMetadata, canGoDark }) => {
  const siteName = siteMetadata.title;
  const siteDescription = siteMetadata.description;
  const keywords = siteMetadata.keywords;

  return (
    <>
      <html lang="en" />
      <body className={canGoDark ? "can-go-dark" : undefined} />
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={siteDescription} />
      <meta property="og:title" content={siteName} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={siteImage} />
      <meta name="keywords" content={keywords.join(`, `)} />
    </>
  );
};

export default Seo;
