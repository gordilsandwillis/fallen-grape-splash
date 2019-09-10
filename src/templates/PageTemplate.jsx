import _ from 'lodash'
import React from 'react'
import { graphql } from 'gatsby'
import * as PropTypes from 'prop-types'

import SEO from 'src/components/SEO'
import ComponentRenderer from 'src/components/ComponentRenderer'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const propTypes = {
	data: PropTypes.object.isRequired,
}

class PageTemplate extends React.Component {
	render () {
		const {
			data,
			location = '/'
		} = this.props
		const site = _.get(data, 'allContentfulSite.edges[0].node')
		const { navigation, footerNavigation, footerCompanyBio, copyright, seoAppleTouchIcon, seoSocialShareImage, favicon } = site

		const page = _.get(data, 'allContentfulPage.edges[0].node')
		const { blocks, horizontalBreakInFooter, keywords } = page
		const hasAtf = blocks.filter(item => item.__typename === 'ContentfulBlockAboveTheFold').length > 0 || false
		return (
			<main>
				<SEO
					seoAppleTouchIcon={seoAppleTouchIcon}
					seoSocialShareImage={seoSocialShareImage}
					favicon={favicon}
					keywords={keywords}
					title={page.title}
					siteTitle={site.title}
					description={page.seoDescription.seoDescription}
				/>
				<Header hasAtf={hasAtf} navigation={navigation} location={location} />
				{blocks.map(b => <ComponentRenderer key={b.id} item={b} />)}
				<Footer horizontalBreakInFooter={horizontalBreakInFooter} isHomePage={page.slug === '/'} footerCompanyBio={footerCompanyBio} copyright={copyright} footerNavigation={footerNavigation}/>
			</main>
		)
	}
}

PageTemplate.propTypes = propTypes

export const pageQuery = graphql`
  query($id: String!) {
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
				}
			}
		}
    allContentfulPage(filter: {id: {eq: $id}}) {
			edges {
				node {
					id
					slug
					title
					horizontalBreakInFooter
					seoDescription {
						seoDescription
					}
					childContentfulPageSeoDescriptionTextNode {
						seoDescription
					}
					blocks {
						...BlockAboveTheFold
						...BlockSlider
						...BlockProductsGrid
						...BlockPressList
						...BlockLeadership
						...BlockHeroImage
						...BlockContactInformation
						...BlockCompanyPillars
						...BlockCompanies
						...BlockCareersList
					}
				}
			}
    }
	}
`

export default PageTemplate
