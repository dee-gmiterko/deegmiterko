import React from "react";
import { HeadProps, PageProps, graphql } from "gatsby";

import BookPageLayout, { BookPageData } from "../components/BookPageLayout";
import Conversation from "../components/Conversation";
import NextPage from "../components/NextPage";
import Seo from "../components/Seo";
import SlidesGameExperiments from "../components/slides/SlidesGameExperiments";
import { useBookThumbnails } from "../hooks/useBookThumbnails";
import { ChatMessage, Slide } from "../types";

const pre: ChatMessage[] = [
  { title: "Experiments and games" },
  { author: "Me", message: "Now we are missing two key components:" },
  { author: "Me", message: "To come up with completely new things" },
  { author: "You", message: "And having a reason to use them..." },
  {
    author: "Me",
    message: "...which is most likely going to be to tell a story.",
  },
];

const after: ChatMessage[] = [
  {
    author: "Me",
    message:
      "Only once we find that something works, we can start to build on top of it.",
  },
  { author: "You", message: "<I think that's actually very clever.>" },
  {
    author: "Me",
    message: "And use it in a way that is commercially viable.",
  },
  { author: "You", message: "<Sadly>" },
];

const GameExperimentsPage = ({
  data: { site, pageThumbnails },
}: PageProps<BookPageData>) => {
  const thumbnails = useBookThumbnails(pageThumbnails);

  return (
    <BookPageLayout site={site} current={Slide.GameExperiments}>
      <Conversation messages={pre} />
      <SlidesGameExperiments thumbnails={thumbnails} />
      <Conversation messages={after} />
      <NextPage to={`/${Slide.Tooling}/`}>Tooling</NextPage>
    </BookPageLayout>
  );
};

export default GameExperimentsPage;

export const Head = ({ data: { site } }: HeadProps<BookPageData>) => (
  <Seo title="Games" siteMetadata={site.siteMetadata} />
);

export const pageQuery = graphql`
  query GameExperimentsPageQuery {
    site {
      ...BookPageSite
    }
    pageThumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "pageThumbnails" }
        name: { regex: "/^game-experiments-[0-9]+$/" }
      }
    ) {
      nodes {
        ...BookPageThumbnail
      }
    }
  }
`;
