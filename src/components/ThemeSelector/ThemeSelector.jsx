import React from 'react'
import styled from '@emotion/styled'
import themes from 'src/styles/themes'
import { rgba } from 'polished'

const ThemeWrapper = styled.div`
	${ ({ 'data-theme': setTheme }) => setTheme && setTheme !== 'bgColor' ? `
		background-color: ${ themes[setTheme].background };
		color: ${ themes[setTheme].color };
		*::selection {
	    background: ${ rgba(themes[setTheme].color, 0.9) };
	    color: ${ themes[setTheme].background };
	  }
	` : `` }
`

const ThemeSelector = ({ className, setTheme = 'bgColor', ...rest }) => (
	<ThemeWrapper
		data-theme={setTheme}
		className={className}
		{...rest}
	/>
)

export default ThemeSelector
