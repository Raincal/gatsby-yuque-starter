import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allYuqueDoc.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <div key={node.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={`/post/${node.slug}`}>
                  {title}
                </Link>
              </h3>
              <small>{node.created_at}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.custom_description,
                }}
              />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql `
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
          created_at(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`
