import React, { createContext, FunctionComponent, ReactNode, useState, useLayoutEffect, useRef, useEffect } from "react";
import { BookStore } from "./bookContext";
import { IGatsbyImageData } from "gatsby-plugin-image";

export type AppType = {
  bookPageSize: number,
  bookPageScale: number,
  registerBook: (id: string, book: BookStore) => void,
  books: Record<string, BookStore>,
  setLightboxImage: (image: IGatsbyImageData) => void,
  lightboxImage: IGatsbyImageData|undefined,
  lightboxOpen: boolean,
}

const AppContext = createContext<AppType|undefined>(undefined);

export const AppProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [size, setSize] = useState<[number, number]>([1200, 1200]);
  const books = useRef<Record<string, BookStore>>({});
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

  const registerBook = (id: string, book: BookStore) => {
    books.current[id] = book;
  }

  const [width, height] = size;
  const bookPageSize = Math.min(width, height) - 32;
  const bookPageScale = bookPageSize / 1200;

  return (
    <AppContext.Provider
      value={{
        bookPageSize,
        bookPageScale,
        registerBook,
        books: books.current,
        setLightboxImage: (image) => {
          if(image) setLightboxImage(image);
          setLightboxOpen(!!image);
        },
        lightboxImage,
        lightboxOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
