import React, { FunctionComponent } from "react";
import Helmet from "react-helmet";

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
    <Helmet
      title={title ? `${title} | ${siteName}` : siteName}
      meta={[
        {
          name: `description`,
          content: siteDescription,
        },
        {
          property: `og:title`,
          content: siteName,
        },
        {
          property: `og:description`,
          content: siteDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: siteImage,
        },
        {
          name: `keywords`,
          content: keywords.join(`, `),
        },
      ]}
    >
      <html lang="en" />
      <body className={canGoDark ? "can-go-dark" : undefined} />
    </Helmet>
  );
};

export default Seo;
