import React from 'react'
import Link from 'gatsby-link'

const Work = props => (
	<div className="module">
		<h2 className="organization"><a href={props.url} target="_blank">{props.name}</a></h2>
		<h3 className="position">{props.position}</h3>
		<div className="time">{props.time}</div>
		<div className="description">{props.children}</div>
	</div>
)

const IndexPage = () => (
  <div className="about">
    
  	<header className="heikki-image heikki3">

		<div className="info">
			<h1 className="header name">Heikki Salo</h1>
			<ul>
				<li><a href="mailto:heikki@heikki.co">heikki@heikki.co</a></li>
				<li>+358 40 861 3255</li>
				<li><a href="https://fi.linkedin.com/in/heikkisalo" target="_blank">LinkedIn</a></li>
			</ul>
			<p>Tampere, Finland</p>
		</div>

	</header>


	<section id="coffee" className="container-fluid">
		<div className="row justify-content-center align-items-center">
			<div className="col-sm-8 text-center">
				<h2>What now?</h2>
				<a href="mailto:heikki@heikki.co" className="btn btn-default">Let's grab a coffee</a>
			</div>
		</div>
	</section>

  </div>
)

export default IndexPage
