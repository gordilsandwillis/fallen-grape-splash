import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs'
import ATF from './ATF'
import * as mock from 'src/mock'

const placeholderHeadline = `Where great food, great people, and good times happen`
const placeholderTagline = `Upper west side, NYC`

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

const stories = storiesOf(`Blocks`, module)

stories.addDecorator(withKnobs)

stories.add(`ATF`, () => (
	<ATF
		headlineSize="h3"
		headline={text('Headline', placeholderHeadline)}
		text={text('Tagline', placeholderTagline)}
		textAlignment={ optionsKnob('Text Alignment', hAlignmentOptions, 'center', { display: 'inline-radio' }) }
		hAlignment={ optionsKnob('H-Alignment', hAlignmentOptions, 'center', { display: 'inline-radio' }) }
		vAlignment={ optionsKnob('V-Alignment', vAlignmentOptions, 'center', { display: 'inline-radio' }) }
		large={mock.Placeholder169}
		medium={mock.Placeholder32}
		small={mock.Placeholder34}
		fullHeight={ boolean('Full Height', true) }
	/>
))
