import React, { Component } from 'react'
import styled from '@emotion/styled'

import Link from 'src/components/Link'
import Grid from 'src/components/Grid'
import { Logomark } from 'src/components/Logo'
import MailchimpSignup from 'src/components/MailchimpSignup'
import Section from 'src/components/Section'
import ThemeSelector from 'src/components/ThemeSelector'
import ConditionalRender from 'src/components/ConditionalRender'
import ContentfulRichText from 'src/components/ContentfulRichText'

import { globals, typography, colors, animations, mq, util } from 'src/styles'

const Wrapper = styled(ThemeSelector)`
	position: relative;
	z-index: 2;
`

const FooterLogo = styled(Logomark)`
	width: 30px;
	${ mq.mediumAndBelow } {
		width: 24px;
	}
`

const FooterBottom = styled(ThemeSelector)`
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

class Footer extends Component {
	render () {
		const { title } = this.props
		return (
			<Wrapper setTheme="brown">
				<Section>
					<Grid
						small="1 [12] 1"
						medium="1 [4] [4] [4] 1"
						large="1 [4] [4] [4] 1"
					>
						<div>
							<h6>List Header</h6>
							Footer Links
						</div>
						<div>
							<h6>List Header</h6>
							Footer Links
						</div>
						<div>
							<h6>List Header</h6>
							Newsletter
						</div>
					</Grid>
				</Section>
				<FooterBottom setTheme="textColor">
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
