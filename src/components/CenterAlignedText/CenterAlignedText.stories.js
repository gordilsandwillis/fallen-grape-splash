import React from 'react'
import { storiesOf } from '@storybook/react'
import CenterAlignedText from './CenterAlignedText'

const stories = storiesOf(`Blocks`, module)
stories.add(`Center Aligned Text`, () => (
	<CenterAlignedText
		theme="darkBrown"
		eyebrow="Wah-Nee Is the Greatest"
		headline="Intro statement ipsum dolor sit amet, consectetur adipiscing elit. Quid Zeno? Cave putes quicquam esse verius. Peccata paria. Duo Reges: constructio interrete."
		text={<p>Intro statement ipsum dolor sit amet, consectetur adipiscing elit. Quid Zeno? Cave putes quicquam esse verius. Peccata paria. Duo Reges: constructio interrete.</p>}
	/>
))
