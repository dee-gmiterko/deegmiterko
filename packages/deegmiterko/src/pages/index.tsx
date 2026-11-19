import React from "react";
import { PageProps, graphql } from "gatsby";

import Seo from "../components/Seo";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Conversation from "../components/Conversation";
import NextPage from "../components/NextPage";
import GithubActivityOverview from "../components/GithubActivityOverview";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderAnnouncement from "../components/HeaderAnnouncement";
import { ChatMessage, SiteData, Slide } from "../types";

type IndexData = {
  site: SiteData;
};

const introduction: ChatMessage[] = [
  { author: "Me", message: "Hello" },
  { author: "You", message: "Hi" },
  {
    author: "Me",
    message: "I assume you would want to learn some bits about me",
  },
  { author: "Me", message: "Where does one start?" },
  { author: "You", message: "I would start with the latest big project?" },
];

const IndexPage = ({ data: { site } }: PageProps<IndexData>) => {
  return (
    <>
      <Header />

      <HeaderAnnouncement siteMetadata={site.siteMetadata} />

      <div className="page-about">
        <Banner siteMetadata={site.siteMetadata} />

        <main id="about">
          <Conversation messages={introduction} />

          <NextPage to={`/${Slide.Styloma}/`}>Styloma</NextPage>

          <GithubActivityOverview />
        </main>

        <Contact />

        <div className="page-spacer" />

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
