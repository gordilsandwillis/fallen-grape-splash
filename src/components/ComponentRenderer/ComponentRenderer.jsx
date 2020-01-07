import React from 'react'

import ATF from 'src/components/ATF'
import CenterAlignedText from 'src/components/CenterAlignedText'
import FiftyFifty from 'src/components/FiftyFifty'
import TwoColumnText from 'src/components/TwoColumnText'
import WideImage from 'src/components/WideImage'
import TwoUpImages from 'src/components/TwoUpImages'

const componentMap = {
	ContentfulAboveTheFold: ATF,
	ContentfulCenterAlignedText: CenterAlignedText,
	ContentfulFiftyFifty: FiftyFifty,
	ContentfulTwoColumnText: TwoColumnText,
	ContentfulWideImageVideo: WideImage,
	ContentfulTwoUpImages: TwoUpImages
}

export default ({ item, prevTheme, nextTheme }) => {
	const Component = componentMap[item.__typename]
	return Component ? (
		<Component {...item} prevTheme={prevTheme} nextTheme={nextTheme} />
	) : null
}
