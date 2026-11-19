import React from "react";
import { HeadProps, PageProps, graphql } from "gatsby";

import BookPageLayout, { BookPageData } from "../components/BookPageLayout";
import Conversation from "../components/Conversation";
import NextPage from "../components/NextPage";
import Seo from "../components/Seo";
import SlidesTooling from "../components/slides/SlidesTooling";
import { useBookThumbnails } from "../hooks/useBookThumbnails";
import { ChatMessage, Slide } from "../types";

const pre: ChatMessage[] = [{ title: "Tooling" }];

const ToolingPage = ({
  data: { site, pageThumbnails },
}: PageProps<BookPageData>) => {
  const thumbnails = useBookThumbnails(pageThumbnails);

  return (
    <BookPageLayout site={site} current={Slide.Tooling}>
      <Conversation messages={pre} />
      <SlidesTooling thumbnails={thumbnails} />
      <NextPage to={`/${Slide.Professional}/`}>Professional</NextPage>
    </BookPageLayout>
  );
};

export default ToolingPage;

export const Head = ({ data: { site } }: HeadProps<BookPageData>) => (
  <Seo title="Tooling" siteMetadata={site.siteMetadata} />
);

export const pageQuery = graphql`
  query ToolingPageQuery {
    site {
      ...BookPageSite
    }
    pageThumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "pageThumbnails" }
        name: { regex: "/^tooling-[0-9]+$/" }
      }
    ) {
      nodes {
        ...BookPageThumbnail
      }
    }
  }
`;
