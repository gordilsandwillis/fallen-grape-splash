import React, { Component } from 'react'
import ATF from 'src/components/ATF'
import styled from '@emotion/styled'
import { mediaQueries, colors, typography } from 'src/styles'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import List from 'src/components/List'
import ThreeUp from 'src/components/ThreeUp'
import FourUp from 'src/components/FourUp'
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
		const { About: { components: { atfData, conceptsData, leadershipData } } } = pages
		const { footerData, companyData } = shared
		return (
			<PageWrap>
				<SEO title="Mosaic" />
				<Header logo={data.Logo} location={location} />
				<ATF
					{...atfData}
					image={data.ATFimage}
					align='left'
					showHr={true}
					verticalAlign='flex-end'
					gridConfig={{
						small: '[6]',
						medium: '[9] 3',
						large: '[9] 3'
					}}
				/>
				<ThreeUp {...conceptsData} />
				<FourUp {...leadershipData} />
				<List {...companyData} />
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
