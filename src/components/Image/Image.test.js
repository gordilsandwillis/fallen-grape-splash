import React from 'react'
import renderer from 'react-test-renderer'

import Image from './Image'

it('renders', () => {
	const tree = renderer
		.create(<Image />)
		.toJSON()
	expect(tree).toMatchSnapshot()
})
