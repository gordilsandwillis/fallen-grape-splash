/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

function SEO ({ title, siteTitle, lang = 'en', seoAppleTouchIcon, meta = '', seoSocialShareImage, favicon, keywords, description }) {
	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${ title }`}
			meta={[
				{
					name: `viewport`,
					content: `width=device-width, initial-scale=1.0, maximum-scale=1.0`,
				},
				{
					name: `description`,
					content: description,
				},
				{
					property: `og:image`,
					content: seoSocialShareImage.fixed.src,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: description,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:image`,
					content: seoSocialShareImage.fixed.src,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: title,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: description,
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
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: favicon.fixed.src },
				{ rel: 'apple-touch-icon', type: 'image/png', sizes: '120x120', href: seoAppleTouchIcon.fixed.src }
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
