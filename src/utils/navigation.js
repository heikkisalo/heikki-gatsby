import React from 'react'
import ListLink from './listlink.js'


const Navigation = () => (
  <div className="navigation">
    <nav>
      <ul>
        <ListLink to="/" name="Home" />
        <ListLink to="/about" name="About" />
        <ListLink to="/contact" name="Contact" />
      </ul>
    </nav>
  </div>
)

export default Navigation