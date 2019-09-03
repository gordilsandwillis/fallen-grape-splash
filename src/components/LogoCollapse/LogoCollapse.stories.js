import React from 'react'
import { storiesOf } from '@storybook/react'
import LogoCollapse from './LogoCollapse'

const stories = storiesOf(`Components/LogoCollapse`, module)
stories.add(`default`, props => (
	<LogoCollapse />
))
