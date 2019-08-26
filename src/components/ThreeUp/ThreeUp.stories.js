import React from 'react'
import { storiesOf } from '@storybook/react'
import ThreeUp from './ThreeUp'

const stories = storiesOf(`Components/ThreeUp`, module)
stories.add(`default`, props => (
	<React.Fragment>
		<ThreeUp items={exampleData} />
	</React.Fragment>
))

const exampleData = [
	{ title: 'SIMPLIFY', tags: ['Language', 'Communications', 'Utilities'], description: 'Solutions that remove barriers and allow us to pursue daily life more efficiently.' },
	{ title: 'ENERGIZE', tags: ['Content'], description: 'Content and tools that make free time more exciting and enjoyable.' },
	{ title: 'OPTIMIZE', tags: ['Wellness', 'Fitness', 'Weather'], description: 'Tools that provide ways to make our time more productive and focused.' },
]
