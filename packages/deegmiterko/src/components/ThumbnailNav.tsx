import React, { FunctionComponent, useEffect, useRef } from "react";
import Thumbnail from "./Thumbnail";
import { ThumbnailNode } from "../types";

const ThumbnailNav: FunctionComponent<{
  count: number;
  current: number | undefined;
  thumbnails: ThumbnailNode[];
  onSelect: (index: number) => void;
}> = ({ count, current, thumbnails, onSelect }) => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const active = nav?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!nav || !active) return;
    const top = active.offsetTop;
    const bottom = top + active.offsetHeight;
    if (top < nav.scrollTop || bottom > nav.scrollTop + nav.clientHeight) {
      nav.scrollTo({
        top: top - (nav.clientHeight - active.offsetHeight) / 2,
        behavior: "smooth",
      });
    }
  }, [current]);

  return (
    <nav ref={navRef} className="thumbnail-nav" aria-label="Page navigation">
      {Array.from({ length: count }, (_, i) => (
        <Thumbnail
          key={i}
          index={i}
          active={i === current}
          thumbnail={thumbnails[i]}
          onClick={() => onSelect(i)}
        />
      ))}
    </nav>
  );
};

export default ThumbnailNav;
