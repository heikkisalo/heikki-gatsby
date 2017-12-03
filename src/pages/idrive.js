import React from 'react'
import Link from 'gatsby-link'
import Image from '../utils/image.js'
import Nextitem from '../utils/nextitem.js'


const PortfolioPage = () => (
  <div className="single">

		<Image src="/img/idrive-1.jpg" class="full" />

		<div className="text">
			<h1>Nokian Autokoulu I Drive</h1>
			<p>I Drive is a driving school based in Nokia. They wanted to appear attractive, and as local competitors appeared a bit old school, we went on with a more trendy and technologically on point graphical identity.</p>
			<p>My part has been visual identity, photography and web design.</p>
		</div>

		<Image src="/img/idrive-2.jpg" class="full" />

		<Image src="/img/idrive-6.jpg" class="portrait" />

		<Image src="/img/idrive-3.jpg" class="portrait" />

		<Image src="/img/idrive-5.jpg" class="portrait" />

		<Image src="/img/idrive-7.jpg" class="portrait" />

    <Nextitem slug="oneo" name="One-o Design" image="/img/oneo-1.jpg" />

  </div>
)

export default PortfolioPage
