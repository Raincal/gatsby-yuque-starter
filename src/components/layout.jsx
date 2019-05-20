import React from 'react'
import Header from './header'
import Footer from './footer'

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div className="flex flex-col min-h-screen">
        <Header siteTitle={title} />

        <div className="flex flex-col flex-1 max-w-4xl mx-auto px-4 pb-6 sm:p-8 w-full">
          {children}
        </div>

        <Footer />
      </div>
    )
  }
}

export default Layout
