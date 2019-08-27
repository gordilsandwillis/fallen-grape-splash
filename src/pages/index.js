import React, { Component } from 'react'
import ATF from 'src/components/ATF'
import styled from '@emotion/styled'
import { mediaQueries, colors, typography } from 'src/styles'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
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

class Home extends Component {
	render () {
		const { data, location } = this.props
		const { Home: { components: { atfData, buttonData } } } = pages
		const { footerData } = shared
		console.log(location)
		return (
			<PageWrap>
				<SEO title="Mosaic" />
				<Header logo={data.Logo} location={location} />
				<ATF
					{...buttonData}
					{...atfData}
					image={data.ATFimage}
					hasFooter={true}
					align='center'
					gridConfig={{
						small: '1 [10] 1',
						medium: '1 [10] 1',
						large: '[6]'
					}}
				/>
				<Footer {...footerData} />
			</PageWrap>
		)
	}
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
