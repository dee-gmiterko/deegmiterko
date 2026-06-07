import React, { FunctionComponent, ReactNode, useEffect, useRef, useCallback } from "react";
import clsx from "clsx";

import useBook from "../hooks/useBook";
import ThumbnailNav from "./ThumbnailNav";
import { ThumbnailNode } from "../pages/index";

const BookContent: FunctionComponent<{
  title: string,
  current: number,
  setCurrent: (i: number) => void,
  children: Array<ReactNode>,
  thumbnails: ThumbnailNode[],
}> = ({ title, current, setCurrent, children, thumbnails }) => {
  const { book } = useBook();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrolling = useRef(false);

  console.log(title, current, children.length - 1, current === children.length - 1);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    if (isScrolling.current) return;

    for (const entry of entries) {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
        const index = pageRefs.current.findIndex(ref => ref === entry.target);
        if (index !== -1 && index !== current) {
          setCurrent(index);
        }
      }
    }
  }, [current, setCurrent]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(handleIntersection, {
      root: container,
      threshold: 0.5,
    });

    pageRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [handleIntersection, children.length]);

  useEffect(() => {
    if (book.pages[current]) {
      const hash = `#${book.pages[current].pageId}`;
      history.pushState({}, `Dee Gmiterko - ${title}`, hash);
    }
  }, [current, book.pages, title]);

  const scrollToPage = useCallback((index: number) => {
    const page = pageRefs.current[index];
    if (page) {
      isScrolling.current = true;
      page.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => { isScrolling.current = false; }, 500);
      setCurrent(index);
    }
  }, []);

  return (
    <div className={clsx("book", current === children.length - 1 && "last-page")} ref={scrollContainerRef}>
      <ThumbnailNav
        count={children.length}
        current={current}
        thumbnails={thumbnails}
        onSelect={scrollToPage}
      />
      <div className="pages-wrapper">
        {children.map((child, i) => (
          <div
            key={i}
            className="page-wrapper"
            ref={el => pageRefs.current[i] = el}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookContent;
