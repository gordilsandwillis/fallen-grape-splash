import React from 'react'
import { storiesOf } from '@storybook/react'
import WideImage from './WideImage'
import * as mock from 'src/mock'
import { boolean } from '@storybook/addon-knobs'

const stories = storiesOf(`Components/WideImage`, module)
stories.add(`default`, () => (
	<WideImage
		image={mock.Placeholder169}
		caption="caption"
		fullWidth={ boolean('Full Height', true) }
	/>
))
