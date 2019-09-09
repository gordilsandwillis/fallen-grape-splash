import React from 'react'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Hero from 'src/components/Hero'
import ContactCopy from 'src/components/ContactCopy'
import Footer from 'src/components/Footer'
import { pages, shared } from 'src/mockData'
import { graphql } from 'gatsby'

const Contact = ({ data, location }) => {
	const { Contact: { components: { contactData } } } = pages
	const { footerData } = shared
	return (
		<main>
			<SEO title="Contact" />
			<Header location={location} />
			<Hero image={data.HeroImage} />
			<ContactCopy {...contactData} />
			<Footer
				showHr
				{...footerData}
			/>
		</main>
	)
}

export default Contact

export const PlaceholderQuery = graphql`
	query {
		HeroImage: file(relativePath: { eq: "images/map.png" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
	}
`
