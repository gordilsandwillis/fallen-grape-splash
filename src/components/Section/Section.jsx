import React from 'react'
import styled from '@emotion/styled'
import ThemeSelector from 'src/components/ThemeSelector'
import Button from 'src/components/Button'
import ConditionalRender from 'src/components/ConditionalRender'
import { typography } from 'src/styles'

const SectionWrapper = styled(ThemeSelector)`
	position: relative;
	z-index: ${ ({ zIndex }) => zIndex };
	${ ({ prevTheme, nextTheme, setTheme }) => `
		${ setTheme === prevTheme ? `
			${ typography.responsiveStyles('padding-top', 91, 51, 27, 13) }
		` : `
			${ typography.responsiveStyles('padding-top', 182, 102, 54, 26) }
		` }
		${ setTheme === nextTheme ? `
			${ typography.responsiveStyles('padding-bottom', 91, 51, 27, 13) }
		` : `
			${ typography.responsiveStyles('padding-bottom', 182, 102, 54, 26) }
		` }
	` }
`

const SectionActions = styled.div`
	text-align: center;
	${ typography.responsiveStyles('padding-top', 80, 60, 50, 40) }
`

const Section = ({ children, setTheme, prevTheme, nextTheme, zIndex, buttons, sectionid }) => {

	let buttonColors = {
		textColor: 'bgColor',
		black: 'bgColor',
		mainColor: 'bgColor',
		bgColor: 'default'
	}

	return (
		<SectionWrapper
			setTheme={setTheme}
			prevTheme={prevTheme}
			nextTheme={nextTheme}
			zIndex={zIndex}
		>
			{children}
			{buttons && (
				<SectionActions>
					{buttons.map((button, index) => (
						<Button
							key={'button-' + index}
							to={button.to}
							setTheme={button.theme || buttonColors[setTheme]}
							external={button.external || false}
							target={button.target || ''}
						>
							{button.label}
						</Button>
					))}
				</SectionActions>
			)}
		</SectionWrapper>
	)
}

Section.defaultProps = {
	setTheme: 'bgColor',
	zIndex: 1
}

export default Section
