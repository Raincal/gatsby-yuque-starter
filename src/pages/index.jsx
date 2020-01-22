import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Cover from '../components/cover'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allYuqueDoc.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="sm:px-10 sm:py-2 sm:border border-solid border-gray-300 sm:shadow">
          {posts.map(({ node }) => {
            const title = node.title || node.slug
            return (
              <div
                key={node.slug}
                className="post flex justify-between flex-col-reverse sm:flex-row py-4 border-b border-solid border-gray-300"
              >
                <div>
                  <h3 className="font-medium mb-0">
                    <Link to={`/post/${node.slug}`}>{title}</Link>
                  </h3>
                  <div className="text-sm my-2 text-gray-700">
                    {node.created_at}
                  </div>
                  <p
                    className="text-gray-600"
                    dangerouslySetInnerHTML={{
                      __html: node.custom_description,
                    }}
                  />
                </div>
                <Cover post={node} />
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allYuqueDoc(sort: { fields: [created_at], order: DESC }) {
      edges {
        node {
          title
          slug
          custom_description
          created_at(formatString: "YYYY-MM-DD")
          coverImg {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
