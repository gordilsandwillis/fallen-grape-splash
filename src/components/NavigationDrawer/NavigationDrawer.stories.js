import React from 'react'
import { storiesOf } from '@storybook/react'
import NavigationDrawer from './NavigationDrawer'
const navigationItems = [
	{
		title: 'Campers',
		id: 'campers-nav',
		links: [
			{
				title: 'Activites',
				link: '/',
				links: [
					{
						title: 'Sports',
						to: '/'
					},
					{
						title: 'Waterfront',
						to: '/'
					},
					{
						title: 'Arts',
						to: '/'
					},
					{
						title: 'Evening',
						to: '/'
					},
					{
						title: 'Events & Trips',
						to: '/'
					},
					{
						title: 'Community Service',
						to: '/'
					}
				]
			},
			{
				title: 'Facilities',
				links: [
					{
						title: 'Sports Courts',
						to: '/'
					},
					{
						title: 'The Waterfront',
						to: '/'
					},
					{
						title: 'Arts & Crafts Shack',
						to: '/'
					},
					{
						title: 'Climbing Wall',
						to: '/'
					}
				]
			}
		]
	},
	{
		title: 'Staff',
		id: 'staff-nav',
		links: [
			{
				title: 'Activites',
				link: '/',
				links: [
					{
						title: 'Sports',
						to: '/'
					},
					{
						title: 'Events & Trips',
						to: '/'
					},
					{
						title: 'Community Service',
						to: '/'
					}
				]
			},
			{
				title: 'Facilities',
				links: [
					{
						title: 'Sports Courts',
						to: '/'
					},
					{
						title: 'Climbing Wall',
						to: '/'
					}
				]
			}
		]
	}
]

const drawerFooterLinks = [
	{
		title: 'FAQs',
		link: '/'
	},
	{
		title: 'Contact',
		link: '/'
	},
	{
		title: 'Facebook',
		link: 'https://facebook.com/',
		external: true
	},
	{
		title: 'Vimeo',
		link: 'https://vimeo.com/',
		external: true
	}
]

const stories = storiesOf(`Components/NavigationDrawer`, module)
stories.add(`Default`, () => (
	<div>
		<NavigationDrawer
			title="Campers"
			items={navigationItems}
			footerLinks={drawerFooterLinks}
		/>
	</div>
))
