import React from 'react'
import { storiesOf } from '@storybook/react'
import MobileMenu from './MobileMenu'

const stories = storiesOf(`Components/MobileMenu`, module)
stories.add(`Default`, () => (
  <MobileMenu />
))
