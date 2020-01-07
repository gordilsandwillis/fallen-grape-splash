import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from './Image'
import * as mock from 'src/mock'

const stories = storiesOf(`Components/Image`, module)
stories.add(`default`, () => (
	<Image image={mock.Placeholder169} />
))

stories.add(`responsive`, () => (
	<Image
		small={mock.Placeholder23}
		medium={mock.PlaceholderSq}
		large={mock.Placeholder169}
	/>
))
