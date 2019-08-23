import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import Image from 'src/components/Image'
import Logo from 'src/assets/images/mosaic_wordmark_white.svg' // TODO
import MaterialIcon from 'src/components/MaterialIcon'
// import LogoLockup from 'src/components/LogoLockup'
// import SidebarNavigation from 'src/components/SidebarNavigation'
// import Button from 'src/components/Button'
// import MenuIcon from 'assets/images/icon-menu.svg'
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
	flex-direction: row;
`

const MobileNavLinkContainer = styled(HeaderContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: 0;
`

const LogoContainer = styled.div`
	${ typography.responsiveStyles('height', 100, 90, 80, 60) }
	${ typography.responsiveStyles('width', 100, 90, 80, 60) }
`

const NavItemsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`
const NavLink = styled(Link)`
	padding-left: 40px;
`

const MobileNav = styled.div`
	z-index: 5;
`

const MobileNavLink = styled(Link)`
	z-index: 5;
	padding: 30px 0px;
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
`

const HamburgerContainer = styled.div`
	justify-self: flex-end;
	cursor: pointer;
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
		console.log('toggled')
		this.setState(state => ({
			mobileNavOpen: !state.mobileNavOpen,
		}))
	}

	render () {
		const { logo, winHeight } = this.props
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
								<Logo />
							</LogoContainer>
							<NavItemsContainer>
								<DesktopDetect>
									{navPages.map(page => (
										<NavLink key={page.name} to={page.slug}>
											{page.name}
										</NavLink>
									))}
								</DesktopDetect>
								<MobileDetect>
									{mobileNavOpen ? (
										<Fragment>
											<MobileNav>
												<Overlay>
													<NavContainer>
														<MobileNavLinkContainer>
															{navPages.map(page => (
																<MobileNavLink key={page.name} to={page.slug}>
																	{page.name}
																</MobileNavLink>
															))}
														</MobileNavLinkContainer>
														<HamburgerContainer onClick={this.toggleNav}>
															<MaterialIcon size="40px">close</MaterialIcon>
														</HamburgerContainer>
													</NavContainer>
												</Overlay>
											</MobileNav>
										</Fragment>
									) : (
										<HamburgerContainer onClick={this.toggleNav}>
											<MaterialIcon size="40px">menu</MaterialIcon>
										</HamburgerContainer>
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
