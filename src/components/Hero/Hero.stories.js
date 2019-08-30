import React from 'react'
import { storiesOf } from '@storybook/react'
import Hero from './Hero'

const stories = storiesOf(`Components/Hero`, module)
stories.add(`default`, props => (
	<React.Fragment>
		<Hero testImage={testImage} />
	</React.Fragment>
))

const testImage = 'https://i.imgur.com/pfuhK3L.jpg'
