

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.area51paintball.com",
    title: "Area 51 Paintball",
    defaultTitle: "Area 51",
    titleTemplate: "%s · Outdoor Paintball located near Mancelona, Michgan",
    subtitle: "#fortheloveofthegame",
    description: "Located just northeast from Traverse City, Michigan, Area 51 Paintball is Northern Michigan's premier paintball destination.",
    facebookUsername: "A51Paintball",
    image: "/images/area-51-logo.jpg"
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
        name: "data",
        path: "./src/data/",
      },
      __key: "data",
    },
    `gatsby-transformer-remark`,
    {
      resolve: 'gatsby-plugin-favicons',
      options: {
        logo: './src/favicon.ico',
        appName: 'Area 51 Paintball',
        background: '#fff',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          yandex: false,
          windows: false
        }
      }
    }
  ],
};
