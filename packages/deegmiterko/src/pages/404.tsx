import React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Seo from "../components/Seo";
import { SiteData } from "../types";

import "../style/not-found.scss";

const NotFoundPage = ({ data: { site } }: { data: { site: SiteData } }) => (
  <>
    <main className="not-found">
      <div className="profile">
        <StaticImage
          layout="constrained"
          src="../images/banner.jpg"
          alt={"Not found by " + site.siteMetadata.author}
        />
      </div>
      <div className="basic-info">
        <h1>404</h1>

        <span className="tagline">Not found. You know what this means...</span>

        <div className="nav">
          <div className="primary">
            <AnchorLink to={`/`}>
              <div className="link-content">Back to home</div>
            </AnchorLink>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default NotFoundPage;

export const Head = ({ data: { site } }: { data: { site: SiteData } }) => (
  <Seo siteMetadata={site.siteMetadata} />
);

export const pageQuery = graphql`
  query NotFoundQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        keywords
      }
    }
  }
`;
