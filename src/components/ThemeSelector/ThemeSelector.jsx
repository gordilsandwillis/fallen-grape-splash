import React from 'react'
import styled from '@emotion/styled'
import { colors } from 'src/styles'

const ThemeWrapper = styled.div`
	transition: background-color 1s ease-in-out, color 1s ease-in-out;
	${ ({ 'data-theme': setTheme }) => setTheme && setTheme !== 'bgColor' `
		background-color: ${ colors[setTheme] };
	` }
	${ ({ 'data-theme': setTheme }) =>
		setTheme === 'mainColor' ||
		setTheme === 'black' ||
		setTheme === 'textColor' ? `
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

const ThemeSelector = ({ className, setTheme = 'bgColor', ...rest }) => (
	<ThemeWrapper
		data-theme={setTheme}
		className={className}
		{...rest}
	/>
)

export default ThemeSelector
