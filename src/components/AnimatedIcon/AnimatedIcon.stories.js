import React from 'react'
import styled from '@emotion/styled'
import { typography } from 'src/styles'
import { storiesOf } from '@storybook/react'
import AnimatedIcon from './AnimatedIcon'
import { optionsKnob, number, boolean } from '@storybook/addon-knobs'

const iconOptions = {
	menu: 'menu',
	arrow_left: 'arrow_left',
	arrow_right: 'arrow_right',
	arrow_up: 'arrow_up',
	arrow_down: 'arrow_down',
	close: 'close',
	ellipsis: 'ellipsis',
	bar_graph: 'bar_graph',
	download: 'download',
	upload: 'upload'
}

const Notes = styled.div`
	${ typography.storyNotes }
	margin: 0 auto;
	p {
		margin: 0 auto;
		text-align: center;
	}
`

const stories = storiesOf(`Components/AnimatedIcon`, module)
stories.add(`Default`, () => (
	<div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
	  <AnimatedIcon
			icon={ optionsKnob('Overlay Position', iconOptions, 'menu', { display: 'radio' }) }
			size={number('Size', 60, { step: 2, range: true, min: 12, max: 120 })}
			weight={number('Weight', 2, { step: 2, range: true, min: 2, max: 6 })}
			rounded={boolean('Rounded', false)}
		/>
	  <div style={{ position: 'absolute', bottom: '30px', left: '30px', right: '30px' }}>
			<Notes><p>Works best if <code>size</code> and <code>weight</code> values are kept even numbers</p></Notes>
	  </div>
  </div>
))
