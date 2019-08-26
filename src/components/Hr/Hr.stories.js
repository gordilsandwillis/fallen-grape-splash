import React from 'react'
import { storiesOf } from '@storybook/react'
import Hr from './Hr'

const stories = storiesOf(`Components/Hr`, module)
stories.add(`default`, props => (
	<React.Fragment>
		<Hr />
	</React.Fragment>
))
