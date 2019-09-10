import React from 'react'
import styled from '@emotion/styled'
import { colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import ContentBlock from 'src/components/ContentBlock'

const Wrapper = styled.div`
  background-color: ${ colors.black };
	color: ${ colors.white };
	${ typography.body }
`

const GreyText = styled.div`
  color: ${ colors.grey };
	${ typography.body }
`
const Title = styled.div`
	padding-bottom: 40px;
	${ typography.h2 }
`

const ItemTitle = styled.div`
	${ typography.h2 }
	padding-bottom: 4px;
`

const Item = styled.div`
	padding-bottom: 15px;
`

const FourUp = ({ items, title, showTitle }) => (
	<Wrapper>
		<ContentBlock>
			<Container>
				<Title>{title}</Title>
				<Grid large="[3] [3] [3] [3]" medium="[3] [3] [3] [3]" small="[6]" >
					{items &&
						items.map(({ id, name, role, description }, index) => (
							<Item key={id}>
								{name && <ItemTitle>{name}</ItemTitle>}
								{role && <GreyText>{role}</GreyText>}
								{description && <p>{description}</p>}
							</Item>
						))
					}
				</Grid>
			</Container>
		</ContentBlock>
	</Wrapper>
)

export default FourUp
