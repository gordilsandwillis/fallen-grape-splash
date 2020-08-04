import React from 'react'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import Section from 'src/components/Section'
import Image from 'src/components/Image'
import Video from 'src/components/Video'
import ThemeSelector from 'src/components/ThemeSelector'
import Grid from 'src/components/Grid'
import Caption from 'src/components/Caption'
import { colors, mq } from 'src/styles'
import ScrollEntrance from 'src/components/ScrollEntrance'

const WideMediaWrap = styled.div`
	${ ({ setHeight }) => setHeight !== 'auto' ? `
		position: relative;
		z-index: 2;
		height: ${ setHeight };
	` : `` }
`

const MediaImage = styled(Image)`
	${ ({ setHeight }) => setHeight !== 'auto' ? `
		> div {
			height: ${ setHeight };
			position: relative;
		}
		img {
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	` : `` }
`

const MediaVideo = styled(Video)`
	${ ({ setHeight }) => setHeight !== 'auto' ? `
		> div {
			height: ${ setHeight };
			min-height: 40vw;
			position: relative;
		}
		video {
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	` : `` }
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
		background: ${ colors.black };
		padding-top: 8px;
	}
`

const CaptionBlock = styled.div`
`

const WideMedia = ({
	media,
	width,
	theme,
	prevTheme,
	nextTheme,
	caption,
	height,
	isFirstSection
}) => {
	if (!media) {
		return false
	}

	const fullWidth = width === 'fullWidth'

	const type = media[0].__typename === 'ContentfulVideo' ? 'video' : 'image'
	media = media[0]

	const heightValues = {
		auto: 'auto',
		fullHeight: '100vh',
		mediumHeight: '70vh',
		shortHeight: '50vh'
	}

	return (
		<Section
			setTheme={theme}
			nextTheme={nextTheme}
			prevTheme={prevTheme}
			padded={!fullWidth}
		>
			<WideMediaWrap setHeight={heightValues[height]}>
				<Grid small={fullWidth ? '[1]' : '1 [12] 1'}>
					{type === 'image' ? (
						<MediaImage
							image={media.image}
							small={media.small}
							medium={media.medium}
							alt={media.description || media.title}
							setHeight={heightValues[height]}
							loading={isFirstSection ? 'eager' : 'lazy'}
							critical={!!isFirstSection}
						/>
					) : (
						<MediaVideo
							video={media.video}
							playing={true}
							loop={true}
							setHeight={heightValues[height]}
							posterImage={media.posterImage}
							autoplay={true}
						/>
					)}
				</Grid>
				{caption && (
					<Grid small="1 [12] 1">
						<div>
							<CaptionBlock>
								<Caption>{caption}</Caption>
							</CaptionBlock>
						</div>
					</Grid>
				)}
			</WideMediaWrap>
		</Section>
	)
}

WideMedia.defaultProps = {
	width: 'margins',
	height: 'auto'
}

export default WideMedia
