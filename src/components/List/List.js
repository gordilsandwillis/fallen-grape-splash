import React, { Component } from 'react'
import styled from '@emotion/styled'
import { mediaQueries, colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import ContentBlock from 'src/components/ContentBlock'

const Wrapper = styled.div`
  background-color: ${ colors.offwhite };
`

const ItemsContainer = styled(Container)`
  color: ${ colors.black };
`

const GreyText = styled.div`
  color: ${ colors.grey };
`

const List = ({ title, items }) => (
	<Wrapper>
		<ItemsContainer>
			<ContentBlock>
				{title && <h3>{title}</h3>}
				<Grid
					showOverlay={true}
					large="[4] 1 [7]"
					medium="[4] 1 [7]"
					small="[6]"
				>
					{items &&
            items.map(item => (
            	<div>
            		<div><img src={item.logo} /></div>
            		<div>{item.text}</div>
            	</div>
            ))
					}
				</Grid>
			</ContentBlock>
		</ItemsContainer>
	</Wrapper>
)

export default List
