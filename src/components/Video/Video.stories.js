import React from 'react'
import { storiesOf } from '@storybook/react'
import Video from './Video'
import * as mock from 'src/mock'

const stories = storiesOf(`Components/Video`, module)
stories.add(`default`, () => (
	<Video
		coverImage={mock.Placeholder169}
		url='https://www.youtube.com/watch?v=_wUIexMVG9k'
	/>
))
