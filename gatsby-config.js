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
  {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      //trackingId: `ADD YOUR TRACKING ID HERE`,
    },
  },
  // `gatsby-plugin-feed`,
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