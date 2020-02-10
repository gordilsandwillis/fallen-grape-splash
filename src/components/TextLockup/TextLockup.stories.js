import React from 'react'
import { storiesOf } from '@storybook/react'
import TextLockup from './TextLockup'
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs'

const AlignmentOptions = {
	center: 'center',
	left: 'left',
	right: 'right'
}

const HeadlineOptions = {
	h1: 'h1',
	h2: 'h2',
	h3: 'h3',
	h4: 'h4'
}

const TextOptions = {
	body: 'body',
	bodyMedium: 'bodyMedium',
	bodyLarge: 'bodyLarge',
	bodySmall: 'bodySmall'
}

const stories = storiesOf(`Components/TextLockup`, module)
stories.add(`Default`, () => (
	<div style={{ padding: '5%' }}>
		<TextLockup
			theme="darkBrown"
			eyebrow="Wah-Nee Is the Greatest"
			alignment={ optionsKnob('Alignment', AlignmentOptions, 'center', { display: 'inline-radio' }) }
			headline="Intro statement ipsum dolor sit amet, consectetur adipiscing elit. Quid Zeno? Cave putes quicquam esse verius. Peccata paria. Duo Reges: constructio interrete."
			headlineSize={ optionsKnob('Headline Size', HeadlineOptions, 'h3', { display: 'select' }) }
			text={<p>Intro statement ipsum dolor sit amet, consectetur adipiscing elit. Quid Zeno? Cave putes quicquam esse verius. Peccata paria. Duo Reges: constructio interrete.</p>}
			textSize={ optionsKnob('Text Size', TextOptions, 'body', { display: 'select' }) }
		/>
	</div>
))
