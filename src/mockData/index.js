export const pages = {
	Home: {
		name: 'Home',
		slug: '/',
		components: {
			atfData: {
				headline: 'Mosaic Group is where life-enhancing digital brands grow together.'
			},
			buttonData: {
				buttonText: 'LEARN MORE',
				buttonLink: 'about'
			}
		}
	},
	About: {
		name: 'About',
		slug: '/about',
		components: {
			atfData: {
				headline: 'Mosaic Group is a collection of leading digital brands that simplify, energize, and optimize daily life.',
				text: 'We build and acquire best-in-class brands whose product offerings improve modern living.'
			},
			conceptsData: {
				items: [
					{ title: 'SIMPLIFY', tags: ['Language', 'Communications', 'Utilities'], description: 'Solutions that remove barriers and allow us to pursue daily life more efficiently.' },
					{ title: 'ENERGIZE', tags: ['Content'], description: 'Content and tools that make free time more exciting and enjoyable.' },
					{ title: 'OPTIMIZE', tags: ['Wellness', 'Fitness', 'Weather'], description: 'Tools that provide ways to make our time more productive and focused.' },
				]
			},
			leadershipData: {
				title: 'Leadership',
				items: [
					{ title: 'Tim Allen', subtitle: 'Chief Executive Officer' },
					{ title: 'Zachary Roseman', subtitle: 'Chief Operating Officer' },
					{ title: 'Richard Land', subtitle: 'Chief Financial Officer' },
					{ title: 'Cindi Moreland', subtitle: 'Sr. Vice President, General Counsel' },
				]
			},
			companyData: {
				title: 'Our Companies',
				items: [
					{
						id: 'dailyburn',
						text: 'Daily Burn is a membership-based fitness collective that offers on- demand workouts, personal fitness guidance, and motivation to help those from all levels and lifestyles achieve everyday victories. Daily Burn’s ever evolving offerinces currently include At Home, HIIT and Yoga. Members can stream from their TV, computer, or mobile app.',
						logo: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/logo_dailyburn.png?raw=true',
						link: 'https://google.com'
					},
					{
						id: 'itranslate',
						text: 'iTranslate is the leading translation and dictionary app. With over 100 million downloads, users can easily translate text, websites (even objects), or start voice-to-voice conversations in over 100 languages, and with the PRO version they can even take translation off-line.',
						logo: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/logo_itranslate.jpg?raw=true',
						link: 'https://google.com'
					},
					{
						id: 'teltech',
						text: 'Teltech is a telecommunications company delivering forward-thinking solutions for the future of mobile. With a focus on security, practicality, and innovation, Teltech is paving the way for user-friendly technology that works for everyone.',
						logo: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/logo_teltech.png?raw=true'
					},
					{
						id: 'apalon',
						text: 'Apalon is a leading developer of iOS and Android mobile applications for consumers and businesses around the world. With one of the world’s largest app portfolios and over 1 million subscribers, Apalon’s products reach more than 20 million monthly active users and include well-known titles such as Productive, Weather Live, NOAA Radar, Scanner for Me and many more. A unique blend of passion and skills are at the core of our company’s DNA, driving our team to produce top-rated, award-winning mobile experiences for millions of people around the world every year.',
						logo: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/logo_apalon.png?raw=true',
						link: 'https://google.com'
					}
				]
			},
			awardsData: {
				title: 'Awards',
				items: [
					{
						name: 'Apalon',
						announcement: '2018 Webby Award Winner for Productivity',
					},
					{
						name: 'iTranslate',
						announcement: '2020 Example Award for Travel',
					},
					{
						name: 'Teltech',
						announcement: '2021 Example Nominee for Communcation'
					},
					{
						name: 'Apalon',
						announcement: '2022 Example Award for Design'
					}
				]
			}
		}
	},
	Products: {
		name: 'Products',
		slug: '/products',
		components: {
			productData: {
				title: 'Our Products',
				items: [
					{
						name: 'Daily Burn Trainer Workouts',
						byline: 'Get Fit & Lose Weight',
						company: 'Daily Burn',
						icon: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/icon_dailyburn.jpg?raw=true',
						links: [
							{
								name: 'iOS',
								href: 'https://apple.com'
							}
						]
					},
					{
						name: 'Yoga Workouts by Daily Burn',
						byline: 'Stretching. Flexibility.',
						company: 'Daily Burn',
						icon: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/icon_yoga.png?raw=true',
						links: [
							{
								name: 'iOS',
								href: 'https://apple.com'
							}
						]
					},
					{
						name: 'HIIT Workouts by Daily Burn',
						byline: 'Workout plans for weight loss',
						company: 'Daily Burn',
						icon: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/icon_hiit.png?raw=true',
						slideshow: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/products-header.jpg?raw=true',
						links: [
							{
								name: 'iOS',
								href: 'https://apple.com'
							}
						]
					},
					{
						name: 'iTranslate Translator',
						byline: 'Translate App with Dictionary',
						company: 'iTranslate',
						icon: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/icon_itranslate_translator.jpg?raw=true',
						slideshow: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/products-header.jpg?raw=true',
						links: [
							{
								name: 'iOS',
								href: 'https://apple.com'
							},
							{
								name: 'ANDROID',
								href: 'https://microsoft.com'
							}
						]
					},
					{
						name: 'iTranslate Converse',
						byline: 'Translate Voice in Real Time',
						company: 'iTranslate',
						icon: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/icon_itranslate_converse.jpg?raw=true',
						slideshow: 'https://github.com/gordilsandwillis/mosaic/blob/develop/src/assets/images/products-header.jpg?raw=true',
						links: [
							{
								name: 'iOS',
								href: 'https://apple.com'
							}
						]
					}
				]
			}
		}
	},
	Careers: {
		name: 'Careers',
		slug: '/careers'
	},
	Contact: {
		name: 'Contact',
		slug: '/contact'
	},
	Press: {
		name: 'Press',
		slug: '/press'
	}
}

export const navPages = [
	pages.About,
	pages.Products,
	pages.Careers,
	pages.Contact
]

export const shared = {
	headerData: {},
	footerData: {
		footerTextLeft: `© 2019 Mosaic Group. All Rights Reserved.`,
		footerTextLeftLineTwo: 'Mosaic Group is an IAC company.',
		footerTextRight: 'Press',
		footerTextRightLink: 'press'
	},

}
