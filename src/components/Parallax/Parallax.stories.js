import React from 'react'
import { storiesOf } from '@storybook/react'
import Parallax from './Parallax'

const stories = storiesOf(`Components/Parallax`, module)
stories.add(`default`, () => (
	<Parallax />
))
