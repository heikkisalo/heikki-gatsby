import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import '../styles/style.styl'


import Footer from '../utils/footer.js'
import Header from '../utils/header.js'





const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Heikki Salo - Visual Design"
      meta={[
        { name: 'description', content: 'Portfolio' },
        { name: 'keywords', content: 'Visual design, web design, ui design, ux design, photography' },
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
