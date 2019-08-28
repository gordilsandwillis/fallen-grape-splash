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

const Headline = styled.div`
  ${ typography.h3 }
`

const Title = styled.div`
  ${ typography.body }
  margin-bottom: 36px;
`

const Pretext = styled.div`
  ${ typography.body }
`

const ContactCopy = ({ headline, title, items }) => (
	<ContainerStyled>
		<Grid
			showOverlay={true}
			small={'[6]'}
			medium={'[6] 2 [4]'}
			large={'[6] 2 [4]'}
		>
			<Headline>{headline}</Headline>
			<div>
				<Title>{title}</Title>
				{items && items.map(({ pretext, linkText, linkHref }, i) => (
					<div key={pretext || i}>
						<Pretext>{pretext}</Pretext>
						<Link external to={linkHref}>{linkText}</Link>
					</div>
				))}
			</div>
		</Grid>
	</ContainerStyled>
)

export default ContactCopy
