import React from 'react'
import styled from '@emotion/styled'
import { colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import ContentBlock from 'src/components/ContentBlock'
import Hr from 'src/components/Hr'
import VideoEmbed from 'src/components/VideoEmbed'
import ScrollEntrance from 'src/components/ScrollEntrance'

const Wrapper = styled.div`
  background-color: ${ colors.offwhite };
color: ${ colors.black };
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  div {
    max-width: 300px;
  };
`

const Padding = styled.div`
	${ ({ notFirst }) => notFirst && typography.responsiveStyles('padding-top', 40, 40, 40, 35) }
	${ ({ notLast }) => notLast && typography.responsiveStyles('padding-bottom', 40, 40, 40, 35) }
	width: 100%;
	padding: 10px 0px;
`
const ImgStyled = styled.img`
	${ typography.responsiveStyles('margin-top', 0, 0, 0, 20) }
	${ typography.responsiveStyles('margin-bottom', 0, 0, 20, 28) }
`

const H2 = styled.div`
	${ typography.h2 }
	padding-bottom: 30px;
`
const Companies = ({ title, items, linkText }) => (
	<Wrapper>
		<ContentBlock>
			<ScrollEntrance>
				<Container>
					<H2>{title}</H2>
				</Container>
				{items && items.map(({ logo, text, link }, index) => (
					<Container key={index + '_container'}>
						<Padding notFirst={index} notLast={index !== items.length - 1}>
							<Grid large='[4] 1 [7]' medium='[4] 1 [7]' small='[6]'>
								<LogoContainer><div>{logo && <ImgStyled src={logo} />}</div></LogoContainer>
								<div>
									{text && <p>{text}</p>}
									{link && <p><Link external to={link}>{linkText}</Link></p>}
								</div>
							</Grid>
						</Padding>
					</Container>
				))}
			</ScrollEntrance>
		</ContentBlock>
	</Wrapper >
)
export default Companies
