import React from 'react'
import SEO from 'src/components/SEO'
import Header from 'src/components/Header'
import Footer from 'src/components/Footer'
import CareersList from 'src/components/CareersList'
import { shared } from 'src/mockData'

const Careers = ({ location }) => {
	const { footerData } = shared
	return (
		<main>
			<SEO title="Careers" />
			<Header location={location} />
			<CareersList />
			<Footer
				showHr
				{...footerData}
			/>
		</main>
	)
}

export default Careers
