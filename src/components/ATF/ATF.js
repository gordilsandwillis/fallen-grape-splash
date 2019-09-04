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
import MobileDetect from 'mobile-detect'
import PropTypes from 'prop-types'

const AlignmentContainer = styled.div`
height: 100%;
	display: flex;
	justify-content: center;
	align-items: ${ ({ verticalAlignCenter }) => verticalAlignCenter ? 'center' : 'flex-end' };
	${ typography.responsiveStyles('padding-top', 70, 70, 70, 75) }
	${ typography.responsiveStyles('padding-bottom', 70, 70, 70, 75) }
`

const Content = styled(Container)`
	flex: 1;
	${ typography.h1 }
	p {
		${ typography.h2Special }
		margin-top: 0;
	}
`

const AlignedText = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: ${ ({ horizontalAlignCenter }) => horizontalAlignCenter ? 'center' : 'left' };
  text-align: ${ ({ horizontalAlignCenter }) => horizontalAlignCenter ? 'center' : 'left' };
  p {
    text-align: ${ ({ horizontalAlignCenter }) => horizontalAlignCenter ? 'center' : 'left' };

  ${ typography.responsiveStyles('padding-bottom', 50, 30, 20, 10) }
  }
`

const Block = styled.div`
  display: block;
	height: 100vh;
	min-height: ${ ({ full }) => full ? 750 : 500 }px;
	max-height: 100vh;
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

const PaddedParagraph = styled.p`
	padding-top: 15px;
	max-width: 25em;
	${ typography.responsiveStyles('padding-bottom', 50, 30, 0, 0) }
`

const H1 = styled.h1`
	max-width: 15em;
`

class ATF extends Component {
	shouldComponentUpdate (prevProps, prevState) {
		const md = new MobileDetect(window.navigator.userAgent)
		if (md.is('iPhone') && prevProps.winHeight !== this.props.winHeight) {
			return false
		}

		return true
	}

	render () {
		const {
			image,
			horizontalAlignCenter,
			verticalAlignCenter,
			headline,
			text,
			winHeight,
			showHr,
			buttonText,
			buttonLink,
		} = this.props
		return (
			<Fragment>
				<Block full={text && headline} background winHeight={winHeight}>
					<BgImage image={image} />
					<Overlay />
				</Block>
				<Block full={text && headline} content="true" winHeight={winHeight}>
					<AlignmentContainer verticalAlignCenter={verticalAlignCenter}>
						<MainContent>
							<ScrollEntrance>
								<Content>
									<Grid small='[6]' medium='[12]' large='[12]' >
										<AlignedText horizontalAlignCenter={horizontalAlignCenter}>
											<H1>{headline}</H1>
										</AlignedText>
									</Grid>
								</Content>
								<Content>
									<Grid small='[6]' medium='[12]' large='[12]' >
										<AlignedText horizontalAlignCenter={horizontalAlignCenter}>
											{buttonText &&
												<ButtonContainer>
													<Link to={buttonLink}>
														<Button>
															{buttonText}
														</Button>
													</Link>
												</ButtonContainer>
											}
										</AlignedText>
									</Grid>
								</Content>
								{showHr && <Margin><Hr /></Margin>}
								{text &&
								<Content>
									<Grid small="[6]" medium="[7] 2" large="[7] 2">
										<PaddedParagraph>{text}</PaddedParagraph>
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
	horizontalAlignCenter: false,
	verticalAlignCenter: false,
	image: {},
	headline: 'Headline',
	showHr: false,
	// text,
	// buttonText,
	// buttonLink,
}

ATF.propTypes = {
	horizontalAlignCenter: PropTypes.bool.isRequired,
	verticalAlignCenter: PropTypes.bool.isRequired,
	image: PropTypes.object.isRequired,
	headline: PropTypes.string.isRequired,
	showHr: PropTypes.bool.isRequired,
	text: PropTypes.string,
	buttonText: PropTypes.any,
	buttonLink: PropTypes.any,
}

export default ATF
