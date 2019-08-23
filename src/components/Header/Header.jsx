import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import Image from 'src/components/Image'
import Logo from 'src/assets/images/mosaic_m-logo_white.svg' // TODO
// import Container from 'src/components/Container'
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

const LogoContainer = styled.div`
	height: 70px;
	width: 70px;
`

const NavItemsContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
`
const NavLink = styled(Link)`
	padding-left: 40px;
`

class Header extends Component {
	state = {}
	render () {
		const { logo } = this.props
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
								{navPages.map(page => (
									<NavLink key={page.name} to={page.slug}>
										{page.name}
									</NavLink>
								))}
							</NavItemsContainer>
						</Grid>
					</HeaderContainer>
				</Wrapper>
			</Fragment>
		)
	}
}

export default Header
