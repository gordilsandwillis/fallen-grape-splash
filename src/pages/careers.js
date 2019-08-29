import React, { Component } from 'react'
import styled from '@emotion/styled'
import { mediaQueries } from 'src/styles'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import { shared } from 'src/mockData'

const PageWrap = styled.div`
  ${ ({ hasATF }) => hasATF === false ? `
		padding-top: 100px;
		${ mediaQueries.largerAndUp } {
			padding-top: 3rem;
		}
	` : `
		padding-top: 0;
		${ mediaQueries.largerAndUp } {
			padding-top: 0;
		}
	` }
`

class Careers extends Component {
	render () {
		const {
			/* data, */
			location
		} = this.props
		// const { Careers } = pages
		const { footerData } = shared
		return (
			<PageWrap>
				<SEO title="Mosaic" />
				<Header theme='light' location={location} />
				<Footer
					showHr={true}
					{...footerData}
				/>
			</PageWrap>
		)
	}
}

export default Careers
