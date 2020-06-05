import React, { Fragment } from 'react'
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
		const site = this.props.data.allContentfulSiteSettings.edges.filter(edge => !edge.node.title.includes('PLACEHOLDER'))[0].node
		const page = this.props.data.allContentfulPage.edges[0].node
		const { sections } = page
		const hasAtf = sections && sections[0].__typename === 'ContentfulWideMedia' && sections[0].width === 'fullWidth'

		return (
			<Fragment >
				<SEO
					title={page.title}
					description={page.seoDescription}
					siteSettings={site}
					shareImage={page.shareImage ? 'https:' + page.shareImage.file.url : false}
				/>
				<Header
					// headerNavigation={site.headerNavigation}
					// headerDrawerBottomLinks={site.headerDrawerBottomLinks}
					// headerLinks={site.headerLinks}
					// headerButtons={site.headerButtons}
					hasAtf={hasAtf}
					bannerText={site.bannerText}
					bannerColor={site.bannerColor}
				/>
				{sections.map((section, index) => {
					const prevTheme = ((index !== 0) && sections[index - 1]) && sections[index - 1].theme
					const prevFullWidth = ((index !== 0) && sections[index - 1]) && sections[index - 1].width === 'fullWidth'
					const nextTheme = ((index !== sections.length - 1) && sections[index + 1]) && sections[index + 1].theme
					const nextFullWidth = ((index !== sections.length - 1) && sections[index + 1]) && sections[index + 1].width === 'fullWidth'
					const lastSection = sections.length === index + 1
					return (
						<ComponentRenderer
							prevTheme={prevFullWidth ? false : prevTheme}
							nextTheme={nextFullWidth ? false : nextTheme}
							isFirstSection={index === 0}
							isLastSection={lastSection}
							key={section.id}
							item={section}
							index={index}
						/>
					)
				})}
				<Footer {...site} />
			</Fragment>
		)
	}
}

PageTemplate.propTypes = propTypes

export const pageQuery = graphql`
  query($id: String!) {
		allContentfulSiteSettings(filter: {internalName: {nin: "PLACEHOLDER Site Settings"}}) {
	    edges {
	      node {
	        ...SiteSettings
	      }
	    }
	  }
    allContentfulPage(filter: {id: {eq: $id}}) {
			edges {
				node {
					id
					title
					slug
					sections {
						...Columns
						...FiftyFifty
						...TextSection
						...WideMedia
					}
				}
			}
    }
	}
`

export default PageTemplate
