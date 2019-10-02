import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import withSizes from 'react-sizes'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import { DefaultPlayer as Video } from 'react-html5video'
import Image from 'src/components/Image'
import Hr from 'src/components/Hr'
import Button from 'src/components/Button'
import Link from 'src/components/Link'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { colors, animations, gridSettings, typography, mediaQueries as mq } from 'src/styles'
import RichText from 'src/components/RichText'
import MobileDetect from 'mobile-detect'
import PropTypes from 'prop-types'

const AlignmentContainer = styled.div`
height: 100%;
	display: flex;
	justify-content: center;
	align-items: ${ ({ verticalTextAlignment }) => verticalTextAlignment ? 'flex-end' : 'center' };
	${ typography.responsiveStyles('padding-top', 70, 70, 70, 75) }
	${ typography.responsiveStyles('padding-bottom', 70, 70, 70, 75) }
`

const Content = styled(Container)`
	flex: 1;
	${ typography.h1 }
`

const AlignedText = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: ${ ({ horizontalTextAlignment }) => horizontalTextAlignment ? 'left' : 'center' };
  text-align: ${ ({ horizontalTextAlignment }) => horizontalTextAlignment ? 'left' : 'center' };
  p {
    text-align: ${ ({ horizontalTextAlignment }) => horizontalTextAlignment ? 'left' : 'center' };

  ${ typography.responsiveStyles('padding-bottom', 50, 30, 20, 10) }
  }
`

const Block = styled.div`
  display: block;
	height: ${ ({ winHeight, isMobile }) => winHeight ? winHeight + 'px' : isMobile ? '80vh' : '100vh' };
	max-height: ${ ({ winHeight }) => winHeight ? winHeight + 'px' : '100vh' };
	min-height: ${ ({ full }) => full ? 750 : 500 }px;
	width: 100%;
	position: relative;
	color: ${ colors.bgColor };
	${ ({ background }) => background && `
		position: absolute;
		overflow: hidden;
		z-index: 1;
		background: ${ colors.textColor };
	` }

	${ ({ content }) => content && `
		z-index: 3;
	` }
`

const BgImage = styled(Image)`
	height: 100%;
	position: absolute;
	left: 0;
  right: 0;
`

const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
	height: calc(100% - 95px);
	${ mq.mediumAndBelow } {
		height: 100%;
	}
  overflow: hidden;
	z-index: -1;
	pointer-events: none;

	>div>div span {
		display: none;
	}
	
	video {
		@media (min-aspect-ratio: 16/9) {
			width:100%;
			height: auto;
		}
		@media (max-aspect-ratio: 16/9) {
			width:auto;
			height: 100%;
		}

		
		/* Center the video */
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);

		opacity: ${ ({ loading }) => loading ? 0 : 1 };
		transition: opacity ${ animations.slowSpeed } ease-in-out; 
	}
`

const AnimatedGradient = styled.div`
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	color: #fff;
	background: radial-gradient( rgb(255,150,40), rgb(255,203,148), rgb(253, 70, 40), rgb(209,59,42));
	background-size: 500% 500%;
	animation: gradientBG 75s ease infinite;

	@keyframes gradientBG {
		0% {
			background-position: 0% 20%;
		}
		50% {
			background-position: 100% 80%;
		}
		100% {
			background-position: 0% 20%;
		}
	}

	div {
		margin: 0;
		position: absolute;
		width: 100%;
		height: 100%;
		font-family: "Exo", sans-serif;
		color: #fff;
		background: radial-gradient(rgba(255,163,148, .5), rgba(41,130,255, .0), rgba(41,130,255, .7), rgba(41,130,255, .9));
		background-size: 500% 500%;
		animation: gradientBG 90s ease infinite;
	}

	@keyframes gradientBG {
		0% {
			background-position: 0% 80%;
		}
		50% {
			background-position: 100% 20%;
		}
		100% {
			background-position: 0% 80%;
		}
	}
`

const Overlay = styled.div`
	background: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
	opacity: .1;
	
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 6;
`

const VideoOverlay = styled.div`
	background: ${ colors.black };
	/* opacity: ${ ({ isLoading }) => isLoading ? 1 : 0 }; */
	opacity: 0;
	transition: opacity ${ animations.slowSpeed } ease-in-out;
	position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: -1;
   pointer-events: none;
   overflow: hidden;
	z-index: 7;
`

const MainContent = styled.div`
padding: ${ gridSettings.containerLargeMargins } 0;
width: 100%;
${ mq.largeAndBelow } {
	padding: ${ gridSettings.containerMediumMargins } 0;
}

${ mq.mediumAndBelow } {
	padding: ${ gridSettings.containerMediumMargins } 0;
}

${ mq.smallAndBelow } {
	padding: ${ gridSettings.containerSmallMargins } 0;
}
`

const Margin = styled.div`
margin: 40px 0;
`

const ButtonContainer = styled.div`
	margin-top: 30px;
`

const PaddedParagraph = styled.div`
	${ typography.h2 }
	margin-top: 0;
	padding-top: 15px;
	max-width: 25em;
	${ typography.responsiveStyles('padding-bottom', 15, 15, 5, 5) }
`

const H1 = styled.h1`
	max-width: 15em;
	span {
		max-width: 15em;
	}
`

const ButtonUppercase = styled(Button)`
	text-transform: uppercase;
`

const VideoStyled = styled(Video)`
	z-index: -10;
	.rh5v-DefaultPlayer_controls {
    position: absolute;
		bottom: 0;
		display: none;
		visibility: hidden;
    right: 0;
    left: 0;
    height: 0;
}
`

class ATF extends Component {
	constructor (props) {
		super(props)
		this.state = { isMobile: false, loading: true }
	}
	shouldComponentUpdate (prevProps, prevState) {
		const md = new MobileDetect(window.navigator.userAgent)
		const isMobile = md.is('iPhone')
		if ((isMobile && prevProps.winHeight !== this.props.winHeight) && prevProps.winWidth === this.props.winWidth) {
			return false
		}

		return true
	}

	componentDidMount () {
		const md = new MobileDetect(window.navigator.userAgent)
		const isMobile = md.is('iPhone')
		this.setState({ isMobile })

		// const video = this.videoRef.videoEl
		// if (video) video.addEventListener('play', () => { this.setState({ loading: false }) })
		setTimeout(() => this.setState({ loading: false }), 3000)
	}

	render () {
		const {
			image,
			video,
			animatedGradientInsteadOfImage,
			horizontalTextAlignment,
			verticalTextAlignment,
			headline,
			smallText,
			winHeight,
			winWidth,
			horizontalBreak,
			button,
		} = this.props
		const { isMobile } = this.state
		return (
			<Fragment>
				<Block isMobile={isMobile} full={smallText && headline} background winHeight={winHeight}>
					{((image && !video) && !animatedGradientInsteadOfImage) && <BgImage image={image} />}
					{((!image && video) && !animatedGradientInsteadOfImage) &&
						<React.Fragment>
							<VideoOverlay isLoading={this.state.loading} />
							<VideoContainer heightIsLarger={winHeight > winWidth}>
								<VideoStyled
									ref={ref => { this.videoRef = ref }}
									loop
									autoPlay
									playsInline
									muted
									controls={['PlayPause']}
								>
									<source src={video.file.url} type="video/mp4"/>
								</VideoStyled>
							</VideoContainer>
						</React.Fragment>
					}
					{animatedGradientInsteadOfImage && <AnimatedGradient><div></div></AnimatedGradient>}
					<Overlay />
				</Block>
				<Block isMobile={isMobile} full={smallText && headline} content="true" winHeight={winHeight}>
					<AlignmentContainer verticalTextAlignment={verticalTextAlignment}>
						<MainContent>
							<ScrollEntrance>
								<Content>
									<Grid small='[6]' medium='[12]' large='[12]' >
										<AlignedText horizontalTextAlignment={horizontalTextAlignment}>
											<H1>{headline && RichText(headline)}</H1>
										</AlignedText>
									</Grid>
								</Content>
								<Content>
									<Grid small='[6]' medium='[12]' large='[12]' >
										<AlignedText horizontalTextAlignment={horizontalTextAlignment}>
											{button &&
												<ButtonContainer>
													<Link noHoverColor external={!button.internalExternal} to={button.url}>
														<ButtonUppercase home>
															{button.text}
														</ButtonUppercase>
													</Link>
												</ButtonContainer>
											}
										</AlignedText>
									</Grid>
								</Content>
								{horizontalBreak && <Margin><Hr /></Margin>}
								{smallText &&
								<Content>
									<Grid small="[6]" medium="[7] 2" large="[7] 2">
										<PaddedParagraph>{RichText(smallText)}</PaddedParagraph>
									</Grid>
								</Content>
								}
							</ScrollEntrance>
						</MainContent>
					</AlignmentContainer>
				</Block>

			</Fragment >
		)
	}
}

ATF.defaultProps = {
	horizontalTextAlignment: false,
	verticalTextAlignment: false,
	image: {},
	headline: {},
	horizontalBreak: false,
	// text,
	// buttonText,
	// buttonLink,
}

ATF.propTypes = {
	horizontalTextAlignment: PropTypes.bool.isRequired,
	verticalTextAlignment: PropTypes.bool.isRequired,
	// image: PropTypes.object,
	headline: PropTypes.object.isRequired,
	horizontalBreak: PropTypes.bool.isRequired,
	text: PropTypes.string,
	buttonText: PropTypes.any,
	buttonLink: PropTypes.any,
}

export default withSizes(({ width, height }) => ({ winWidth: width, winHeight: height }))(ATF)
