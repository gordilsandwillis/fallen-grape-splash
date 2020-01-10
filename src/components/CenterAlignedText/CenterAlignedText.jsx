import React from 'react'
import Section from 'src/components/Section'
import TextLockup from 'src/components/TextLockup'
import Grid from 'src/components/Grid'
import * as mockCopy from 'src/mock/copy'

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
		</Section>
	)
}

CenterAlignedText.defaultProps = {
	headlineSize: 'h3'
}

export default CenterAlignedText
