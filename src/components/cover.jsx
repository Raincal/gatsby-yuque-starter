import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Cover = ({ post }) => {
  return post.cover ? (
    <div className="flex-shrink-0 mb-4 sm:ml-8 sm:mb-0 h-48 sm:h-auto overflow-hidden rounded">
      <Link to={`/post/${post.slug}`}>
        <picture>
          <source className="w-full sm:w-56 rounded" type="image/webp" srcSet={`${post.cover}?x-oss-process=image/format,webp`} alt="Cover" />
          <img className="w-full sm:w-56 rounded" alt="Cover" src={post.cover} />
        </picture>
      </Link>
    </div>
  ) : null
}

Cover.propTypes = {
  post: PropTypes.object.isRequired
}

export default Cover