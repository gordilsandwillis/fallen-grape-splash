import React, { Fragment } from 'react'
// import { graphql } from 'gatsby'

class PageTemplate extends React.Component {
	render () {
		return <Fragment></Fragment>
	}
}

// PageTemplate.propTypes = propTypes

export default PageTemplate

// import React from 'react'
// // import { graphql } from 'gatsby'

// const PageTemplate = ({ data, location }) => {
// 	const { page, site } = data
// 	const {
// 		title,
// 		slug,
// 		seoDescription,
// 		seoKeywords,
// 		blocks,
// 		horizontalBreakInFooter } = page
// 	const {
// 		navigation,
// 		favicon,
// 		seoSocialShareImage,
// 		seoAppleTouchIcon,
// 		copyright,
// 		footerCompanyBio,
// 		footerNavigation } = site

// 	const hasAtf = blocks.find(x => x.name === 'ATF')

// 	return (
// 		<React.Fragment>
// 			<SEO title={title} />
// 			<Header hasAtf={hasAtf} location={location} />
// 			{blocks && blocks.map(block => <div/>)}
// 			<Footer />
// 		</React.Fragment>
// 	)
// }

// PageTemplate.defaultProps = {}

// PageTemplate.propTypes = {}

// export default PageTemplate
