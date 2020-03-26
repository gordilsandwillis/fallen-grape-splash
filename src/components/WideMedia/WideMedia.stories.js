import React from 'react'
import { storiesOf } from '@storybook/react'
import WideMedia from './WideMedia'
import * as mock from 'src/mock'
import { boolean, optionsKnob } from '@storybook/addon-knobs'
import themes from 'src/styles/themes'

let themeOptions = {}
Object.keys(themes).map((theme) => {
	const key = theme.toString()
	themeOptions[key] = theme
})

const stories = storiesOf(`Blocks/Wide Media`, module)
stories.add(`Default`, () => (
	<WideMedia
		theme={ optionsKnob('Theme', themeOptions, 'default', { display: 'select' }) }
		image={{ image: mock.Placeholder169 }}
		caption="caption"
		fullWidth={ boolean('Full Width', false) }
	/>
)).add(`HTML5 Video`, () => (
	<WideMedia
		theme={ optionsKnob('Theme', themeOptions, 'default', { display: 'select' }) }
		loop={true}
		fullWidth={ boolean('Full Width', true) }
		video={{ file: { url: 'https://hightidesite.cdn.prismic.io/hightidesite%2F5d1b0cec-c72d-4b0b-80d7-52588efbd852_about_video.mp4' } }}
	/>
)).add(`Video Embed`, () => (
	<WideMedia
		theme={ optionsKnob('Theme', themeOptions, 'default', { display: 'select' }) }
		fullWidth={ boolean('Full Width', true) }
		video={{ file: { url: 'https://www.youtube.com/watch?v=_wUIexMVG9k' } }}
	/>
)).add(`Video Width Cover`, () => (
	<WideMedia
		theme={ optionsKnob('Theme', themeOptions, 'default', { display: 'select' }) }
		image={{ image: mock.Placeholder169 }}
		fullWidth={ boolean('Full Width', false) }
		video={{ file: { url: 'https://www.youtube.com/watch?v=_wUIexMVG9k' } }}
	/>
))
