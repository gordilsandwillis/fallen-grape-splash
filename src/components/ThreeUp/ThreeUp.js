import React, { Component } from 'react'
import styled from '@emotion/styled'
import { mediaQueries, colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import ContentBlock from 'src/components/ContentBlock'

const Wrapper = styled.div`
  background-color: ${ colors.offwhite };
  color: ${ colors.black };
`

const GreyText = styled.div`
  color: ${ colors.grey };
`

const ThreeUp = ({ items }) => (
	<Wrapper>
		<Container>
			<ContentBlock>
				<Grid
					showOverlay={true}
					large="[4] [4] [4]"
					medium="[4] [4] [4]"
					small="[6]"
				>
					{items &&
						items.map(item => (
							<div>
								<h4>
									{item.title}
								</h4>
								<GreyText>{item.tags && mapTags(item.tags)}</GreyText>
								<div>{item.description}</div>
							</div>
						))
					}
				</Grid>
			</ContentBlock>
		</Container>
	</Wrapper>
)

const mapTags = tags => {
	let n = tags.length
	return tags.map(tag => {
		n -= 1
		if (n) tag += ', '
		return tag
	})
}

export default ThreeUp
