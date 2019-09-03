import React, { Component } from 'react'
import styled from '@emotion/styled'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import MenuIcon from 'src/assets/images/menu.svg'
import CloseIcon from 'src/assets/images/close.svg'
import LogoCollapse from 'src/components/LogoCollapse'
import { colors, typography, animations, mediaQueries as mq } from 'src/styles'
import { navPages } from 'src/mockData'

const PageCheat = styled.div`
  position: static;
  height: ${ ({ hasAtf }) => (hasAtf ? '0' : '150px') };
`

const Wrapper = styled.header`
  ${ ({ theme, scrolled }) =>
		theme === 'light' || scrolled ? lightStyles : transparentStyles };
  ${ typography.body }
  left: 0;
  transition: height ${ animations.mediumSpeed } ease-in-out,
    background-color ${ animations.mediumSpeed } ease-in-out;
  right: 0;
  z-index: 4;
  height: 150px;
  position: fixed;
  &.scrolled {
    height: 110px;
    background-color: ${ colors.offwhite };
    color: ${ colors.black };
  }
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
  color: ${ colors.white };
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

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 24px;
  height: 24px;
  svg {
    stroke: ${ ({ theme, scrolled }) =>
		theme === 'light' || scrolled ? colors.black : colors.white };
    transition: stroke ${ animations.mediumSpeed } ease-in-out;
  }
  &:hover {
    svg {
      stroke: ${ ({ theme, scrolled }) =>
		theme === 'light' || scrolled
			? colors.grey
			: colors.unofficialLightGrey };
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

const LinkStyled = styled(Link)`
  vertical-align: top;
  display: inline-block;
  color: currentColor;
  &:hover {
    color: currentColor;
  }
`

class Header extends Component {
	constructor (props) {
		super(props)
		this.state = {
			scrolled: false,
			mobileNavOpen: false,
		}
	}

	componentDidMount () {
		if (this.props.scrolled && !this.state.scrolled) {
			this.setState({ scrolled: true })
		} else {
			this.handleScroll()
			window.addEventListener('scroll', this.handleScroll)
		}
	}

	componentWillUnmount () {
		if (this.props.scrolled && !this.state.scrolled) {
			return false
		} else {
			window.removeEventListener('scroll', this.handleScroll)
		}
	}

  handleScroll = event => {
  	let scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop
  	if (scrollTop > 10) {
  		if (!this.state.scrolled) {
  			this.setState({ scrolled: true })
  		}
  	} else {
  		if (this.state.scrolled) {
  			this.setState({ scrolled: false })
  		}
  	}
  }
  toggleNav = () => {
  	this.setState(state => ({
  		mobileNavOpen: !state.mobileNavOpen,
  	}))
  }

  render () {
  	const {
  		// logo,
  		// winHeight,
  		theme = 'transparent',
  		location: { pathname },
  		hasAtf = false,
  	} = this.props
  	const { mobileNavOpen, scrolled } = this.state
  	return (
  		<PageCheat className={scrolled ? 'scrolled' : ''} hasAtf={hasAtf}>
  			<Wrapper className={scrolled ? 'scrolled' : ''} theme={theme}>
  				<HeaderContainer>
  					<Grid
  						showOverlay={false}
  						small="[5] [1]"
  						medium="[6] [6]"
  						large="[6] [6]"
  					>
  						<div>
  							<LinkStyled to={'/'}>
  								<LogoCollapse scrolled={scrolled} theme={theme} />
  							</LinkStyled>
  						</div>
  						<NavItemsContainer>
  							<DesktopDetect>
  								{navPages.map(({ name, slug }) => (
  									<LinkContainer key={name + slug}>
  										<Link
  											underlined={
  												checkSlug({ slug, pathname }) ? 'true' : undefined
  											}
  											theme={scrolled ? 'light' : theme}
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
  										<IconContainer scrolled={scrolled} theme={theme}>
  											<MenuIcon />
  										</IconContainer>
  									</HamburgerContainer>
  								) : (
  									<Overlay>
  										<NavContainer>
  											<HamburgerContainer onClick={this.toggleNav}>
  												<IconContainer scrolled={scrolled}>
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
  		</PageCheat>
  	)
  }
}

export default Header

const checkSlug = ({ slug, pathname }) =>
	'/' + pathname.split(/([$&+,/:;=?@#><%])/g)[2] === slug
