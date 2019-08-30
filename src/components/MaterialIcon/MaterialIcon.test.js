import React from 'react'
import renderer from 'react-test-renderer'

import MaterialIcon from './MaterialIcon'

it('renders', () => {
	const tree = renderer
		.create(<MaterialIcon />)
		.toJSON()
	expect(tree).toMatchSnapshot()
})
