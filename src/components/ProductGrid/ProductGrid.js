import React from 'react'
import styled from '@emotion/styled'
import { colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import ContentBlock from 'src/components/ContentBlock'

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
	width: 150px;
	height: 150px;
	max-width: 150px;
	max-height: 150px;
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

const ProductGrid = ({ title, items }) => (
	<Wrapper>
		<Container>
			<ContentBlock>
				<h2>{title}</h2>
				<Grid
					showOverlay={false}
					large="[3] [3] [3] [3]"
					medium="[3] [3] [3] [3]"
					small="[3] [3]"
				>
					{items &&
						items.map(({ name, byline, company, icon, links }, index) => (
							<ProductContainer key={name + company + index + '_productcontainer'}>
								<Grid
									showOverlay={false}
									large="[2] 1"
									medium="[2] 1"
									small="[2] 1"
								>
									<LogoContainer key={name}>
										<img src={icon} />
									</LogoContainer>
								</Grid>
								<div>
									<Name>{name}</Name>
									<Byline>{byline}</Byline>
									<div>{company}</div>
									<p>{links.map((link, index) => <LinkStyled key={link.href + index} external to={link.href}>{link.name}</LinkStyled>)}</p>
								</div>
							</ProductContainer>
						))
					}
				</Grid>
			</ContentBlock>
		</Container>
	</Wrapper>
)

export default ProductGrid
