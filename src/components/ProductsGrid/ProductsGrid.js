import React from 'react'
import styled from '@emotion/styled'
import { colors, typography, mediaQueries as mq } from 'src/styles'
import Container from 'src/components/Container'
import Image from 'src/components/Image'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import ContentBlock from 'src/components/ContentBlock'
import ScrollEntrance from 'src/components/ScrollEntrance'

const Wrapper = styled.div`
  background-color: ${ colors.offwhite };
color: ${ colors.black };
`

const ProductContainer = styled.div`
  padding-bottom: 50px;
`

const LogoContainer = styled.div`
	margin-bottom: 35px;
	border-radius: 20%;
	min-width: 135px;
	min-height: 135px;
	max-width: 135px;
	max-height: 135px;
	border: 1px solid ${ colors.unofficialLightGrey };
	overflow: hidden;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
`

const Name = styled.div`
  ${ typography.bodyBold }
`
const Byline = styled.div`
  ${ typography.body }
  color: ${ colors.grey };
`

const LinkStyled = styled(Link)`
  padding-right: 5px;
`

const StyledImage = styled(Image)`
	height: 100%;
	width: 100%;
`

const ResponsiveRow = styled.div`
	display: flex;
	flex-direction: row;
	a {
		padding-bottom: 5px;
	}
	${ mq.smallAndBelow } {
		flex-direction: column;
	}
`

const LineHeight = styled.div`
	div {
		${ typography.responsiveStyles('margin-bottom', 4, 4, 5, 7) }
	}
`

const ProductsGrid = ({ title, showTitle, items }) => (
	<Wrapper>
		<Container>
			<ContentBlock>
				<ScrollEntrance>
					{(title && showTitle) && <div><h2>{title}</h2></div>}
					<Grid large="[3] [3] [3] [3]" medium="[3] [3] [3] [3]" small="[3] [3]">
						{items && items.map(({ id, title, links, icon, descriptionText, company }) => {
							if (icon) {
								return (
									<ProductContainer key={id}>
										<Grid large="[2] 1" medium="[2] 1" small="[2] 1">
											<LogoContainer>
												<StyledImage image={icon}/>
											</LogoContainer>
										</Grid>
										<LineHeight>
											<Name>{title}</Name>
											<Byline>{descriptionText}</Byline>
											<div>{company.name}</div>
											{links && <ResponsiveRow>
												{links.map(({ id, text, url }) => <LinkStyled key={id} external to={url}>{text}</LinkStyled>)}
											</ResponsiveRow>
											}
										</LineHeight>
									</ProductContainer>
								)
							}
						})}
					</Grid>
				</ScrollEntrance>
			</ContentBlock>
		</Container>
	</Wrapper>
)

export default ProductsGrid
