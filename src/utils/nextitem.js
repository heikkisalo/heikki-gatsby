import React from 'react'
import Link from 'gatsby-link'


const Nextitem = props => (
	<div className="nextitem">
		<Link to={props.slug}><img src={props.image} /></Link>
		<div className="nextitemname"><Link to={props.slug}>Next {props.name}</Link></div>
	</div>
)

export default Nextitem