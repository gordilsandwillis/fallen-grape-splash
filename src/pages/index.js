import React, { Component } from 'react'
import ATF from 'src/components/ATF'
import styled from '@emotion/styled'
import { mediaQueries as mq } from 'src/styles'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'

const PageWrap = styled.div`
	${ ({ hasATF }) => hasATF === false ? `
		padding-top: 100px;
		${ mq.largerAndUp } {
			padding-top: 3rem;
		}
	` : `
		padding-top: 0;
		${ mq.largerAndUp } {
			padding-top: 0;
		}
	` }
`

class Home extends Component {
	render () {
		const { data, location } = this.props

		return (
			<PageWrap>
				<SEO title="Mosaic" />
				<Header location={location} />
				<ATF
					headline="Headline Text"
					text="Example descriptive text"
					image={data.ATFimage}
				/>
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
