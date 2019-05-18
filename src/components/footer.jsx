import React from 'react'

const Footer = () => (
  <footer className='text-center text-gray-600 pb-6'>
    ©{new Date().getFullYear()}, Built with
    <a href="https://www.gatsbyjs.org"> Gatsby </a>
  </footer>
)

export default Footer