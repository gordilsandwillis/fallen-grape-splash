import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from '@emotion/styled'
import Slider from './Slider'

const Spacer = styled.div`
  height: 100px;
  background-color: white;
`

const stories = storiesOf(`Components/Slider`, module)
stories.add(`default`, props => (
	<React.Fragment>
		<Slider collapseToArrows={true} {...exampleDataOne} />
		<Spacer />
		<Slider
			height={400}
			centered={false}
			{...exampleDataTwo} />
	</React.Fragment>
))

const exampleDataOne = {
	title: 'Awards',
	items: [
		{
			name: 'Apalon',
			announcement: '2018 Webby Award Winner for Productivity',
		},
		{
			name: 'iTranslate',
			announcement: '2020 Example Award for Travel',
		},
		{
			name: 'Teltech',
			announcement: '2021 Example Nominee for Communcation'
		},
		{
			name: 'Apalon',
			announcement: '2022 Example Award for Design'
		}
	]
}

const exampleDataTwo = {
	items: [
		{
			name: 'HIIT Workouts by Daily Burn',
			byline: 'Workout plans for weight loss',
			company: 'Daily Burn',
			icon: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/icon_hiit.png?raw=true',
			slideshow: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/products-header.jpg?raw=true',
			links: [
				{
					name: 'iOS',
					href: 'https://apple.com'
				}
			]
		},
		{
			name: 'iTranslate Translator',
			byline: 'Translate App with Dictionary',
			company: 'iTranslate',
			icon: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/icon_itranslate_translator.jpg?raw=true',
			slideshow: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/products-header.jpg?raw=true',
			links: [
				{
					name: 'iOS',
					href: 'https://apple.com'
				},
				{
					name: 'ANDROID',
					href: 'https://microsoft.com'
				}
			]
		},
		{
			name: 'iTranslate Converse',
			byline: 'Translate Voice in Real Time',
			company: 'iTranslate',
			icon: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/icon_itranslate_converse.jpg?raw=true',
			slideshow: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/products-header.jpg?raw=true',
			links: [
				{
					name: 'iOS',
					href: 'https://apple.com'
				}
			]
		}
	]
}
