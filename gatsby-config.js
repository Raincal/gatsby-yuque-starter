const siteConfig = require('./config.js')

module.exports = {
  siteMetadata: {
    siteUrl: siteConfig.url,
    title: siteConfig.title,
    subtitle: siteConfig.subtitle,
    author: siteConfig.author,
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-source-yuque',
      options: {
        login: siteConfig.yuque.login,
        repo: siteConfig.yuque.repo,
        mdNameFormat: 'slug',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-yuque-images',
            options: {
              maxWidth: 768,
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: siteConfig.googleAnalyticsId,
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description: subtitle
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allYuqueDoc } }) => {
              return allYuqueDoc.edges.map(edge => {
                return Object.assign({}, edge.node.childMarkdownRemark.frontmatter, {
                  description: edge.node.custom_description,
                  date: edge.node.created_at,
                  url: site.siteMetadata.siteUrl + '/post/' + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + '/post/' + edge.node.slug,
                  custom_elements: [{ 'content:encoded': edge.node.childMarkdownRemark.html }],
                })
              })
            },
            query: `
            {
              allYuqueDoc(sort: { fields: [created_at], order: DESC }) {
                edges {
                  node {
                    slug
                    custom_description
                    created_at
                    childMarkdownRemark {
                      frontmatter {
                        title
                      }
                      html
                    }
                  }
                }
              }
            }
            `,
            output: '/rss.xml',
            title: siteConfig.title,
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Yuque Starter',
        short_name: 'Yuque',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#48bb78',
        display: 'standalone',
        icon: 'static/yuque.png',
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        tailwind: true,
        whitelist: ['blockquote', 'ol', 'hr', 'img'],
        purgeOnly: ['src/css/style.css']
      }
    },
    // {
    //   resolve: '@bundle-analyzer/gatsby-plugin',
    //   options: { token: '8083d17147ec9ccd475e3d8603cdfadadd025cff' },
    // },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
  ],
}