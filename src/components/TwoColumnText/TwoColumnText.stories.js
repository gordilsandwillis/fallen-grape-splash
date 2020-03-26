import React from 'react'
import { storiesOf } from '@storybook/react'
import TwoColumnText from './TwoColumnText'
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs'
import * as copy from 'src/mock/copy'
import themes from 'src/styles/themes'

const HeadlineOptions = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4'
}

const TextOptions = {
	body: 'body',
	bodyMedium: 'bodyMedium',
	bodyLarge: 'bodyLarge',
	bodySmall: 'bodySmall'
}

let themeOptions = {}
Object.keys(themes).map((theme) => {
	const key = theme.toString()
	themeOptions[key] = theme
})

const stories = storiesOf(`Blocks`, module)
stories.add(`Two Column Text`, () => (
	<TwoColumnText
		theme={ optionsKnob('Theme', themeOptions, 'bgColor', { display: 'select' })}
		eyebrow={text('Eyebrow', copy.eyebrow)}
		headline={text('Headline', copy.headline)}
		headlineSize={ optionsKnob('Headline Size', HeadlineOptions, 'h3', { display: 'select' }) }
		text={<p>Intro statement ipsum dolor sit amet, consectetur adipiscing elit. Quid Zeno? Cave putes quicquam esse verius. Peccata paria. Duo Reges: constructio interrete.</p>}
		textSize={ optionsKnob('Text Size', TextOptions, 'body', { display: 'select' }) }
	/>
))
