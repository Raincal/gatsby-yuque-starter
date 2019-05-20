import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.yuqueDoc
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={post.title} description={post.custom_description} />
        <div className="max-w-3xl md:mx-auto w-full">
          <h1 className="text-2xl sm:text-4xl mt-4 sm:mt-0 leading-tight">
            {post.title}
          </h1>
          <p className="mb-6">{post.created_at}</p>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.childMarkdownRemark.html }}
          />

          <ul className="flex justify-between py-8 border-t border-b mt-8">
            <li className="w-1/2 px-3 -ml-3">
              {previous && (
                <Link to={`/post/${previous.slug}`} rel="prev">
                  <h6 className="sm:text-base mb-0 hover:text-gray-800">
                    ← {previous.title}
                  </h6>
                </Link>
              )}
            </li>
            <li className="w-1/2 px-3 -mr-3 text-right">
              {next && (
                <Link to={`/post/${next.slug}`} rel="next">
                  <h6 className="sm:text-base mb-0 hover:text-gray-800">
                    {next.title} →
                  </h6>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    yuqueDoc(slug: { eq: $slug }) {
      title
      slug
      custom_description
      created_at(formatString: "YYYY-MM-DD")
      childMarkdownRemark {
        html
      }
    }
  }
`
