import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, optionsKnob } from '@storybook/addon-knobs'
import ScrollListener from 'src/components/ScrollListener'
import SplashHeader from './SplashHeader'
import themes from 'src/styles/themes'

let bannerColorOptions = {}
Object.keys(themes).map(theme => {
  const key = theme.toString()
  bannerColorOptions[key] = theme
})

storiesOf(`Components`, module)
	.add('SplashHeader', () => (
		<ScrollListener>
			<div style={{ height: '200vh', background: '#ccc' }}>
				<SplashHeader color="yellow" />
			</div>
		</ScrollListener>
	))
