import React from 'react'
import { storiesOf } from '@storybook/react'
import FiftyFifty from './FiftyFifty'
import * as mock from 'src/mock'
import * as mockCopy from 'src/mock/copy'
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs'

const imgPositionOptions = {
	left: 'left',
	right: 'right',
	hangLeft: 'hangLeft',
	hangRight: 'hangRight'
}

const themeOptions = {
	bgColor: 'bgColor',
	white: 'white',
	black: 'black',
	lightGrey: 'lightGrey'
}

const stories = storiesOf(`Blocks`, module)
stories.add(`Fifty Fifty`, () => (
  <FiftyFifty
  	theme={ optionsKnob('Theme', themeOptions, 'bgColor', { display: 'radio' }) }
		eyebrow={text('Headline', 'The Best Website in the World')}
		headline={text('Headline', 'The Best Website in the World')}
		text={mockCopy.contentfulRichTextShort}
  	image={{ image: mock.Placeholder169 }}
  	imagePosition={ optionsKnob('Image Position', imgPositionOptions, 'left', { display: 'radio' }) }
  />
))