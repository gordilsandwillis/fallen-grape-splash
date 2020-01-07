import React from 'react'
import styled from '@emotion/styled'
import { colors } from 'src/styles'

const ThemeWrapper = styled.div`
	${ ({ 'data-theme': setTheme }) => setTheme && `
		background-color: ${ colors[setTheme] };
	` }
	${ ({ 'data-theme': setTheme }) =>
		setTheme === 'red' ||
		setTheme === 'green' ||
		setTheme === 'black' ||
		setTheme === 'brown' ? `
		color: ${ colors.bgColor };
		h1, h2, h3, h4, h5, h6 {
			color: ${ colors.bgColor };
		}
		p {
			a {
				&:hover {
					color: ${ colors.white };
				}
			}
		}
	` : `` }
`

const ThemeSelector = ({ className, setTheme, ...rest }) => (
	<ThemeWrapper
		data-theme={setTheme}
		className={className}
		{...rest}
	/>
)

export default ThemeSelector
