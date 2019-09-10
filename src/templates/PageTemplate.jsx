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
		const favicon = _.get(site, 'favicon')
		const seoSocialShareImage = _.get(site, 'seoSocialShareImage')
		const seoAppleTouchIcon = _.get(site, 'seoAppleTouchIcon')
		const { navigation } = site
		const copyright = _.get(site, 'copyright')
		const footerCompanyBio = _.get(site, 'footerCompanyBio')
		const footerNavigation = _.get(site, 'footerNavigation')

		const page = _.get(data, 'allContentfulPage.edges[0].node')
		const blocks = _.get(page, 'blocks', [])
		const hasAtf = blocks.filter(item => item.__typename === 'ContentfulBlockAboveTheFold').length > 0 || false
		return (
			<main>
				<SEO
					title={page.title}
					description={page.seoDescription.seoDescription}
				/>
				<Header hasAtf={hasAtf} navigation={navigation} location={location} />
				{blocks.map(b => <ComponentRenderer key={b.id} item={b} />)}
				<Footer isHomePage={page.slug === '/'} footerCompanyBio={footerCompanyBio} copyright={copyright} footerNavigation={footerNavigation}/>
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
						file {
							url
						}
					}
					seoSocialShareImage {
						file {
							url
						}
					}
					seoAppleTouchIcon {
						file {
							url
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
					}
				}
			}
    }
	}
`

export default PageTemplate
