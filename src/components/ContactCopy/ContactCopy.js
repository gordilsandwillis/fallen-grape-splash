import React from 'react'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Link from 'src/components/Link'
import { colors, typography } from 'src/styles'

const ContainerStyled = styled(Container)`
  color: ${ colors.black };
  padding-bottom: 65px;
`

const Title = styled.div`
  ${ typography.body }
  margin-bottom: 25px;
`

const Pretext = styled.div`
  ${ typography.body }
`

const Headline = styled.div`
	${ typography.h2 }
	padding-bottom:40px;
`

const Paragraph = styled.div`
	padding-top: 5px;
	padding-bottom: 8px;
`

const ContactCopy = ({ headline, title, items }) => (
	<ContainerStyled>
		<Grid
			showOverlay={false}
			small={'[6]'}
			medium={'[6] 2 [4]'}
			large={'[6] 2 [4]'}
		>
			{headline && <Headline>{headline}</Headline>}
			<div>
				<Title>{title}</Title>
				{items && items.map(({ pretext, linkText, linkHref }, i) => (
					<Paragraph key={pretext || i}>
						<Pretext>{pretext}</Pretext>
						<Link external to={linkHref}>{linkText}</Link>
					</Paragraph>
				))}
			</div>
		</Grid>
	</ContainerStyled>
)

export default ContactCopy
