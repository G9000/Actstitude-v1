require("dotenv").config({
  path: `.env`,
})

const linkResolver = require("./src/utils/LinkResolver")

module.exports = {
  siteMetadata: {
    title: `Actstitude`,
    description: `Actstitude.`,
    author: `@JulioCaesar`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Actstitude`,
        short_name: `Actstitude`,
        start_url: `/`,
        background_color: `#0B0B0B`,
        theme_color: `#f2f2f2`,
        display: `standalone`,
        icon: `src/images/actstitude-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        linkResolver: () => doc => linkResolver(doc),
        fetchLinks: [],
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children
        ) => {},
        schemas: {
          sidebar: require("./src/schemas/sidebar.json"),
          footer: require("./src/schemas/footer.json"),
          home_page: require("./src/schemas/home.json"),
          news: require("./src/schemas/news.json"),
          about: require("./src/schemas/about.json"),
          contact_page: require("./src/schemas/contact.json"),
          career_page: require("./src/schemas/career.json"),
        },
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        mode: "async",
        enableListener: true,
        preconnect: ["https://use.typekit.net"],
        web: [
          {
            name: "proxima-nova, sans-serif",
            file: "https://use.typekit.net/wij1lzu.css",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 100,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
