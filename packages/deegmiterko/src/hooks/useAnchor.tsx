import { useOnInView } from "react-intersection-observer";

import useApp from "./useApp";
import { Anchor } from "../types";
import { useCallback, useMemo } from "react";
import usePage from "./usePage";

const useAnchor = (anchor: { title: string; hash: string }) => {
  const { anchorVisible } = useApp();
  const { bookId, pageIndex } = usePage();

  const anchorMemo = useMemo<Anchor>(
    () => ({
      bookId,
      pageIndex,
      title: anchor.title,
      hash: anchor.hash,
    }),
    [bookId, pageIndex, anchor.title, anchor.hash],
  );

  const anchorCallback = useCallback(() => {
    anchorVisible(anchorMemo);
  }, [anchorMemo, anchorVisible]);

  const ref = useOnInView(anchorCallback, {
    threshold: 0.5,
  });

  return ref;
};

export default useAnchor;
