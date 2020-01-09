import React from 'react'

import ATF from 'src/components/ATF'
import CenterAlignedText from 'src/components/CenterAlignedText'
import FiftyFifty from 'src/components/FiftyFifty'
import TwoColumnText from 'src/components/TwoColumnText'
import WideMedia from 'src/components/WideMedia'
import TwoUpImages from 'src/components/TwoUpImages'

const componentMap = {
	ContentfulAboveTheFold: ATF,
	ContentfulCenterAlignedText: CenterAlignedText,
	ContentfulFiftyFifty: FiftyFifty,
	ContentfulTwoColumnText: TwoColumnText,
	ContentfulWideMedia: WideMedia,
	ContentfulTwoUpImages: TwoUpImages
}

export default ({ item, prevTheme, nextTheme, index }) => {
	const Component = componentMap[item.__typename]
	return Component ? (
		<Component {...item} prevTheme={prevTheme} nextTheme={nextTheme} index={index}/>
	) : null
}
