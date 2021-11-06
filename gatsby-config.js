const dotenv = require("dotenv");
const path = require("path");

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config();
}

module.exports = {
  siteMetadata: {
    title: `Dee Gmiterko`,
    description: `Personal website`,
    author: `Dominik Gmiterko`,
    siteUrl: `https://deegmiterko.com/`,
    image: 'src/images/banner.jpeg',
    keywords: ['Dominik', 'Gmiterko'],
    tagline: "Coder | Artist | Me",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: path.join(__dirname, `src`, `content`),
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-chat-parse`,
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
        background_color: `#9e8161`,
        theme_color: `#bb5175`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "TODO pixel id here",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-M9GYEZ2DVM",
        enableWebVitalsTracking: true,
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
          return allPages
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
