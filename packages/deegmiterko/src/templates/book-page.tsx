import React from "react";
import { PageProps, graphql } from "gatsby";

import Seo from "../components/Seo";
import SiteHeader from "../components/SiteHeader";
import Conversation from "../components/Conversation";
import NextPage from "../components/NextPage";
import Footer from "../components/Footer";
import LightboxImage from "../components/LightboxImage";
import { BOOK_COMPONENTS } from "../components/slides";
import { books, bookPath } from "../content/books";
import useApp from "../hooks/useApp";
import { SiteData, Slide, ThumbnailNode } from "../types";

type BookPageData = {
  site: SiteData;
  pageThumbnails: {
    nodes: ThumbnailNode[];
  };
};

type BookPageContext = {
  bookId: Slide;
  thumbnailRegex: string;
};

const thumbnailIndex = (node: ThumbnailNode) =>
  parseInt(node.name.match(/-(\d+)$/)?.[1] || "0");

const BookPage = ({
  data: { site, pageThumbnails },
  pageContext: { bookId },
}: PageProps<BookPageData, BookPageContext>) => {
  const { bookPageSize, bookPageScale } = useApp();

  const thumbnails = React.useMemo(
    () =>
      [...pageThumbnails.nodes].sort(
        (a, b) => thumbnailIndex(a) - thumbnailIndex(b),
      ),
    [pageThumbnails],
  );

  const bookIndex = books.findIndex((book) => book.id === bookId);
  const book = books[bookIndex];
  const BookComponent = BOOK_COMPONENTS[bookId];
  if (!book || !BookComponent) {
    throw new Error(`Book not found: ${bookId}`);
  }
  const next = books[bookIndex + 1];

  return (
    <>
      <SiteHeader current={bookId} />

      <div
        className="page-book"
        style={{
          "--book-page-size": `${bookPageSize}px`,
          "--book-page-scale": `${bookPageScale}`,
        }}
      >
        <main>
          <Conversation messages={book.pre} />

          <BookComponent thumbnails={thumbnails} />

          <Conversation messages={book.after} />

          {next ? (
            <NextPage to={bookPath(next.id)}>{next.title}</NextPage>
          ) : (
            <NextPage to="/#contact">Contact me</NextPage>
          )}
        </main>

        <Footer siteMetadata={site.siteMetadata} />
      </div>

      <LightboxImage />
    </>
  );
};

export default BookPage;

export const Head = ({
  data: { site },
  pageContext: { bookId },
}: {
  data: { site: SiteData };
  pageContext: BookPageContext;
}) => (
  <Seo
    title={books.find((book) => book.id === bookId)?.title}
    siteMetadata={site.siteMetadata}
  />
);

export const pageQuery = graphql`
  query BookPageQuery($thumbnailRegex: String!) {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        keywords
        tagline
      }
    }
    pageThumbnails: allFile(
      filter: {
        sourceInstanceName: { eq: "pageThumbnails" }
        name: { regex: $thumbnailRegex }
      }
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
