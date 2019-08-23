export const pages = {
	Home: {
		name: 'Home',
		slug: '',
		components: {
			Header: {},
			Footer: {
				footerTextLeft: `© 2019 Mosaic Group. All Rights Reserved.`,
				footerTextRight: 'Mosaic Group is an IAC company.'
			},
			ATF: {
				headline: 'Mosaic Group is where life-enhancing digital brands grow together.'
			},
			Button: {
				buttonText: 'LEARN MORE',
				buttonLink: '/about'
			}
		}
	},
	About: {
		name: 'About',
		slug: 'about'
	},
	Products: {
		name: 'Products',
		slug: 'products'
	},
	Careers: {
		name: 'Careers',
		slug: 'careers'
	},
	Contact: {
		name: 'Contact',
		slug: 'contact'
	},
	Press: {
		name: 'Press',
		slug: 'press'
	}
}

export const navPages = [
	pages.About,
	pages.Products,
	pages.Careers,
	pages.Contact
]
