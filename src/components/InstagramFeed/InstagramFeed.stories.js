import React from 'react'
import { storiesOf } from '@storybook/react'
import InstagramFeed from './InstagramFeed'

const stories = storiesOf(`Components/InstagramFeed`, module)
stories.add(`default`, () => (
	<InstagramFeed />
))
