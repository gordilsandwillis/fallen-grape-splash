import React, { Component } from 'react'
import styled from '@emotion/styled'
import { mediaQueries, colors } from 'src/styles'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Slider from 'src/components/Slider'
import ProductGrid from 'src/components/ProductGrid'
import Hr from 'src/components/Hr'
import Footer from 'src/components/Footer'
import { pages, shared } from 'src/mockData'
import ScrollEntrance from 'src/components/ScrollEntrance'

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

class Products extends Component {
	render () {
		const {
			/* data, */
			location
		} = this.props
		const { Products: { components: { productData } } } = pages
		const { footerData } = shared

		return (
			<PageWrap>
				<SEO title="Mosaic" />
				<Header theme='light' location={location} />
				<ScrollEntrance>
					<Slider
						height={400}
						items={productData.items.filter(item => item.slideshow)}
						collapseToArrows={true}
						centered={false}
					/>
					<ProductGrid {...productData} />
					<Hr color={colors.black} />
				</ScrollEntrance>
				<Footer
					{...footerData}
				/>
			</PageWrap>
		)
	}
}

export default Products

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
