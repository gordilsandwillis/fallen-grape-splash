import React from 'react'
import { storiesOf } from '@storybook/react'
import Dropdown from './Dropdown'

const stories = storiesOf(`Components/Dropdown`, module)
stories.add(`default`, props => (
	<React.Fragment>
		<Dropdown />
	</React.Fragment>
))
