import React from 'react'
import { storiesOf } from '@storybook/react'
import Caption from './Caption'

const stories = storiesOf(`Components/Caption`, module)
stories.add(`default`, () => (
  <Caption>Glenn Gertler in the Jack D. Gordon tornament against camp Greylock</Caption>
))
