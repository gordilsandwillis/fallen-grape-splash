import React from 'react'
import Section from 'src/components/Section'
import TextLockup from 'src/components/TextLockup'
import Grid from 'src/components/Grid'

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
					text={text}
					icon={icon}
					buttons={buttons}
					cards={cards}
					headlineSize={headlineSize}
				/>
			</Grid>
		</Section>
	)
}

export default CenterAlignedText
