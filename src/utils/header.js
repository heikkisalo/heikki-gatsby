import React from 'react'
import Link from 'gatsby-link'
import Navigation from './navigation.js'


const Header = () => (
  <div className="navbar">
    <div className="container">
      <h1 className="branding">
        <Link to="/">Heikki Salo</Link>
      </h1>

      <Navigation />

    </div>
  </div>
)

export default Header
