import React, { FunctionComponent, ReactNode } from "react";
import { graphql } from "gatsby";

import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import LightboxImage from "./LightboxImage";
import useApp from "../hooks/useApp";
import { SiteData, Slide, ThumbnailNode } from "../types";

export type BookPageData = {
  site: SiteData;
  pageThumbnails: {
    nodes: ThumbnailNode[];
  };
};

const BookPageLayout: FunctionComponent<{
  site: SiteData;
  current: Slide;
  children: ReactNode;
}> = ({ site, current, children }) => {
  const { bookPageSize, bookPageScale } = useApp();

  return (
    <>
      <Header current={current} />

      <div
        className="page-book"
        style={{
          "--book-page-size": `${bookPageSize}px`,
          "--book-page-scale": `${bookPageScale}`,
        }}
      >
        <main>{children}</main>

        <Contact />

        <div className="page-spacer" />

        <Footer siteMetadata={site.siteMetadata} />
      </div>

      <LightboxImage />
    </>
  );
};

export default BookPageLayout;

export const bookPageFragments = graphql`
  fragment BookPageSite on Site {
    siteMetadata {
      author
      description
      siteUrl
      title
      keywords
      tagline
    }
  }

  fragment BookPageThumbnail on File {
    name
    childImageSharp {
      gatsbyImageData(width: 100, height: 100, placeholder: BLURRED)
    }
  }
`;
