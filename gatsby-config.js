

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Area 51 Paintball",
    subtitle: "#fortheloveofthegame",
    description: "Located just northeast from Traverse City, Michigan, Area 51 Paintball is Northern Michigan's premier paintball destination."
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "events",
        path: "./src/events/",
      },
      __key: "events",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: "./src/data/",
      },
      __key: "data",
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://cms.protoweb.io`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`event`],
        singleTypes: [],
      },
    },
  ],
};
