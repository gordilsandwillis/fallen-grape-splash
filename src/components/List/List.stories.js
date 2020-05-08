import React from 'react'
import { storiesOf } from '@storybook/react'
import List from './List'

const stories = storiesOf(`Components/List`, module)
stories.add(`Default`, () => (
  <List />
))
