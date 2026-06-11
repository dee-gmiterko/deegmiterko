import React, {
  FunctionComponent,
  ReactNode,
  useRef,
  useCallback,
} from "react";
import clsx from "clsx";

import ThumbnailNav from "./ThumbnailNav";
import { ThumbnailNode } from "../pages/index";
import useApp from "../hooks/useApp";
import { PageProvider } from "../contexts/pageContext";

const Book: FunctionComponent<{
  bookId: string;
  children: Array<ReactNode>;
  thumbnails: ThumbnailNode[];
}> = ({ bookId, children, thumbnails }) => {
  const { anchor } = useApp();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const scrollToPage = useCallback(
    (index: number) => {
      const page = pageRefs.current[index];
      if (page) {
        page.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [pageRefs],
  );

  const current =
    anchor && anchor.bookId == bookId ? anchor.pageIndex : undefined;

  return (
    <div
      className={clsx("book", current === children.length - 1 && "last-page")}
      ref={scrollContainerRef}
    >
      <ThumbnailNav
        count={children.length}
        current={current}
        thumbnails={thumbnails}
        onSelect={scrollToPage}
      />
      <div className="pages-wrapper">
        {children.map((child, i) => (
          <PageProvider
            key={i}
            bookId={bookId}
            pageIndex={i}
            ref={(el) => { pageRefs.current[i] = el; }}
          >
            {child}
          </PageProvider>
        ))}
      </div>
    </div>
  );
};

export default Book;
