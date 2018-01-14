import React from 'react'
import Link from 'gatsby-link'

const PortfolioItem = props => (
	<div className="portfolio-item">
		<Link to={props.slug}>
			<div className="imgcontainer"><img src={props.img} /></div>
		</Link>
		<h2 className="title"><Link to={props.slug}>{props.children}</Link></h2>
		
	</div>
)

const IndexPage = () => (
  <div id="top" className="home">
  	<header className="heikki-image heikki2">

		<div className="info">
			<h1 className="hugetitle">Hello!</h1>
			<h3>I'm Heikki.</h3>
		</div>

	</header>

	<section className="whatido">
		<div>Visual Design | UI Design | Web Design</div>
	</section>

    <div className="portfolioarea">

    	<PortfolioItem
	    	slug="tribe"
	    	img="/img/tribe-1.jpg"
	    >Tribe Tampere</PortfolioItem>

	    <PortfolioItem
	    	slug="creativitysquads"
	    	img="/img/creativitysquads-1.jpg"
	    >Creativity Squads</PortfolioItem>

	    <PortfolioItem
	    	slug="socnd"
	    	img="/img/socnd-1.jpg"
	    >School of Creativity and Design</PortfolioItem>

	    <PortfolioItem
	    	slug="highpeak"
	    	img="/img/highpeak-1.jpg"
	    >High Peak Ideakuvasto</PortfolioItem>

	    <PortfolioItem
	    	slug="idrive"
	    	img="/img/idrive-1.jpg"
	    >Nokian autokoulu I Drive</PortfolioItem>

	    <PortfolioItem
	    	slug="oneo"
	    	img="/img/oneo-1.jpg"
	    >One-o Design</PortfolioItem>

	    <PortfolioItem
	    	slug="logos"
	    	img="/img/logos-1.jpg"
	    >Logos</PortfolioItem>

    </div>

    <div className="clearfix"></div>

  </div>
)

export default IndexPage
