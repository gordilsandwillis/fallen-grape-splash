import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO ({ description, lang, meta, keywords, title, shareImage, siteSettings }) {
	const { site, favicon, appleTouchIcon, socialShareImage, allContentfulSiteSettings } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
				allContentfulSiteSettings(filter: {internalName: {nin: "PLACEHOLDER Site Settings"}}) {
					nodes {
						title
						favicon {
							fixed {
								src
							}
						}
						touchIcon {
							fixed {
								src
							}
						}
						defaultSeo {
				      ...Seo
				    }
					}
				}
				favicon: file(relativePath:{eq: "images/favicon.png"}) {
					publicURL
				}
				appleTouchIcon: file(relativePath: { eq: "images/touch-icon.png" }) {
					publicURL
				}
				socialShareImage: file(relativePath: { eq: "images/share-image.png" }) {
					publicURL
					absolutePath
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description
	const host = process.env.HOST || process.env.GATSBY_HOST
	const defaultSeo = allContentfulSiteSettings.nodes[0].defaultSeo

	let metaShareImage = host + socialShareImage.publicURL
	if (shareImage) {
		metaShareImage = shareImage
	} else if (defaultSeo.shareImage) {
		metaShareImage = 'https:' + defaultSeo.shareImage.file.url
	}

	let metaKeywords = ''
	if (keywords) {
		metaKeywords = keywords.join(`, `)
	} else if (defaultSeo.keywords && keywords && keywords.length > 0) {
		metaKeywords = defaultSeo.keywords.join(`, `)
	}

	const contentfulFavicon = allContentfulSiteSettings.nodes[0].favicon.fixed.src
	const contentfultouchIcon = allContentfulSiteSettings.nodes[0].touchIcon.fixed.src
	const contentfulSiteTitle = allContentfulSiteSettings.nodes[0].title

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${ contentfulSiteTitle || site.siteMetadata.title }`}
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
					property: `og:title`,
					content: `${ title } | ${ contentfulSiteTitle || site.siteMetadata.title }`,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					property: `og:image`,
					content: `${ metaShareImage }`
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					name: `twitter:image`,
					content: `${ metaShareImage }`
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
					content: `${ title } | ${ contentfulSiteTitle || site.siteMetadata.title }`,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
				{
					name: `keywords`,
					content: metaKeywords
				}
			]}
			link={[
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: contentfulFavicon || favicon },
				{ rel: 'apple-touch-icon', type: 'image/png', sizes: '120x120', href: contentfultouchIcon || appleTouchIcon }
			]}
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	keywords: [],
	description: ``,
	shareImage: ``
}

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	keywords: PropTypes.arrayOf(PropTypes.string),
	title: PropTypes.string.isRequired
}

export default SEO
