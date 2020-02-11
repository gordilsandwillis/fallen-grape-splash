import React from 'react'

import ATF from 'src/components/ATF'
import CalloutText from 'src/components/CalloutText'
import FiftyFifty from 'src/components/FiftyFifty'
import TwoColumnText from 'src/components/TwoColumnText'
import WideMedia from 'src/components/WideMedia'
import MultipleImages from 'src/components/MultipleImages'

const componentMap = {
	ContentfulAboveTheFold: ATF,
	ContentfulCalloutText: CalloutText,
	ContentfulFiftyFifty: FiftyFifty,
	ContentfulTwoColumnText: TwoColumnText,
	ContentfulWideMedia: WideMedia,
	ContentfulMultipleImages: MultipleImages
}

export default ({ item, prevTheme, nextTheme, index }) => {
	const Component = componentMap[item.__typename]
	return Component ? (
		<Component {...item} prevTheme={prevTheme} nextTheme={nextTheme} lastSection={lastSection} index={index}/>
	) : null
}
