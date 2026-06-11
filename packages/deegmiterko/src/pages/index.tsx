import React from "react";
import { PageProps, graphql } from "gatsby";

import Seo from "../components/Seo";
import Banner from "../components/Banner";
import Conversation from "../components/Conversation";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import HeaderAnnouncement from "../components/HeaderAnnouncement";
import useApp from "../hooks/useApp";
import LightboxImage from "../components/LightboxImage";

import SlidesArtful from "../components/slides/SlidesArtful";
import SlidesGenerativeDesign from "../components/slides/SlidesGenerativeDesign";
import SlidesGameExperiments from "../components/slides/SlidesGameExperiments";
import SlidesProfessional from "../components/slides/SlidesProfessional";
import SlidesMe from "../components/slides/SlidesMe";
import { ChatData, ChatMessage, SiteData } from "../types";
import { IGatsbyImageData } from "gatsby-plugin-image";
import SlidesStyloma from "../components/slides/SlidesStyloma";

export type ThumbnailNode = {
  name: string;
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
};

type IndexData = {
  site: SiteData;
  content: {
    edges: {
      node: {
        name: string;
        childChatParsed: ChatData;
      };
    }[];
  };
  pageThumbnails: {
    nodes: ThumbnailNode[];
  };
};

const IndexPage = ({
  data: { content, site, pageThumbnails },
}: PageProps<IndexData>) => {
  const { bookPageSize, bookPageScale } = useApp();

  const contentMap = React.useMemo(() => {
    const map: Record<string, ChatMessage[]> = {};
    content.edges.forEach(
      ({
        node: {
          name,
          childChatParsed: { conversations },
        },
      }) => {
        map[name] = conversations[0].messages;
      },
    );
    return map;
  }, [content]);

  // Group thumbnails by book id (memoized)
  const thumbnailsByBook = React.useMemo(() => {
    const byBook: Record<string, ThumbnailNode[]> = {};
    pageThumbnails.nodes.forEach((node) => {
      const match = node.name.match(/^(.+)-(\d+)$/);
      if (match) {
        const bookId = match[1];
        if (!byBook[bookId]) {
          byBook[bookId] = [];
        }
        byBook[bookId].push(node);
      }
    });
    // Sort each book's thumbnails by index
    Object.keys(byBook).forEach((bookId) => {
      byBook[bookId].sort((a, b) => {
        const indexA = parseInt(a.name.match(/-(\d+)$/)?.[1] || "0");
        const indexB = parseInt(b.name.match(/-(\d+)$/)?.[1] || "0");
        return indexA - indexB;
      });
    });
    return byBook;
  }, [pageThumbnails]);

  return (
    <>
      <HeaderAnnouncement siteMetadata={site.siteMetadata} />

      <div
        className="page-about"
        style={{
          "--book-page-size": `${bookPageSize}px`,
          "--book-page-scale": `${bookPageScale}`,
        }}
      >
        <Banner siteMetadata={site.siteMetadata} />

        <main id="about">
          <Conversation messages={contentMap["introduction"]} />

          <SlidesStyloma thumbnails={thumbnailsByBook["styloma"]} />

          <Conversation messages={contentMap["styloma"]} />

          <SlidesArtful thumbnails={thumbnailsByBook["artful"]} />

          <Conversation messages={contentMap["artful"]} />

          <SlidesGenerativeDesign
            thumbnails={thumbnailsByBook["generative-design"]}
          />

          <Conversation messages={contentMap["generative-design"]} />

          <SlidesGameExperiments
            thumbnails={thumbnailsByBook["game-experiments"]}
          />

          <Conversation messages={contentMap["game-experiments"]} />

          <SlidesProfessional thumbnails={thumbnailsByBook["professional"]} />

          <Conversation messages={contentMap["professional"]} />

          <SlidesMe thumbnails={thumbnailsByBook["me"]} />

          <Conversation messages={contentMap["me"]} />
        </main>

        <Contact />

        <Footer siteMetadata={site.siteMetadata} />
      </div>

      <LightboxImage />
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
    content: allFile(filter: { sourceInstanceName: { eq: "content" } }) {
      edges {
        node {
          name
          childChatParsed {
            conversations {
              name
              color
              messages {
                author
                message
                title
              }
            }
          }
        }
      }
    }
    pageThumbnails: allFile(
      filter: { sourceInstanceName: { eq: "pageThumbnails" } }
    ) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 100, height: 100, placeholder: BLURRED)
        }
      }
    }
  }
`;
