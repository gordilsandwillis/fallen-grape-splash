import React, { Component } from 'react'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Image from 'src/components/Image'
import ScrollEntrance from 'src/components/ScrollEntrance'
import Button from 'src/components/Button'
import ConditionalRender from 'src/components/ConditionalRender'
import ContentfulRichText from 'src/components/ContentfulRichText'
import withSizes from 'react-sizes'
import { colors, typography, animations, mediaQueries as mq } from 'src/styles'
import MobileDetect from 'mobile-detect'
import { DefaultPlayer as Video } from 'react-html5video'
import { MdPlayArrow, MdArrowDownward } from 'react-icons/md'

const Wrapper = styled.div`
	position: relative;
`

const Eyebrow = styled.h6`
	margin-bottom: 1.75em;
`

const AlignmentContainer = styled.div`
	display: flex;
	align-items: ${ ({ vAlignment }) => vAlignment };
	min-height: ${ ({ fullHeight, winHeight }) => fullHeight ? winHeight + 'px' : '70vh' };
	${ ({ fullHeight, winHeight }) => fullHeight ? `
		min-height: ${ fullHeight ? winHeight + 'px' : '70vh' };
		padding-top: 105px;
		padding-bottom: calc(95px + 65px);
	` : `
		min-height: ${ fullHeight ? winHeight + 'px' : '70vh' };
		padding-top: 105px;
		padding-bottom: 95px;
	` };
`

const Content = styled.div`
	width: 100%;
	text-align: ${ ({ textAlignment }) => textAlignment };
	h1, h2, h3, h4, h5 {
		max-width: 9em;
		${ ({ textAlignment }) => textAlignment === 'center' && `
			margin-left: auto;
			margin-right: auto;
		` };
		${ ({ textAlignment }) => textAlignment === 'right' && `
			margin-left: auto;
		` };
	}
	h1 {
		${ typography.responsiveStyles('font-size', 120, 80, 50, 34) }
	}
	p {
		${ typography.bodyLarge }
		max-width: 18em;
		margin-top: 0;
		${ ({ textAlignment }) => textAlignment === 'center' && `
			margin-left: auto;
			margin-right: auto;
		` };
		${ ({ textAlignment }) => textAlignment === 'right' && `
			margin-left: auto;
		` };
	}
	svg {
		${ ({ textAlignment }) => textAlignment === 'center' ? `margin-left: auto; margin-right: auto` : '' };
	}
`

const Block = styled.div`
	display: block;
	width: 100%;
	position: relative;
	color: ${ colors.bgColor };

	${ ({ background }) => background && `
		position: absolute;
		height: 100%;
		overflow: hidden;
		z-index: 1;
		background: ${ colors.darkBrown };
		bottom: ${ ({ fullHeight }) => fullHeight ? `60px` : `0` };
	` }

	${ ({ content, fullHeight }) => content && `
		z-index: 3;
	` }
`

const BgImage = styled(Image)`
	height: 100%;
`

const ATFDownArrow = styled.div`
	position: absolute;
	z-index: 3;
	bottom: 0;
	left: 0;
	right: 0;
	height: 60px;
	background: ${ colors.mainColor };
`

const DownArrow = styled(MdArrowDownward)`
	position: absolute;
	bottom: 100%;
	left: 50%;
	margin-left: -8px;
	margin-bottom: -27px;
	animation: ${ animations.bounceMinor } 2s infinite;
	* {
		fill: ${ colors.bgColor };
	}
`

const Overlay = styled.div`
	background: linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
	opacity: .4;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 30%;
	max-height: 300px;
	min-height: 100px;
	z-index: 3;
`

const ButtonActions = styled.div`
	margin-left: -14px;
	margin-right: -14px;
	a, button {
		min-width: 200px;
		margin: 10px 20px;
	}
`

const VideoContainer = styled.div`
	transition: opacity ${ animations.mediumSpeed } ease-in-out;
	position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
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

const Divider = styled.div`
	display: block;
	margin: 1.25em 0;
	${ ({ position }) => position === 'lower' && `margin-top: .75em;` }
	* {
		fill: currentColor
	}
`

const PlayButton = styled.div`
	margin: 30px;
	cursor: pointer;
	border: none;
	background-color: none;
	padding: none;
	margin: none;
	${ typography.h6 }
	transition: opacity ${ animations.mediumSpeed } ease-in-out;
`
class ATF extends Component {
	constructor (props) {
		super(props)
		this.state = {
			videoFailed: false
		}
	}
	shouldComponentUpdate (prevProps, prevState) {
		const md = new MobileDetect(window.navigator.userAgent)
		if (md.os() === 'iOS' && prevProps.winHeight !== this.props.winHeight) {
			return false
		}

		return true
	}

	playVideo = () => {
		try {
			document.getElementsByTagName('video')[0].play().then(() => {
				this.setState({ videoFailed: false })
			})
		} catch {}
	}
	render () {
		const {
			headline,
			text,
			image,
			small,
			medium,
			large,
			video,
			textAlignment,
			hAlignment,
			vAlignment,
			fullHeight,
			buttons,
			winHeight,
			winWidth,
			eyebrow
		} = this.props

		const {
			videoFailed
		} = this.state

		const vAlignOptions = {
			bottom: 'flex-end',
			top: 'flex-start',
			baseline: 'baseline',
			center: 'center'
		}

		const hAlignmentGrid = {
			center: '1 [12] 1',
			left: '1 [7] 6',
			right: '6 [7] 1'
		}

		const verticalAligment = vAlignOptions[vAlignment]

		return (
			<Wrapper>
				<Block background winHeight={winHeight} fullHeight={fullHeight}>
					<ConditionalRender condition={video}>
						<VideoContainer heightIsLarger={winHeight > winWidth}>
							<VideoStyled
								ref={ref => { this.videoRef = ref }}
								loop
								autoPlay
								playsInline
								onCanPlayThrough={() => {
									setTimeout(() => {
										// if fully loaded and not playing after 1 second, set state to failed
										if (this.videoRef && this.videoRef.state.currentTime === 0) this.setState({ videoFailed: true })
									}, 1000)
								}}
								muted
								controls={['PlayPause']}
							>
								<source src={video && video.file.url} type="video/mp4"/>
							</VideoStyled>
						</VideoContainer>
					</ConditionalRender>
					<ConditionalRender condition={!video && image || small}>
						<BgImage
							image={image}
							small={small}
							medium={medium}
							large={large}
						/>
					</ConditionalRender>
					<Overlay />
				</Block>
				<Block content="true" winHeight={winHeight} fullHeight={fullHeight}>
					<AlignmentContainer vAlignment={verticalAligment} winHeight={winHeight} fullHeight={fullHeight}>
						<Content textAlignment={textAlignment}>
							<Grid
								small="1 [12] 1"
								medium="1 [12] 1"
								large={hAlignmentGrid[hAlignment]}
							>
								<ScrollEntrance>
									<ConditionalRender condition={eyebrow}>
										<Eyebrow>{eyebrow}</Eyebrow>
									</ConditionalRender>
									<ConditionalRender condition={eyebrow && headline}>
										<Divider />
									</ConditionalRender>
									<ConditionalRender condition={headline}>
										<h1>{headline}</h1>
									</ConditionalRender>
									<ConditionalRender condition={headline && !eyebrow && !text}>
										<Divider />
									</ConditionalRender>
									<ConditionalRender condition={text}>
										<ContentfulRichText richText={text && text.json}/>
									</ConditionalRender>
									<ButtonActions>
										{buttons && buttons.map(({
											id,
											theme,
											to,
											label,
											external,
										}) => (
											<Button
												key={id}
												to={to}
												size={winWidth > mq.largeBreakpoint ? 'large' : 'medium'}
												external={external}
												setTheme={theme}
											>
												{label}
											</Button>
										))}
									</ButtonActions>
									<PlayButton style={{ opacity: videoFailed ? 1 : 0, cursor: videoFailed ? 'pointer' : 'default' }} onClick={this.playVideo}>
										<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><MdPlayArrow style={{ marginBottom: 2 }} size={22} /><div>&nbsp;&nbsp;WATCH THE VIDEO</div></div>
									</PlayButton>
								</ScrollEntrance>
							</Grid>
						</Content>
					</AlignmentContainer>
				</Block>

				<ConditionalRender condition={fullHeight}>
					<ATFDownArrow>
						<DownArrow />
					</ATFDownArrow>
				</ConditionalRender>

			</Wrapper>
		)
	}
}

ATF.defaultProps = {
	textAlignment: 'center',
	hAlignment: 'center',
	vAlignment: 'center'
}

const sizesToProps = ({ width, height }) => ({
	winWidth: width,
	winHeight: height
})

export default withSizes(sizesToProps)(ATF)
