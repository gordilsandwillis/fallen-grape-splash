import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import Image from 'src/components/Image'
import LogoLight from 'src/assets/images/mosaic_wordmark_white.svg' // TODO
import LogoDark from 'src/assets/images/mosaic_wordmark_black.svg' // TODO
import MenuIcon from 'src/assets/images/menu.svg'
import CloseIcon from 'src/assets/images/close.svg'
import MaterialIcon from 'src/components/MaterialIcon'
// import LogoLockup from 'src/components/LogoLockup'
// import SidebarNavigation from 'src/components/SidebarNavigation'
// import Button from 'src/components/Button'
// import AudioIcon from 'assets/images/icon-audio.svg'
import {
	colors,
	typography,
	animations,
	mediaQueries as mq,
	gridSettings
} from 'src/styles'
import { navPages } from 'src/mockData'

const Wrapper = styled.header`
  ${ ({ theme }) => (theme === 'light' ? lightStyles : transparentStyles) };
  color: ${ colors.black };
  ${ typography.body }
  left: 0;
  right: 0;
  z-index: 4;
  height: 150px;
`

const lightStyles = `
  position: static;
  background-color: ${ colors.offwhite };
  color: ${ colors.black }
`

const transparentStyles = `
  position: absolute;
  background-color: transparent;
  top: 0;
  color: ${ colors.primaryColor };
`

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  padding-top: 36px;
`

const NavContainer = styled(HeaderContainer)`
  ${ typography.bodyLight }
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MobileNavLinkContainer = styled.div`
  position: absolute;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 5;
`

const LogoContainer = styled.div`
  height: 72px;
  width: 72px;
`

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 24px;
  height: 24px;
  svg {
    stroke: ${ ({ theme }) => (theme === 'light' ? colors.black : colors.white) };
    transition: stroke ${ animations.mediumSpeed } ease-in-out;
  }
  &:hover {
    svg {
      stroke: ${ ({ theme }) =>
		theme === 'light' ? colors.grey : colors.unofficialLightGrey };
    }
  }
`

const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const LinkContainer = styled.span`
  margin-left: 45px;
`

const MobileNavLink = styled(Link)`
  font-size: 44px;
  z-index: 5;
  line-height: 100px;
`

const DesktopDetect = styled.div`
  ${ mq.mediumAndBelow } {
    display: none;
  }
`

const MobileDetect = styled.div`
  ${ mq.largeAndUp } {
    display: none;
  }
  align-self: flex-start;
  z-index: 4;
`

const HamburgerContainer = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  cursor: pointer;
  ${ typography.responsiveStyles('height', 40, 36, 32, 24) }
`

const Overlay = styled.div`
  background: black;
  opacity: 0.95;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`

class Header extends Component {
	constructor (props) {
		super(props)
		this.state = {
			mobileNavOpen: false,
		}
	}

  toggleNav = () => {
  	this.setState(state => ({
  		mobileNavOpen: !state.mobileNavOpen,
  	}))
  }

  render () {
  	const {
  		logo,
  		winHeight,
  		theme = 'transparent',
  		location: { pathname },
  	} = this.props
  	const { mobileNavOpen } = this.state
  	return (
  		<Wrapper theme={theme}>
  			<HeaderContainer>
  				<Grid
  					showOverlay={false}
  					small="[5] [1]"
  					medium="[6] [6]"
  					large="[6] [6]"
  				>
  					<LogoContainer>
  						<Link to={'/'}>
  							{theme === 'light' ? <LogoDark /> : <LogoLight />}
  						</Link>
  					</LogoContainer>
  					<NavItemsContainer>
  						<DesktopDetect>
  							{navPages.map(({ name, slug }) => (
  								<LinkContainer key={name + slug}>
  									<Link
  										underlined={slug === pathname ? 'true' : undefined}
  										theme={theme}
  										key={name}
  										to={slug}
  									>
  										{name}
  									</Link>
  								</LinkContainer>
  							))}
  						</DesktopDetect>
  						<MobileDetect>
  							{!mobileNavOpen ? (
  								<HamburgerContainer onClick={this.toggleNav}>
  									<IconContainer theme={theme}>
  										<MenuIcon />
  									</IconContainer>
  								</HamburgerContainer>
  							) : (
  								<Overlay>
  									<NavContainer>
  										<HamburgerContainer onClick={this.toggleNav}>
  											<IconContainer>
  												<CloseIcon />
  											</IconContainer>
  										</HamburgerContainer>
  										<MobileNavLinkContainer mobileNavOpen={mobileNavOpen}>
  											{navPages.map(({ name, slug }) => (
  												<MobileNavLink key={name} to={slug}>
  													{name}
  												</MobileNavLink>
  											))}
  										</MobileNavLinkContainer>
  									</NavContainer>
  								</Overlay>
  							)}
  						</MobileDetect>
  					</NavItemsContainer>
  				</Grid>
  			</HeaderContainer>
  		</Wrapper>
  	)
  }
}

export default Header
