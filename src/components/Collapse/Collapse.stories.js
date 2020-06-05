import React from 'react'
import styled from '@emotion/styled'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import Collapse from './Collapse'
import { typography } from 'src/styles'

const Notes = styled.div`
	${ typography.storyNotes }
`

const stories = storiesOf(`Components/Collapse`, module)
stories.add(`Default`, () => (
	<div>
		<Collapse title="Collapse Title (Trigger)">
			<div style={{ background: '#eee', padding: '1px 0' }}>
			<Notes>
				<p>This is the standard use for the collapse component. It uses the <code>title</code> prop as a trigger to expand and collapse itself.</p>
			</Notes>
			</div>
		</Collapse>
  </div>
)).add(`External Trigger`, () => (
	<div>
		<Notes>
			<p>Use the storybook's knobs to open and close the content. This is an example of triggering the expanding and closing of the collapse component using the <code>collapsed</code> prop.</p>
		</Notes>
		<Collapse collapsed={ boolean('Collapsed', false) }>
			<div style={{ background: '#eee', padding: '1px 0' }}>
				<h3>I'm open now!</h3>
			</div>
		</Collapse>
  </div>
))
