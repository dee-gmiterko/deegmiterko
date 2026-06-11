import React, { FunctionComponent } from "react";
import Thumbnail from "./Thumbnail";
import { ThumbnailNode } from "../pages/index";

const ThumbnailNav: FunctionComponent<{
  count: number;
  current: number | undefined;
  thumbnails: ThumbnailNode[];
  onSelect: (index: number) => void;
}> = ({ count, current, thumbnails, onSelect }) => {
  return (
    <nav className="thumbnail-nav" aria-label="Page navigation">
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
