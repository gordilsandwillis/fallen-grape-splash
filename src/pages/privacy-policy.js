import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import { graphql, useStaticQuery } from 'gatsby'
import * as PropTypes from 'prop-types'

import SEO from 'src/components/SEO'
import SplashHeader from 'src/components/SplashHeader'
import Grid from 'src/components/Grid'
import { colors, typography, mq } from 'src/styles'
import ContentfulRichText from 'src/components/ContentfulRichText'
import ThemeSelector from 'src/components/ThemeSelector'

const propTypes = {
	data: PropTypes.object.isRequired
}

const ContentWrap = styled.div`
	margin-top: 16vw;
	margin-bottom: 8vw;
	padding-top: 40px;
	${ mq.largeAndUp } {
		margin-top: 10vw;
	}
`

function PrivacyPolicy () {
	const { allContentfulLegalText, allContentfulSiteSettings } = useStaticQuery(
		graphql`
		  query {
				allContentfulSiteSettings(filter: {internalName: {nin: "PLACEHOLDER Site Settings"}}) {
			    edges {
			      node {
			        ...SiteSettings
			      }
			    }
			  }
			  allContentfulLegalText(filter: {internalName: {nin: "PLACEHOLDER Legal Text"}}) {
					edges {
			      node {
			      	internalName
			        content {
			        	json
			        }
			      }
			    }
			  }
			}
		`
	)

	const site = allContentfulSiteSettings && allContentfulSiteSettings.edges.filter(edge => !edge.node.title.includes('PLACEHOLDER'))[0].node
	const legalText = allContentfulLegalText && allContentfulLegalText.edges.filter(edge => !edge.node.internalName.includes('PLACEHOLDER'))[0].node

	return (
		<Fragment>
			<SEO
				title='Legal'
				description='Privacy Policy'
				siteSettings={site}
			/>
			<ThemeSelector setTheme="pink">
			<SplashHeader />
				<ContentWrap>
					<Grid small="1 [12] 1" large="1 [16] 9" larger="1 [14] 11">
						<div>
							<h1>{legalText.displayName}</h1>
							<ContentfulRichText richText={legalText.content.json} />
						</div>
					</Grid>
				</ContentWrap>
			</ThemeSelector>

		</Fragment>
	)
}

PrivacyPolicy.propTypes = propTypes

export default PrivacyPolicy
