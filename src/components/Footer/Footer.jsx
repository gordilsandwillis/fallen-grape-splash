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

import { pages } from 'src/mockData'

const Wrapper = styled.footer`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	color: ${ colors.black };
	z-index: 4;
	${ typography.responsiveStyles('height', 100, 100, 100, 100) }
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

const FooterTextRightAlign = styled(FooterText)`
	text-align: right;
	justify-content: flex-end;
`

class Footer extends Component {
	render () {
		const {
			Home: {
				components: {
					Footer: { footerTextLeft, footerTextRight },
				},
			},
		} = pages
		return (
			<Wrapper>
				<FooterContainer>
					<Grid
						showOverlay={true}
						small="[5] [1]"
						medium="[6] [6]"
						large="[6] [6]"
					>
						<div>
							<FooterText>{footerTextLeft}</FooterText>
							<FooterText>{footerTextRight}</FooterText>
						</div>
						<FooterTextRightAlign>Press</FooterTextRightAlign>
					</Grid>
				</FooterContainer>
			</Wrapper>
		)
	}
}

export default Footer
