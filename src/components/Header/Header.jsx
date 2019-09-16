import React, { Component } from 'react'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import LogoCollapse from 'src/components/LogoCollapse'
import HamburgerIcon from 'src/components/HamburgerIcon'
import {
	colors,
	typography,
	animations,
	mediaQueries as mq,
	gridSettings
} from 'src/styles'

const PageCheat = styled.div`
  position: static;
  ${ ({ hasAtf }) => (hasAtf ? 'height: 0' : typography.responsiveStyles('height', 150, 150, 150, 120)) }
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

const Wrapper = styled.header`
  ${ ({ hasAtf, scrolled }) => (hasAtf && !scrolled) ? transparentStyles : lightStyles };
  ${ typography.body }
  left: 0;
  transition: height ${ animations.mediumSpeed } ease-in-out,
    background-color ${ animations.mediumSpeed } ease-in-out;
  right: 0;
  z-index: 4;
  ${ typography.responsiveStyles('height', 150, 150, 150, 120) }
  position: fixed;
	${ ({ scrolled }) => scrolled &&
	`
    ${ typography.responsiveStyles('height', 90, 80, 80, 70) }
    background-color: ${ colors.offwhite };
		color: ${ colors.black };
  `
}
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 2500px;
	width: calc(100% - ${ gridSettings.containerLargeMargins } * 2);
	margin: 0 auto;
  height: 100%;

	${ mq.largeAndBelow } {
		width: calc(100% - ${ gridSettings.containerMediumMargins } * 2);
	}

	${ mq.mediumAndBelow } {
		width: calc(100% - ${ gridSettings.containerMediumMargins } * 2);
	}

	${ mq.smallAndBelow } {
		width: calc(100% - ${ gridSettings.containerSmallMargins } * 2);
	}
`

const NavContainer = styled.div`
  max-width: 2500px;
  width: calc(100% - ${ gridSettings.containerLargeMargins } * 2);
  margin: 0 auto;
  height: 100%;

  ${ mq.largeAndBelow } {
    width: calc(100% - ${ gridSettings.containerMediumMargins } * 2);
  }

  ${ mq.mediumAndBelow } {
    width: calc(100% - ${ gridSettings.containerMediumMargins } * 2);
  }

  ${ mq.smallAndBelow } {
    width: calc(100% - ${ gridSettings.containerSmallMargins } * 2);
  }
  ${ typography.bodyLight }
  display: flex;
  padding-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: visibility ${ animations.mediumSpeed } ease-in-out;
  visibility: ${ ({ mobileNavOpen }) => (mobileNavOpen ? 'visibile' : 'hidden') };
`

const MobileNavLinkContainer = styled.div`
  user-select: none;
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

const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const DesktopLinkContainer = styled.span`
  margin-left: 45px;
  position: relative;
  &:after {
    background: currentColor;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    bottom: -7px;
    opacity: 0;
    transition: transform ${ animations.mediumSpeed } ease-in-out,
      opacity ${ animations.mediumSpeed } ease-in-out;
  }
  &:hover {
    a {
      border-bottom-color: currentColor;
    }
    &:after {
      ${ ({ underlined }) =>
		!underlined &&
		` transform: translate3d(0,-5px, 0);
			 		opacity: 1;
			 ` }
    }
  }
`

const MobileNavLink = styled(Link)`
  font-size: 44px;
  z-index: 5;
  line-height: 100px;
  transition: ${ ({ orderNumber }) =>
		`opacity ${ animations.mediumSpeed } ${ orderNumber / 20 }s ease-in-out,
		transform ${ animations.mediumSpeed } ${ orderNumber / 20 }s ease-in-out` };
  ${ ({ mobileNavOpen }) =>
		mobileNavOpen
			? `opacity: 1; transform: none; visibility: visibile;`
			: `opacity: 0; transform: translate3d(0,50px,0); visibility: hidden;` }
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
	transition: transform ${ animations.mediumSpeed } ease-in-out;
	${ ({ center, scrolled }) => (center && scrolled) && 'transform: translate3d(0px, .65em, 0px)' };
  z-index: 4;
`

const HamburgerContainer = styled.div`
  margin-top:2px;
	align-self: flex-end;
  justify-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  cursor: pointer;
  ${ typography.responsiveStyles('height', 40, 36, 32, 24) }
`

const Overlay = styled.div`
  transition: background-color ${ animations.mediumSpeed } ease-in-out,
    visibility ${ animations.mediumSpeed } ease-in-out;
  visibility: ${ ({ mobileNavOpen }) => (mobileNavOpen ? 'visibile' : 'hidden') };
  background: rgba(0, 0, 0, 0);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  &.open {
    background-color: rgba(0, 0, 0, 0.8);
  }
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
			this.setState({ scrolled: false })
		} else {
			this.handleScroll()
			this.setState({ scrolled: false })
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
  		location: { pathname = '/' },
  		navigation,
  		hasAtf = false,
  	} = this.props
  	const { mobileNavOpen, scrolled } = this.state
  	return (
  		<PageCheat scrolled={scrolled} hasAtf={hasAtf}>
  			<Wrapper
  				scrolled={scrolled}
  				hasAtf={hasAtf}
  			>
  				<HeaderContainer>
  					<Grid small="[1] [1]" medium="[4] [8]" large="[4] [8]" >
  						<div>
  							<LinkStyled to={'/'}>
  								<LogoCollapse
  									scrolled={scrolled}
  									hasAtf={hasAtf} />
  							</LinkStyled>
  						</div>
  						<NavItemsContainer>
  							<DesktopDetect>
  								{navigation && navigation.map(({ title, slug }, index) => (
  									<DesktopLinkContainer key={title + slug + index} underlined={checkSlug({ slug, pathname })}>
  										<Link
  											to={slug}
  											underlined={checkSlug({ slug, pathname })}
  											dark={!(hasAtf && !scrolled)}
  											noHoverColor >
  											{title}
  										</Link>
  									</DesktopLinkContainer>
  								))}
  							</DesktopDetect>
  							<MobileDetect>
  								<Overlay
  									mobileNavOpen={mobileNavOpen}
  									className={mobileNavOpen ? 'open' : 'closed'}
  								>
  									<NavContainer mobileNavOpen={mobileNavOpen}>
  										<MobileNavLinkContainer mobileNavOpen={mobileNavOpen}>
  											{navigation && navigation.map(({ title, slug }, index) => (
  												<MobileNavLink
  													key={title}
  													to={slug}
  													orderNumber={index}
  													mobileNavOpen={mobileNavOpen}
  												>
  													{title}
  												</MobileNavLink>
  											))}
  										</MobileNavLinkContainer>
  									</NavContainer>
  								</Overlay>
  							</MobileDetect>
  							<MobileDetect scrolled={scrolled} center>
  								<Link to={location.pathname}>
  								<HamburgerContainer onClick={this.toggleNav}>
  									<HamburgerIcon
  										clicked={mobileNavOpen}
  										scrolled={scrolled}
  										hasAtf={hasAtf} />
  								</HamburgerContainer>
  								</Link>
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
	pathname.split(/([$&+,/:;=?@#><%])/g)[2] === slug
