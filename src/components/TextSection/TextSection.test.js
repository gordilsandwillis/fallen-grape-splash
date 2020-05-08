import React from 'react'
import renderer from 'react-test-renderer'

import TextSection from './TextSection'

it('renders', () => {
  const tree = renderer
    .create(<TextSection />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
