import { useMemo } from "react";

import { ThumbnailNode } from "../types";

const thumbnailIndex = (node: ThumbnailNode) =>
  parseInt(node.name.match(/-(\d+)$/)?.[1] || "0");

export const useBookThumbnails = (data: { nodes: ThumbnailNode[] }) =>
  useMemo(
    () =>
      [...data.nodes].sort((a, b) => thumbnailIndex(a) - thumbnailIndex(b)),
    [data],
  );
