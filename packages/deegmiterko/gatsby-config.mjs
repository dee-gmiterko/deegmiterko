import dotenv from "dotenv";
import path from "path";

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

const config = {
  siteMetadata: {
    title: `Dee Gmiterko – Artist, Coder, Me`,
    description: `Exploring the world and creating stuff. I'm just a fey who loves to code, create art, and share my experiences with the world.`,
    author: `Dominik Gmiterko`,
    siteUrl: `https://deegmiterko.com/`,
    keywords: ['Dominik Gmiterko', 'Dominik', 'Gmiterko', 'artist', 'coder', 'me', 'project', 'programming', 'creative', 'generative design', 'game development', 'resume', 'website development'],
    tagline: "Coder | Artist | Me",
    announcement: {
      title: '',// "I'm into generative design",
      link: '',//"https://deegmiterko.com/generative-design",
    }
  },
  plugins: [
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contentImages`,
        path: path.join(import.meta.dirname, `src`, `images/content`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pageThumbnails`,
        path: path.join(import.meta.dirname, `src`, `images/page-thumbnails`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(import.meta.dirname, `src`, `content`),
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          backgroundColor: `white`,
          blurredOptions: {
            width: 100,
            toFormat: 'webp',
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `@deegmiterko/gatsby-transformer-chat-parse`,
      options: {
        users: [
          {
            name: 'Me',
            color: '#863648',
          },
          {
            name: 'You',
            color: '#a6a6a8',
          },
        ]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dee Gmiterko`,
        short_name: `Dee Gmiterko`,
        start_url: `/`,
        background_color: `#38174A`,
        theme_color: `#E0C65D`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-facebook-multi-pixels`,
      options: [
        {
          dev: false,
          alias: 'main-pixel',
          pixelId: '928689911405331',
          viewContent: true,
          pageView: true,
        },
      ],
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-M9GYEZ2DVM",
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
        `,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.filter(page => !page.path.startsWith('/render/'))
        },
        resolveSiteUrl: ({site}) => site.siteMetadata.siteUrl,
        serialize: ({ path }) => {
          return {
            url: path,
          }
        },
      }
    }
  ],
}

export default config;
