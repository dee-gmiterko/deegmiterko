import { IGatsbyImageData } from "gatsby-plugin-image";

export type SiteMetadata = {
  author: string;
  description: string;
  siteUrl: string;
  title: string;
  keywords: string[];
  tagline: string;
  announcement: {
    title: string;
    link: string;
  };
};

export type SiteData = {
  siteMetadata: SiteMetadata;
};

export type ChatMedia = {
  type: "image" | "audio" | "video" | "panorama";
  url: string;
  alt?: string;
};

export type ChatWebsite = {
  url: string;
  title: string;
  imageUrl: string;
};

export type ChatMessage = {
  author?: string;
  message?: string;
  title?: string;
  reply?: string;
  order?: number;
  pfp?: string;
  media?: ChatMedia;
  website?: ChatWebsite;
};

export type ChatData = {
  conversations: {
    messages: ChatMessage[],
  }[]
}

export type ContentImages = Record<string, IGatsbyImageData>;

export type Anchor = {
  bookId?: string;
  pageIndex?: number;
  title: string;
  hash: string;
};
