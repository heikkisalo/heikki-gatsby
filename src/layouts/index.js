import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import '../styles/style.styl'

import '../addons/navigation-toggle.js'

const Header = () => (
  <div className="navbar">
    <div className="container">
      <h1 className="branding">
        <Link to="/">Heikki Salo</Link>
      </h1>
      <div className="togglenavi">
        <button id="trigger-overlay" type="button">Open Overlay</button>
      </div>
    </div>
  </div>
)

const Footer = () => (
  <div id="footer">
    <div className="container">
      <div className="branding">
        <Link to="/">
          Heikki Salo
        </Link>
      </div>
    </div>



    <div className="overlay overlay-door">
      <button type="button" className="overlay-close">Close</button>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>


  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />

    <div className="content">
      {children()}
    </div>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
