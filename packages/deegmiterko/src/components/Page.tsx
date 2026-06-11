import React, { FunctionComponent, ReactNode, useMemo } from "react";
import slugify from "slugify";

import clsx from "clsx";
import useAnchor from "../hooks/useAnchor";

export type PageType = {
  id?: string;
  title: string;
  titleNode?: ReactNode;
  subtitle?: string;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  titleClassName?: string;
  children: ReactNode | ReactNode[];
};

const Page: FunctionComponent<PageType> = ({
  id,
  title,
  titleNode,
  subtitle,
  level = 3,
  className,
  titleClassName,
  children,
}) => {
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

  const titleContent = subtitle ? (
    <>
      {title} <p className="subtitle">{subtitle}</p>
    </>
  ) : (
    title
  );

  return (
    <div ref={ref} className={clsx("page", className)}>
      {titleNode ??
        (level == 1 ? (
          <h2 className={clsx(titleClassName)} id={pageId}>
            {titleContent}
          </h2>
        ) : level == 2 ? (
          <h3 className={clsx("bigger", titleClassName)} id={pageId}>
            {titleContent}
          </h3>
        ) : level == 3 ? (
          <h3 className={clsx(titleClassName)} id={pageId}>
            {titleContent}
          </h3>
        ) : level == 4 ? (
          <h4 className={clsx(titleClassName)} id={pageId}>
            {titleContent}
          </h4>
        ) : null)}
      {children}
    </div>
  );
};

export default Page;
