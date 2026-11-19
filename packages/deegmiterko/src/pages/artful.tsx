import React from "react";
import { HeadProps, PageProps, graphql } from "gatsby";

import BookPageLayout, { BookPageData } from "../components/BookPageLayout";
import Conversation from "../components/Conversation";
import NextPage from "../components/NextPage";
import Seo from "../components/Seo";
import SlidesArtful from "../components/slides/SlidesArtful";
import { useBookThumbnails } from "../hooks/useBookThumbnails";
import { ChatMessage, Slide } from "../types";

const pre: ChatMessage[] = [
  { title: "Artist" },
  { author: "You", message: "What kind of art do you do?" },
  {
    author: "Me",
    message:
      "I just enjoy creating. And you can find some sort of artistry in many things.",
  },
];

const after: ChatMessage[] = [
  {
    author: "You",
    message: "Have you noticed how the media changes, but the intent persists?",
  },
  {
    author: "Me",
    message:
      "Yes, every new age may have added new tools to the mix, but the core message remains the same.",
  },
  { author: "You", message: "<Unity over ideas keeps popping up, huh?>" },
];

const ArtfulPage = ({
  data: { site, pageThumbnails },
}: PageProps<BookPageData>) => {
  const thumbnails = useBookThumbnails(pageThumbnails);

  return (
    <BookPageLayout site={site} current={Slide.Artful}>
      <Conversation messages={pre} />
      <SlidesArtful thumbnails={thumbnails} />
      <Conversation messages={after} />
      <NextPage to={`/${Slide.GenerativeDesign}/`}>Generative design</NextPage>
    </BookPageLayout>
  );
};

export default ArtfulPage;

export const Head = ({ data: { site } }: HeadProps<BookPageData>) => (
  <Seo title="Art" siteMetadata={site.siteMetadata} />
);

export const pageQuery = graphql`
  query ArtfulPageQuery {
    site {
      ...BookPageSite
    }
    pageThumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "pageThumbnails" }
        name: { regex: "/^artful-[0-9]+$/" }
      }
    ) {
      nodes {
        ...BookPageThumbnail
      }
    }
  }
`;
