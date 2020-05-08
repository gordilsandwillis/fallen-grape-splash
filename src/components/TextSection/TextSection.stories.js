import React from 'react'
import { storiesOf } from '@storybook/react'
import TextSection from './TextSection'

const stories = storiesOf(`Components/TextSection`, module)
stories.add(`Default`, () => (
  <TextSection />
))
