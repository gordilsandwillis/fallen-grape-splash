import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import Grid from 'src/components/Grid'
import Image from 'src/components/Image'
import Caption from 'src/components/Caption'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ConditionalRender from 'src/components/ConditionalRender'

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
		large: "[1] [1]"
	}

	if (images.length === 3) {
		grid = {
			small: "[1]",
			medium: "[1] [1] [1]",
			large: "[1] [1] [1]"
		}
	}

	if (images.length === 4) {
		grid = {
			small: "[1]",
			medium: "[1] [1]",
			large: "[1] [1] [1] [1]"
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
								<Image image={image.image} type={image.type || 'normal'}></Image>
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
