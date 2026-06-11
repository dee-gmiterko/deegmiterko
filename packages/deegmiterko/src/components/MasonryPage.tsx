import React, { FunctionComponent, ReactNode, useMemo } from "react";
import slugify from "slugify";

import { useContentImages } from "../hooks/useContentImages";
import LightboxButton from "./LightboxButton";
import useAnchor from "../hooks/useAnchor";

export type MasonryElementType =
  | {
      type: "image";
      path: string;
      alt: string;
    }
  | {
      type: "node";
      aspectRatio: number;
      node: ReactNode;
    };

export type MasonryPageType = {
  id?: string;
  rows: number;
  title: string;
  titleNode?: ReactNode;
  subtitle?: string;
  children: MasonryElementType[];
};

const MasonryPage: FunctionComponent<MasonryPageType> = ({
  id,
  rows,
  title,
  subtitle,
  children,
}) => {
  const imageMap = useContentImages();
  const pageId = useMemo(
    () =>
      id ??
      slugify(subtitle ? `${title} ${subtitle}` : `${title}`, {
        locale: "en",
        strict: true,
        replacement: "-",
        lower: true,
      }),
    [id, title, subtitle],
  );
  const ref = useAnchor({
    title: title,
    hash: pageId,
  });

  const childrenRows = useMemo(() => {
    type ChildrenNodeType = {
      aspectRatio: number;
      node: ReactNode;
    };

    const childrenNodes: ChildrenNodeType[] = children
      .map((child) =>
        child.type == "image"
          ? {
              aspectRatio:
                imageMap[child.path][0].width / imageMap[child.path][0].height,
              node: <LightboxButton path={child.path} alt={child.alt} />,
            }
          : child.type == "node"
            ? child
            : null,
      )
      .filter((child) => child != null);

    const totalLength = rows * 1200;
    const totalRatio = childrenNodes.reduce((acc, c) => acc + c.aspectRatio, 0);
    let row = 0;
    let rowLength = 0;

    const childrenRows: ChildrenNodeType[][] = [];
    for (const child of childrenNodes) {
      rowLength += (child.aspectRatio / totalRatio) * totalLength;
      if (!childrenRows[row]) {
        childrenRows[row] = [];
      }
      childrenRows[row].push(child);
      if (rowLength >= 1200) {
        rowLength = 0;
        row++;
      }
    }

    return childrenRows;
  }, [children, imageMap, rows]);

  return (
    <div ref={ref} className="page masonry">
      <h3 id={pageId} className="sr-only">{title}</h3>
      {childrenRows.map((row, i) => (
        <div key={i}>
          {row.map((child, j) => (
            <div
              key={j}
              style={{
                width:
                  (child.aspectRatio /
                    row.reduce((acc, c) => acc + c.aspectRatio, 0)) *
                    100 +
                  "%",
                height: 1200 / rows,
              }}
            >
              {child.node}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MasonryPage;
