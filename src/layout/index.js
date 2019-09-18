import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import globalStyles from 'src/styles/globalStyles'
import PageTransition from 'src/components/PageTransition'
import { Global, css } from '@emotion/core'
import './reset.css'

const Layout = ({ children, location }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<Fragment>
				<Global
					styles={css`${ globalStyles }`}
				/>
				<PageTransition location={location}>
					{children}
				</PageTransition>
			</Fragment>
		)}
	/>
)

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout
