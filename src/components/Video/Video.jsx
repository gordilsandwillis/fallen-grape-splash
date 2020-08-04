import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { Transition } from 'react-transition-group'
import { colors, typography, animations, mq } from 'src/styles'
import ReactPlayer from 'react-player'

import { MdPlayArrow } from 'react-icons/md'

const Wrapper = styled.div`
	video {
		display: block;
		margin: 0;
	}
`

const VideoWrapper = styled.div`
	${ ({ cover }) => cover && `
		height: 100%;
	` }
`

const StyledVideo = styled(ReactPlayer)`
	z-index: 10;
	position: relative;
	height: auto;
	min-width: 100%;
	min-height: 100%;
	width: 100% !important;
	height: auto !important;
	> div {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	${ ({ cover }) => cover && `
		video {
			position: absolute;
			width: 100%;
			height: 100%;
			top: 0;
			left: 0;
			object-fit: cover;
		}
	` }
	${ ({ url, cover }) => url.indexOf('youtube') > -1 || url.indexOf('vimeo') > -1 ? `
		padding-bottom: ${ 9 / 16 * 100 }%;
		${ cover && `
			position: absolute;
			top: 50%;
			left: 50%;
			padding: 0;
			width: 100% !important;
			height: 100% !important;
			@media (min-aspect-ratio: 16/9) {
				// tall
				min-width: 100vw;
				min-height: 56.25vw;
				margin-left: -50vw;
				margin-top: -28.125vw;
			}
			@media (max-aspect-ratio: 16/9) {
				// wide
				min-width: 177.77vh;
				min-height: 100vh;
				margin-left: -88.885vh;
				margin-top: -50vh;
			}
			min-width: 0;
			min-height: 0;
		` }
		iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100% !important;
			height: 100% !important;
		}
	` : `
	` }
`

class Video extends Component {
	render () {
		const {
			video,
			loop,
			cover,
			muted,
			autoplay,
			className,
			playing
		} = this.props

		if (!video || !video.file || !video.file.url) {
			return false
		}

		return (
			<Wrapper className={className} cover={cover}>
				<VideoWrapper cover={cover}>
					<StyledVideo
						cover={cover}
						url={video.file.url}
						playing={playing}
						loop={loop}
						muted={muted}
						autoPlay={autoplay}
						config={{
							youtube: {
								preload: true,
								playerVars: {
									color: 'white',
									controls: 1,
									disablekb: 1,
									modestbranding: 1
								}
							}
						}}
					/>
				</VideoWrapper>
			</Wrapper>
		)
	}
}

Video.defaultProps = {
	playing: false,
	loop: false,
	muted: false
}

export default Video
