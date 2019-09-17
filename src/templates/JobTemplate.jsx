import _ from 'lodash'
import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'src/components/SEO'
import Job from 'src/components/Job'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'

const propTypes = {}

class JobTemplate extends React.Component {
	render () {
		const {
			data,
			location = '/'
		} = this.props
		const site = _.get(data, 'allContentfulSite.edges[0].node')
		const { navigation, footerNavigation, footerCompanyBio, copyright, seoAppleTouchIcon, seoSocialShareImage, favicon } = site
		const horizontalBreakInFooter = true

		const jobData = _.get(data, 'allGreenhouseJob.edges[0].node')
		return (
			<main>
				<SEO
					seoAppleTouchIcon={seoAppleTouchIcon}
					seoSocialShareImage={seoSocialShareImage}
					favicon={favicon}
					title={'Careers'}
					siteTitle={site.title}
					description={''}
				/>
				<Header location={location} navigation={navigation} />
				<Job jobData={jobData}/>
				<Footer horizontalBreakInFooter={horizontalBreakInFooter} footerCompanyBio={footerCompanyBio} copyright={copyright} footerNavigation={footerNavigation} />
			</main>
		)
	}
}

JobTemplate.propTypes = propTypes

export default JobTemplate

export const JobQuery = graphql` 
	query($id: Float!) {
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
		allGreenhouseJob(filter: {gh_Id:{eq: $id}}) {
			edges {
				node {
					ghid: gh_Id
					title
					content
					location {
						name
					}
					compliance {
						description
						type
						questions {
							required
							label
							fields {
								name
								type
								values {
									value
									label
								}
							}
						}
					}
					location_questions {
						required
						label
						fields {
							type
							name
						}
					}
					questions {
						required
						label
						description
						fields {
							type
							name
							values {
								value
								label
							}
						}
					}
				}
			}

		}
	}
`
