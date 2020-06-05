import React from 'react'
import renderer from 'react-test-renderer'

import Collapse from './Collapse'

it('renders', () => {
  const tree = renderer
    .create(<Collapse />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
