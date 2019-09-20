import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Image from 'src/components/Image'
import Hr from 'src/components/Hr'
import Button from 'src/components/Button'
import Link from 'src/components/Link'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { colors, gridSettings, typography, mediaQueries as mq } from 'src/styles'
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

const AnimatedGradient = styled.div`
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	font-family: "Exo", sans-serif;
	color: #fff;
	background: radial-gradient( rgb(231,142,48), rgb(185,53,22), rgb(237, 79, 0), rgb(113,88,76));
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
		background: radial-gradient(rgba(25,150,154, .9), rgba(110,178,177, .1), rgba(52,207,214, .75), rgba(166,172,160, .1));
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
	margin-top: 36px;
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

class ATF extends Component {
	constructor (props) {
		super(props)
		this.state = { isMobile: false }
	}
	shouldComponentUpdate (prevProps, prevState) {
		const md = new MobileDetect(window.navigator.userAgent)
		const isMobile = md.is('iPhone')
		if (isMobile && prevProps.winHeight !== this.props.winHeight) {
			return false
		}

		return true
	}

	componentDidMount () {
		const md = new MobileDetect(window.navigator.userAgent)
		const isMobile = md.is('iPhone')
		this.setState({ isMobile })
	}

	render () {
		const {
			image,
			horizontalTextAlignment,
			verticalTextAlignment,
			headline,
			animatedGradientInsteadOfImage,
			smallText,
			winHeight,
			horizontalBreak,
			button,
		} = this.props
		const { isMobile } = this.state
		return (
			<Fragment>
				<Block isMobile={isMobile} full={smallText && headline} background winHeight={winHeight}>
					{(image && !animatedGradientInsteadOfImage) && <BgImage image={image} />}
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
	image: PropTypes.object.isRequired,
	headline: PropTypes.object.isRequired,
	horizontalBreak: PropTypes.bool.isRequired,
	text: PropTypes.string,
	buttonText: PropTypes.any,
	buttonLink: PropTypes.any,
}

export default ATF
