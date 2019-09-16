import React from 'react'
import styled from '@emotion/styled'
import { typography, animations } from 'src/styles'
import LogoText from 'src/assets/images/mosaic-logo-text.svg'
import TopLeft from 'src/assets/images/mosaic-logo-corner-topleft.svg'
import TopRight from 'src/assets/images/mosaic-logo-corner-topright.svg'
import BottomLeft from 'src/assets/images/mosaic-logo-corner-bottomleft.svg'
import BottomRight from 'src/assets/images/mosaic-logo-corner-bottomright.svg'

const XLARGE = 85 * 1.25
const LARGE = 72 * 1.25
const MEDIUM = 72 * 1.25
const SMALL = 72 * 1.25

const Wrapper = styled.div`
  ${ typography.responsiveStyles('height', XLARGE, LARGE, MEDIUM, SMALL) }
  ${ typography.responsiveStyles('width', XLARGE, LARGE, MEDIUM, SMALL) }
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    path, polygon {
      fill: currentColor
    }
    display: block;
    rect {
     fill: transparent;
    }
  }
  transition: width ${ animations.mediumSpeed } ease-in-out,
              height ${ animations.mediumSpeed } ease-in-out;
  &.scrolled {
    ${ typography.responsiveStyles('height', XLARGE / 2, LARGE / 2, MEDIUM / 2, SMALL / 2) }
    ${ typography.responsiveStyles('width', XLARGE / 2, LARGE / 2, MEDIUM / 2, SMALL / 2) }
    #text-container {
    ${ typography.responsiveStyles('height', XLARGE / 6, LARGE / 6, MEDIUM / 6, SMALL / 6) }
    ${ typography.responsiveStyles('width', XLARGE / 6, LARGE / 6, MEDIUM / 6, SMALL / 6) }
    #logo-svg {
      transform: translate3d(-.4%, -9%, 0);
    }
    }
  }
`

const Corner = styled.div`
  position: absolute;
  ${ typography.responsiveStyles('height', XLARGE / 6, LARGE / 6, MEDIUM / 6, SMALL / 6) }
  ${ typography.responsiveStyles('width', XLARGE / 6, LARGE / 6, MEDIUM / 6, SMALL / 6) }
  width: 100%;
  height: auto;

`

const TextContainer = styled.div`
  position: absolute;
  overflow: hidden;
  ${ typography.responsiveStyles('width', XLARGE / 1.517857143, LARGE / 1.517857143, MEDIUM / 1.517857143, SMALL / 1.517857143) }
  transition: width ${ animations.mediumSpeed } ease-in-out,
              height ${ animations.mediumSpeed } ease-in-out;
  ${ typography.responsiveStyles('height', XLARGE * 0.458333333, LARGE * 0.458333333, MEDIUM * 0.458333333, SMALL * 0.458333333) }

`

const Text = styled(LogoText)`
  ${ typography.responsiveStyles('width', XLARGE * 0.659722222, LARGE * 0.659722222, MEDIUM * 0.659722222, SMALL * 0.659722222) }
  transition: transform ${ animations.mediumSpeed } ease-in-out;
`

const LogoCollapse = ({ scrolled }) => (
	<Wrapper className={scrolled ? 'scrolled' : ''}>
		<Corner style={{ top: 0, left: 0 }}><TopLeft /></Corner>
		<Corner style={{ top: 0, right: 0 }}><TopRight /></Corner>
		<Corner style={{ bottom: 0, left: 0 }}><BottomLeft /></Corner>
		<Corner style={{ bottom: 0, right: 0 }}><BottomRight /></Corner>
		<TextContainer id="text-container">
			<Text id="logo-svg" />
		</TextContainer>
	</Wrapper>
)

export default LogoCollapse
