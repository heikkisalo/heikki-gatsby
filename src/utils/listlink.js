import React from 'react'
import Link from 'gatsby-link'


const ListLink = props => (
  <li><Link to={props.to}>{props.name}</Link></li>
)

export default ListLink