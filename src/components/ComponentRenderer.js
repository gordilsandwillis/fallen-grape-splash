import React from 'react'

import ATF from 'src/components/ATF'
import CareersList from 'src/components/CareersList'
import Companies from 'src/components/Companies'
import ThreeUp from 'src/components/ThreeUp'
import ContactCopy from 'src/components/ContactCopy'
import Hero from 'src/components/Hero'
import FourUp from 'src/components/FourUp'
import PressList from 'src/components/PressList'
import ProductsGrid from 'src/components/ProductsGrid'
import Slider from 'src/components/Slider'
import LegalInfo from 'src/components/LegalInfo'

const componentMap = {
	ContentfulBlockAboveTheFold: ATF,
	ContentfulBlockCareersList: CareersList,
	ContentfulBlockCompanies: Companies,
	ContentfulBlockCompanyPillars: ThreeUp,
	ContentfulBlockContactInformation: ContactCopy,
	ContentfulBlockHeroImage: Hero,
	ContentfulBlockLeadership: FourUp,
	ContentfulBlockPressList: PressList,
	ContentfulBlockProductsGrid: ProductsGrid,
	ContentfulBlockSlider: Slider,
	ContentfulBlockLegalInfo: LegalInfo,
}

export default ({ item }) => {
	const Component = componentMap[item.__typename]
	return Component ? (
		<Component {...item} />
	) : null
}
