import React, { Component } from 'react'
import styled from '@emotion/styled'
import Container from 'src/components/Container'
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
import { navPages } from 'src/mockData'

const PageCheat = styled.div`
  position: static;
  height: ${ ({ hasAtf }) => (hasAtf ? '0' : '150px') };
`

const Wrapper = styled.header`
  ${ ({ theme }) => (theme === 'light' ? lightStyles : transparentStyles) };
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
    height: 1px;
    bottom: -5px;
    opacity: 0;
    transition: bottom ${ animations.mediumSpeed } ease-in-out,
      opacity ${ animations.mediumSpeed } ease-in-out;
  }
  &:hover {
    a {
      border-bottom-color: currentColor;
    }
    &:after {
      ${ ({ underlined }) =>
		!underlined &&
        ` bottom: -1px;
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
    background-color: rgba(0, 0, 0, 0.95);
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
  			<Wrapper
  				className={scrolled ? 'scrolled' : ''}
  				theme={scrolled ? 'light' : theme}
  			>
  				<HeaderContainer>
  					<Grid
  						showOverlay={false}
  						small="[5] [1]"
  						medium="[6] [6]"
  						large="[6] [6]"
  					>
  						<div>
  							<LinkStyled to={'/'}>
  								<LogoCollapse
  									scrolled={scrolled}
  									theme={scrolled ? 'light' : theme}
  								/>
  							</LinkStyled>
  						</div>
  						<NavItemsContainer>
  							<DesktopDetect>
  								{navPages.map(({ name, slug }) => (
  									<DesktopLinkContainer
  										theme={scrolled ? 'light' : theme}
  										underlined={checkSlug({ slug, pathname })}
  										key={name + slug}
  										theme={scrolled ? 'light' : theme}
  									>
  										<Link
  											underlined={checkSlug({ slug, pathname })}
  											theme={scrolled ? 'light' : theme}
  											key={name}
  											to={slug}
  											noHoverColor
  										>
  											{name}
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
  											{navPages.map(({ name, slug }, index) => (
  												<MobileNavLink
  													key={name}
  													to={slug}
  													orderNumber={index}
  													mobileNavOpen={mobileNavOpen}
  												>
  													{name}
  												</MobileNavLink>
  											))}
  										</MobileNavLinkContainer>
  									</NavContainer>
  								</Overlay>
  							</MobileDetect>
  							<MobileDetect>
  								<HamburgerContainer onClick={this.toggleNav}>
  									<HamburgerIcon
  										clicked={mobileNavOpen}
  										scrolled={scrolled}
  										theme={scrolled ? 'light' : theme}
  									/>
  								</HamburgerContainer>
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
