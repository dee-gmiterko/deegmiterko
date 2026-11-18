import React from "react";
import { PageProps, graphql } from "gatsby";

import Seo from "../components/Seo";
import SiteHeader from "../components/SiteHeader";
import Banner from "../components/Banner";
import Conversation from "../components/Conversation";
import NextPage from "../components/NextPage";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderAnnouncement from "../components/HeaderAnnouncement";
import { books, bookPath, introduction } from "../content/books";
import { SiteData } from "../types";

type IndexData = {
  site: SiteData;
};

const IndexPage = ({ data: { site } }: PageProps<IndexData>) => {
  const first = books[0];

  return (
    <>
      <SiteHeader />

      <HeaderAnnouncement siteMetadata={site.siteMetadata} />

      <div className="page-about">
        <Banner siteMetadata={site.siteMetadata} />

        <main id="about">
          <Conversation messages={introduction} />

          <NextPage to={bookPath(first.id)}>{first.title}</NextPage>
        </main>

        <Contact />

        <Footer siteMetadata={site.siteMetadata} />
      </div>
    </>
  );
};

export default IndexPage;

export const Head = ({ data: { site } }: { data: { site: SiteData } }) => (
  <Seo siteMetadata={site.siteMetadata} />
);

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        keywords
        tagline
        announcement {
          title
          link
        }
      }
    }
  }
`;
