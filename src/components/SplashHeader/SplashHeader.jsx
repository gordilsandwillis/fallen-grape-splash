import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import Logo from 'src/components/Logo'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import { colors, typography, animations, mq, util } from 'src/styles'

const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 4;
  color: ${ ({ setColor }) => setColor };
  padding-top: ${ 100 / 14 }vw;
  transition: color 300ms 300ms ease-in-out;
  ${ mq.largeAndUp } {
    padding-top: ${ 100 / 28 }vw;
  }
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: height ${ animations.mediumSpeed } ease-in-out,
              background ${ animations.mediumSpeed } ease-in-out,
              transform ${ animations.mediumSpeed } ease-in-out,
              box-shadow ${ animations.mediumSpeed } ease-in-out;
  color: inherit;
`

const HeaderContent = styled(Grid)``

const HeaderLogo = styled(Logo)`
	${ util.responsiveStyles('width', 200, 190, 170, 150) }
	height: auto;
	transition: none;
	color: inherit;
`

const LogoCol = styled.div`
	text-align: left;
  color: inherit;
	a {
		display: inline-block;
		vertical-align: top;
    color: inherit;
	}
`

const MenuIcon = styled.div`
	display: none;
	padding: 5px 10px;
	margin-left: -10px;
	cursor: pointer;
	span {
		display: block;
	}
	${ mq.mediumAndBelow } {
		display: inline-block;
	}
`

const HeaderPlaceholder = styled.div`
	background: transparent;
	width: 100%;
	transition: height 0.3s ease-in-out;
`

class Header extends Component {
  render () {
    const { color } = this.props

    return (
      <Fragment>
        <div>
          <Wrapper setColor={color}>
            <HeaderWrapper>
              <HeaderContent
                small="1 [6] [6] 1"
                medium="1 [6] [6] 1"
                large="1 [12] [12] 1"
                vAlign="center"
              >
                <LogoCol>
                  <Link to='/'>
                    <HeaderLogo />
                  </Link>
                </LogoCol>
                <div>
                  <p className="medium" style={{ textAlign: 'right', margin: 0 }}><b>Coming Soon</b></p>
                </div>
              </HeaderContent>
            </HeaderWrapper>
          </Wrapper>
        </div>
      </Fragment>
    )
  }
}

Header.defaultProps = {
  color: 'offWhite'
}

export default Header
