import React from 'react'
import renderer from 'react-test-renderer'

import ScrollEntrance from './ScrollEntrance'

it('renders', () => {
	const tree = renderer
		.create(<ScrollEntrance />)
		.toJSON()
	expect(tree).toMatchSnapshot()
})
