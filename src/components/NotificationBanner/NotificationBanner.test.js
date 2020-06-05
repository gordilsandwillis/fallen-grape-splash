import React from 'react'
import renderer from 'react-test-renderer'

import NotificationBanner from './NotificationBanner'

it('renders', () => {
  const tree = renderer
    .create(<NotificationBanner />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
