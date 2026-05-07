import React, { FunctionComponent } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import clsx from "clsx";
import { ThumbnailNode } from "../pages/index";

const Thumbnail: FunctionComponent<{
  index: number,
  active: boolean,
  thumbnail?: ThumbnailNode,
  onClick: () => void,
}> = ({ index, active, thumbnail, onClick }) => {
  const image = thumbnail ? getImage(thumbnail.childImageSharp.gatsbyImageData) : null;

  return (
    <button
      className={clsx("thumbnail", active && "active")}
      onClick={onClick}
      aria-label={`Go to page ${index + 1}`}
      aria-current={active ? 'true' : undefined}
    >
      {image ? (
        <>
          <GatsbyImage image={image} alt={`Page ${index + 1}`} />
          <span className="thumbnail-number">{index + 1}</span>
        </>
      ) : (
        index + 1
      )}
    </button>
  );
};

export default Thumbnail;
