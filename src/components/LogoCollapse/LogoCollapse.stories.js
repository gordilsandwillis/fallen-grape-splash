import React from 'react'
import styled from '@emotion/styled'
import { storiesOf } from '@storybook/react'
import LogoCollapse from './LogoCollapse'

const stories = storiesOf(`Components/LogoCollapse`, module)
stories.add(`default`, props => (
	<LogoCollapse />
))
