const path = require('path')
require('dotenv').config({
	path: `.env.${ process.env.NODE_ENV }`,
})

module.exports = {
	siteMetadata: {
		title: 'Mosiac',
		description: 'Mosiac',
		author: '@dillon',
	},
	plugins: [
		{
			resolve: `gatsby-plugin-emotion`,
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-env-variables`,
			options: {
			  whitelist: ['GREENHOUSE_JOB_API_HOST', 'GREENHOUSE_BOARD_TOKEN']
			}
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
				environment: 'master',
				host: 'cdn.contentful.com'
			},
		},
		{
			resolve: 'gatsby-source-greenhouse-job-board',
			options: {
				boardToken: process.env.GREENHOUSE_BOARD_TOKEN
			}
		}
	],
}
