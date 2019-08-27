import React, { Component } from 'react'
import styled from '@emotion/styled'
import { mediaQueries, colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import Link from 'src/components/Link'
import ContentBlock from 'src/components/ContentBlock'

const Wrapper = styled.div`
  background-color: ${ colors.offwhite };
`

const ItemsContainer = styled(Container)`
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
            	<React.Fragment>
            		<LogoContainer><div><img src={item.logo} /></div></LogoContainer>
            		<div>
            			{item.text}
            			<p>
            				<Link external to={item.link}>LEARN MORE</Link>
            			</p>
            		</div>
            	</React.Fragment>
            ))
					}
				</Grid>
			</ContentBlock>
		</ItemsContainer>
	</Wrapper>
)

export default List
