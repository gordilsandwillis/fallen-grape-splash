/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO ({ description, lang, meta, keywords, title }) {
	const { site, favicon, appleTouchIcon, socialShareImage } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
				favicon: file(relativePath:{eq: "images/favicon.ico"}) {
					publicURL
				}
				appleTouchIcon: file(relativePath: { eq: "images/apple-touch-icon.png" }) {
					publicURL
				},
				socialShareImage: file(relativePath: { eq: "images/share-image.png" }) {
					publicURL
					absolutePath
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${ site.siteMetadata.title }`}
			meta={[
				{
					name: `viewport`,
					content: `width=device-width, initial-scale=1.0, maximum-scale=1.0`,
				},
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:image`,
					content: socialShareImage.absolutePath,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:image`,
					content: socialShareImage.absolutePath,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			]
				.concat(
					keywords.length > 0
						? {
							name: `keywords`,
							content: keywords.join(`, `),
						}
						: []
				)
				.concat(meta)}
			link={[
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon.publicURL },
				{ rel: 'apple-touch-icon', type: 'image/png', sizes: '120x120', href: appleTouchIcon.publicURL }
			]}
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: [],
	description: ``,
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired,
}

export default SEO
