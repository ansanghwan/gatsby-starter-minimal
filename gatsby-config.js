/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Sanghwan Portfolio`,
    description: `10년 경력 웹 퍼블리셔 & Web UI Developer 포트폴리오`,
    siteUrl: `https://sanghwan-portfolio.netlify.app`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    `gatsby-plugin-react-helmet`,

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `project-blog`,
        path: `${__dirname}/project-blog`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["300", "400", "500", "700", "900"],
            },
            {
              family: "Open Sans Condensed",
              variants: ["300", "700"],
            },
          ],
        },
      },
    },
  ],
};
