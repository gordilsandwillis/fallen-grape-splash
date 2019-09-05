import React, { Component } from 'react'
import styled from '@emotion/styled'
import { mediaQueries, colors } from 'src/styles'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Slider from 'src/components/Slider'
import ProductsGrid from 'src/components/ProductsGrid'
import Hr from 'src/components/Hr'
import Footer from 'src/components/Footer'
import { pages, shared } from 'src/mockData'
import { graphql } from 'gatsby'

const Products = ({ location }) => {
	const { Products: { components: { productData } } } = pages
	const { footerData } = shared
	const items = productData.items.filter(item => item.slideshow)
	return (
		<main>
			<SEO title="Mosaic" />
			<Header location={location} />
			<Slider
				imageSlideshow
				horizontalTextAlignCentered={false}
				items={items}
			/>
			<ProductsGrid {...productData} />
			<Footer
				showHr
				{...footerData}
			/>
		</main>
	)
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
