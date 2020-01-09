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
	background: #000;
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
`

const FullScreenVideo = styled(ReactPlayer)`
	position: relative;
	z-index: 10;
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
		const { coverImage, url, loop } = this.props
		const { playing } = this.state

		if (!url) {
			return false
		}

		return (
			<Wrapper hasCoverImage={coverImage}>
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
						<VideoWrapper transitionStatus={transitionStatus} hasCoverImage={coverImage}>
							<FullScreenVideo
								url={url}
								playing={playing}
								loop={loop}
								width="100%"
								height="100%"
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
	loop: false
}

export default Video
