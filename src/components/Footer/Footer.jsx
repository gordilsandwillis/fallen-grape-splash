import React from 'react'
import styled from '@emotion/styled'
import Link from 'src/components/Link'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Hr from 'src/components/Hr'
import RichText from 'src/components/RichText'

import { colors, typography, mediaQueries as mq } from 'src/styles'

const Wrapper = styled.footer`
  background: ${ colors.offwhite };
  left: 0;
  right: 0;
  color: ${ colors.black };
  z-index: 3;
  height: 95px;
  position: ${ ({ isHomePage }) => isHomePage ? 'absolute' : 'static' };
  bottom: inherit;
  @media screen and ( height: 750px ) {
    bottom: 0;
  }
  ${ mq.mediumAndBelow } {
    height: 120px;
    position: static;
  }
`

const FooterContainer = styled(Container)`
  ${ typography.footer }
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FooterTextGrey = styled.div`
  margin-top: 2px;
  color: ${ colors.grey };
`

const FooterTextRightAlign = styled.div`
  ${ mq.largeAndUp } {
    justify-self: flex-end;
    justify-content: flex-end;
    text-align:right;
    display: flex;
  }
`

const FooterLink = styled(Link)`
  color: ${ colors.black };
  &:hover {
    color: ${ colors.grey };
  }
  ${ mq.largeAndUp } {
    padding-right: 0 !important;
    padding-left: 24px;
  }
  padding-right: 24px;
`

const Footer = ({
	horizontalBreakInFooter,
	footerCompanyBio,
	copyright,
	footerNavigation,
	isHomePage,
}) => (
	<Wrapper isHomePage={isHomePage}>
		{horizontalBreakInFooter && <Hr color={colors.black} />}
		<FooterContainer>
			<Grid small="[6]" medium="[6] [6]" large="[6] [6]">
				<div>
					<div>{footerCompanyBio && RichText(footerCompanyBio)}</div>
					<FooterTextGrey>{copyright && RichText(copyright)}</FooterTextGrey>
				</div>
				<FooterTextRightAlign>
					{footerNavigation && footerNavigation.map(({ slug, title }, index) => <FooterLink key={slug + index} to={slug}>{title}</FooterLink>)}
				</FooterTextRightAlign>
			</Grid>
		</FooterContainer>
	</Wrapper>
)

export default Footer
