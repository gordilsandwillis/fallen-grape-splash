import React from 'react'
import { storiesOf } from '@storybook/react'
import Columns from './Columns'

const stories = storiesOf(`Components/Columns`, module)
stories.add(`Default`, () => (
  <Columns />
))
