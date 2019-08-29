import React, { Component } from 'react'
import styled from '@emotion/styled'
import { mediaQueries, colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import ContentBlock from 'src/components/ContentBlock'

const Wrapper = styled.div`
  background-color: ${ colors.black };
color: ${ colors.white };
`

const GreyText = styled.div`
  color: ${ colors.grey };
`

const FourUp = ({ items, title }) => (
	<Wrapper>
		<ContentBlock>
			<Container>
				<Grid
					showOverlay={false}
					large="[3] [3] [3] [3]"
					medium="[3] [3] [3] [3]"
					small="[6]"
				>
					{items &&
						items.map(item => (
							<div>
								<h4>
									{item.title}
								</h4>
								<GreyText>{item.subtitle}</GreyText>
								<div>{item.description}</div>
							</div>
						))
					}
				</Grid>
			</Container>
		</ContentBlock>
	</Wrapper>
)

export default FourUp
