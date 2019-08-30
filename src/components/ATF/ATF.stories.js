import React from 'react'
import { storiesOf } from '@storybook/react'
import ATF from './ATF'
import styled from '@emotion/styled'

class ATFStory extends React.Component {
	render () {
		return (
			<ATF headline="Headline" text="Some very good text" />
		)
	}
}
