import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from './Card'

storiesOf(`Components`, module)
	.add('Card', () => (
		<div>
			<Card>
				<p>Text in a card</p>
			</Card>
		</div>
	))
