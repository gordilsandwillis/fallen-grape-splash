import React from 'react'
import styled from '@emotion/styled'

import Link from 'src/components/Link'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Hr from 'src/components/Hr'
import RichText from 'src/components/RichText'

import { colors, typography } from 'src/styles'

const Wrapper = styled.footer`
  position: ${ ({ isHomePage }) => isHomePage ? 'absolute' : 'static' };
  background: ${ colors.offwhite };
  bottom: 0;
  left: 0;
  right: 0;
  color: ${ colors.black };
  z-index: 3;
  ${ typography.responsiveStyles('height', 70, 70, 70, 75) }
`

const FooterContainer = styled(Container)`
  ${ typography.footer }
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FooterTextGrey = styled.div`
  color: ${ colors.grey };
`

const FooterTextRightAlign = styled.div`
  text-align: right;
  justify-content: flex-end;
`

const FooterLink = styled(Link)`
  color: ${ colors.black };
  &:hover {
    color: ${ colors.grey };
  }
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
			<Grid small="[5] [1]" medium="[6] [6]" large="[6] [6]">
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
