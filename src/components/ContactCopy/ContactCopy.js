import React from 'react'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Link from 'src/components/Link'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { colors, typography } from 'src/styles'
import RichText from 'src/components/RichText'

const ContainerStyled = styled(Container)`
  color: ${ colors.black };
  padding-bottom: 65px;
`

const Title = styled.div`
  ${ typography.h2 }
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

const ContactCopy = ({ title, smallText, descriptionRichText }) => (
	<ContainerStyled>
		<Title>{title}</Title>
		<Grid small={'[6]'} medium={'[6] 2 [4]'} large={'[6] 2 [4]'} >
			<ScrollEntrance>
				{descriptionRichText && <Headline>{RichText(descriptionRichText)}</Headline>}
			</ScrollEntrance>
			<div>
				<ScrollEntrance>
					{smallText && RichText(smallText)}
					{/* {items && items.map(({ pretext, linkText, linkHref }, i) => (
						<Paragraph key={pretext || i}>
							<Pretext>{pretext}</Pretext>
							<Link external to={linkHref}>{linkText}</Link>
						</Paragraph>
					))} */}
				</ScrollEntrance>
			</div>
		</Grid>
	</ContainerStyled>
)

export default ContactCopy
