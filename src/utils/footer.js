import React from 'react'
import Link from 'gatsby-link'
import Navigation from './navigation.js'


const Footer = () => (
  <div id="footer">
    <div className="container">
      <div className="branding">
        <Link to="/#top">
          Heikki Salo
        </Link>
      </div>
      <div className="footernav"><Navigation /></div>
    </div>
  </div>
)

export default Footer
