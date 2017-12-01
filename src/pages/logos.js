import React from 'react'
import Link from 'gatsby-link'
import Nextitem from '../utils/nextitem.js'

const Image = props =>
  <div className="animate" className={props.containerclass}>
    <img src={props.src} className={props.class} alt="" />
  </div>

const PortfolioPage = () => (
  <div className="single">

		<Image src="/img/logos-1.jpg" class="full" />

		<div className="text">
			<h1>Logos</h1>
			<p>Few of the most recent logo designs.</p>
		</div>

		<Image src="/img/logos-2.jpg" class="full" />

		<Image src="/img/logos-3.jpg" class="full" />

		<Image src="/img/logos-4.gif" class="full" containerclass="gif" />

		<Image src="/img/logos-5.jpg" class="full" />

		<Image src="/img/logos-6.jpg" class="full" />

		<Image src="/img/logos-7.jpg" class="full" />

    <Nextitem slug="about" name="About" image="/img/heikki-bg-1.jpg" />

  </div>
)

export default PortfolioPage
