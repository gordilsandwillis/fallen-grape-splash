import React, { Component } from 'react'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Image from 'src/components/Image'
import Button from 'src/components/Button'
import ConditionalRender from 'src/components/ConditionalRender'
import ContentfulRichText from 'src/components/ContentfulRichText'
import TextLockup from 'src/components/TextLockup'
import ThemeSelector from 'src/components/ThemeSelector'
import withSizes from 'react-sizes'
import { colors, typography, animations, util } from 'src/styles'
import MobileDetect from 'mobile-detect'
import Video from 'src/components/Video'
import { MdPlayArrow, MdArrowDownward } from 'react-icons/md'

const Wrapper = styled(ThemeSelector)`
	position: relative;
	${ ({ media }) => media && `
		background: ${ colors.black };
		color: ${ colors.bgColor };
	` }
`

const Eyebrow = styled.h6`
	margin-bottom: 1.75em;
`

const Headline = styled.h1`
	${ ({ headlineSize }) => typography[headlineSize] }
`

const AlignmentContainer = styled.div`
	display: flex;
	align-items: ${ ({ vAlignment }) => vAlignment };
	${ ({ fullHeight, winHeight, showArrow }) => fullHeight ? `
		min-height: ${ winHeight };
		padding-top: 105px;
		padding-bottom: ${ showArrow ? `calc(95px + 65px)` : `7vw`};
	` : `
		min-height: 56.25vw; // 16:9 Ratio
		padding-top: 105px;
		padding-bottom: 95px;
	` };
`

const Content = styled.div`
	width: 100%;
	text-align: ${ ({ hAlignment }) => hAlignment };
`

const TextArea = styled(TextLockup)`
	${ util.responsiveStyles('max-width', 800, 750, 700, 600) }
`

const Block = styled.div`
	display: block;
	width: 100%;
	position: relative;

	${ ({ background }) => background && `
		position: absolute;
		height: 100%;
		overflow: hidden;
		z-index: 1;
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
	padding-bottom: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const DownArrow = styled.div`
	animation: ${ animations.bounceMinor } 2s infinite;
	text-align: ${ ({ alignment }) => alignment };
	line-height: 1;
	svg {
		display: inline-block;
		vertical-align: top;
		* {
			fill: currentColor;
		}
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

	> div > div span {
		display: none;
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
		fill: currentColor;
	}
`

class ATF extends Component {
	constructor (props) {
		super(props)
		this.state = {
			mobile: false
		}
	}

	componentDidMount () {
		const md = new MobileDetect(window.navigator.userAgent)
		if (md.os() === 'iOS') {
			this.setState({ mobile: true })
		}
	}

	shouldComponentUpdate (prevProps, prevState) {
		const md = new MobileDetect(window.navigator.userAgent)
		if (md.os() === 'iOS' && prevProps.winHeight !== this.props.winHeight) {
			return false
		}

		return true
	}

	render () {
		const {
			headline,
			headlineSize,
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
			eyebrow,
			showArrow,
			index,
			theme,
			overlay,
			className
		} = this.props

		const {
			mobile
		} = this.state

		const vAlignOptions = {
			bottom: 'flex-end',
			top: 'flex-start',
			baseline: 'baseline',
			center: 'center'
		}

		const hAlignmentGrid = {
			center: '1 [12] 1',
			left: '1 [6] 7',
			right: '7 [6] 1'
		}

		const verticalAligment = vAlignOptions[vAlignment]

		let windowHeight = '100vh'

		if (mobile && this.props.index === 0) {
			windowHeight = winHeight + 'px'
		}

		return (
			<Wrapper setTheme={theme} media={image || video} className={className}>
				<Block background winHeight={windowHeight} fullHeight={fullHeight}>
					<ConditionalRender condition={video}>
						<VideoContainer>
							<VideoStyled
								cover={true}
								loop={true}
								playing={true}
								muted={true}
								controls={['PlayPause']}
								url={video && video.file.url}
							/>
						</VideoContainer>
					</ConditionalRender>
					{!video && image || small ? (
						<BgImage
							image={image.image}
							small={image.small}
							medium={image.medium}
							large={image.large}
						/>
					) : false}
					{index === 0 && (video || image) ? <Overlay /> : false}
					{overlay ? <ImageOverlay overlay={overlay} /> : false}
				</Block>
				<Block content="true" winHeight={windowHeight} fullHeight={fullHeight}>
					<AlignmentContainer vAlignment={verticalAligment} winHeight={windowHeight} fullHeight={fullHeight} showArrow={showArrow}>
						<Content hAlignment={hAlignment}>
							<Grid
								small="1 [12] 1"
								medium="1 [12] 1"
								large={hAlignmentGrid[hAlignment]}
							>
								<TextArea
									theme="bgColor"
									eyebrow={eyebrow}
									alignment={textAlignment}
									headlineSize={headlineSize}
									headlineElement="h1"
									headline={headline}
									text={text}
									buttons={buttons}
								/>
							</Grid>
						</Content>
					</AlignmentContainer>
				</Block>

				<ConditionalRender condition={fullHeight && showArrow}>
					<ATFDownArrow>
						<Grid
							small="1 [12] 1"
							medium="1 [12] 1"
							large={hAlignmentGrid[hAlignment]}
						>
						<DownArrow alignment={textAlignment}>
								<MdArrowDownward size={36} />
							</DownArrow>
						</Grid>
					</ATFDownArrow>
				</ConditionalRender>

			</Wrapper>
		)
	}
}

ATF.defaultProps = {
	textAlignment: 'center',
	hAlignment: 'center',
	vAlignment: 'center',
	showArrow: true,
	headlineSize: 'h1',
	theme: 'black',
	overlay: false,
	className: ''
}

const sizesToProps = ({ width, height }) => ({
	winWidth: width,
	winHeight: height
})

export default withSizes(sizesToProps)(ATF)
