import React from 'react'
import { storiesOf } from '@storybook/react'
import CartIcon from './CartIcon'
import { number } from '@storybook/addon-knobs'

const stories = storiesOf(`Components/CartIcon`, module)
stories.add(`Default`, () => (
	<div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
	  <CartIcon
			count={number('Count', 0, { step: 1, range: true, min: 0, max: 20 })}
		/>
  </div>
))
