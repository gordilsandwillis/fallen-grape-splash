import React from 'react'
import renderer from 'react-test-renderer'

import VideoSection from './VideoSection'

it('renders', () => {
  const tree = renderer
    .create(<VideoSection />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
