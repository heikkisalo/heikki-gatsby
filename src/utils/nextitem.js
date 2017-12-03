import React from 'react'
import Link from 'gatsby-link'


const Nextitem = props => (
	<div className="nextitem">
		<div className="nextitemname"><Link to={props.slug}>Next up: {props.name}</Link></div>
		<Link to={props.slug}><img src={props.image} /></Link>
	</div>
)

export default Nextitem