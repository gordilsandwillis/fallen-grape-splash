import React from 'react'
import { storiesOf } from '@storybook/react'
import FourUp from './FourUp'

const stories = storiesOf(`Components/FourUp`, module)
stories.add(`default`, props => (
	<React.Fragment>
		<FourUp {...exampleData} />
	</React.Fragment>
))

const exampleData = {
	items: [
		{
			name: 'Daily Burn',
			text: 'Daily Burn is a membership-based fitness collective that offers on- demand workouts, personal fitness guidance, and motivation to help those from all levels and lifestyles achieve everyday victories. Daily Burn’s ever evolving offerinces currently include At Home, HIIT and Yoga. Members can stream from their TV, computer, or mobile app.',
			logo: 'assets/images/logo_dailyburn.png',
			link: 'https://google.com'
		},
		{
			name: 'iTranslate',
			text: 'iTranslate is the leading translation and dictionary app. With over 100 million downloads, users can easily translate text, websites (even objects), or start voice-to-voice conversations in over 100 languages, and with the PRO version they can even take translation off-line.',
			logo: 'assets/images/logo_itranslate.svg',
			link: 'https://google.com'
		},
		{
			name: 'Apalon',
			text: 'Apalon is a leading developer of iOS and Android mobile applications for consumers and businesses around the world. With one of the world’s largest app portfolios and over 1 million subscribers, Apalon’s products reach more than 20 million monthly active users and include well-known titles such as Productive, Weather Live, NOAA Radar, Scanner for Me and many more. A unique blend of passion and skills are at the core of our company’s DNA, driving our team to produce top-rated, award-winning mobile experiences for millions of people around the world every year.',
			logo: 'assets/images/logo_apalon.png',
			link: 'https://google.com'
		}
	]
}
