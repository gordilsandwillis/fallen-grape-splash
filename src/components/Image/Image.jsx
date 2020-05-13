import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image/withIEPolyfill'
import { mq } from 'src/styles'

const SvgWrap = styled.div`
	display: inline-block;
	vertical-align: top;
	color: red;
	svg {
		display: block;
		width: 100%;
		height: 100%;
	}
`

const StyledImage = styled(Img)`
	${ ({ fluid }) => `
		> div {
			${ fluid && fluid[1] && `
				${ mq.largeAndBelow } {
					padding-bottom: ${ 100.0 / fluid[1].aspectRatio }% !important;
				}
			` }
			${ fluid && fluid[2] && `
				${ mq.mediumAndBelow } {
					padding-bottom: ${ 100.0 / fluid[2].aspectRatio }% !important;
				}
			` }
		}
	` }
	img {
		transition: opacity 1s ease-in-out !important;
	}
`

const ResponsiveImage = ({ image, small, medium, large, className, loading, customSizes }) => {
	if (small || medium || large || image) {
		let source = null
		if (image) {
			source = image.fluid
			if (customSizes) {
				source.sizes = customSizes
			}
		} else {
			source = [
				{
					...large.fluid,
					media: `(min-width: ${ mq.largeBreakpoint + 1 }px)`,
				},
				{
					...medium.fluid,
					media: `(min-width: ${ mq.mediumBreakpoint + 1 }px)`,
				},
				{
					...small.fluid,
					media: `(min-width: 1px)`,
				}
			]
		}
		return (
			<StyledImage
				className={className}
				fluid={source}
				placeholderStyle={{ display: 'none' }}
				durationFadeIn={1000}
				loading={loading}
				customSizes={customSizes}
			/>
		)
	} else {
		return false
	}
}

const Image = ({ image, small, medium, className, sizes, loading, maxWidth, style }) => (
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
			/>
		)}
	</div>
)

Image.defaultProps = {
	loading: 'lazy',
	sizes: false,
	style: 'default'
}

export {
	ResponsiveImage,
	Image as default
}
