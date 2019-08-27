import React from 'react'
import { storiesOf } from '@storybook/react'
import Slider from './Slider'

const stories = storiesOf(`Components/Slider`, module)
stories.add(`default`, props => (
	<React.Fragment>
		<Slider />
	</React.Fragment>
))
