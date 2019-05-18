import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Cover = ({ post }) => {
  return post.cover ? (
    <div className="flex-shrink-0 mb-4 sm:ml-8 sm:mb-0 h-48 sm:h-auto overflow-hidden rounded">
      <Link to={`/post/${post.slug}`}>
        <img className="w-full sm:w-56 rounded" src={post.cover} alt="Cover" />
      </Link>
    </div>
  ) : null
}

Cover.propTypes = {
  post: PropTypes.object.isRequired
}

export default Cover