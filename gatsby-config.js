require("dotenv").config({
  path: `.env`,
})

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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
        accessToken: process.env.GATSBY_PRISMIC_ACCESS_TOKEN,
        schemas: {
          sidebar: require("./src/schemas/sidebar.json"),
          footer: require("./src/schemas/footer.json"),
          home_page: require("./src/schemas/home.json"),
          news: require("./src/schemas/news.json"),
          about: require("./src/schemas/about.json"),
          contact_page: require("./src/schemas/contact.json"),
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
