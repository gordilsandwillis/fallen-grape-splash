import React, { Component } from 'react'
import styled from '@emotion/styled'

import Link from 'src/components/Link'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'

import {
	globals,
	animations,
	colors,
	typography,
	mediaQueries
} from 'src/styles'

const Wrapper = styled.footer`
	position: ${ ({ fixed }) => (fixed ? 'inherit' : 'fixed') };
	background: ${ colors.offwhite };
	bottom: 0;
	left: 0;
	right: 0;
	color: ${ colors.black };
	z-index: 3;
	${ typography.responsiveStyles('height', 100, 100, 80, 80) }
`

const FooterContainer = styled(Container)`
	${ typography.footer }
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const FooterText = styled.div`
	display: flex;
	align-items: flex-start;
	height: 100%;
`

const FooterTextGrey = styled(FooterText)`
	color: ${ colors.grey };
`

const FooterTextRightAlign = styled(FooterText)`
	text-align: right;
	justify-content: flex-end;
`

const FooterLink = styled(Link)`
	color: ${ colors.black };
	&:hover {
		color: ${ colors.grey };
	}
`

class Footer extends Component {
	render () {
		const {
			footerTextLeft,
			footerTextLeftLineTwo,
			footerTextRight,
			footerTextRightLink,
			fixed,
		} = this.props
		return (
			<Wrapper fixed={fixed}>
				<FooterContainer>
					<Grid
						showOverlay={true}
						small="[5] [1]"
						medium="[6] [6]"
						large="[6] [6]"
					>
						<div>
							<FooterText>{footerTextLeft}</FooterText>
							<FooterTextGrey>{footerTextLeftLineTwo}</FooterTextGrey>
						</div>
						<FooterTextRightAlign>
							<FooterLink to={footerTextRightLink}>
								{footerTextRight}
							</FooterLink>
						</FooterTextRightAlign>
					</Grid>
				</FooterContainer>
			</Wrapper>
		)
	}
}

export default Footer
