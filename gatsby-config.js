const path = require("path")
require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
	siteMetadata: {
		title: "Fallen Grape",
		siteUrl: process.env.GATSBY_HOST,
		description: "Fallen Grape",
		author: "@mattgordils @robincwillis",
	},
	plugins: [
		`gatsby-plugin-robots-txt`,
		`gatsby-plugin-sitemap`,
		`gatsby-transformer-inline-svg`,
		{
			resolve: `gatsby-plugin-emotion`,
		},
		"gatsby-plugin-react-helmet",
		{
			resolve: `gatsby-plugin-env-variables`,
			options: {
				whitelist: ["GREENHOUSE_JOB_API_HOST", "GREENHOUSE_BOARD_TOKEN"],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `assets`,
				path: `${__dirname}/src/assets`,
			},
		},
		{
			resolve: "gatsby-plugin-react-svg",
			options: {
				rule: {
					include: /assets/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-layout`,
			options: {
				component: require.resolve(`./src/layout/index.js`),
			},
		},
		"gatsby-transformer-remark",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sharp",
		"gatsby-plugin-resolve-src",
		{
			resolve: "gatsby-plugin-root-import",
			options: {
				src: path.join(__dirname, "src"),
				apollo: path.join(__dirname, "apollo"),
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE,
				accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
				host: process.env.CONTENTFUL_HOST,
				environment: process.env.CONTENTFUL_ENVIRONMENT,
			},
		},
		{
			resolve: `gatsby-plugin-facebook-pixel`,
			options: {
				pixelId: process.env.FACEBOOK_PIXEL_ID,
			},
		},
		{
			resolve: "gatsby-plugin-google-tagmanager",
			options: {
				id: process.env.GA_TAG_MANAGER_ID,
				includeInDevelopment: false,
				defaultDataLayer: { platform: "gatsby" },
			},
		},
	],
}
