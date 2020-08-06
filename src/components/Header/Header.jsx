import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import Link from 'src/components/Link'
import Logo from 'src/components/Logo'
import Grid from 'src/components/Grid'
import ConditionalRender from 'src/components/ConditionalRender'
import ScrollListener from 'src/components/ScrollListener'
import NotificationBanner from 'src/components/NotificationBanner'
import ResponsiveComponent from 'src/components/ResponsiveComponent'
import AnimatedIcon from 'src/components/AnimatedIcon'
import MobileMenu from 'src/components/MobileMenu'
import { colors, typography, animations, mq, util } from 'src/styles'

const showHide = false // show and hide header on scroll
const headerHeight = (additionalHeight = 0) => util.responsiveStyles('height', (140 + additionalHeight), (130 + additionalHeight), (110 + additionalHeight), (75 + additionalHeight))
const headerHeightCollapsed = util.responsiveStyles('height', 80, 70, 66, 60)

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background: ${ colors.mainColor };
  color: ${ colors.bgColor };
  ${ typography.bodySmall };
  font-weight: 600;
  letter-spacing: 0;
  padding: 10px 16px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0.3s ease-in-out, opacity 0.3s ease-in-out;
  a {
    display: inline-block;
    padding: 3px 0;
    opacity: .6;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 100%;
      width: 5px;
      height: 5px;
      transform: rotate(-45deg);
      border-bottom: 2px solid;
      border-right: 2px solid;
      border-color: ${ colors.mainColor };
      top: 50%;
      margin-top: -3px;
      opacity: 0;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    }
    &:hover {
      opacity: 1;
      &:after {
        opacity: 1;
        transform: rotate(-45deg) translate3d(5px, 5px, 0);
      }
    }
  }
`

const NavLinkStyle = (scrolled, active, hasAtf, dropdown) => `
	display: block;
	position: relative;
	${ typography.h6 }
	${ util.responsiveStyles('font-size', 16, 14, 11, 11) }
	${ util.responsiveStyles('margin-right', 60, 40, 20, 20) }
	line-height: 1em;
	flex-shrink: 0;
	transition: 	padding ${ animations.mediumSpeed } ease-in-out,
								margin ${ animations.mediumSpeed } ease-in-out,
                background ${ animations.mediumSpeed } ease-in-out,
								color ${ animations.mediumSpeed } ease-in-out;
	${ scrolled ? `
		padding: 3px 0 4px;
		margin-top: 0;
	` : `
		margin-top: -24px;
		padding: 0 0 4px;
		${ util.responsiveStyles('padding-top', 0, 2, 12, 6) }
	` }
	${ active ? `
		&:hover {
			color: ${ colors.mainColor };
		}
    &:after {
      position: absolute;
      top: 1.4em;
      content: '';
      display: block;
      height: 2px;
      left: 0;
      right: 0;
      background: ${ colors.mainColor };
    }
	` : `` }
  &:hover {
    ${ dropdown ? `
      color: ${ colors.bgColor };
      background: ${ colors.mainColor };
    ` : `
      color: ${ colors.mainColor };
    ` }
    ${ Dropdown } {
      visibility: visible;
      opacity: 1;
    }
  }
  ${ dropdown ? `
    padding-bottom: 10px;
    margin-bottom: -8px;
    ${ util.responsiveStyles('padding-top', 14, 14, 14, 14) }
    margin-top: -16px;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: -16px;
    ${ util.responsiveStyles('margin-right', 44, 24, 4, 4) }
    display: block;
    &:after {
      top: calc(12px + 1.4em);
      left: 16px;
      right: 16px;
    }
  ` : `` }
`

const NavLink = styled(Link)`
  ${ props => NavLinkStyle(props.scrolled, props.active, props.hasAtf, props.hasDropdown) }
`

const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 4;
`

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: height ${ animations.mediumSpeed } ease-in-out,
    background ${ animations.mediumSpeed } ease-in-out,
    transform ${ animations.mediumSpeed } ease-in-out,
    box-shadow ${ animations.mediumSpeed } ease-in-out;
  ${ ({ scrolled, hasAtf }) =>
    scrolled
      ? `
		${ headerHeightCollapsed }
		background: ${ colors.white };
		color: ${ colors.textColor };
		box-shadow: 0 1px 0 ${ rgba(colors.textColor, 0.1) };
	`
      : `
		${ headerHeight() }
		background: transparent;
		${
      hasAtf
        ? `
			color: ${ colors.bgColor };
		`
        : `
			color: ${ colors.textColor };
		`
      }
	` }
  ${ ({ navVisible }) =>
    navVisible &&
    `
		transform: translate3d(0, -101%, 0);
	` }
`

const HeaderContent = styled(Grid)``

const HeaderLogo = styled(Logo)`
	${ util.responsiveStyles('width', 80, 50, 50, 40) }
	height: auto;
	transition: color ${ animations.mediumSpeed } ease-in-out, width ${ animations.mediumSpeed } ease-in-out;
	${ ({ scrolled, hasAtf }) => scrolled ? `
		color: ${ colors.mainColor };
		${ util.responsiveStyles('width', 60, 40, 40, 30) }
	` : `
		${ !hasAtf ? `
			color: ${ colors.mainColor };
		` : `
			color: ${ colors.bgColor };
		` }
	` }
`

const LogoCol = styled.div`
	text-align: center;
	a {
		display: inline-block;
		vertical-align: top;
	}
`

const NavLinks = styled.div`
  align-items: baseline;
  display: flex;
  width: 100%;
  justify-content: ${ ({ alignment }) =>
    alignment === 'right' ? 'flex-end' : 'flex-start' };
  a:last-of-type {
    margin-right: 0;
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
	${ ({ hasBanner }) => hasBanner ? `
		${ headerHeight(40) }
	` : `
		${ headerHeight() }
	` }
`

const HeaderNotificationBanner = styled(NotificationBanner)`
	position: relative;
	z-index: 5;
`

class Header extends Component {
  state = {
    scrolled: false,
    navList: false,
    drawerOpen: false,
    bannerVisible: true
  }

  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  closeDrawer = () => {
    this.setState({ drawerOpen: false })
    setTimeout(() => {
      this.toggleDrawer(false)
    }, 600) // timeout needs to match the navigation drawer exit speed
  }

  closeBanner = () => {
    this.setState({ bannerVisible: false })
  }

  render () {
    const {
      location,
      hasAtf,
      bannerText,
      collapsed,
      bannerColor,
      navigation
    } = this.props
    const { scrolled, navList, drawerOpen, bannerVisible } = this.state

    let pathname = '/'
    if (location) {
      pathname = location.pathname
    }

    return (
      <Fragment>
        <ScrollListener.Consumer>
          {({
            scrolledToTop,
            scrolledToBottom,
            scrollY,
            scrolledUp,
            hasScrolled,
            pageHeight,
          }) => {
            let scrolled = false
            if (collapsed) {
              scrolled = true
            } else {
              scrolled = !scrolledToTop && hasScrolled && !drawerOpen
            }
            return (
              <div>
                <Wrapper scrolled={scrolled} hasAtf={hasAtf} navVisible={!scrolledUp && !scrolledToTop && showHide}>
                  <HeaderNotificationBanner
                    closeBanner={this.closeBanner}
                    collapsed={!bannerVisible}
                    text={bannerText}
                    setTheme={bannerColor}
                  />
                  <HeaderWrapper
                    navVisible={!scrolledUp && !scrolledToTop && showHide}
                    hasAtf={hasAtf}
                    scrolled={scrolled}
                    navVisible={!scrolledUp && !scrolledToTop && showHide}
                  >
                    <HeaderContent
                      small="1 [5] [2] [5] 1"
                      medium="1 [5] [2] [5] 1"
                      large="1 [9] [8] [9] 1"
                      vAlign="center"
                      navVisible={!scrolledUp && !scrolledToTop && showHide}
                      hasAtf={hasAtf}
                      scrolled={scrolled}
                      navVisible={!scrolledUp && !scrolledToTop && showHide}
                    >
                      <div>
                      </div>
                      <LogoCol>
                        <Link to="/">
                          <HeaderLogo scrolled={scrolled} hasAtf={hasAtf} />
                        </Link>
                      </LogoCol>
                      <div>
                        <NavLinks alignment="right">
                          <ResponsiveComponent
                            small={
                              <MenuIcon onClick={() => this.toggleDrawer()}>
                                <AnimatedIcon
                                  icon={drawerOpen ? 'close' : 'menu'}
                                />
                              </MenuIcon>
                            }
                            medium={navigation && navigation.map((link, index) => (
                              <NavLink
                                scrolled={scrolled}
                                hasAtf={hasAtf}
                                to={link.to.slug}
                                active={pathname === link.to.slug}
                                key={link.to.slug}
                                hasDropdown={link.dropdownLinks}
                              >
                                {link.label}
                                {link.dropdownLinks && (
                                  <Dropdown>
                                    {link.dropdownLinks.map((dropdownLink, index) => (
                                      <div>
                                        <Link to={dropdownLink.to.slug}>{dropdownLink.label}</Link>
                                      </div>
                                    ))}
                                  </Dropdown>
                                )}
                              </NavLink>
                            ))}
                          />
                        </NavLinks>

                      </div>
                    </HeaderContent>
                  </HeaderWrapper>
                </Wrapper>
              </div>
            )
          }}
        </ScrollListener.Consumer>

        <ConditionalRender condition={!hasAtf}>
          <HeaderPlaceholder hasBanner={bannerText && bannerVisible} />
        </ConditionalRender>

        <ResponsiveComponent
          small={
            <MobileMenu
              open={drawerOpen}
              toggleMobileMenu={this.toggleMobileMenu}
              navLinks={navigation}
            // footerColumn1={footerColumn1}
            // footerColumn2={footerColumn2}
            />
          }
          medium={<span />}
        />

      </Fragment >
    )
  }
}

Header.defaultProps = {
  hasAtf: false
}

export default Header
