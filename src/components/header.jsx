import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState } from 'react'

const Header = ({ siteTitle }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="bg-green-500">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4">
        <Link to="/" className="flex items-center no-underline text-white">
          <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
        </Link>

        <button
          className="block sm:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? 'block' : 'hidden'
          } sm:block sm:flex sm:items-center w-full sm:w-auto`}
        >
          <div className="text-sm">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Raincal/gatsby-yuque-starter"
              className="block sm:inline-block mt-4 sm:mt-0 no-underline text-white"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
