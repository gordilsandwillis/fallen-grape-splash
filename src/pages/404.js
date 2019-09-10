import React, { Component } from 'react'
import { navigate } from 'gatsby'
import ATF from 'src/components/ATF'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import { shared } from 'src/mockData'

class NotFound extends Component {
	componentDidMount () {
		setTimeout(() => {
			navigate('/')
		}, 2000)
	}

	render () {
		const { data, location } = this.props
		const { footerData } = shared
		return (
			<main>
				<SEO title="404" />
				<Header hasAtf location={location} />
				<ATF
					headline='Page not found. Redirecting...'
					image={data.ATFimage}
					horizontalAlignCenter={true}
					verticalAlignCenter={true}
				/>
				<Footer isHomePage position='absolute' {...footerData} />
			</main>
		)
	}
}

export default NotFound
// TODO
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
