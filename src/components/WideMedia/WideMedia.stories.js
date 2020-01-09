import React from 'react'
import { storiesOf } from '@storybook/react'
import WideMedia from './WideMedia'
import * as mock from 'src/mock'
import { boolean } from '@storybook/addon-knobs'

const stories = storiesOf(`Blocks`, module)
stories.add(`WideMedia`, () => (
	<WideMedia
		image={{ image: mock.Placeholder169 }}
		caption="caption"
		fullWidth={ boolean('Full Width', true) }
		video={{ file: { url: 'https://www.youtube.com/watch?v=_wUIexMVG9k' } }}
	/>
))
