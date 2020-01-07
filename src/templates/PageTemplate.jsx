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
		const hasAtf = sections && sections[0].__typename === 'ContentfulAboveTheFold'
		return (
			<Fragment >
				<SEO
					title={page.title}
					description={page.seoDescription}
				/>
				{/*<Header
					headerNavigation={site.headerNavigation}
					headerDrawerBottomLinks={site.headerDrawerBottomLinks}
					headerLinks={site.headerLinks}
					headerButtons={site.headerButtons}
					hasAtf={hasAtf}
				/>*/}
				{sections.map((section, index) => {
					const prevTheme = ((index !== 0) && sections[index - 1]) && sections[index - 1].theme
					const nextTheme = ((index !== sections.length - 1) && sections[index + 1]) && sections[index + 1].theme
					return (
						<ComponentRenderer prevTheme={prevTheme} nextTheme={nextTheme} key={section.id} item={section} />
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
		allContentfulSiteSettings {
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
					path
					title
					seoDescription
					sections {
						...AboveTheFold
						...CenterAlignedText
						...FiftyFifty
						...TwoColumnText
						...WideImageVideo
						...TwoUpImages
					}
				}
			}
    }
	}
`

export default PageTemplate
