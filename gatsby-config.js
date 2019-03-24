module.exports = {
  siteMetadata: {
    title: 'Gatsby Yuque Starter',
    author: 'Raincal',
    description: '海阔凭鱼跃，天高语雀飞',
    siteUrl: 'https://yuque.netlify.com/',
    social: {
      github: 'Raincal'
    },
  },
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      path: `${__dirname}/content/assets`,
      name: 'assets',
    },
  }, {
    resolve: 'gatsby-source-yuque',
    options: {
      login: 'yuque',
      repo: 'blog',
      mdNameFormat: 'slug',
    },
  },
  {
    resolve: 'gatsby-transformer-remark',
    options: {
      plugins: [{
        resolve: 'gatsby-remark-yuque-images',
        options: {
          maxWidth: 590,
        },
      },
      {
        resolve: 'gatsby-remark-images',
        options: {
          maxWidth: 590,
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
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  // {
  //   resolve: 'gatsby-plugin-google-analytics',
  //   options: {
  //     //trackingId: `ADD YOUR TRACKING ID HERE`,
  //   },
  // },
  {
    resolve: 'gatsby-plugin-feed',
    options: {
      query: `
          {
            site {
              siteMetadata {
                title
                description
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
                url: site.siteMetadata.siteUrl + 'post/' + edge.node.slug,
                guid: site.siteMetadata.siteUrl + 'post/' + edge.node.slug,
                custom_elements: [{ 'content:encoded': edge.node.childMarkdownRemark.html }],
              })
            })
          },
          query: `
            {
              allYuqueDoc {
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
          title: 'Gatsby Yuque Starter',
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
      theme_color: '#663399',
      display: 'minimal-ui',
      icon: 'content/assets/gatsby-icon.png',
    },
  },
  'gatsby-plugin-offline',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-typography',
    options: {
      pathToConfigModule: 'src/utils/typography',
    },
  },
  ],
}