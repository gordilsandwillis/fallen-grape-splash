import React from 'react'
import styled from '@emotion/styled'
import ThemeSelector from 'src/components/ThemeSelector'
import { util } from 'src/styles'

const SectionWrapper = styled(ThemeSelector)`
	position: relative;
	z-index: ${ ({ zIndex }) => zIndex };
	${ ({ padded, prevTheme, nextTheme, setTheme, isFirstSection }) => padded !== false && `
		${ !isFirstSection ? `
			${ setTheme === prevTheme ? `
				${ util.responsiveStyles('padding-top', 50, 30, 33, 26) }
			` : `
				${ util.responsiveStyles('padding-top', 100, 60, 66, 52) }
			` }
		` : `
			${ setTheme === 'default' ? `
				${ util.responsiveStyles('padding-top', 50, 30, 0, 0) }
			` : `
				${ util.responsiveStyles('padding-top', 100, 60, 0, 0) }
			` }
		` }
		${ setTheme === nextTheme ? `
			${ util.responsiveStyles('padding-bottom', 50, 30, 33, 26) }
		` : `
			${ util.responsiveStyles('padding-bottom', 100, 60, 66, 52) }
		` }
	` }
`

const Section = ({
	children,
	setTheme,
	prevTheme,
	nextTheme,
	zIndex,
	buttons,
	padded,
	sectionid,
	className,
	isFirstSection
}) => {
	return (
		<SectionWrapper
			className={className}
			setTheme={setTheme}
			prevTheme={prevTheme}
			nextTheme={nextTheme}
			zIndex={zIndex}
			padded={padded}
			isFirstSection={isFirstSection}
		>
			{children}
		</SectionWrapper>
	)
}

Section.defaultProps = {
	setTheme: 'bgColor',
	prevTheme: false,
	nextTheme: false,
	zIndex: 1,
	padded: true
}

export default Section
