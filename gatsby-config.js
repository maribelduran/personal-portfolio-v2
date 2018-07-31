module.exports = {
  siteMetadata: {
    title: "Maribel Duran || Home",
    description: "Maribel Duran Personal Portfolio",
    siteUrl: "https://www.maribelduran.com",
    author: "maribelduran",
    twitter: "maribeldotduran"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-102315844-1",
        head: true
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
};
