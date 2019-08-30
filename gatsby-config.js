const path = require('path')
require('dotenv').config({
	path: `.env.${ process.env.NODE_ENV }`,
})

module.exports = {
	siteMetadata: {
		title: 'Mosiac',
		description: 'Mosiac',
		author: '@robincwillis',
	},
	plugins: [
		{
			resolve: `gatsby-plugin-emotion`,
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-env-variables`,
			// options: {
			//   whitelist: ['VIRAL_LOOPS_CAMPAIGN_ID']
			// }
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${ __dirname }/src/assets`,
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /assets/
				}
			}
		},
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/layout/index.js`),
			},
		},
		// {
		//   resolve: `gatsby-plugin-manifest`,
		//   options: {
		//     name: 'gatsby-starter-default',
		//     short_name: 'starter',
		//     start_url: '/',
		//     background_color: '#663399',
		//     theme_color: '#663399',
		//     display: 'minimal-ui',
		//     icon: 'src/assets/images/gatsby-icon.png', // This path is relative to the root of the site.
		//   },
		// },
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-resolve-src',
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				apollo: path.join(__dirname, 'apollo')
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
			},
		},

	],
}
