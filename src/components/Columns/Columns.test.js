import React from 'react'
import renderer from 'react-test-renderer'

import Columns from './Columns'

it('renders', () => {
  const tree = renderer
    .create(<Columns />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
