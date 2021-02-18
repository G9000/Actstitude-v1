require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Actstitude`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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
          home: require("./src/schemas/homepage.json"),
          homepage_testing: require("./src/schemas/home.json"),
          services: require("./src/schemas/services.json"),
          clientele: require("./src/schemas/clientele.json"),
          call_to_action: require("./src/schemas/cta.json"),
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
