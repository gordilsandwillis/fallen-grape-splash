import React from 'react'
import { storiesOf } from '@storybook/react'
import VideoEmbed from './VideoEmbed'

const stories = storiesOf(`Components/VideoEmbed`, module)
stories.add(`default`, props => (
	<React.Fragment>
		<VideoEmbed gridSettings={{ small: '[6]', medium: '[4] 4', large: '[4] 4' }} {...video} />
	</React.Fragment>
))

const video = {
	url: 'https://www.youtube.com/watch?v=_wUIexMVG9k',
	coverImage: 'https://fashioneditorials.com/wp-content/uploads/2017/10/i-D-Japan-Magazine-October-2017-1.jpg',
}
