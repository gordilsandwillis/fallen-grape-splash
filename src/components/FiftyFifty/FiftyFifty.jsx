import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import Grid from 'src/components/Grid'
import ConditionalRender from 'src/components/ConditionalRender'
import Image from 'src/components/Image'
import LeftAlignedText from 'src/components/LeftAlignedText'
import { colors, mediaQueries as mq } from 'src/styles'
const RowItem = styled.div`
	${ mq.mediumAndUp } {
	${ ({ padding }) => `margin-${ padding }: 15px;` }
	flex: 1;
	}
`

const FiftyFifty = ({
	theme,
	prevTheme,
	nextTheme,
	eyebrow,
	headline,
	text,
	imageOnLeftSide,
	image,
	video,
	buttons
}) => (
	<Section
		setTheme={theme}
		prevTheme={prevTheme}
		nextTheme={nextTheme}
		buttons={buttons}
	>
		<Grid
			small="1 [12] 1"
			medium="1 [5] [5] 1"
			large="1 [5] [5] 1"
			extraLarge="2 [4] 1 [4] 2"
		>
			<ConditionalRender condition={imageOnLeftSide !== false}>
				<RowItem padding="right">
					<ConditionalRender condition={image && !video}>
						<div>
							{/* TODO: add light blue background shadow */}
							<Image {...image} backgroundColor={colors.hrColor} alt={(image && image.description) || (image && image.title)}/>
							<div style={{ height: 25 }}/>
						</div>
					</ConditionalRender>
					<ConditionalRender condition={video}>
						<div>
							<video style={{ outline: 'none' }} width="100%" controls>
								<source src={video && video.file.url} type="video/mp4"/>
							</video>
						</div>
					</ConditionalRender>
				</RowItem>
				<RowItem padding="left">
					<LeftAlignedText
						specialList
						headline={headline}
						text={text}
						eyebrow={eyebrow}
					/>
				</RowItem>
			</ConditionalRender>
			<ConditionalRender condition={imageOnLeftSide === false}>
				<RowItem padding="right">
					<LeftAlignedText
						specialList
						headline={headline}
						text={text}
						eyebrow={eyebrow}
					/>
				</RowItem>
				<RowItem padding="left">
					<div>
						<ConditionalRender condition={image && !video}>
							<div>
								{/* TODO: add blue background */ }
								<Image {...image} backgroundColor={colors.hrColor} alt={(image && image.description) || (image && image.title)}/>
							</div>
						</ConditionalRender>
						<ConditionalRender condition={video}>
							<div>
								<video style={{ outline: 'none' }} width="100%" controls>
									<source src={video && video.file.url} type="video/mp4"/>
								</video>
							</div>
						</ConditionalRender>
					</div>
				</RowItem>
			</ConditionalRender>
		</Grid>
	</Section>
)

export default FiftyFifty
