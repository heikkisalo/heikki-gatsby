import React from 'react'
import Link from 'gatsby-link'
import Image from '../utils/image.js'
import Nextitem from '../utils/nextitem.js'


const PortfolioPage = () => (
  <div className="single">

		<Image src="/img/tribe-1.jpg" class="full" />

		<div className="text">
			<h1>Tribe Tampere ry</h1>
			<p>Tribe Tampere launched during the summer 2017 to connect startup communities, services and events around Tampere. At the same time Tribe launched P47 – the physical place to connect entrepreneurial people.</p>
			<p>Visual identity needed to be easy to use and implement by different people in the future. Tribe Tampere is ran by volunteers, at some point the visual identity might be implemented by someone less involved with the core idea – it can't be too complex.</p>
		</div>

		<Image src="/img/tribe-2.jpg" class="full" />

		<Image src="/img/tribe-3.jpg" class="portrait" />

		<Image src="/img/tribe-4.jpg" class="portrait" />

		<Image src="/img/tribe-5.jpg" class="full" />

		<Image src="/img/tribe-6.jpg" class="portrait" />

		<Image src="/img/tribe-7.jpg" class="portrait" />

		<Image src="/img/tribe-8.jpg" class="full" />

    <Nextitem 
    	slug="creativitysquads"
    	name="Creativity Squads"
    	image="/img/creativitysquads-1.jpg" />

  </div>
)

export default PortfolioPage
