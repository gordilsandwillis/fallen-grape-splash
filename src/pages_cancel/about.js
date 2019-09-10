import React from 'react'
import ATF from 'src/components/ATF'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import Companies from 'src/components/Companies'
import ThreeUp from 'src/components/ThreeUp'
import FourUp from 'src/components/FourUp'
import Slider from 'src/components/Slider'
import { pages, shared } from 'src/mockData'
import { graphql } from 'gatsby'

const About = ({ data, location }) => {
	const { About: { components: { atfData, conceptsData, leadershipData, companyData, awardsData } } } = pages
	const { footerData } = shared
	return (
		<main>
			<SEO title="About" />
			<Header hasAtf location={location} />
			<ATF
				{...atfData}
				image={data.ATFimage}
				horizontalAlignCenter={false}
				showHr
				verticalAlignCenter={false}
			/>
			<ThreeUp {...conceptsData} />
			<FourUp {...leadershipData} />
			<Companies {...companyData} />
			<Slider {...awardsData} />
			<Footer
				{...footerData}
			/>
		</main>
	)
}

export default About

export const PlaceholderQuery = graphql`
	query {
		ATFimage: file(relativePath: { eq: "images/aboutATF.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
	}
`
