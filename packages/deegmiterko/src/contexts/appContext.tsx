import React, {
  createContext,
  FunctionComponent,
  ReactNode,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { Anchor } from "../types";

const ANCHOR_DEBOUNCE = 300;

export type AppType = {
  bookPageSize: number;
  bookPageScale: number;
  anchor: Anchor | undefined;
  anchorVisible: (anchor: Anchor) => void;
  setLightboxImage: (image: IGatsbyImageData | undefined) => void;
  lightboxImage: IGatsbyImageData | undefined;
  lightboxOpen: boolean;
};

const AppContext = createContext<AppType | undefined>(undefined);

export const AppProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [size, setSize] = useState<[number, number]>(() =>
    typeof window !== "undefined"
      ? [window.innerWidth, window.innerHeight]
      : [1200, 1200],
  );
  const anchorDebounceRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  const [anchor, setAnchor] = useState<Anchor>();
  const [lightboxImage, setLightboxImage] = useState<IGatsbyImageData>();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const anchorVisible = useCallback((anchor: Anchor) => {
    if (anchorDebounceRef.current) {
      clearTimeout(anchorDebounceRef.current);
    }
    anchorDebounceRef.current = setTimeout(() => {
      setAnchor(anchor);
      history.pushState(
        {},
        `Dee Gmiterko - ${anchor.title}`,
        `#${anchor.hash}`,
      );
    }, ANCHOR_DEBOUNCE);
  }, []);

  const setLightboxImageHandle = useCallback(
    (image: IGatsbyImageData | undefined) => {
      if (image) setLightboxImage(image);
      setLightboxOpen(!!image);
    },
    [],
  );

  const [width, height] = size;
  const bookPageSize = Math.min(width, height) - 32;
  const bookPageScale = bookPageSize / 1200;

  return (
    <AppContext.Provider
      value={{
        bookPageSize,
        bookPageScale,
        anchor,
        anchorVisible,
        setLightboxImage: setLightboxImageHandle,
        lightboxImage,
        lightboxOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
