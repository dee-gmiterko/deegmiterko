import React from "react";
import { graphql } from "gatsby";
import { faUser, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faPatreon,
  faTiktok,
  faTwitter,
  faYoutube,
  faSteam,
  faDeviantart,
} from "@fortawesome/free-brands-svg-icons";

import Seo from "../components/Seo";
import Linktree from "../components/Linktree";
import HeaderAnnouncement from "../components/HeaderAnnouncement";
import { SiteData } from "../types";

const TreePage = ({ data: { site } }: { data: { site: SiteData }}) => {
  const categoriesLinks = [
    {
      name: "Website",
      links: [
        {
          title: "About",
          icon: faUser,
          link: "/",
        },
        {
          title: "Contact",
          icon: faAddressCard,
          link: "/#contact",
        },
      ],
    },
    {
      name: "Get updates",
      links: [
        {
          title: "Instagram",
          icon: faInstagram,
          link: "https://instagram.com/dee.gmiterko",
        },
        {
          title: "Twitter",
          icon: faTwitter,
          link: "https://twitter.com/dee.gmiterko",
        },
        {
          title: "TikTok",
          icon: faTiktok,
          link: "https://tiktok.com/@dee.gmiterko",
        },
      ],
    },
    {
      name: "Content",
      links: [
        {
          title: "Youtube",
          icon: faYoutube,
          link: "https://www.youtube.com/channel/UCdwV05iipo9wIP_P2qpTWRw",
        },
        {
          title: "LinkedIn",
          icon: faLinkedin,
          link: "https://www.linkedin.com/in/dominik-gmiterko",
        },
        {
          title: "Facebook",
          icon: faFacebook,
          link: "https://www.facebook.com/dee.gmiterko",
        },
        {
          title: "Github",
          icon: faGithub,
          link: "https://github.com/dee-gmiterko",
        },
        {
          title: "DeviantArt",
          icon: faDeviantart,
          link: "https://www.deviantart.com/dee-gmiterko",
        },
      ],
    },
    {
      name: "Support",
      links: [
        {
          title: "Patreon",
          icon: faPatreon,
          link: "https://patreon.com/dee_gmiterko",
        } /*,
        {
          title: 'Onlyfans',
          icon: faLock,
          link: 'https://onlyfans.com/dee.gmiterko',
        }*/,
      ],
    },
    {
      name: "Meet",
      links: [
        {
          title: "Steam",
          icon: faSteam,
          link: "https://steamcommunity.com/profiles/76561198065797528",
        },
        // {
        //   title: 'OpenSea',
        //   icon: faShip,
        //   link: 'https://opensea.io/dee_gmiterko',
        // }
      ],
    },
  ];

  return (
    <>
      <HeaderAnnouncement siteMetadata={site.siteMetadata} />
      <div className="page-tree">
        <main>
          <Linktree
            categoriesLinks={categoriesLinks}
            siteMetadata={site.siteMetadata}
          />
        </main>
      </div>
    </>
  );
};

export default TreePage;

export const Head = ({ data: { site } }: { data: { site: SiteData }}) => (
  <Seo title={"Link tree"} siteMetadata={site.siteMetadata} canGoDark={true} />
);

export const pageQuery = graphql`
  query TreeQuery {
    site {
      siteMetadata {
        author
        description
        siteUrl
        title
        keywords
        announcement {
          title
          link
        }
      }
    }
  }
`;
