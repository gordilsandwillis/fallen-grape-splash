import React from 'react'
import { storiesOf } from '@storybook/react'
import ScrollListener from 'src/components/ScrollListener'
import Header from './Header'

storiesOf(`Components`, module)
	.add('Header', () => (
		<ScrollListener>
			<div style={{ height: '200vh', background: '#ccc' }}>
			<Header/>
			</div>
		</ScrollListener>
	))
