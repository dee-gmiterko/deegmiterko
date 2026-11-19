import React from "react";
import { HeadProps, PageProps, graphql } from "gatsby";

import BookPageLayout, { BookPageData } from "../components/BookPageLayout";
import Conversation from "../components/Conversation";
import NextPage from "../components/NextPage";
import Seo from "../components/Seo";
import SlidesStyloma from "../components/slides/SlidesStyloma";
import { useBookThumbnails } from "../hooks/useBookThumbnails";
import { ChatMessage, Slide } from "../types";

const pre: ChatMessage[] = [
  { title: "Styloma" },
  { author: "Me", message: "Sure, let me tell you about it…" },
];

const after: ChatMessage[] = [
  { author: "You", message: "Huh, and how is it going?" },
  { author: "Me", message: "We will have to see…" },
  {
    author: "Me",
    message:
      "But for now I could tell you a bit more about myself. For starters, I've always been an artist. One way or another.",
  },
];

const StylomaPage = ({
  data: { site, pageThumbnails },
}: PageProps<BookPageData>) => {
  const thumbnails = useBookThumbnails(pageThumbnails);

  return (
    <BookPageLayout site={site} current={Slide.Styloma}>
      <Conversation messages={pre} />
      <SlidesStyloma thumbnails={thumbnails} />
      <Conversation messages={after} />
      <NextPage to={`/${Slide.Artful}/`}>Art</NextPage>
    </BookPageLayout>
  );
};

export default StylomaPage;

export const Head = ({ data: { site } }: HeadProps<BookPageData>) => (
  <Seo title="Styloma" siteMetadata={site.siteMetadata} />
);

export const pageQuery = graphql`
  query StylomaPageQuery {
    site {
      ...BookPageSite
    }
    pageThumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "pageThumbnails" }
        name: { regex: "/^styloma-[0-9]+$/" }
      }
    ) {
      nodes {
        ...BookPageThumbnail
      }
    }
  }
`;
