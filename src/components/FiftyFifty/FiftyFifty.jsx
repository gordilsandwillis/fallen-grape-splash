import React from 'react'
import Section from 'src/components/Section'
import Grid from 'src/components/Grid'
import ConditionalRender from 'src/components/ConditionalRender'
import Image from 'src/components/Image'
import Video from 'src/components/Video'
import TextLockup from 'src/components/TextLockup'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { mq } from 'src/styles'

const FiftyFifty = ({
	theme,
	prevTheme,
	nextTheme,
	eyebrow,
	headline,
	headlineSize,
	text,
	textSize,
	imagePosition,
	image,
	video,
	buttons,
	additions,
	alignment
}) => {

	let gridSetup = {
		small: '1 [12] 1',
		medium: '1 [6] 1 [5] 1',
		large: '2 [11] 2 [11] 2',
		extraLarge: '3 [10] 2 [10] 3',
		imagePosition: 'ltr',
		textGrid: '[1]'
	}

	if (imagePosition === 'right') {
		gridSetup = {
			small: '1 [12] 1',
			medium: '1 [6] 1 [5] 1',
			large: '2 [11] 2 [11] 2',
			extraLarge: '3 [10] 2 [10] 3',
			imagePosition: 'rtl',
			textGrid: '[1]'
		}
	} else if (imagePosition === 'hangLeft') {
		gridSetup = {
			small: '[13] 1',
			medium: '[7] 1 [5] 1',
			large: '[13] 2 [11] 2',
			extraLarge: '[13] 2 [10] 3',
			imagePosition: 'ltr',
			textGrid: '[12] 1'
		}
	} else if (imagePosition === 'hangRight') {
		gridSetup = {
			small: '[13] 1',
			medium: '[7] 1 [5] 1',
			large: '[13] 2 [11] 2',
			extraLarge: '[13] 2 [10] 3',
			imagePosition: 'rtl',
			textGrid: '[12] 1'
		}
	}

	return (
		<Section
			setTheme={theme}
			prevTheme={prevTheme}
			nextTheme={nextTheme}
		>
			<Grid
				small={gridSetup.small}
				medium={gridSetup.medium}
				large={gridSetup.large}
				extraLarge={gridSetup.extraLarge}
				gridDirection={gridSetup.imagePosition}
				rowGap="7vw"
				vAlign="center"
			>	
				<ScrollEntrance>
					<ConditionalRender condition={image && !video}>
						<div>
							<Image
								image={image.image}
								small={image.small}
								medium={image.medium}
								large={image.large}
								alt={(image && image.description) || (image && image.title)}
								sizes={"(max-width: " + mq.mediumBreakpoint + "px) 100vw, 50vw"}
							/>
						</div>
					</ConditionalRender>
					<ConditionalRender condition={video}>
						<div>
							<Video url={video && video.file.url} playing={true} loop={true}/>
						</div>
					</ConditionalRender>
				</ScrollEntrance>
				<Grid
					small={gridSetup.textGrid}
					medium="[1]"
				>
					<TextLockup
						alignment="left"
						specialList
						headline={headline}
						headlineSize={headlineSize}
						alignment={alignment}
						text={text}
						textSize={textSize}
						eyebrow={eyebrow}
						buttons={buttons}
						theme={theme}
						additions={additions}
					/>
				</Grid>
			</Grid>
		</Section>
	)
}

FiftyFifty.defaultProps = {
	imagePosition: 'left',
	additions: false,
	headlineSize: 'h3',
	alignment: 'left',
	textSize: 'body'
}

export default FiftyFifty
