import React, { createContext, FunctionComponent, ReactNode, Ref } from "react";

export type PageType = {
  bookId: string;
  pageIndex: number;
};

const PageContext = createContext<PageType | undefined>(undefined);

export const PageProvider: FunctionComponent<{
  bookId: string;
  pageIndex: number;
  ref: Ref<HTMLDivElement>;
  children: ReactNode;
}> = ({ bookId, pageIndex, ref, children }) => {
  return (
    <PageContext.Provider
      value={{
        bookId,
        pageIndex,
      }}
    >
      <div className="page-wrapper" ref={ref}>
        {children}
      </div>
    </PageContext.Provider>
  );
};

export default PageContext;
