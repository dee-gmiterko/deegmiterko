import React from "react";

import { SiteMetadata } from "../types";

interface Props {
  siteMetadata: SiteMetadata;
}

const HeaderAnnouncement = ({ siteMetadata }: Props) => {
  return (
    siteMetadata.announcement.title &&
    siteMetadata.announcement.link && (
      <header className="header-announcement">
        <a href={siteMetadata.announcement.link}>
          {siteMetadata.announcement.title}
        </a>
      </header>
    )
  );
};

export default HeaderAnnouncement;
