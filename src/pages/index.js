import React from 'react'
import ATF from 'src/components/ATF'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import { pages, shared } from 'src/mockData'

const Home = ({ data, location }) => {
	const { Home: { components: { atfData, buttonData } } } = pages
	const { footerData } = shared
	return (
		<main>
			<SEO title="Mosaic" />
			<Header hasAtf location={location} />
			<ATF
				{...buttonData}
				{...atfData}
				image={data.ATFimage}
				horizontalAlignCenter={true}
				verticalAlignCenter={true}
			/>
			<Footer position='absolute' {...footerData} />
		</main>
	)
}

export default Home

export const PlaceholderQuery = graphql`
	query {
		ATFimage: file(relativePath: { eq: "images/home.jpg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
	}
`
