import React, { Component } from 'react'
import ATF from 'src/components/ATF'
import styled from '@emotion/styled'
import { mediaQueries, colors, typography } from 'src/styles'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Hero from 'src/components/Hero'
import ContactCopy from 'src/components/ContactCopy'
import Hr from 'src/components/Hr'
import Footer from 'src/components/Footer'
import { pages, shared } from 'src/mockData'

const PageWrap = styled.div`
  ${ ({ hasATF }) => hasATF === false ? `
		padding-top: 100px;
		${ mediaQueries.largerAndUp } {
			padding-top: 3rem;
		}
	` : `
		padding-top: 0;
		${ mediaQueries.largerAndUp } {
			padding-top: 0;
		}
	` }
`

class Contact extends Component {
	render () {
		const { data, location } = this.props
		const { Contact: { components: { contactData } } } = pages
		const { footerData } = shared
		return (
			<PageWrap>
				<SEO title="Mosaic" />
				<Header logo={data.Logo} theme='light' location={location} />
				<Hero image={data.HeroImage} />
				<ContactCopy {...contactData} />
				<Hr color={colors.black} />
				<Footer
					fixed={true}
					{...footerData}
				/>
			</PageWrap>
		)
	}
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
