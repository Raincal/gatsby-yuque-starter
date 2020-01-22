import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Cover = ({ post }) => {
  return post.coverImg ? (
    <div className="flex-shrink-0 mb-4 sm:ml-8 sm:mb-0 h-48 sm:h-auto overflow-hidden rounded">
      <Link to={`/post/${post.slug}`}>
        <Img
          className="w-full sm:w-56 rounded"
          alt="Cover"
          fluid={post.coverImg.childImageSharp.fluid}
        />
      </Link>
    </div>
  ) : null
}

Cover.propTypes = {
  post: PropTypes.object.isRequired,
}

export default Cover
