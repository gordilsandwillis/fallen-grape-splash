import React from 'react'
import { storiesOf } from '@storybook/react'
import MaterialIcon from './MaterialIcon'

const stories = storiesOf(`Components/MaterialIcon`, module)
stories.add(`default`, props => (
	<React.Fragment>
		<MaterialIcon>menu</MaterialIcon>
	</React.Fragment>
))
