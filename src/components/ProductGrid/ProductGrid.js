import React, { Component } from 'react'
import styled from '@emotion/styled'
import { mediaQueries, colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import ContentBlock from 'src/components/ContentBlock'

const Wrapper = styled.div`
  background-color: ${ colors.offwhite};
color: ${ colors.black};
`

const ProductContainer = styled.div`
  padding-bottom: 50px;
`

const LogoContainer = styled.div`
	margin-bottom: 35px;
	width: 100%;
	border-radius: 20%;
	min-width: 150px;
	min-height: 150px;
	max-width: 215px;
	max-height: 215px;
	border: 1px solid ${ colors.unofficialLightGrey};
	overflow: hidden;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-content: center;
	height: 0; /* 1:1 Aspect Ratio */
  div {
		padding-top: 100%; /* 1:1 Aspect Ratio */
    max-width: 300px;
  };
`

const Name = styled.div`
  ${ typography.bodyBold}
`
const Byline = styled.div`
  ${ typography.body}
  color: ${ colors.grey};
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
					large="[1] [1] [1] [1]"
					medium="[1] [1] [1] [1]"
					small="[1] [1]"
				>
					{items &&
						items.map(({ name, byline, company, icon, links }) => (
							<ProductContainer>
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
									<p>{links.map(link => <LinkStyled external to={link.href}>{link.name}</LinkStyled>)}</p>
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
