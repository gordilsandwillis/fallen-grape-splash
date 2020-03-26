import React from 'react'
import styled from '@emotion/styled'
import themes from 'src/styles/themes'

const ThemeWrapper = styled.div`
	${ ({ 'data-theme': setTheme }) => setTheme && setTheme !== 'bgColor' ? `
		background-color: ${ themes[setTheme].background };
		color: ${ themes[setTheme].color };
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
