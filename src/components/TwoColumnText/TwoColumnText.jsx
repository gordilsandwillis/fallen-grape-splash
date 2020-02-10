import React from 'react'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import TextLockup from 'src/components/TextLockup'
import ConditionalRender from 'src/components/ConditionalRender'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ContentfulRichText from 'src/components/ContentfulRichText'
import { typography, colors, mq } from 'src/styles'
import Section from 'src/components/Section'

const TextContainer = styled(ScrollEntrance)`
	width: 100%;
`

const Eyebrow = styled.h6`
	margin-bottom: 1.75em;
`

const Headline = styled.h3`
	${ ({ headlineSize }) => `
		${ typography[headlineSize] }
		${ headlineSize === 'h1' || headlineSize === 'h2' ? `
			max-width: 15em;
		` : `
			max-width: 23em;
		` }
	` }
	margin-left: auto;
	margin-right: auto;
`

const Text = styled.div`
	p {
		${ typography.bodyMedium }
		max-width: 38em;
	}
`

const Divider = styled.div`
`

const ButtonActions = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
	a, button {
		margin-left: 0 !important;
		${ ({ buttons }) => buttons.length > 1 && `
			min-width: 250px;
		` }
		margin: 10px 20px
	}
`

const TwoColumnText = ({
	theme,
	prevTheme,
	nextTheme,
	eyebrow,
	headline,
	headlineSize,
	text,
	textSize,
	buttons,
}) => {
	let dividerColor = 'currentcolor'

	if (theme === 'white' || theme === 'bgColor' || !theme) {
		dividerColor = 'default'
	}

	return (
		<Section
			setTheme={theme}
			prevTheme={prevTheme}
			nextTheme={nextTheme}
		>
			<TextContainer>
				<Grid
					small="1 [10] 1"
					medium="1 [5] 1 [6] 1"
					large="1 [5] 1 [6] 1"
				>
					<div>
						<TextLockup
							eyebrow={eyebrow}
							headline={headline}
							headlineSize={headlineSize}
							alignment="left"
						/>
					</div>
					<div>
						<TextLockup
							text={text}
							textSize={textSize}
							buttons={buttons}
							alignment="left"
						/>
					</div>
				</Grid>
			</TextContainer>
		</Section>
	)
}

TwoColumnText.defaultProps = {
	headlineSize: 'h3',
	textSize: 'body'
}

export default TwoColumnText
