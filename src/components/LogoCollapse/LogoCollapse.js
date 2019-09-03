import React from 'react'
import styled from '@emotion/styled'
import { typography, animations } from 'src/styles'
import LogoText from 'src/assets/images/mosaic-logo-text.svg' // TODO
import TopLeft from 'src/assets/images/mosaic-logo-corner-topleft.svg'
import TopRight from 'src/assets/images/mosaic-logo-corner-topright.svg'
import BottomLeft from 'src/assets/images/mosaic-logo-corner-bottomleft.svg'
import BottomRight from 'src/assets/images/mosaic-logo-corner-bottomright.svg'

const Wrapper = styled.div`
  ${ typography.responsiveStyles('height', 85, 72, 72, 72) }
  ${ typography.responsiveStyles('width', 85, 72, 72, 72) }
  position: relative;
  overflow: hidden;
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
    ${ typography.responsiveStyles('height', 42.5, 36, 36, 36) }
    ${ typography.responsiveStyles('width', 42.5, 36, 36, 36) }
    #text-container {
    ${ typography.responsiveStyles('height', 14, 12, 12, 12) }
    ${ typography.responsiveStyles('width', 14, 12, 12, 12) }
    #logo-svg {
      transform: translate3d(-.4%, -9%, 0);
    }
    }
  }
`

const Corner = styled.div`
  position: absolute;
  ${ typography.responsiveStyles('height', 14, 12, 12, 12) }
  ${ typography.responsiveStyles('width', 14, 12, 12, 12) }
  width: 100%;
  height: auto;

`

const TextContainer = styled.div`
  position: absolute;
  overflow: hidden;
  ${ typography.responsiveStyles('width', 56, 47.5, 47.5, 47.5) }
  transition: width ${ animations.mediumSpeed } ease-in-out,
              height ${ animations.mediumSpeed } ease-in-out;
  ${ typography.responsiveStyles('height', 0.458333333 * 85, 0.458333333 * 72, 0.458333333 * 72, 0.458333333 * 72) }

`

const Text = styled(LogoText)`
  ${ typography.responsiveStyles('width', 56, 47.5, 47.5, 47.5) }
  transition: transform ${ animations.mediumSpeed } ease-in-out;
`

const LogoCollapse = ({ scrolled, theme = 'light' }) => (
	<Wrapper className={scrolled ? 'scrolled' : ''}>
		<Corner style={{ top: 0, left: 0 }}><TopLeft theme={theme} /></Corner>
		<Corner style={{ top: 0, right: 0 }}><TopRight theme={theme} /></Corner>
		<Corner style={{ bottom: 0, left: 0 }}><BottomLeft theme={theme} /></Corner>
		<Corner style={{ bottom: 0, right: 0 }}><BottomRight theme={theme} /></Corner>
		<TextContainer id="text-container">
			<Text id="logo-svg" theme={theme} />
		</TextContainer>
	</Wrapper>
)

export default LogoCollapse
