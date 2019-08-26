import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import * as mq from 'src/styles/mediaQueries'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Image from 'src/components/Image'
import Hr from 'src/components/Hr'
import Button from 'src/components/Button'
import Link from 'src/components/Link'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { colors, gridSettings, typography } from 'src/styles'
import withSizes from 'react-sizes'

const AlignmentContainer = styled.div`
height: 100%;
	display: flex;
  align-items: ${ props => props.verticalAlign };
	${ typography.responsiveStyles('padding-top', 100, 100, 80, 80) }
`

const Content = styled(Container)`
  ${ typography.h1 }
	p {
		${ typography.h2 }
		margin-top: 0;
	}
`

const AlignedText = styled.div`
  text-align: ${ props => props.align };
  p {
    text-align: ${ props => props.align };
  ${ typography.responsiveStyles('padding-bottom', 50, 30, 20, 10) }
  }
`

const Block = styled.div`
  display: block;
  ${ ({ hasFooter }) => hasFooter && typography.responsiveStyles('bottom', 100, 100, 80, 80) }
	height: ${ ({ winHeight }) => (winHeight) + 'px' };
	width: 100%;
	max-height: ${ ({ winHeight }) => winHeight + 'px' };
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

const MainContent = styled(ScrollEntrance)`
  padding: ${ gridSettings.containerLargeMargins } 0;
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

class ATF extends Component {
	render () {
		const { align, verticalAlign = 'center', headline, text, image, winHeight, showHr, buttonText, buttonLink, hasFooter, gridConfig } = this.props
		return (
			<Fragment>
				<Block background winHeight={winHeight}>
					<BgImage
						image={image}
					/>
					<Overlay />
				</Block>
				<Block content="true" hasFooter={hasFooter} winHeight={winHeight}>
					<AlignmentContainer verticalAlign={verticalAlign}>
						<MainContent>
							<Content>
								<Grid
									showOverlay={true}
									{...gridConfig}
								>
									<AlignedText align={align}>
										<h1>{headline}</h1>
										{buttonText &&
                      < Link to={buttonLink}>
                      	<Button size="medium">
                      		{buttonText}
                      	</Button>
                      </Link>}
									</AlignedText>
								</Grid>
							</Content>
							{showHr && <Hr />}
							<Content>
								{text && <Grid
									showOverlay={true}
									small="[6]"
									medium="[7] 2"
									large="[7] 2"
								>
									<p>{text}</p>
								</Grid>}
							</Content>
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
