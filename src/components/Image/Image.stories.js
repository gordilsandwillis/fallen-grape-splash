import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from './Image'
import * as mock from 'src/mock'

const stories = storiesOf(`Components/Image`, module)
stories.add(`Default`, () => (
	<Image image={mock.Placeholder169} />
)).add(`Responsive`, () => (
	<Image
		small={mock.Placeholder23}
		// medium={mock.PlaceholderSq}
		image={mock.Placeholder169}
	/>
))
