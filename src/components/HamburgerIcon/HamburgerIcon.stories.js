import React from 'react'
import { storiesOf } from '@storybook/react'
import HamburgerIcon from './HamburgerIcon'

const stories = storiesOf(`Components/HamburgerIcon`, module)
stories.add(`default`, props => (
	<div style={{ padding: 50 }}>
		<HamburgerIcon />
	</div>
))
