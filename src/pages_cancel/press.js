import React from 'react'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import PressList from 'src/components/PressList'
import Footer from 'src/components/Footer'
import { pages, shared } from 'src/mockData'

const Press = ({ location }) => {
	const { Press: { components: { pressData } } } = pages
	const { footerData } = shared
	return (
		<main>
			<SEO title="Press" />
			<Header location={location} />
			<PressList {...pressData} />
			<Footer
				showHr
				{...footerData}
			/>
		</main>
	)
}

export default Press
