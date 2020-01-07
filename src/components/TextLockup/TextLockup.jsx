import React from 'react'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Button from 'src/components/Button'
import ConditionalRender from 'src/components/ConditionalRender'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ContentfulRichText from 'src/components/ContentfulRichText'
import { typography, colors, mediaQueries as mq } from 'src/styles'
import BalanceText from 'react-balance-text'

const Wrapper = styled.div`
	display: inline-block;
	vertical-align: top;
	${ ({ alignment }) => alignment === 'center' && `
		margin-left: auto;
		margin-right: auto;
		> div {
			margin-left: auto;
		margin-right: auto;
		}
	` }
`
const TextContainer = styled(ScrollEntrance)`
	text-align: ${ ({ alignment }) => alignment };
	width: 100%;
	${ ({ alignment }) => alignment === 'center' && `
		margin-left: auto;
		margin-right: auto;
	` }
	${ ({ alignment }) => alignment === 'center' && `
		margin-left: auto;
		margin-right: auto;
	` }
	${ ({ alignment }) => alignment === 'right' && `
		margin-left: auto;
	` }
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
	${ ({ alignment }) => alignment === 'center' && `
		margin-left: auto;
		margin-right: auto;
	` }
	${ ({ alignment }) => alignment === 'center' && `
		margin-left: auto;
		margin-right: auto;
	` }
	${ ({ alignment }) => alignment === 'right' && `
		margin-left: auto;
	` }
`

const Text = styled.div`
	p {
		${ typography.bodyMedium }
		max-width: 32em;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 0;
		margin-top: 1em;
		${ ({ alignment }) => alignment === 'center' && `
			margin-left: auto;
			margin-right: auto;
		` }
		${ mq.mediumAndUp } {
			width: 80%;
		}
	}
`

const ButtonActions = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	margin-top: 30px;
	a, button {
		${ ({ buttons, cards }) => {
		if (buttons.length > 1) return `min-width: 250px;`
		else if (cards) return `min-width: 200px;`
	} }
		margin: 10px 20px
	}
`

const StyledCard = styled.div`
	p {
		max-width: 18em;
		${ mq.largerAndUp } {
			${ typography.bodyMedium }
		}
	}
`

const StyledButton = styled(Button)`
	margin-bottom: 18px;
	min-width: 172px;
	svg {
		display: none;
	}
`

const CardContent = styled.div`
	${ typography.responsiveStyles('padding', 40, 30, 20, 10) }
`

const CardHeadline = styled.div`
	${ typography.h3 }
	${ typography.responsiveStyles('padding-bottom', 40, 20, 8, 5) }
`

const CardsWrapper = styled.div`
	${ typography.responsiveStyles('margin-top', 50, 50, 30, 20) }
`

const CenteredText = ({ theme, eyebrow, headline, headlineSize, text, buttons, cards, className, icon, alignment }) => {
	let buttonColor = 'mainColor'

	if (theme === 'red' || theme === 'mainColor' || theme === 'green') {
		buttonColor = 'bgColor'
	}
	return (
		<Wrapper className={className} alignment={alignment}>
			<div>
				<TextContainer alignment={alignment}>
					<ConditionalRender condition={icon && icon.svgContent}>
						<div style={{ margin: 'auto', width: 50, height: 50, marginBottom: '1em' }} dangerouslySetInnerHTML={{ __html: icon && icon.svgContent }}/>
					</ConditionalRender>
					<ConditionalRender condition={eyebrow}>
						<Eyebrow>{eyebrow}</Eyebrow>
					</ConditionalRender>

					<ConditionalRender condition={headline}>
						<Headline headlineSize={headlineSize} alignment={alignment}>
							{headlineSize === 'h2' ? (
								<BalanceText>{headline}</BalanceText>
							) : headline}
						</Headline>
					</ConditionalRender>

					{text && text.json && /* ConditionalRender was not working for this */
						<Text alignment={alignment}><ContentfulRichText richText={text.json}/></Text>
					}

					{buttons && (
						<ButtonActions cards={cards} buttons={buttons}>
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
			</div>
		</Wrapper>
	)
}

CenteredText.defaultProps = {
	alignment: 'center',
	headlineSize: 'h3'
}

export default CenteredText
