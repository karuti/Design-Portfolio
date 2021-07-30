module.exports = {
  siteMetadata: {
    title: `Karuti Joy|Product Designer`,
    description: `My product design portfolio`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.karuti.info",
        sitemap: "https://www.karuti.info/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `t69xb0oe82tk`,
        accessToken: `q2_Q4zp0XP7VpnEuXIBB3WpDkZtY-yhewn9S9LGlgr0`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 2530443,
        sv: 6,
      },
    },
    `@contentful/rich-text-react-renderer`,
    `@contentful/rich-text-types`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-remark-social-cards`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
