import React from "react";
import { HeadProps, PageProps, graphql } from "gatsby";

import BookPageLayout, { BookPageData } from "../components/BookPageLayout";
import Conversation from "../components/Conversation";
import NextPage from "../components/NextPage";
import Seo from "../components/Seo";
import SlidesGenerativeDesign from "../components/slides/SlidesGenerativeDesign";
import { useBookThumbnails } from "../hooks/useBookThumbnails";
import { ChatMessage, Slide } from "../types";

const pre: ChatMessage[] = [
  { title: "Tie-in of art and tech" },
  {
    author: "Me",
    message:
      "Actually, there is one expression method in particular I would like to discuss",
  },
  { author: "You", message: "What is it?" },
  {
    author: "Me",
    message: 'It\'s usually referred to as a "Generative design"',
  },
];

const after: ChatMessage[] = [
  {
    author: "You",
    message:
      "Isn't it fascinating how simple components can create such complex behavior, right?",
  },
  { author: "Me", message: "Absolutely!" },
  {
    author: "Me",
    message:
      "And as opposed to the traditional top-down design, generative design builds up from the bottom, creating virtually unbounded possibilities.",
  },
  {
    author: "You",
    message: "The biggest issue then is keeping it varied and interesting",
  },
  { author: "You", message: "<And for it to have a point>" },
];

const GenerativeDesignPage = ({
  data: { site, pageThumbnails },
}: PageProps<BookPageData>) => {
  const thumbnails = useBookThumbnails(pageThumbnails);

  return (
    <BookPageLayout site={site} current={Slide.GenerativeDesign}>
      <Conversation messages={pre} />
      <SlidesGenerativeDesign thumbnails={thumbnails} />
      <Conversation messages={after} />
      <NextPage to={`/${Slide.GameExperiments}/`}>Games</NextPage>
    </BookPageLayout>
  );
};

export default GenerativeDesignPage;

export const Head = ({ data: { site } }: HeadProps<BookPageData>) => (
  <Seo title="Generative design" siteMetadata={site.siteMetadata} />
);

export const pageQuery = graphql`
  query GenerativeDesignPageQuery {
    site {
      ...BookPageSite
    }
    pageThumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "pageThumbnails" }
        name: { regex: "/^generative-design-[0-9]+$/" }
      }
    ) {
      nodes {
        ...BookPageThumbnail
      }
    }
  }
`;
