import React, { FunctionComponent, ReactNode } from "react";
import moment from "moment";
import Page from "./Page";

const TitlePage: FunctionComponent<{
  title: string,
  titleNode?: ReactNode,
  subtitle?: string,
  lecture: number,
  titleClassName?: string,
  children?: ReactNode|ReactNode[],
}> = ({ title, titleNode, subtitle, lecture, titleClassName, children }) => {
  const day = moment().startOf('week').add(lecture-1, 'day');

  return (
    <Page title={title} titleNode={titleNode} subtitle={subtitle} className="page-title" titleClassName={titleClassName} level={1}>
      <div className="grow"></div>
      {children}
      <div className="footer">
        <span className="lecture-subheading">
          {lecture}th lecture, {day.format('ddd MMMM Do')}
        </span>
        <span className="subheading">
          Dee Gmiterko
        </span>
      </div>
    </Page>
  );
}

export default TitlePage;