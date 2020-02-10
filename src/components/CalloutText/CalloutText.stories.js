import React from 'react'
import { storiesOf } from '@storybook/react'
import CalloutText from './CalloutText'
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs'
import * as copy from 'src/mock/copy'
import * as mock from 'src/mock'

const headerSizeOptions = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4'
}

const themeOptions = {
	bgColor: 'bgColor',
	white: 'white',
	black: 'black',
	lightGrey: 'lightGrey'
}

const stories = storiesOf(`Blocks`, module)
stories.add(`Callout Text`, () => (
	<CalloutText
		theme={ optionsKnob('Theme', mock.themeOptions, 'bgColor', { display: 'select' }) }
		eyebrow={text('Eyebrow', copy.eyebrow)}
		headline={text('Headline', copy.lorem)}
		headlineSize={ optionsKnob('Header Size', headerSizeOptions, 'h3', { display: 'select' }) }
		text={<p>Intro statement ipsum dolor sit amet, consectetur adipiscing elit. Quid Zeno? Cave putes quicquam esse verius. Peccata paria. Duo Reges: constructio interrete.</p>}
		alignment={ optionsKnob('Alignment', mock.alignmentOptions, 'center', { display: 'select' }) }
	/>
))
