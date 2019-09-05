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
				buttonLink: '/about'
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
				linkText: 'LEARN MORE',
				items: [
					{
						text: 'Daily Burn is a membership-based fitness collective that offers on- demand workouts, personal fitness guidance, and motivation to help those from all levels and lifestyles achieve everyday victories. Daily Burn’s ever evolving offerinces currently include At Home, HIIT and Yoga. Members can stream from their TV, computer, or mobile app.',
						logo: 'https://i.imgur.com/CaE9VlH.png',
						link: 'https://google.com'
					},
					{
						text: 'iTranslate is the leading translation and dictionary app. With over 100 million downloads, users can easily translate text, websites (even objects), or start voice-to-voice conversations in over 100 languages, and with the PRO version they can even take translation off-line.',
						logo: 'https://i.imgur.com/ai74QJK.jpg',
						link: 'https://google.com'
					},
					{
						text: 'Teltech is a telecommunications company delivering forward-thinking solutions for the future of mobile. With a focus on security, practicality, and innovation, Teltech is paving the way for user-friendly technology that works for everyone.',
						logo: 'https://i.imgur.com/DY72W5I.png'
					},
					{
						text: 'Apalon is a leading developer of iOS and Android mobile applications for consumers and businesses around the world. With one of the world’s largest app portfolios and over 1 million subscribers, Apalon’s products reach more than 20 million monthly active users and include well-known titles such as Productive, Weather Live, NOAA Radar, Scanner for Me and many more. A unique blend of passion and skills are at the core of our company’s DNA, driving our team to produce top-rated, award-winning mobile experiences for millions of people around the world every year.',
						logo: 'https://i.imgur.com/t3zJ7J1.png',
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
						icon: 'https://i.imgur.com/0cPWBcU.jpg',
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
						icon: 'https://i.imgur.com/k4gASDq.png',
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
						icon: 'https://i.imgur.com/tt9d9zU.png',
						slideshow: 'https://i.imgur.com/C9C3c1z.jpg',
						links: [
							{
								name: 'iOS',
								href: 'https://apple.com'
							}
						]
					},
					{
						name: 'iTranslate Translator for Apple Watch',
						byline: 'Translate App with Dictionary',
						company: 'iTranslate',
						icon: 'https://i.imgur.com/8oEPZgR.jpg',
						slideshow: 'https://i.imgur.com/C9C3c1z.jpg',
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
						icon: 'https://i.imgur.com/y02ASX4.jpg',
						slideshow: 'https://i.imgur.com/C9C3c1z.jpg',
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
		slug: '/careers',
	},
	Contact: {
		name: 'Contact',
		slug: '/contact',
		components: {
			contactData: {
				headline: 'Mosaic Group is a global brand headquartered in NYC with offices in Ireland, Austria, and Belarus. For any questions please use our contact email.',
				title: 'EMAIL',
				items: [
					{
						pretext: 'For general inquiries:',
						linkText: 'CONTACT@MOSAIC.CO',
						linkHref: 'https://google.com'
					},
					{
						pretext: 'For press inquiries:',
						linkText: 'PRESS@MOSAIC.CO',
						linkHref: 'https://google.com'
					}
				]
			}
		}
	},
	Press: {
		name: 'Press',
		slug: '/press',
		components: {
			pressData: {
				title: 'The Latest',
				linkText: 'READ MORE',
				externalLink: {
					name: 'PRESS@MOSAIC.CO',
					href: 'https://google.com'
				},
				items: [
					{
						title: `New app released can help stop 'robo-calls'`,
						text: 'The app-based service instantly protects people from more than 200,000 numbers.',
						link: 'https://abc.com',
						logo: 'https://i.imgur.com/TJ4tP5Z.png'
					},
					{
						title: 'Inside the effort to stop robocalls',
						text: 'NBC News Investigative Correspondent Jeff Rossen meets the minds behind RoboKiller, an app that wants to stop annoying robocalls.',
						link: 'https://nbc.com',
						logo: 'https://i.imgur.com/zuSViXw.png',
						video: {
							coverImage: 'https://d7hftxdivxxvm.cloudfront.net/?resize_to=fit&width=400&height=303&quality=80&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FAGvAJBGTlt6AGKiMPhzCXA%2Flarge.jpg',
							url: 'https://www.youtube.com/watch?v=_wUIexMVG9k',
						}
					},
					{
						title: `iTranslate's new app gets us one step closer to simple, real-time...`,
						text: `There's a new app out from iTranslate that teases the idea of real-time, universal translation better than almost anything before it.`,
						logo: 'https://i.imgur.com/TJ4tP5Z.png',
						image: 'https://media.pri.org/s3fs-public/styles/story_main/public/images/2019/08/robot_lead_crop.jpg?itok=Uc4umkLW'
					},
					{
						title: `New app released can help stop 'robo-calls'`,
						text: 'The app-based service instantly protects people from more than 200,000 numbers.',
						link: 'https://abc.com',
						logo: 'https://i.imgur.com/TJ4tP5Z.png'
					},
					{
						title: 'Second video example title',
						text: 'Google News example correspondent reports information about product.',
						link: 'https://google.com',
						logo: 'https://i.imgur.com/TJ4tP5Z.png',
						video: {
							coverImage: 'https://artillerymag.com/wp-content/uploads/2019/03/Cortright_Petra_-_TBI_PC18.08e.12_-_BETTY_CROCKER_BioAss_chickensroosters_-_Res300framed_1.jpg',
							url: 'https://www.youtube.com/watch?v=0wZpheK98Gc',
						}
					},
				]
			}
		}
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
		footerTextRightLink: '/press'
	},

}
