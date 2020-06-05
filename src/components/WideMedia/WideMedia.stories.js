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

const widthOptions = {
	margins: 'margins',
	fullWidth: 'fullWidth'
}

const heightOptions = {
	auto: 'auto',
	fullHeight: 'fullHeight',
	mediumHeight: 'mediumHeight',
	shortHeight: 'shortHeight'
}

const stories = storiesOf(`Blocks/Wide Media`, module)
stories.add(`Default`, () => (
	<WideMedia
		theme={ optionsKnob('Theme', themeOptions, 'default', { display: 'select' }) }
		media={[
			{
				__typename: 'ContentfulImage', 
				image: mock.Placeholder169
			}
		]}
		caption="caption"
		width={ optionsKnob('Width', widthOptions, 'default', { display: 'select' }) }
		height={ optionsKnob('Height', heightOptions, 'auto', { display: 'select' }) }
	/>
)).add(`HTML5 Video`, () => (
	<WideMedia
		theme={ optionsKnob('Theme', themeOptions, 'default', { display: 'select' }) }
		loop={true}
		width={ optionsKnob('Width', widthOptions, 'default', { display: 'select' }) }
		height={ optionsKnob('Height', heightOptions, 'auto', { display: 'select' }) }
		media={[
			{
				__typename: 'ContentfulVideo',
				video: {
					file: {
						url: 'https://hightidesite.cdn.prismic.io/hightidesite%2F5d1b0cec-c72d-4b0b-80d7-52588efbd852_about_video.mp4'
					}
				}
			}
		]}
	/>
)).add(`Video Embed`, () => (
	<WideMedia
		theme={ optionsKnob('Theme', themeOptions, 'default', { display: 'select' }) }
		width={ optionsKnob('Width', widthOptions, 'default', { display: 'select' }) }
		height={ optionsKnob('Height', heightOptions, 'auto', { display: 'select' }) }
		media={[
			{
				__typename: 'ContentfulVideo',
				video: {
					file: {
						url: 'https://www.youtube.com/watch?v=_wUIexMVG9k'
					}
				}
			}
		]}
	/>
)).add(`Video Width Cover`, () => (
	<WideMedia
		theme={ optionsKnob('Theme', themeOptions, 'default', { display: 'select' }) }
		width={ optionsKnob('Width', widthOptions, 'default', { display: 'select' }) }
		height={ optionsKnob('Height', heightOptions, 'auto', { display: 'select' }) }
		media={[
			{
				__typename: 'ContentfulVideo',
				posterImage: mock.Placeholder169,
				video: {
					file: {
						url: 'https://www.youtube.com/watch?v=_wUIexMVG9k'
					}
				}
			}
		]}
	/>
))
