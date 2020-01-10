import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { Transition } from 'react-transition-group'
import { colors, typography, animations, mediaQueries as mq } from 'src/styles'
import ReactPlayer from 'react-player'

import { MdPlayArrow } from 'react-icons/md'

import MaterialIcon from 'src/components/MaterialIcon'
import Section from 'src/components/Section'
import Image from 'src/components/Image'
import ScrollEntrance from 'src/components/ScrollEntrance'
import Button from 'src/components/Button'

const Wrapper = styled.div`
	${ ({ hasCoverImage }) => hasCoverImage && `
		position: relative;
	`}
	img, video {
		display: block;
		margin: 0;
	}
	${ ({ cover }) => cover && `
		height: 100%;
	` }
`

const Eyebrow = styled.h5`
	color: ${ colors.bgColor };
	margin: 0 0 8px;
`

const BlockTitle = styled.h5`
	margin: 0;
	font-weight: 400;
	color: ${ colors.bgColor };
`

const CoverImageWrap = styled.div`
	position: relative;
`

const PlayButton = styled(Button)`
	cursor: pointer;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: transparent;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background ${ animations.mediumSpeed } ease-in-out;
	&:hover {
		background: rgba(0, 0, 0, .1);
	}
`

const VideoWrapper = styled.div`
	transition: opacity .5s ease-in-out;
	${ ({ hasCoverImage }) => hasCoverImage && `
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	` }
	${ ({ transitionStatus }) => transitionStatus === 'entered' ? `
		opacity: 1;
	` : `
		opacity: 0;
	` }
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
	${ ({ url, cover }) => url.indexOf("youtube") > -1 || url.indexOf("vimeo") > -1 ? `
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
		video, iframe {
			position: absolute;
			top: 0;
			left: 0;
			width: 100% !important;
			height: 100% !important;
		}
	` : `` }
`

class Video extends Component {
	state = {
		playing: this.props.coverImage ? false : this.props.playing
	}

	openVideo = () => {
		this.setState({ playing: true })
	}

	closeVideo = () => {
		this.setState({ playing: false })
	}

	render () {
		const { coverImage, url, loop, cover, muted } = this.props
		const { playing } = this.state

		if (!url) {
			return false
		}

		return (
			<Wrapper hasCoverImage={coverImage} cover={cover}>
				{coverImage && (
					<CoverImageWrap onClick={this.openVideo}>
						<Image image={coverImage}/>
						<PlayButton>
							<Button shape="circle">
								<MdPlayArrow size="36" onClick={this.openVideo} />
							</Button>
						</PlayButton>
					</CoverImageWrap>
				)}

				<Transition
					in={playing}
					timeout={{
						appear: 500,
						enter: 0,
						exit: 500
					}}
					mountOnEnter={true}
					unmountOnExit={true}
					appear={true}
				>
					{transitionStatus => (
						<VideoWrapper transitionStatus={transitionStatus} hasCoverImage={coverImage} cover={cover}>
							<StyledVideo
								cover={cover}
								url={url}
								playing={playing}
								loop={loop}
								muted={muted}
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
					)}
				</Transition>
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
