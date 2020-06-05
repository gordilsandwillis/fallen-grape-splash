import React from 'react'
import renderer from 'react-test-renderer'

import CartIcon from './CartIcon'

it('renders', () => {
  const tree = renderer
    .create(<CartIcon />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
