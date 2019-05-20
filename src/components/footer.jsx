import React from 'react'

const Footer = () => (
  <footer className="text-center text-gray-600 pb-6">
    ©{new Date().getFullYear()}, Built with
    <a
      className="text-blue-500"
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.gatsbyjs.org"
    >
      {' '}
      Gatsby
    </a>
  </footer>
)

export default Footer
