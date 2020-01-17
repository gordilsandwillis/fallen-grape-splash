import React from 'react'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Button from 'src/components/Button'
import ConditionalRender from 'src/components/ConditionalRender'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ContentfulRichText from 'src/components/ContentfulRichText'
import { typography, colors, mq } from 'src/styles'
import BalanceText from 'react-balance-text'

const Wrapper = styled.div`
`

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
`

const Text = styled.div`
	p {
		${ typography.bodyMedium }
		max-width: 32em;
 		margin-bottom: 0;
		margin-top: 1em;
		${ mq.mediumAndUp } {
			width: 80%;
		}
	}
`

const ButtonActions = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
	a, button {
		${ ({ buttons }) => buttons.length > 1 && `
			min-width: 250px;
		` }
		margin: 10px 20px
	}
`

const LeftAlignedText = ({ theme, eyebrow, headline, headlineSize, text, buttons, className }) => {
	let buttonColor = 'mainColor'

	if (theme === 'red' || theme === 'mainColor' || theme === 'green') {
		buttonColor = 'bgColor'
	}

	return (
		<Wrapper className={className}>
			<Grid
				small="1 [12] 1"
				medium="1 [12] 1"
				large="1 [12] 1"
			>
				<TextContainer>
					<ConditionalRender condition={eyebrow}>
						<Eyebrow>{eyebrow}</Eyebrow>
					</ConditionalRender>

					<ConditionalRender condition={headline}>
						<Headline headlineSize={headlineSize}>
							{headlineSize === 'h2' ? (
								<BalanceText>{headline}</BalanceText>
							) : headline}
						</Headline>
					</ConditionalRender>

					{ text && text.json && /* ConditionalRender was not working for this */
					<React.Fragment>
						<ConditionalRender>
							<Text><ContentfulRichText richText={text.json}/></Text>
						</ConditionalRender>
					</React.Fragment>
					}

					{buttons && (
						<ButtonActions buttons={buttons}>
							{buttons.map((button, index) => (
								<Button
									key={'button-' + index}
									to={button.to}
									setTheme={button.theme || buttonColor}
									external={button.external || false}
									target={button.target || ''}
								>
									{button.label}
								</Button>
							))}
						</ButtonActions>
					)}
				</TextContainer>
			</Grid>
		</Wrapper>
	)
}

LeftAlignedText.defaultProps = {
	headlineSize: 'h3'
}

export default LeftAlignedText
