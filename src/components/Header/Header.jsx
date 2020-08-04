import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import Link from 'src/components/Link'
import Logo from 'src/components/Logo'
import Grid from 'src/components/Grid'
import ConditionalRender from 'src/components/ConditionalRender'
import ScrollListener from 'src/components/ScrollListener'
import NotificationBanner from 'src/components/NotificationBanner'
import { colors, typography, animations, mq, util } from 'src/styles'

const showHide = false // show and hide header on scroll
const headerHeight = (additionalHeight = 0) => util.responsiveStyles('height', (140 + additionalHeight), (130 + additionalHeight), (110 + additionalHeight), (75 + additionalHeight))
const headerHeightCollapsed = util.responsiveStyles('height', 80, 70, 66, 60)

const NavLinkStyle = (scrolled, active, hasAtf) => `
	display: block;
	position: relative;
	${ typography.h6 }
	${ util.responsiveStyles('margin-right', 60, 40, 32, 20) }
	padding: 10px 0 8px;
	line-height: 1em;
	flex-shrink: 0;
	border-bottom: 2px solid transparent;
	&:hover {
		color: ${ colors.mainColor };
	}
	${ active && `
		border-color: ${ colors.mainColor };
		&:hover {
			color: ${ colors.mainColor };
		}
	` }
`

const NavLink = styled(Link)`
	${ props => NavLinkStyle(props.scrolled, props.active, props.hasAtf) }
`

const NavTrigger = styled.a`
	${ props => NavLinkStyle(props.scrolled, props.active, props.hasAtf) }
`

const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 4;
`

const HeaderContent = styled(Grid)`
	transition: height ${ animations.mediumSpeed } ease-in-out,
							background ${ animations.mediumSpeed } ease-in-out,
							transform ${ animations.mediumSpeed } ease-in-out;
	${ ({ scrolled, hasAtf }) => scrolled ? `
		${ headerHeightCollapsed }
		background: ${ colors.white };
		color: ${ colors.textColor };
	` : `
		${ headerHeight() }
		background: transparent;
		${ hasAtf ? `
			color: ${ colors.bgColor };
		` : `
			color: ${ colors.textColor };
		` }
	` }
	${ ({ navVisible }) => navVisible && `
		transform: translate3d(0, -101%, 0);
	` }
`

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
	align-items: center;
	display: flex;
	width: 100%;
	justify-content: ${ ({ alignment }) => alignment === 'right' ? 'flex-end' : 'flex-start' };
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

	toggleDrawer = id => {
		this.setState({ navList: id, drawerOpen: id })
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
			headerNavigation,
			headerDrawerBottomLinks,
			headerLinks,
			headerButtons,
			bannerText,
			bannerColor
		} = this.props
		const { scrolled, navList, drawerOpen, bannerVisible } = this.state

		let pathname = '/'
		if (location) {
			pathname = location.pathname
		}

		const navLinks = [
			{
				label: 'Header Link',
				to: '/',
				id: 'link-id'
			}
		]

		const rightNavLinks = [
			{
				label: 'Link',
				to: '/another-page',
				id: 'link-id'
			}
		]

		return (
			<Fragment>
				<ScrollListener.Consumer>
		      {({ scrolledToTop, scrolledToBottom, scrollY, scrolledUp, hasScrolled, pageHeight }) => {
						const scrolled = !scrolledToTop && hasScrolled
						return (
							<div>
								<Wrapper scrolled={scrolled} hasAtf={hasAtf} navVisible={!scrolledUp && !scrolledToTop && showHide}>
									<HeaderNotificationBanner
										closeBanner={this.closeBanner}
										collapsed={!bannerVisible}
										text={bannerText}
										setTheme={bannerColor}
									/>
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
											<NavLinks>
												{navLinks.map((link, index) => (
													<NavLink
														scrolled={scrolled}
														hasAtf={hasAtf}
														to={link.to}
														active={pathname === link.to}
													>
														{link.label}
													</NavLink>
												))}
											</NavLinks>
										</div>
										<LogoCol>
											<Link to="/">
												<HeaderLogo scrolled={scrolled} hasAtf={hasAtf} />
											</Link>
										</LogoCol>
										<div>
											<NavLinks alignment="right">
												{rightNavLinks.map((link, index) => (
													<NavLink
														scrolled={scrolled}
														hasAtf={hasAtf}
														to={link.to}
														active={pathname === link.to}
													>
														{link.label}
													</NavLink>
												))}
											</NavLinks>
										</div>
									</HeaderContent>
								</Wrapper>
							</div>
						)
					}}
				</ScrollListener.Consumer>

				<ConditionalRender condition={!hasAtf}>
					<HeaderPlaceholder hasBanner={bannerText && bannerVisible}/>
				</ConditionalRender>

			</Fragment>
		)
	}
}

Header.defaultProps = {
	hasAtf: false
}

export default Header
