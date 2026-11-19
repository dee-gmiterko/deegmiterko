import React from "react";
import { HeadProps, PageProps, graphql } from "gatsby";

import BookPageLayout, { BookPageData } from "../components/BookPageLayout";
import Conversation from "../components/Conversation";
import NextPage from "../components/NextPage";
import Seo from "../components/Seo";
import SlidesProfessional from "../components/slides/SlidesProfessional";
import { useBookThumbnails } from "../hooks/useBookThumbnails";
import { ChatMessage, Slide } from "../types";

const pre: ChatMessage[] = [
  { title: "Professional experience" },
  {
    author: "Me",
    message: "Which is where my professional experience comes in.",
  },
  { author: "You", message: "Yes. What have you worked on before?" },
];

const after: ChatMessage[] = [
  {
    author: "Me",
    message:
      "Given, those are much more difficult to share beyond listing it, as they are often non-public and non-visual.",
  },
  { author: "You", message: "Yes, I do get that." },
  {
    author: "Me",
    message:
      "I still hope you gained some insight into what I did and what could be in my capabilities.",
  },
];

const ProfessionalPage = ({
  data: { site, pageThumbnails },
}: PageProps<BookPageData>) => {
  const thumbnails = useBookThumbnails(pageThumbnails);

  return (
    <BookPageLayout site={site} current={Slide.Professional}>
      <Conversation messages={pre} />
      <SlidesProfessional thumbnails={thumbnails} />
      <Conversation messages={after} />
      <NextPage to={`/${Slide.Me}/`}>Me</NextPage>
    </BookPageLayout>
  );
};

export default ProfessionalPage;

export const Head = ({ data: { site } }: HeadProps<BookPageData>) => (
  <Seo title="Professional" siteMetadata={site.siteMetadata} />
);

export const pageQuery = graphql`
  query ProfessionalPageQuery {
    site {
      ...BookPageSite
    }
    pageThumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "pageThumbnails" }
        name: { regex: "/^professional-[0-9]+$/" }
      }
    ) {
      nodes {
        ...BookPageThumbnail
      }
    }
  }
`;
