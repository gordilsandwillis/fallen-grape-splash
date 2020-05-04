import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import Link from 'src/components/Link'
import Logo from 'src/components/Logo'
import Button from 'src/components/Button'
import Grid from 'src/components/Grid'
import ResponsiveComponent from 'src/components/ResponsiveComponent'
import ConditionalRender from 'src/components/ConditionalRender'
import MaterialIcon from 'src/components/MaterialIcon'
import ScrollListener from 'src/components/ScrollListener'
import { colors, typography, animations, mq, util } from 'src/styles'

const showHide = true // show and hide header on scroll
const headerHeight = util.responsiveStyles('height', 140, 130, 110, 75)
const headerHeightCollapsed = util.responsiveStyles('height', 80, 70, 66, 60)

const NavLinkStyle = (scrolled, active) => `
	display: block;
	position: relative;
	${ typography.h6 }
	${ util.responsiveStyles('margin-right', 60, 40, 32, 20) }
	padding: 10px 0;
	line-height: 1em;
	&:hover {
		${ scrolled ? `
			color: ${ colors.mainColor };
		` : `
			opacity: .5;
		` }
	}
	${ active && `
		color: ${ colors.mainColor };
		&:hover {
			color: ${ colors.mainColor };
		}
	` }
`

const NavLink = styled(Link)`
	${ props => NavLinkStyle(props.scrolled, props.active) }
`

const NavTrigger = styled.a`
	${ props => NavLinkStyle(props.scrolled, props.active) }
`

const Wrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 4;
	display: flex;
	align-items: center;
	justify-content: stretch;
	${ headerHeight }
	transition: height ${ animations.mediumSpeed } ease-in-out,
							background ${ animations.mediumSpeed } ease-in-out,
							transform ${ animations.mediumSpeed } ease-in-out;
	svg {
		* {
			fill: currentcolor;
		}
	}
	${ ({ scrolled }) => scrolled ? `
		${ headerHeightCollapsed }
		box-shadow: 0 1px 0 ${ rgba(colors.textColor, 0.05) }
	` : `
		${ headerHeight }
	` };

	${ ({ scrolled, hasAtf }) => scrolled ? `
		${ headerHeightCollapsed }
		background: ${ colors.white };
		color: ${ colors.textColor };
		box-shadow: 0 1px 0 ${ rgba(colors.textColor, 0.05) };
	` : `
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

const HeaderContent = styled(Grid)`
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
	${ headerHeight }
`

class Header extends Component {
	state = {
		scrolled: false,
		navList: false,
		drawerOpen: false
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

	render () {
		const {
			location,
			hasAtf,
			headerNavigation,
			headerDrawerBottomLinks,
			headerLinks,
			headerButtons
		} = this.props
		const { scrolled, navList, drawerOpen } = this.state

		let pathname = '/'
		if (location) {
			pathname = location.pathname
		}

		return (
			<Fragment>
				<ScrollListener.Consumer>
		      {({ scrolledToTop, scrolledToBottom, scrollY, scrolledUp, hasScrolled, pageHeight }) => {
		      	const scrolled = !scrolledToTop && hasScrolled
		      	return (
							<Wrapper scrolled={scrolled} hasAtf={hasAtf} navVisible={!scrolledUp && !scrolledToTop && showHide}>
								<HeaderContent
									small="1 [5] [2] [5] 1"
									medium="1 [5] [2] [5] 1"
									large="1 [9] [8] [9] 1"
									vAlign="center"
									navVisible={!scrolledUp && !scrolledToTop && showHide}
								>
									<div>
										<NavLinks>
											<NavLink
												scrolled={scrolled}
												hasAtf={hasAtf}
												to='/'
												// active={pathname === to}
											>
												Header Link
											</NavLink>
										</NavLinks>
									</div>
									<LogoCol>
										<Link to="/">
											<HeaderLogo scrolled={scrolled} hasAtf={hasAtf} />
										</Link>
									</LogoCol>
									<div>
										<NavLinks alignment="right">
											<NavLink
												scrolled={scrolled}
												hasAtf={hasAtf}
												to='/'
												// active={pathname === to}
											>
												Header Link
											</NavLink>
										</NavLinks>
									</div>
								</HeaderContent>
							</Wrapper>
						)
					}}
				</ScrollListener.Consumer>

				<ConditionalRender condition={!hasAtf}>
					<HeaderPlaceholder />
				</ConditionalRender>

			</Fragment>
		)
	}
}

Header.defaultProps = {
	hasAtf: true
}

export default Header
