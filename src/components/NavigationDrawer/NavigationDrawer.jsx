import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import { colors, typography, mq, animations } from 'src/styles'
import Button from 'src/components/Button'
import Link from 'src/components/Link'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { Transition } from 'react-transition-group'

const timeout = 600

const Wrapper = styled.div`
	position: fixed;
	z-index: 6;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	overflow-x: hidden;
	overflow-y: auto;
`

const Overlay = styled.div`
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	height: 100%;
	width: 100%;
	z-index: 1;
	background: ${ rgba(colors.textColor, 0.3) };
	transition: opacity ${ timeout }ms ease-in-out;
	opacity: 0;
	${ ({ transitionStatus }) => transitionStatus === 'entering' && `
		opacity: 0;
	` }
	${ ({ transitionStatus }) => transitionStatus === 'entered' && `
		opacity: 1;
	` }
`

const Drawer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 2;
	background: ${ colors.bgColor };
	width: 90vw;
	min-width: 300px;
	max-width: 600px;
	min-height: 100%;
	${ typography.responsiveStyles('padding-bottom', 50, 40, 30, 20) }
	${ typography.responsiveStyles('padding-left', 60, 50, 40, 30) }
	${ typography.responsiveStyles('padding-right', 20, 16, 13, 10) }
	transition: transform ${ timeout }ms ease-in-out;
	transform: translate3d(-110%, 0, 0);
	${ ({ transitionStatus }) => transitionStatus === 'entering' && `
		transform: translate3d(-110%, 0, 0);
	` }
	${ ({ transitionStatus }) => transitionStatus === 'entered' && `
		transform: none;
	` }

	${ mq.mediumAndUp } {
		width: 60vw;
	}
	${ mq.largerAndUp } {
		width: 40vw;
		max-width: 500px;
	}
`

const DrawerHeader = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	${ typography.responsiveStyles('padding-top', 44, 40, 30, 20) }
	${ typography.responsiveStyles('padding-bottom', 30, 26, 20, 18) }
	flex-grow: 0;
	flex-shrink: 0;
	width: 100%;
	button {
		flex-grow: 0;
		flex-shrink: 0;
		color: ${ colors.lightGreen };
		&:hover {
			color: ${ colors.mainColor };
			transform: rotate(-270deg);
		}
	}
`

const NavTabs = styled.div`
	display: flex;
	flex-grow: 1;
	align-items: center;
	justify-content: flex-start;
	a {
		${ typography.h6 }
		margin: 0;
		flex-grow: 0;
		flex-shrink: 0;
		color: ${ colors.lightGreen };
		cursor: pointer;
		border-bottom: 2px solid transparent;
		padding-bottom: .2em;
		${ typography.responsiveStyles('margin-right', 60, 40, 36, 30) }
		&.active,
		&.active:hover {
			color: ${ colors.textColor };
			border-color: ${ colors.mainColor };
		}
		&:hover {
			color: ${ colors.green };
			border-color: ${ colors.yellow }
		}
		&:last-of-type {
			margin-right: 0;
		}
	}
`

const DrawerContent = styled.div`
	padding-right: 20px;
	flex-grow: 1;
	flex-shrink: 0;
	width: 100%;
`

const NavigationSection = styled(ScrollEntrance)`
	h3 {
		a {
			&:hover {
				color: ${ colors.mainColor };
			}
		}
	}
	.button {
		width: 100%;
	}
`

const LinkList = styled.ul`
	list-style: none;
	padding-left: 0;
	${ typography.responsiveStyles('margin-top', 10, 8, 8, 6) }
	${ typography.responsiveStyles('margin-bottom', 36, 30, 24, 20) }
	li {
		${ typography.responsiveStyles('margin-top', 4, 4, 3, 2) }
		a {
			${ typography.bodyMedium }
			position: relative;
			&:after {
				content: '';
				display: block;
				position: absolute;
				height: 2px;
				left: 0;
				right: 0;
				bottom: 0;
				background: ${ colors.mainColor };
				transform: scaleX(0);
				transform-origin: left center;
				transition: transform ${ animations.mediumSpeed } ease-in-out;
			}
			&:hover {
				color: ${ colors.black };
				&:after {
					transform: none;
				}
			}
		}
	}
`

const DrawerFooter = styled.div`
	flex-grow: 0;
	flex-shrink: 0;
	width: 100%;
	padding-top: 30px;
	ul {
		list-style: none;
		padding-left: 0;
		a {
			${ typography.h6 }
			color: ${ colors.lightGreen };
			&:hover {
				color: ${ colors.green };
			}
		}
	}
`

const Divider = styled.hr`
	border-top: 1px solid ${ colors.hrColor };
	height: 5px;
	border-bottom: 1px solid ${ colors.hrColor };
`

const NavigationDrawer = ({ title, items, footerLinks, closeDrawer, open, navList, toggleDrawer }) => {
	return (
		<Transition
			in={open}
			appear={true}
			timeout={{
				enter: 1,
				exit: timeout
			}}
			unmountOnExit
			mountOnEnter
		>
			{transitionStatus => (
				<Wrapper>
					<Drawer transitionStatus={transitionStatus}>
						<DrawerHeader>
							<NavTabs>
								{items.map(({ id, displayTitle }) => (
									<a key={'nav-tab-' + id} onClick={() => toggleDrawer(id)} className={id === navList ? 'active' : 'inactive'}>{displayTitle}</a>
								))}
							</NavTabs>
							<Button onClick={closeDrawer} icon="close" shape="circle" size="small" setTheme="bgColor" />
						</DrawerHeader>

						{items && items.map(({ id, items }, index) => (
							navList && navList === id ? (
								<DrawerContent key={index + id + 'drawerItems'}>
									<NavigationSection>
										<div style={{ paddingBottom: '1.5rem' }}>
											{id === 'staff-nav' ? (
												<Button>Become a _Councelor</Button>
											) : (
												<Button>Schedule A_ Visit</Button>
											)}
										</div>
									</NavigationSection>
									{items && items.map(({ to, displayTitle, items }, index) => (
										<NavigationSection>
											{index !== 0 && <Divider/>}
											<h3>
												{to ? (
													<span onClick={closeDrawer}><Link to={to}>{displayTitle}</Link></span>
												) : (
													displayTitle
												)}
											</h3>
											{items && (
												<LinkList>
													{items.map(({ to, label }, index) => (
														<li><span onClick={closeDrawer}><Link to={to}>{label}</Link></span></li>
													))}
												</LinkList>
											)}
										</NavigationSection>
									))}
								</DrawerContent>
							) : false
						))}

						<DrawerFooter>
							<ul>
								{footerLinks.map(({ label, to, external }) => (
									<li><span onClick={closeDrawer}><Link to={to} external={external || false} target={external && '_blank'}>{label}</Link></span></li>
								))}
							</ul>
						</DrawerFooter>
					</Drawer>
					<Overlay onClick={closeDrawer} transitionStatus={transitionStatus} />
				</Wrapper>
			)}
		</Transition>
	)
}

NavigationDrawer.defaultProps = {
	title: false,
	items: [],
	footerLinks: []
}

export default NavigationDrawer
