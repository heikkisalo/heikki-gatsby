import React from 'react'
import Link from 'gatsby-link'
import Image from '../utils/image.js'
import Nextitem from '../utils/nextitem.js'


const PortfolioPage = () => (
  <div className="single">

		<Image src="/img/oneo-4.jpg" class="full" />

		<div className="text">
			<h1>One-o Design</h1>
			<p>One-o Design was my own clothing line project for couple years, including my first touch to the ecommerce experience in 2011.</p>
		</div>

		<Image src="/img/oneo-1.jpg" class="full" />

		<Image src="/img/oneo-2.jpg" class="portrait" />

		<Image src="/img/oneo-3.jpg" class="full" />

		<Image src="/img/oneo-5.jpg" class="portrait" />

		<Image src="/img/oneo-6.jpg" class="portrait" />

		<Image src="/img/oneo-7.jpg" class="full" />

		<Image src="/img/oneo-8.jpg" class="portrait" />

    <Nextitem slug="logos" name="Logos" image="/img/logos-1.jpg" />

  </div>
)

export default PortfolioPage
