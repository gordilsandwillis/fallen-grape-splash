import React, { Component } from 'react'
import ATF from 'src/components/ATF'
import styled from '@emotion/styled'
import { mediaQueries } from 'src/styles'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import List from 'src/components/List'
import ThreeUp from 'src/components/ThreeUp'
import FourUp from 'src/components/FourUp'
import Slider from 'src/components/Slider'
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

class About extends Component {
	render () {
		const { data, location } = this.props
		const { About: { components: { atfData, conceptsData, leadershipData, companyData, awardsData } } } = pages
		const { footerData } = shared
		return (
			<PageWrap>
				<SEO title="Mosaic" />
				<Header hasAtf location={location} />
				<ATF
					maxWidth='14em'
					maxWidthText='25em'
					{...atfData}
					image={data.ATFimage}
					align='left'
					showHr={true}
					verticalAlign='flex-end'
					gridSettings={{
						small: '[6]',
						medium: '[9] 3',
						large: '[9] 3'
					}}
				/>
				<ThreeUp {...conceptsData} />
				<FourUp {...leadershipData} />
				<List {...companyData}
					gridSettings={{
						large: '[4] 1 [7]',
						medium: '[4] 1 [7]',
						small: '[6]'
					}}
				/>
				<Slider {...awardsData} />
				<Footer
					fixed={true}
					{...footerData}
				/>
			</PageWrap>
		)
	}
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
