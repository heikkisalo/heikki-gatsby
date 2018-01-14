import React from 'react'
import Link from 'gatsby-link'
import Image from '../utils/image.js'
import Nextitem from '../utils/nextitem.js'


const PortfolioPage = () => (
  <div className="single">

		<Image src="/img/creativitysquads-1.jpg" class="full" />

		<div className="text">
			<h1>Creativity Squads ry</h1>
			<p>The Creativity Squads is a Finnish non-profit organisation that aims at fostering creativity and other future work-life skills among individuals, communities and organisations.</p>
			<p>We offer creative people a community that gathers together like-minded people and new opportunities, anywhere in the world. Our activities are not limited to any age group or status. In fact, the diversity of people joining in our actions has been experienced as one the most valuable things in our activities. Our main focus is to gather together local groups, Creativity Squads, that implement creative activities at their locations.</p>
			<p>In addition to community building, we conduct creative, tailored, workshops and courses to parties such as universities, communities, and organisations.</p>
		</div>

		<Image src="/img/creativitysquads-2.jpg" class="full" />

		<Image src="/img/creativitysquads-3.jpg" class="full" />

		<Image src="/img/creativitysquads-4.jpg" class="full" />

		<Image src="/img/creativitysquads-5.jpg" class="portrait" />

		<Image src="/img/creativitysquads-6.jpg" class="portrait" />

    <Nextitem slug="socnd" name="School of Creativity and Design" image="/img/socnd-1.jpg" />

  </div>
)

export default PortfolioPage
