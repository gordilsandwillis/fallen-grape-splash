import React, { Component } from 'react'
import { navigate, graphql } from 'gatsby'
import _ from 'lodash'
import ATF from 'src/components/ATF'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

class NotFound extends Component {
	componentDidMount () {
		setTimeout(() => {
			navigate('/')
		}, 2200)
	}

	render () {
		const {
			data,
			location = '/'
		} = this.props
		const site = _.get(data, 'allContentfulSite.edges[0].node')
		const { navigation, pageImage, pageText, footerNavigation, footerCompanyBio, copyright, seoAppleTouchIcon, seoSocialShareImage, favicon } = site
		const horizontalBreakInFooter = false
		const hasAtf = true

		return (
			<main>
				<SEO
					seoAppleTouchIcon={seoAppleTouchIcon}
					seoSocialShareImage={seoSocialShareImage}
					favicon={favicon}
					title={'404'}
					siteTitle={site.title}
					description={''}
				/>
				<Header hasAtf location={location} />
				<ATF
					image={pageImage}
					headline={pageText}
					horizontalAlignCenter={true}
					verticalAlignCenter={true}
				/>
				<Header hasAtf={hasAtf} navigation={navigation} location={location} />
				<Footer horizontalBreakInFooter={horizontalBreakInFooter} isHomePage={true} footerCompanyBio={footerCompanyBio} copyright={copyright} footerNavigation={footerNavigation}/>
			</main>
		)
	}
}

export default NotFound
// TODO
export const NotFoundQuery = graphql` 
	query {
		allContentfulSite(limit: 1) {
			edges {
				node {
					id
					title
					favicon {
						fixed(width: 32, height: 32, quality: 100, toFormat: PNG) {
							src
						}
					}
					seoSocialShareImage {
						fixed(width: 180, height: 180, quality: 100, toFormat: PNG) {
							src
						}
					}
					seoAppleTouchIcon {
						fixed(width: 180, height: 180, quality: 100, toFormat: PNG) {
							src
						}
					}
					navigation {
						...on ContentfulPage {
							title
							slug
						}
					}
					copyright {
						json
					}
					footerCompanyBio {
						json
					}
					footerNavigation {
						...on ContentfulPage {
							title
							slug
						}
					}
					pageText {
						json
					}
					pageImage {
						fluid(maxWidth: 1440, quality: 100) {
							base64
							aspectRatio
							src
							srcSet
							srcWebp
							srcSetWebp
							sizes
						}
					}
				}
			}
		}
		
	}
`
