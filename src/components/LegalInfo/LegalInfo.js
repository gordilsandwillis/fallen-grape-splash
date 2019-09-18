import React from 'react'
import styled from '@emotion/styled'
import Container from 'src/components/Container'
import ContentBlock from 'src/components/ContentBlock'
import Hr from 'src/components/Hr'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { colors, typography } from 'src/styles'
import RichTextBody from 'src/components/RichTextBody'

const Wrapper = styled.div`
  color: ${ colors.black };
`

const Title = styled.div`
  ${ typography.h1 }
	padding-bottom: 8px;
`

const Body = styled.div`
	${ typography.body }
	overflow: hidden;
`

const LegalInfo = ({ title, showTitle, subtitle, bodyTextBeforeBreak, bodyTextAfterBreak }) => (
	<Wrapper>
		<Container>
			<ContentBlock>
				{(title && showTitle) && <Title>{title}</Title>}
				{subtitle && <Body>{subtitle}</Body>}
			</ContentBlock>
		</Container>
		<Hr full color={colors.black}/>
		<ScrollEntrance>
			<Container>
				<ContentBlock>
					{bodyTextBeforeBreak && <Body>{RichTextBody(bodyTextBeforeBreak)}</Body>}
				</ContentBlock>
			</Container>
			<Hr color={colors.black} />
			<Container>
				<ContentBlock>
					{bodyTextAfterBreak && <Body>{RichTextBody(bodyTextAfterBreak)}</Body>}
				</ContentBlock>
			</Container>
		</ScrollEntrance>
		<div>
			<ScrollEntrance>
			</ScrollEntrance>
		</div>
	</Wrapper>
)

export default LegalInfo
