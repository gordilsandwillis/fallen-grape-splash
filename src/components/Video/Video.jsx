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

const Eyebrow = styled.h5`
	color: ${ colors.bgColor };
	margin: 0 0 8px;
`

const BlockTitle = styled.h5`
	margin: 0;
	font-weight: 400;
	color: ${ colors.bgColor };
`

const VideoWrap = styled.div`
	position: relative;
	img {
		display: block;
		margin: 0;
	}
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
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	transition: opacity .5s ease-in-out;
	background: #000;
	${ ({ transitionStatus }) => transitionStatus === 'entered' ? `
		opacity: 1;
	` : `
		opacity: 0;
	` }
`

const VideoOverlay = styled.div`
	position: fixed;
	z-index: 11;
	background: transparent;
	top: 0;
	right: 0;
	width: 100%;
	height: 60%;
`

const CloseButton = styled.a`
	position: fixed;
	background: ${ colors.textColor };
	color: white;
	padding: 14px;
	top: 20px;
	right: 20px;
	border-radius: 50%;
	transition: background ${ animations.mediumSpeed } ease-in-out;
	span {
		vertical-align: top;
	}
	&:hover {
		background: ${ colors.mainColor };
	}
	${ mq.mediumAndBelow } {
		padding: 10px;
		.material-icons {
			font-size: 18px;
		}
	}
`

const FullScreenVideo = styled(ReactPlayer)`
	position: relative;
	z-index: 10;
`

class Video extends Component {
	state = {
		videoOpen: false
	}

	openVideo = () => {
		this.setState({ videoOpen: true })
	}

	closeVideo = () => {
		this.setState({ videoOpen: false })
	}

	render () {
		const { coverImage, url } = this.props
		const { videoOpen } = this.state

		if (!url) {
			return false
		}

		return (
			<Fragment>
				<div>
					<div>
						<VideoWrap onClick={this.openVideo}>
							<Image image={coverImage}/>
							<PlayButton>
								<Button shape="circle">
									<MdPlayArrow size="36" onClick={this.openVideo} />
								</Button>
							</PlayButton>
						</VideoWrap>
					</div>
				</div>

				<Transition
					in={videoOpen}
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
						<VideoWrapper transitionStatus={transitionStatus}>
							<VideoOverlay>
								<CloseButton onClick={this.closeVideo}><span className="material-icons"><MaterialIcon size="36px">close</MaterialIcon></span></CloseButton>
							</VideoOverlay>
							<FullScreenVideo
								url={url}
								playing={videoOpen}
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
			</Fragment>
		)
	}
}

export default Video
