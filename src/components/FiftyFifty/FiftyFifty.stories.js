import React from 'react'
import { storiesOf } from '@storybook/react'
import FiftyFifty from './FiftyFifty'

const stories = storiesOf(`Blocks`, module)
stories.add(`Fifty Fifty`, () => (
  <FiftyFifty />
))
