import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import Grid from 'src/components/Grid'
import Image from 'src/components/Image'
import Caption from 'src/components/Caption'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ConditionalRender from 'src/components/ConditionalRender'
import { mq } from 'src/styles'

const MultipleImages = ({
	theme,
	prevTheme,
	nextTheme,
	images,
	lastItem,
	prevFullWidth,
	nextFullWidth
}) => {
	let grid = {
		small: "[1]",
		medium: "[1] [1]",
		large: "[1] [1]",
		sizes: "(max-width: " + mq.mediumBreakpoint + "px) 100vw, 50vw"
	}

	if (images.length === 3) {
		grid = {
			small: "[1]",
			medium: "[1] [1] [1]",
			large: "[1] [1] [1]",
			sizes: "(max-width: " + mq.mediumBreakpoint + "px) 100vw, 33.333vw"
		}
	}

	if (images.length === 4) {
		grid = {
			small: "[1]",
			medium: "[1] [1]",
			large: "[1] [1] [1] [1]",
			sizes: "(max-width: " + mq.mediumBreakpoint + "px) 100vw, 25vw"
		}
	}

	if (images.length === 5) {
		grid = {
			small: "[1]",
			medium: "[1] [1] [1]",
			large: "[1] [1] [1] [1] [1]",
			sizes: "(max-width: " + mq.mediumBreakpoint + "px) 100vw, 20vw"
		}
	}

	if (images.length === 6) {
		grid = {
			small: "[1]",
			medium: "[1] [1] [1]",
			large: "[1] [1] [1] [1] [1] [1]",
			sizes: "(max-width: " + mq.mediumBreakpoint + "px) 100vw, 17vw"
		}
	}

	const maxWidth = {
		normal: '100%',
		web: '100%',
		mobile: '350px'
	}

	return (
		<Section
			setTheme={theme}
			nextTheme={nextTheme}
			prevTheme={prevTheme}
			lastItem={lastItem}
			prevFullWidth={prevFullWidth}
			nextFullWidth={nextFullWidth}
		>
			<Grid small="1 [12] 1">
				<Grid
					small={grid.small}
					medium={grid.medium}
					large={grid.large}
					colGap={[ '0', '30px', '40px' ]}
					rowGap={[ '30px', '40px', '60px' ]}
				>
					{images.map(({ id, caption, ...image }, index) => (
						<ScrollEntrance key={id + '_' + index} delay={index} type={image.type || 'normal'} maxWidth={image.type ? maxWidth[image.type] : '100%'}>
							<div>
								<Image image={image.image} type={image.type || 'normal'} sizes={grid.sizes}/>
							</div>
							<ConditionalRender condition={caption}>
								<Caption>{caption}</Caption>
							</ConditionalRender>
						</ScrollEntrance>
					))}
				</Grid>
			</Grid>
		</Section>
	)
}

export default MultipleImages
