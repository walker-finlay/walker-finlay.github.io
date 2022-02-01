module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: "https://walker-finlay.github.io",
    title: "walker-finlay.github.io",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-FZLQL7T4XD", // ga measurement id
        ],
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon_io/favicon-32x32.png",
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
          breakpoints: [750, 1080, 1366, 1920],
        },
      },
    },
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
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHightlight: false,
              languageExtensions: [
                {
                  language: "ipython",
                  extend: "python",
                  insertBefore: {
                    'string-interpolation': {
                      'ipython-prompt': /(>{3} )/,
                    }
                  }
                }
              ],
            }
          }
        ],
      },
    },
  ],
};
