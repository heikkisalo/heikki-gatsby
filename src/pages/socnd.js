import React from 'react'
import Link from 'gatsby-link'
import Image from '../utils/image.js'
import Nextitem from '../utils/nextitem.js'


const PortfolioPage = () => (
  <div className="single">

		<Image src="/img/socnd-1.jpg" class="full" />

		<div className="text">
			<h1>School of Creativity and Design</h1>
			<p>The School of Creativity and Design is about collaboratively learning an open and encouraging hands-on mindset with which learners can realize their potential, find meaningful work, develop their readiness for the changing world, and enjoy life. Life is about you!</p>
		</div>

		<Image src="/img/socnd-2.jpg" class="full" />

		<Image src="/img/socnd-3.gif" class="portrait" />

		<Image src="/img/socnd-4.jpg" class="full" />

		<Image src="/img/socnd-5.jpg" class="full" />

		<Image src="/img/socnd-6.jpg" class="full" />

    <Nextitem slug="highpeak" name="High Peak Ideakuvasto" image="/img/highpeak-1.jpg" />

  </div>
)

export default PortfolioPage
