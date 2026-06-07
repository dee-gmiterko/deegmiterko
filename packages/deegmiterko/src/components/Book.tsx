import React, { FunctionComponent, ReactNode, useEffect, useState } from "react";

import { BookProvider } from "../contexts/bookContext";
import BookContent from "./BookContent";
import { ThumbnailNode } from "../pages/index";

const Book: FunctionComponent<{
  children: Array<ReactNode>,
  id: string,
  title: string,
  thumbnails: ThumbnailNode[],
}> = ({ children, id, title, thumbnails }) => {
  const [current, setCurrent] = useState(0);

  return (
    <BookProvider id={id} setCurrent={setCurrent}>
      <BookContent title={title} current={current} setCurrent={setCurrent} children={children} thumbnails={thumbnails} />
    </BookProvider>
  )
}

export default Book;
