import React from 'react'
import { storiesOf } from '@storybook/react'
import NotificationBanner from './NotificationBanner'

const stories = storiesOf(`Components/NotificationBanner`, module)
stories.add(`Default`, () => (
  <NotificationBanner text="I am a notification banner. I am used in the header component." />
))
