import React, { Component } from 'react'
import styled from '@emotion/styled'

import Link from 'src/components/Link'
import Grid from 'src/components/Grid'
import Logo from 'src/components/Logo'
import MailchimpSignup from 'src/components/MailchimpSignup'
import ThemeSelector from 'src/components/ThemeSelector'
import ConditionalRender from 'src/components/ConditionalRender'
import ContentfulRichText from 'src/components/ContentfulRichText'

import { globals, typography, colors, animations, mq, util } from 'src/styles'

const Wrapper = styled(ThemeSelector)`
	position: relative;
	z-index: 2;
`

const FooterContainer = styled.div`
	${ globals.verticalPadding }
	p {
		max-width: 24em;
		${ typography.body }
		margin-top: 1em;
		margin-bottom: 1em;
		${ mq.extraExtraLargeAndUp } {
			${ typography.bodyMedium }
		}
	}
`

const NewsletterText = styled(ContentfulRichText) `
  > *:last-child {
		margin-bottom: 1em;
	}
`

const FooterLogo = styled(Logo)`
	width: 30px;
	${ mq.mediumAndBelow } {
		width: 24px;
	}
`

const FooterSection = styled.div`
	${ mq.mediumAndBelow } {
		${ ({ firstSection }) => !firstSection && `
			border-top: 1px solid currentcolor;
			padding-top: 1.4rem;
		` }
	}
`

const SectionHeader = styled.h6`
	${ util.responsiveStyles('margin-bottom', 20, 15, 10, 5) }
`

const LinkList = styled.ul`
	${ typography.body }
	${ mq.extraExtraLargeAndUp } {
		${ typography.bodyMedium }
	}
	margin-top: 1em;
	list-style: none;
	padding: 0;
	li {
		margin: 0;
		a {
			position: relative;
			display: inline-block;
			&:hover {
				&:after {
					transform: scaleX(1);
				}
			}
			&:after {
				content: '';
				display: block;
				position: absolute;
				bottom: 0;
				height: 1px;
				width: 100%;
				background: ${ colors.mainColor };
				transition: transform ${ animations.mediumSpeed } ease-in-out;
				transform: scaleX(0);
				transform-origin: left center;
			}
		}
	}
`

const LinkListItem = styled.li``

const FooterBottom = styled.div`
	position: relative;
	${ util.responsiveStyles('padding-top', 50, 40, 30, 26) }
	${ util.responsiveStyles('padding-bottom', 50, 40, 30, 26) }
`

const Copyright = styled.div`
	display: flex;
	align-items: center;
	p {
		margin: 0;
		max-width: none;
		padding-left: 16px;
		.mobile-hide {
			${ mq.mediumAndBelow } {
				display: none;
			}
		}
	}
`

const SiteCredit = styled.div`
	text-align: right;
	p {
		margin: 0;
		max-width: none;
		a {
			opacity: 0.6;
			&:hover {
				opacity: 1;
			}
		}
	}
`

const AddressSection = styled.div`
	margin-top: 1.5rem;
	margin-bottom: 2rem;
`

const AddressHeader = styled.span`
	margin-top: 0;
	margin-bottom: 0.3em;
	${ typography.h6 }
	display: block;
`

class Footer extends Component {
	render () {
		const {
			footerSections,
			footerNewsletterTitle,
			footerNewsletterRichText,
			title
		} = this.props
		return (
			<Wrapper setTheme="black">
				<FooterContainer>
					<Grid
						small="1 [12] 1"
						medium="1 [4] [4] [4] 1"
						large="1 [4] [4] [4] 1"
						extraLarge="1 [3] [3] 2 [4] 1"
						rowGap="7vw"
					>
						{footerSections.map((section, index) => (
								<FooterSection firstSection={index === 0}>
									<SectionHeader>{section.displayTitle}</SectionHeader>
									<LinkList>
										{section.items.map((item, index) => (
											<LinkListItem>
												<Link to={item.to} external={item.external}>{item.label}</Link>
											</LinkListItem>
										))}
									</LinkList>
								</FooterSection>
						))}

						<FooterSection>
							<SectionHeader>{footerNewsletterTitle}</SectionHeader>
							<ConditionalRender condition={footerNewsletterRichText}>
								<NewsletterText richText={footerNewsletterRichText.json}/>
							</ConditionalRender>
							<MailchimpSignup />
						</FooterSection>

					</Grid>
				</FooterContainer>

				<FooterBottom>
					<Grid
						small="1 [7] [5] 1"
						medium="1 [8] [4] 1"
						large="1 [8] [4] 1"
						vAlign="center"
					>
						<Copyright>
							<FooterLogo />
							<p className="sm">© <span className="mobile-hide">{title}</span> {new Date().getFullYear()}</p>
						</Copyright>
						<SiteCredit><p className="sm"><Link to="https://gordilsandwillis.com/" target="_blank" external>Site Credit</Link></p></SiteCredit>
					</Grid>
				</FooterBottom>
			</Wrapper>
		)
	}
}

export default Footer
