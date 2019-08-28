import React, { Component } from 'react'
import ATF from 'src/components/ATF'
import styled from '@emotion/styled'
import { mediaQueries, colors, typography } from 'src/styles'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import List from 'src/components/List'
import Hr from 'src/components/Hr'
import Footer from 'src/components/Footer'
import { pages, shared } from 'src/mockData'

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

class Press extends Component {
	render () {
		const { data, location } = this.props
		const { Press: { components: { pressData } } } = pages
		const { footerData } = shared
		return (
			<PageWrap>
				<SEO title="Mosaic" />
				<Header theme='light' location={location} />
				<List {...pressData}
					showHr
					showTitleHr
					gridSettings={{
						large: '[2] 1 [8] 1',
						medium: '[3] 1 [9]',
						small: '[6]'
					}}
				/>
				<Footer
					fixed={true}
					showHr={true}
					{...footerData}
				/>
			</PageWrap>
		)
	}
}

export default Press
