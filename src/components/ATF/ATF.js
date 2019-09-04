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
import withSizes from 'react-sizes'
import MobileDetect from 'mobile-detect'

const AlignmentContainer = styled.div`
height: 100%;
	display: flex;
	justify-content: center;
	align-items: ${ props => props.verticalAlign };
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
	align-items: ${ ({ align }) => align };
  text-align: ${ ({ align }) => align };
  p {
    text-align: ${ ({ align }) => align };

  ${ typography.responsiveStyles('padding-bottom', 50, 30, 20, 10) }
  }
`

const Block = styled.div`
  display: block;
  /* ${ ({ hasFooter }) => hasFooter && `bottom: 75px;` } */
	height: ${ ({ winHeight, hasFooter }) => winHeight + 'px' };
	max-height: ${ ({ winHeight, hasFooter }) => winHeight + 'px' };
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
  ${ ({ hasFooter }) => hasFooter && typography.responsiveStyles('bottom', 70, 70, 70, 75) }
	position: absolute;
	left: 0;
  right: 0;
`

const Overlay = styled.div`
	background: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
	opacity: .1;
	${ ({ hasFooter }) => hasFooter && `bottom: 75px;` }
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 6;
`

const MainContent = styled.div`
	/* ${ ({ verticalAlign }) => verticalAlign === 'flex-end' || typography.responsiveStyles('margin-bottom', 45, 45, 0, 0) } */
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
	max-width: ${ ({ maxWidthText }) => maxWidthText || 'auto' };
	${ typography.responsiveStyles('padding-bottom', 50, 30, 0, 0) }
`

const H1 = styled.h1`
	max-width: ${ ({ maxWidth }) => maxWidth || 'auto' };
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
		const { align, verticalAlign = 'center', headline, text, image, winHeight, showHr, maxWidth, maxWidthText, buttonText, buttonLink, hasFooter, gridSettings } = this.props
		console.log(this.props)
		return (
			<Fragment>
				<Block background hasFooter={hasFooter} winHeight={winHeight}>
					<BgImage
						hasFooter={hasFooter}
						image={image}
					/>
					<Overlay hasFooter={hasFooter} />
				</Block>
				<Block content="true" hasFooter={hasFooter} winHeight={winHeight}>
					<AlignmentContainer verticalAlign={verticalAlign}>
						<MainContent verticalAlign={verticalAlign}>
							<ScrollEntrance>
								<Content>
									<Grid
										showOverlay={false}
										{...gridSettings}
									>
										<AlignedText align={align}>
											<H1 maxWidth={maxWidth}>{headline}</H1>
										</AlignedText>
									</Grid>
								</Content>
								<Content>
									<Grid showOverlay={false}
										{...gridSettings}>
										<AlignedText align={align}>
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
								<Content>
									{text && <Grid
										showOverlay={false}
										small="[6]"
										medium="[7] 2"
										large="[7] 2"
									>
										<PaddedParagraph maxWidthText={maxWidthText}>{text}</PaddedParagraph>
									</Grid>}
								</Content>
							</ScrollEntrance>
						</MainContent>
					</AlignmentContainer>
				</Block>

			</Fragment >
		)
	}
}

const sizesToProps = ({ width, height }) => ({
	winWidth: width,
	winHeight: height
})

export default withSizes(sizesToProps)(ATF)
