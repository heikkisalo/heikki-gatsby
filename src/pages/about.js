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
    
  	<header className="heikki-image">

		<div className="info">
			<h1 className="header name">Heikki Salo</h1>
			<ul>
				<li>Graphic Design</li>
				<li>UX Design</li>
				<li>Web Design</li>
			</ul>
			<p>Tampere, Finland</p>
		</div>

	</header>

	<ul className="somelinks list-inline">
		<li><a href="https://fi.linkedin.com/in/heikkisalo" target="_blank">LINKEDIN</a></li>
	</ul>

	<section id="resume" className="container">

		
		<div className="container resume-wrapper half">
			<div className="module-container">
				<h1 className="header">WORK EXPERIENCE</h1>
<Work
	name="Tribe Tampere ry"
	url="http://www.tribetampere.com/"
	position="Design Lead"
	time="June 2017 – Present">
	Tribe Tampere launched during the summer 2017 to connect startup communities, services and events around Tampere. At the same time Tribe launched P47 – the physical place to connect entrepreneurial people. My role has molded to take care of general visual identity design and website.
</Work>
<Work
	name="Creativity Squads ry"
	url="http://www.creativitysquads.com/"
	position="Head Designer, Co-Founder"
	time="March 2017 – Present">
	The Creativity Squads is a Finnish non-profit organisation that aims at fostering creativity and other future work-life skills among individuals, communities and organisations.My role includes creating and developing the general visual identity and website design and development. I have also been designing layouts our own workbook.
</Work>
<Work
	name="SuperHelio Oy"
	url="http://www.superhelio.com/"
	position="Designer &amp; Partner"
	time="October 2016 – December 2017">
	Print and digital design, web development and photography. Directly in contact with clients. Board member.Software and design boutique for small and medium size businesses. Visual design, websites and e-commerce sites for clients. Merchandise designs for some the biggest outdoors events in Finland.
</Work>
<Work
	name="SuperHelio Oy"
	url="http://www.superhelio.com/"
	position="Designer"
	time="September 2014 &#8211; October 2016">
	Print and digital design, web development and photography. Directly in contact with clients.Software and design boutique for small and medium size businesses. Visual design, websites and e-commerce sites for clients. Merchandise designs for some the biggest outdoors events in Finland.
</Work>
<Work
	name="High Peak Finland Oy"
	url="http://www.highpeak.fi/"
	position="Graphic Designer"
	time="January 2014 &#8211; August 2014">
	My job included creating marketing material for sales team and updating company’s website, creating artwork and mockups for clients and developing company’s visual identity and redesigning website. Also supervising graphic design interns.
</Work>
<Work
	name="City Of Tampere, Upper secondary education"
	url="http://www.tampere.fi/"
	position="Graphic Designer"
	time="January 2013 &#8211; December 2013">
	Member of marketing and communications team working with seven upper secondary schools and Tredu &#8211; Tampere Vocational College (twenty schools in Tampere area).
</Work>
<Work
	name="City Of Tampere, Upper secondary education"
	url="http://www.tampere.fi/"
	position="Graphic Designer"
	time="January 2012 &#8211; December 2012">
	Member of marketing and communications team working with seven upper secondary schools and Tampereen Ammattiopisto &#8211; Tampere College (five schools in Tampere).
</Work>
<Work
	name="One-o Design"
	url="http://www.oneodesign.com/"
	position="Founder / Graphic Designer"
	time="August 2010 &#8211; December 2014">
	Clothing design and sales pilot.Freelancing as a graphic designer and web designer.
</Work>
<Work
	name="High Peak Finland Oy"
	url="http://www.highpeak.fi/"
	position="Graphic Designer"
	time="June 2009 &#8211; December 2011">
	My job included creating marketing material for sales team and updating company’s website, creating artwork and mockups for clients and developing company’s visual identity and redesigning website. Also supervising graphic design interns.
</Work>

		</div>







			<div className="module-container">
				<h1 className="header">EDUCATION</h1>
				<div className="module">
					<h2 className="organization"><a href="http://www.tamk.fi/">Tampere University Of Applied Sciences</a></h2>
					<h3 className="position">Bachelor of Culture and Arts</h3>
					<div className="time-location"><span className="time">August 2014 &#8211; Present </span><span className="location">Tampere, Finland</span></div>
					<div className="major">Degree Programme in Media and Arts, Interactive Media</div>
					<div className="description">Visual Design, Web Design, UX Design and Motion Graphics</div>
				</div>
				<div className="module">
					<h2 className="organization"><a href="http://www.ael.fi/">AEL</a></h2>
					<h3 className="position">Further Qualification in Printing and publishing</h3>
					<div className="time-location"><span className="time">June 2009 &#8211; October 2011 </span><span className="location">Helsinki, Finland</span></div>
					<div className="major">Layout Design</div>
				</div>
				<div className="module">
					<h2 className="organization"><a href="http://tao.tampere.fi/">Tampere College</a></h2>
					<h3 className="position">Vocational Qualification in Printing and publishing</h3>
					<div className="time-location"><span className="time">August 2006 &#8211; May 2009 </span><span className="location">Finland</span></div>
					<div className="major">Layout Design</div>
				</div>
			</div>

			
			<div className="module-container">
				<h1 className="header">AWARDS</h1>
				<div className="module">
					<h2 className="organization"><a href="http://worldskills.org/">WorldSkills</a></h2>
					<h3 className="position">Medallion for Excellence in Graphic design technology</h3>
					<div className="time-location"><span className="time">2011</span></div>
				</div>
				<div className="module">
					<h2 className="organization"><a href="http://www.skillsfinland.fi/">The Finnish National Skills Competition</a></h2>
					<h3 className="position">Gold medal in Print design</h3>
					<div className="time-location"><span className="time">2009</span></div>
				</div>
			</div>

		</div>

<div className="clearfix"></div>
	</section>

  </div>
)

export default IndexPage
