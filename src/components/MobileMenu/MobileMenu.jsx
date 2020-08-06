import React from 'react'
import styled from '@emotion/styled'
import Link from 'src/components/Link'
import Grid from 'src/components/Grid'
import Button from 'src/components/Button'
import ContentfulRichText from 'src/components/ContentfulRichText'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { colors, typography, util } from 'src/styles'
import { Transition } from 'react-transition-group'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

const timeout = 300
const timingFunction = 'cubic-bezier(0.44, 0.24, 0.16, 1.00)'

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 3;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	overflow: auto;
	-webkit-overflow-scrolling: touch;
	background: ${ colors.lightGrey };
	${ util.responsiveStyles('padding-top', 113, 105, 90, 50) }
	transition: opacity ${ timeout }ms ${ timingFunction }, transform ${ timeout }ms ${ timingFunction };
	// transform: translate3d(110%, 0, 0);
	opacity: 0;
	${ ({ transitionStatus }) => transitionStatus === 'exited' ? `
		// transform: translate3d(110%, 0, 0);
		opacity: 0;
	` : `` }
	${ ({ transitionStatus }) => transitionStatus === 'entered' ? `
		// transform: none;
		opacity: 1;
	` : `` }
`

const MobileNavLink = styled(Link)`
	${ ({ size }) => size ? `${ typography[size] }` : typography.h2 }
	${ ({ size }) => size === 'smallCaps' ? `
		margin-top: 20px;
	` : `` }
	display: block;
	padding: 2px 0;
	color: ${ colors.textColor };
	span {
		display: inline-block;
	}
`

const LinkList = styled.ul`
	${ ({ inline }) => inline ? `
		display: flex;
		li {
			margin-right: 12px;
			margin-left: -7px;
			&:last-of-type {
				margin-right: -7px;
			}
		}
	` : `` }
	list-style: none;
	margin: 0;
	padding: 0;
`

const SocialIconButton = styled(Button)`
	color: ${ colors.yellow };
	.button-hover-panel {
		background: ${ colors.yellow };
	}
`

const LinkListItem = styled.li`
	margin: 0;
	${ typography.smallCaps }
	display: block;
	margin-bottom: .25em;
	line-height: 1.3em;
	a {
		display: inline-block;
	}
`

const MainSection = styled.div`
	flex-grow: 1;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	padding: 5vw 0 0;
`

const BottomSection = styled.div`
	flex-grow: 0;
	flex-shrink: 0;
	padding: 4vw 0 6vw;
	p a {
		border-color: transparent;
	}
	b {
		color: ${ colors.mainColor };
	}
`

const SubLinks = styled.ul`
	margin-bottom: 20px;
	border-left: 4px solid ${ colors.hrColor };
	padding-left: 12px;
	list-style: none;
	margin-top: 3px;
	li {
		a {
			display: block;
			${ typography.bodyMedium }
			font-weight: 600;
			padding: 1px 0;
		}
		&:first-of-type {
			a {
				padding-top: 0;
			}
		}
		&:last-of-type {
			a {
				padding-bottom: 0;
			}
		}
	}
`

const MobileMenu = ({ open, toggleMobileMenu, navLinks, footerColumn1, footerColumn2 }) => {
  return (
    <Transition
      in={open}
      timeout={{
        enter: 1,
        exit: timeout
      }}
      unmountOnExit
      mountOnEnter
    >
      {transitionStatus => (
        <Wrapper transitionStatus={transitionStatus}>
          <MainSection>
            <Grid small="1 [12] 1">
              <ScrollEntrance>
                {navLinks.map((link, index) => (
                  <div>
                    <MobileNavLink to={link.to.slug}><span onClick={toggleMobileMenu}>{link.label}</span></MobileNavLink>
                    {link.dropdownLinks && (
                      <SubLinks>
                        {link.dropdownLinks.map((dropdownLink, index) => (
                          <li>
                            <Link to={dropdownLink.to.slug}>{dropdownLink.label}</Link>
                          </li>
                        ))}
                      </SubLinks>
                    )}
                  </div>
                ))}
              </ScrollEntrance>
            </Grid>
          </MainSection>
          {/* <BottomSection>
            <Grid small="1 [12] 1" rowGap="3vw">
              {footerColumn1.json && (
                <ScrollEntrance delay={navLinks.length + 1}>
                  <ContentfulRichText richText={footerColumn1.json} />
                </ScrollEntrance>
              )}
              {footerColumn2.json && (
                <ScrollEntrance delay={navLinks.length + 2}>
                  <ContentfulRichText richText={footerColumn2.json} />
                </ScrollEntrance>
              )}
            </Grid>
          </BottomSection> */}
        </Wrapper>
      )}
    </Transition>
  )
}

export default MobileMenu
