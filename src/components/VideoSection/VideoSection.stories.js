import React from 'react'
import { storiesOf } from '@storybook/react'
import VideoSection from './VideoSection'
import * as mock from 'src/mock'

const stories = storiesOf(`Blocks`, module)
stories.add(`Video Section`, () => (
  <VideoSection
  	coverImage={mock.Placeholder169}
		url='https://www.youtube.com/watch?v=_wUIexMVG9k'
  />
))
