import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import Image from 'src/components/Image'
import Logo from 'src/assets/images/mosaic_wordmark_white.svg' // TODO
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

const Wrapper = styled.footer`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	color: ${ colors.black };
	z-index: 4;
	height: 150px;
`

const HeaderContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	padding-top: 40px;
	/* justify-content: center; */
	color: ${ colors.primaryColor };
`

const NavContainer = styled(HeaderContainer)`
	${ typography.bodyLight }
	${ typography.responsiveStyles('font-size', 40, 40, 40, 40) }
  display: flex;
	flex-direction: column;
`

const MobileNavLinkContainer = styled(HeaderContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 0;
	padding-bottom: 30px;
	z-index: 5;
`

const LogoContainer = styled.div`
	${ typography.responsiveStyles('height', 100, 90, 80, 60) }
	${ typography.responsiveStyles('width', 100, 90, 80, 60) }
`

const MenuIconContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	${ typography.responsiveStyles('height', 40, 36, 32, 24) }
	${ typography.responsiveStyles('width', 40, 36, 32, 24) }
`

const NavItemsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`
const NavLink = styled(Link)`
	margin-left: 40px;
`
const NavLinkUnderlined = styled(NavLink)`
	border-bottom: 2px solid ${ colors.white };
`

const MobileNavLink = styled(Link)`
	z-index: 5;
	padding-bottom: 25px;
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
			location: { pathname },
		} = this.props
		const { mobileNavOpen } = this.state
		return (
			<Fragment>
				<Wrapper>
					<HeaderContainer>
						<Grid
							showOverlay={true}
							small="[5] [1]"
							medium="[6] [6]"
							large="[6] [6]"
						>
							<LogoContainer>
								<Link to={'/'}>
									<Logo />
								</Link>
							</LogoContainer>
							<NavItemsContainer>
								<DesktopDetect>
									{navPages.map(page => {
										console.log(page.slug, pathname)
										return page.slug === pathname ? (
											<NavLinkUnderlined key={page.name} to={page.slug}>
												{page.name}
											</NavLinkUnderlined>
										) : (
											<NavLink key={page.name} to={page.slug}>
												{page.name}
											</NavLink>
										)
									})}
								</DesktopDetect>
								<MobileDetect>
									{!mobileNavOpen ? (
										<HamburgerContainer onClick={this.toggleNav}>
											<MenuIconContainer>
												<MenuIcon />
											</MenuIconContainer>
										</HamburgerContainer>
									) : (
										<Overlay>
											<NavContainer>
												<HamburgerContainer onClick={this.toggleNav}>
													<MenuIconContainer>
														<CloseIcon />
													</MenuIconContainer>
												</HamburgerContainer>
												<MobileNavLinkContainer>
													{navPages.map(page => (
														<MobileNavLink key={page.name} to={page.slug}>
															{page.name}
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
			</Fragment>
		)
	}
}

export default Header
