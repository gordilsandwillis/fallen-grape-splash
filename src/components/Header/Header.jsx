import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'

// import Link from 'src/components/Link'
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

const HeaderContainer = styled.div`
	position: absolute;
	z-index: 5;
	display: flex;
	justify-content: flex-end;
`

const Logo = styled.img``

const NavItemsContainer = styled.div`
	display: flex;
`
const NavLink = styled.a``

class Header extends Component {
	state = {}
	render () {
		return (
			<Fragment>
				<HeaderContainer>
					<Logo />
					<NavItemsContainer>
						{navPages.map(page => (
							<NavLink href={page.slug}>{page.name}</NavLink>
						))}
					</NavItemsContainer>
				</HeaderContainer>
			</Fragment>
		)
	}
}

export default Header
