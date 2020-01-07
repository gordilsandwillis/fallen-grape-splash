import React from 'react'
import styled from '@emotion/styled'
import { storiesOf } from '@storybook/react'
import ThemeSelector from './ThemeSelector'
import Grid from 'src/components/Grid'
import Button from 'src/components/Button'
const qbf = 'The quick brown fox jumps over the lazy dog'
const lorem = `lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.`

const themes = [
	'default',
	'black',
	'lightGrey',
	'red',
	'green',
	'yellow',
]

const ThemePreview = styled(ThemeSelector)`
	padding: 2em 2em 2.5em 2em;
`

const stories = storiesOf(`Components`, module)

stories.add(`ThemeSelector`, () => (
	<Grid
		small="[1]"
		medium="[1] [1]"
		large="[1] [1] [1]"
		colGap="0"
		rowGap="0"
	>
		{themes.map(theme => {
			let ButtonTheme = 'textColor'
			if (theme === 'black') {
				ButtonTheme = 'white'
			}
			return (
				<ThemePreview setTheme={theme}>
					<h6>{theme}</h6>
					<h3>{qbf}</h3>
					<p>{lorem}</p>
					<Button size="small" setTheme={ButtonTheme}>Button</Button>
				</ThemePreview>
			)}
		)}
	</Grid>
))
