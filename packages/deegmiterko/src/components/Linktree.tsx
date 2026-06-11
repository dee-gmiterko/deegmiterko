import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import Item from "./LinktreeItem";
import { SiteMetadata } from "../types";

interface LinktreeLink {
  title: string;
  icon: IconDefinition;
  link: string;
}

interface LinktreeCategory {
  name: string;
  links: LinktreeLink[];
}

interface Props {
  categoriesLinks: LinktreeCategory[];
  siteMetadata: SiteMetadata;
}

const Linktree = ({ categoriesLinks, siteMetadata }: Props) => {
  return (
    <div className="linktree">
      <div className="profile">
        <StaticImage
          src="../images/profile.jpg"
          layout="constrained"
          alt={siteMetadata.author}
        />
        <h2>{siteMetadata.title}</h2>
      </div>
      <div className="container">
        {categoriesLinks.map((category, i_1) => (
          <div key={i_1}>
            <h3>{category.name}</h3>
            {category.links.map((item, index) => (
              <Item
                key={index}
                link={item.link}
                title={item.title}
                icon={item.icon}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Linktree;
