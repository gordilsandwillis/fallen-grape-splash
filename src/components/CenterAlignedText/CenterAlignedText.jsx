import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import TextLockup from 'src/components/TextLockup'
import Grid from 'src/components/Grid'
import * as mockCopy from 'src/mock/copy'
import { typography } from 'src/styles'

const ContentWrapper = styled.div`
	${ typography.responsiveStyles('padding-top', 91, 51, 33, 26) }
	${ typography.responsiveStyles('padding-bottom', 91, 51, 33, 26) }
`

const CenterAlignedText = ({
	id,
	theme,
	prevTheme,
	nextTheme,
	headlineSize,
	eyebrow,
	headline,
	text,
	buttons,
	cards,
	icon
}) => {
	return (
		<Section
			setTheme={theme}
			prevTheme={prevTheme}
			nextTheme={nextTheme}
			sectionid="CenteredAlignedText"
		>	
			<ContentWrapper>
				<Grid small="1 [12] 1">
					<TextLockup
						theme={theme}
						eyebrow={eyebrow}
						headline={headline}
						headlineSize={headlineSize}
						text={mockCopy.contentfulRichTextShort}
						icon={icon}
						buttons={buttons}
						cards={cards}
					/>
				</Grid>
			</ContentWrapper>
		</Section>
	)
}

CenterAlignedText.defaultProps = {
	headlineSize: 'h3'
}

export default CenterAlignedText
