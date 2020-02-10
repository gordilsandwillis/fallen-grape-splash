import React from 'react'
import styled from '@emotion/styled'
import Section from 'src/components/Section'
import TextLockup from 'src/components/TextLockup'
import Grid from 'src/components/Grid'
import { util } from 'src/styles'

const ContentWrapper = styled.div`
	${ util.responsiveStyles('padding-top', 60, 50, 30, 24) }
	${ util.responsiveStyles('padding-bottom', 60, 50, 30, 24) }
`

const TextContent = styled(TextLockup)`
	${ ({ alignment }) => alignment === 'center' ? `
		margin-left: auto;
		margin-right: auto;
		${ util.responsiveStyles('max-width', 800, 750, 700, 600) }
	` : `
		${ util.responsiveStyles('max-width', 1200, 900, 750, 600) }
	` }
	${ ({ alignment }) => alignment === 'right' && `
		margin-left: auto;
	` }
`

const CalloutText = ({
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
	icon,
	alignment
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
					<TextContent
						theme={theme}
						eyebrow={eyebrow}
						headline={headline}
						headlineSize={headlineSize}
						text={text}
						icon={icon}
						buttons={buttons}
						cards={cards}
						alignment={alignment}
					/>
				</Grid>
			</ContentWrapper>
		</Section>
	)
}

CalloutText.defaultProps = {
	headlineSize: 'h3'
}

export default CalloutText
