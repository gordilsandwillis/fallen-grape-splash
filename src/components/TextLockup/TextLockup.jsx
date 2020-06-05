import React from 'react'
import styled from '@emotion/styled'
import Button from 'src/components/Button'
import TextLink from 'src/components/TextLink'
import ConditionalRender from 'src/components/ConditionalRender'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ContentfulRichText from 'src/components/ContentfulRichText'
import { typography, colors, mq } from 'src/styles'
import BalanceText from 'react-balance-text'

const Wrapper = styled.div`
	display: inline-block;
	display: block;
	vertical-align: top;
	${ ({ alignment }) => alignment === 'center' && `
		margin-left: auto;
		margin-right: auto;
		> div {
			margin-left: auto;
			margin-right: auto;
		}
	` }
	${ mq.mediumAndBelow } {
		display: block;
	}
`
const TextContainer = styled(ScrollEntrance)`
	text-align: ${ ({ alignment }) => alignment };
	width: 100%;
	${ ({ alignment }) => alignment === 'center' && `
		margin-left: auto;
		margin-right: auto;
	` }
	${ ({ alignment }) => alignment === 'right' && `
		margin-left: auto;
	` }
`

const Eyebrow = styled.h6`
	${ typography.eyebrow }
`

const Text = styled.div`
	p {
		${ ({ textSize }) => typography[textSize] }
		margin-bottom: 0;
		&:first-of-type {
			margin-top: 0;
		}
		${ ({ alignment }) => alignment === 'center' && `
			margin-left: auto;
			margin-right: auto;
		` }
		${ ({ alignment }) => alignment === 'right' && `
			margin-left: auto;
		` }
	}
`

const ButtonActions = styled.div`
	margin-top: 30px;
	text-align: ${ ({ alignment }) => alignment };
	a, button {
		margin-bottom: 20px;
		${ ({ buttons }) => buttons.length > 1 && `
			min-width: 220px;
			margin-left: 10px;
			margin-right: 10px;
		` }
	}
`

const StyledButton = styled(Button)`
	margin-bottom: 18px;
	min-width: 172px;
	svg {
		display: none;
	}
`

const TextLockup = ({
		theme,
		eyebrow,
		headline,
		headlineSize,
		text,
		textSize,
		buttons,
		className,
		icon,
		alignment,
		headlineElement,
		additions,
		entranceDelay,
		transitionIn
	}) => {
	return (
		<Wrapper className={className} alignment={alignment}>
			<div>
				<TextContainer alignment={alignment} delay={entranceDelay} transitionIn={transitionIn}>
					<ConditionalRender condition={icon && icon.svgContent}>
						<div style={{ margin: 'auto', width: 50, height: 50, marginBottom: '1em' }} dangerouslySetInnerHTML={{ __html: icon && icon.svgContent }}/>
					</ConditionalRender>
					<ConditionalRender condition={eyebrow}>
						<div>
							<Eyebrow>{eyebrow}</Eyebrow>
						</div>
					</ConditionalRender>

					{text && text.json &&
						<Text textSize={textSize} alignment={alignment}><ContentfulRichText richText={text.json}/></Text>
					}

					{typeof text === 'string' &&
						<Text textSize={textSize} alignment={alignment}><p>{text}</p></Text>
					}

					{text && typeof text !== 'string' && !text.json &&
						<Text textSize={textSize} alignment={alignment}>{text}</Text>
					}

					<ConditionalRender condition={additions}>
						{additions}
					</ConditionalRender>

					{buttons && (
						<ButtonActions buttons={buttons} alignment={alignment}>
							{buttons.map((button, index) => {
								if (button.style === 'button') {
									return (
										<Button
											key={'button-' + index}
											to={button.to}
											theme={button.theme}
											external={button.external || false}
											target={button.target || ''}
										>
											{button.label}
										</Button>
									)
								} else {
									return (
										<TextLink
											key={'button-' + index}
											to={button.to}
											theme={button.theme}
											external={button.external || false}
											target={button.target || ''}
										>
											{button.label}
										</TextLink>
									)
								}
							})}
						</ButtonActions>
					)}
				</TextContainer>
			</div>
		</Wrapper>
	)
}

TextLockup.defaultProps = {
	alignment: 'inherit',
	textSize: 'body',
	entranceDelay: 0,
	transitionIn: true
}

export default TextLockup
