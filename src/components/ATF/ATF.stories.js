import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs'
import ATF from './ATF'
import * as mock from 'src/mock'

const placeholderHeadline = `the greatest website in the world`
const placeholderTagline = `By Gordils & Willis Inc.`

const hAlignmentOptions = {
	center: 'center',
	left: 'left',
	right: 'right'
}

const vAlignmentOptions = {
	center: 'center',
	top: 'top',
	bottom: 'bottom'
}

const headerSizeOptions = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4'
}

const stories = storiesOf(`Blocks`, module)

stories.addDecorator(withKnobs)

stories.add(`ATF`, () => (
	<ATF
		headlineSize={ optionsKnob('Headline Size', headerSizeOptions, 'h2', { display: 'radio' }) }
		headline={text('Headline', placeholderHeadline)}
		text={text('Tagline', placeholderTagline)}
		textAlignment={ optionsKnob('Text Alignment', hAlignmentOptions, 'center', { display: 'inline-radio' }) }
		hAlignment={ optionsKnob('H-Alignment', hAlignmentOptions, 'center', { display: 'inline-radio' }) }
		vAlignment={ optionsKnob('V-Alignment', vAlignmentOptions, 'center', { display: 'inline-radio' }) }
		image={{
			large: mock.Placeholder169,
			medium: mock.Placeholder32,
			small: mock.Placeholder34
		}}
		fullHeight={ boolean('Full Height', true) }
		showArrow={ boolean('showArrow', true) }
	/>
))
