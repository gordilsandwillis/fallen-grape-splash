import React from 'react'
import styled from '@emotion/styled'
import { colors, typography } from 'src/styles'
import Container from 'src/components/Container'
import Grid from 'src/components/Grid'
import RichText from 'src/components/RichText'
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

const ThreeUp = ({ items, showTitle, title }) => (
	<Wrapper>
		<Container>
			<ContentBlock>
				{(title && showTitle) && <Title>{title}</Title>}
				<Grid large="[4] [4] [4]" medium="[4] [4] [4]" small="[6]">
					{items &&
						items.map(({ title, keywords, descriptionLongText }, index) => (
							<Item key={title + index}>
								{title && <ItemTitle>{title}</ItemTitle>}
								{keywords && <GreyText>{keywords && mapKeywords(keywords)}</GreyText>}
								{descriptionLongText && <p>{descriptionLongText.descriptionText}</p>}
							</Item>
						))
					}
				</Grid>
			</ContentBlock>
		</Container>
	</Wrapper>
)

const mapKeywords = keywords => {
	let n = keywords.length
	return keywords.map(word => {
		n -= 1
		if (n) word += ', '
		return word
	})
}

export default ThreeUp
