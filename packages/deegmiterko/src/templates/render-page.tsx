import React from "react";

import { AppProvider } from "../contexts/appContext";

import { BOOK_COMPONENTS } from "../components/slides";

type RenderPageProps = {
  pageContext: {
    bookId: string;
    pageIndex: number;
  };
};

const RenderPage: React.FC<RenderPageProps> = ({ pageContext }) => {
  const { bookId, pageIndex } = pageContext;
  const BookComponent = BOOK_COMPONENTS[bookId];

  if (!BookComponent) {
    return <div>Book not found: {bookId}</div>;
  }

  const pageStyles = `
    html, body {
      margin: 0;
      padding: 0;
      width: 1200px;
      height: 1200px;
      overflow: hidden;
    }
    .render-container {
      width: 1200px;
      height: 1200px;
    }
    .render-container .book {
      height: auto;
      overflow: visible;
      margin: 0;
      font-family: "Arial";
    }
    .render-container .thumbnail-nav {
      display: none;
    }
    .render-container .pages-wrapper {
      display: block;
    }
    .render-container .page-wrapper {
      display: none;
      padding: 0;
      width: 1200px;
      height: 1200px;
    }
    .render-container .page-wrapper:nth-child(${pageIndex + 1}) {
      display: block;
    }
    .render-container .page {
      position: static;
      transform: none;
    }
  `;

  return (
    <AppProvider>
      <style>{pageStyles}</style>
      <div className="render-container">
        <BookComponent thumbnails={[]} />
      </div>
    </AppProvider>
  );
};

export default RenderPage;
