import React from 'react'
import { storiesOf } from '@storybook/react'
import LeftAlignedText from './LeftAlignedText'

const stories = storiesOf(`Components/LeftAlignedText`, module)
stories.add(`Default`, () => (
	<LeftAlignedText
		theme="darkBrown"
		eyebrow="Wah-Nee Is the Greatest"
		headline="Intro statement ipsum dolor sit amet, consectetur adipiscing elit. Quid Zeno? Cave putes quicquam esse verius. Peccata paria. Duo Reges: constructio interrete."
		text={<p>Intro statement ipsum dolor sit amet, consectetur adipiscing elit. Quid Zeno? Cave putes quicquam esse verius. Peccata paria. Duo Reges: constructio interrete.</p>}
	/>
))
