import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import * as mq from 'src/styles/mediaQueries'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Image from 'src/components/Image'
import Button from 'src/components/Button'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { colors, typography } from 'src/styles'
import withSizes from 'react-sizes'

const CenteredContainer = styled(Container)`
	display: flex;
  align-items: center;
	${ typography.responsiveStyles('padding-top', 100, 100, 100, 100)}
`

const Content = styled.div`
	width: 100%;
  /* ${ typography.h1} */
	p {
		/* ${ typography.h4} */
		margin-top: 0;
	}
`

const CenteredText = styled.div`
  text-align: center;
  p {
    text-align: center;
  ${ typography.responsiveStyles('padding-bottom', 50, 30, 20, 10)}
  }
`

const Block = styled.div`
  display: block;
  ${ typography.responsiveStyles('bottom', 100, 100, 100, 100)}
	width: 100%;
	height: ${ ({ winHeight }) => winHeight + 'px'};
	max-height: ${ ({ winHeight }) => winHeight + 'px'};
	position: relative;
	color: ${ colors.bgColor};

	${ ({ background }) => background && `
		position: absolute;
		overflow: hidden;
		z-index: 1;
		background: ${ colors.textColor};
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
	z-index: 3;
`

const ShortHr = styled.hr`
	${ typography.responsiveStyles('width', 80, 70, 50, 36)}
	border-width: 3px;
	border-color: ${ colors.bgColor};
	${ typography.responsiveStyles('margin-top', 18, 18, 18, 8)}
	${ typography.responsiveStyles('margin-bottom', 34, 30, 26, 16)}
	display: inline-block;
`

class ATF extends Component {
  render() {
    const { headline, text, image, winHeight, showHr, buttonText } = this.props
    return (
      <Fragment>
        <Block background winHeight={winHeight}>
          <BgImage
            image={image}
          />
          <Overlay />
        </Block>
        <Block content="true" winHeight={winHeight}>
          <CenteredContainer>
            <Content>
              <Grid
                showOverlay={true}
                small="[6]"
                medium="1 [10] 1"
                large="1 [10] 1"
              >
                <ScrollEntrance>
                  <CenteredText>
                    <h1>{headline}</h1>
                    {showHr && <ShortHr />}
                    <p>{text}</p>
                    <Button size="medium">
                      {buttonText}
                    </Button>
                  </CenteredText>
                </ScrollEntrance>
              </Grid>
            </Content>
          </CenteredContainer>
        </Block>

      </Fragment>
    )
  }
}

const sizesToProps = ({ width, height }) => ({
  winWidth: width,
  winHeight: height
})

export default withSizes(sizesToProps)(ATF)
