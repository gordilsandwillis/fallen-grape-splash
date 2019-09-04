import React from 'react'
import styled from '@emotion/styled'
import { colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import ContentBlock from 'src/components/ContentBlock'

const Wrapper = styled.div`
  ${ typography.body }
	background-color: ${ colors.offwhite };
	color: ${ colors.black };
`

const GreyText = styled.p`
	color: ${ colors.grey };
	${ typography.body }
${ typography.responsiveStyles('padding-bottom', 0, 0, 0, 8) }
`

const ItemTitle = styled.p`
	text-transform: uppercase;
	${ typography.body }
${ typography.responsiveStyles('padding-bottom', 0, 0, 0, 12) }
`

const Item = styled.div`
	padding-bottom: 13px;
`

const Title = styled.div`
	padding-bottom: 35px;
	${ typography.h2 }
`

const ThreeUp = ({ items, title }) => (
	<Wrapper>
		<Container>
			<ContentBlock>
				{title && <Title>{title}</Title>}
				<Grid
					showOverlay={false}
					large="[4] [4] [4]"
					medium="[4] [4] [4]"
					small="[6]"
				>
					{items &&
						items.map(({ title, tags, description }, index) => (
							<Item key={title + index}>
								{title && <ItemTitle>{title}</ItemTitle>}
								{tags && <GreyText>{tags && mapTags(tags)}</GreyText>}
								{description && <p>{description}</p>}
							</Item>
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
