import React from 'react'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import Section from 'src/components/Section'
import Image from 'src/components/Image'
import ThemeSelector from 'src/components/ThemeSelector'
import Grid from 'src/components/Grid'
import Caption from 'src/components/Caption'
import ConditionalRender from 'src/components/ConditionalRender'
import { colors, mediaQueries as mq } from 'src/styles'

const WideImageWrap = styled(ThemeSelector)`
	position: relative;
	z-index: 2;
`

const CaptionOverlay = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 1em;
	z-index: 3;
	${ mq.mediumAndBelow } {
		position: relative;
		bottom: auto;
		top: 100%;
		z-index: 1;
		background: ${ colors.darkBrown };
		padding-top: 8px;
	}
`

const CaptionBlock = styled.div`
`

const WideImage = ({ image, nextSectionBg, fullWidth, theme, prevTheme, nextTheme, caption }) => {
	if (!fullWidth) {
		return (
			<Section
				setTheme={theme}
				nextTheme={nextTheme}
				prevTheme={prevTheme}
			>
				<Grid small="1 [12] 1">
						<Image
							image={image}
							alt={image.description || image.title}
						/>
					<ConditionalRender condition={caption}>
						<Caption>{caption}</Caption>
					</ConditionalRender>
				</Grid>
			</Section>
		)
	}

	return (
		<Section
			setTheme={theme}
			nextTheme={nextTheme}
			prevTheme={prevTheme}
		>
			<WideImageWrap setTheme={theme}>
				<div>
					<ConditionalRender condition={image}>
						<Image
							image={image}
							alt={image.description || image.title}
						/>
					</ConditionalRender>
				</div>
				<ConditionalRender condition={caption}>
					<Grid small="1 [12] 1">
						<div>
							<CaptionBlock>
								<Caption>{caption}</Caption>
							</CaptionBlock>
						</div>
					</Grid>
				</ConditionalRender>
			</WideImageWrap>
		</Section>
	)
}

WideImage.defaultProps = {
	fullWidth: false
}

export default WideImage
