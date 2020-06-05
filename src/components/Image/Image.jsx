import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image/withIEPolyfill'
import { mq } from 'src/styles'

const SvgWrap = styled.div`
	display: inline-block;
	vertical-align: top;
	svg {
		display: block;
		width: 100%;
		height: 100%;
	}
`

const StyledImage = styled(Img)`
	${ ({ small, medium }) => `
		> div {
			${ medium ? `
				${ mq.largeAndBelow } {
					padding-bottom: ${ 100.0 / medium.aspectRatio }% !important;
				}
			` : `` }
			${ small ? `
				${ mq.mediumAndBelow } {
					padding-bottom: ${ 100.0 / small.aspectRatio }% !important;
				}
			` : `` }
		}
	` }
	img {
		transition: opacity 1s ease-in-out !important;
	}
`

const ResponsiveImage = ({ image, small, medium, large, className, loading, customSizes, critical }) => {
	if (small || medium || large || image) {
		console.log(small)
		let source = []

		if (image) {
			source.push({
				...image.fluid,
				media: `(min-width: ${ mq.largeBreakpoint + 1 }px)`,
				sizes: customSizes || '100vw'
			})
		}

		if (medium) {
			source.push({
				...medium.fluid,
				media: `(min-width: ${ mq.mediumBreakpoint + 1 }px)`,
				sizes: customSizes || '100vw'
			})
		}

		if (small) {
			source.push({
				...small.fluid,
				media: `(min-width: 1px)`,
				sizes: customSizes || '100vw'
			})
		}

		return (
			<StyledImage
				className={className}
				fluid={source}
				small={small}
				medium={medium}
				placeholderStyle={{ display: 'none' }}
				durationFadeIn={1000}
				loading={loading}
				customSizes={customSizes}
				critical={critical}
			/>
		)
	} else {
		return false
	}
}

const Image = ({ image, small, medium, className, sizes, loading, maxWidth, style, critical }) => (
	<div style={{
		width: '100%',
		maxWidth: maxWidth ? maxWidth : '100%',
		display: 'inline-block',
		verticalAlign: 'top'
	}}>
		{image.svgContent ? (
			<SvgWrap className={className} dangerouslySetInnerHTML={{ __html: image.svgContent }}/>
		) : (
			<ResponsiveImage
				image={image}
				small={small}
				medium={medium}
				className={className}
				customSizes={sizes}
				loading={loading}
				critical={critical}
			/>
		)}
	</div>
)

Image.defaultProps = {
	loading: 'lazy',
	sizes: false,
	style: 'default',
	critical: false
}

export {
	ResponsiveImage,
	Image as default
}
