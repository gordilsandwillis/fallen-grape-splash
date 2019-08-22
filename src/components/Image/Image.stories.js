import React from 'react'
import { storiesOf } from '@storybook/react'
import Image from './Image'

const stories = storiesOf(`Components/Image`, module)
stories.add(`default`, props => (
	<React.Fragment>
		<Image image={null} />
	</React.Fragment>
))
