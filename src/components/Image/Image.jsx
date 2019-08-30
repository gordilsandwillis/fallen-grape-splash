import React from 'react'
import styled from '@emotion/styled'
import Img from 'gatsby-image/withIEPolyfill'
import { mediaQueries as mq } from 'src/styles'

const StyledImage = styled(Img)`
	img {
		transition: opacity 1s ease-in-out;
	}
	${ ({ image }) =>
		!image &&
		`
		${ mq.largeAndBelow } {
			padding-bottom: ${ ({ fluid }) => 100.0 / fluid[1].aspectRatio }%;
		}
		${ mq.mediumAndBelow } {
			padding-bottom: ${ ({ fluid }) => 100.0 / fluid[2].aspectRatio }%;
		}
	` }
`

const ResponsiveImage = ({ image, small, medium, large, className }) => {
	if (small || medium || large || image) {
		let source = null
		if (image) {
			source = image.childImageSharp.fluid
		} else {
			source = [
				{
					...large.childImageSharp.fluid,
					media: `(min-width: ${ mq.largeBreakpoint }px)`,
				},
				{
					...medium.childImageSharp.fluid,
					aspectRatio: medium.childImageSharp.fluid.aspectRatio,
					media: `(min-width: ${ mq.mediumBreakpoint }px)`,
				},
				{
					...small.childImageSharp.fluid,
					aspectRatio: small.childImageSharp.fluid.aspectRatio,
					media: `(min-width: 1px)`,
				},
			]
		}

		return (
			<StyledImage
				className={className}
				fluid={source}
				placeholderStyle={{ display: 'none' }}
				durationFadeIn={2000}
				// objectFit="cover"
				// objectPosition="50% 50%"
			/>
		)
	} else {
		return false
	}
}

const Image = ({ small, medium, large, image, className }) => (
	<ResponsiveImage
		image={image}
		small={small}
		medium={medium}
		large={large}
		className={className}
	/>
)

export { ResponsiveImage, Image as default }
