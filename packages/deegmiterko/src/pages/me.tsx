import React from "react";
import { HeadProps, PageProps, graphql } from "gatsby";

import BookPageLayout, { BookPageData } from "../components/BookPageLayout";
import Conversation from "../components/Conversation";
import NextPage from "../components/NextPage";
import Seo from "../components/Seo";
import SlidesMe from "../components/slides/SlidesMe";
import { useBookThumbnails } from "../hooks/useBookThumbnails";
import { ChatMessage, Slide } from "../types";

const pre: ChatMessage[] = [
  { title: "Dee Gmiterko" },
  { author: "Me", message: "And then, there is *me*" },
  { author: "You", message: "Nice to meet *you*" },
];

const after: ChatMessage[] = [
  {
    author: "Me",
    message: "It's still too early to say how it all ends up...",
  },
  { author: "You", message: "See you then!" },
];

const MePage = ({
  data: { site, pageThumbnails },
}: PageProps<BookPageData>) => {
  const thumbnails = useBookThumbnails(pageThumbnails);

  return (
    <BookPageLayout site={site} current={Slide.Me}>
      <Conversation messages={pre} />
      <SlidesMe thumbnails={thumbnails} />
      <Conversation messages={after} />
      <NextPage to="/#contact">Contact me</NextPage>
    </BookPageLayout>
  );
};

export default MePage;

export const Head = ({ data: { site } }: HeadProps<BookPageData>) => (
  <Seo title="Me" siteMetadata={site.siteMetadata} />
);

export const pageQuery = graphql`
  query MePageQuery {
    site {
      ...BookPageSite
    }
    pageThumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "pageThumbnails" }
        name: { regex: "/^me-[0-9]+$/" }
      }
    ) {
      nodes {
        ...BookPageThumbnail
      }
    }
  }
`;
