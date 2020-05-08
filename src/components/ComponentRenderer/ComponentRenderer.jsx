import React from 'react'

import TextSection from 'src/components/TextSection'
import Columns from 'src/components/Columns'
import WideMedia from 'src/components/WideMedia'
import FiftyFifty from 'src/components/FiftyFifty'

const componentMap = {
	ContentfulTextSection: TextSection,
	ContentfulColumns: Columns,
	ContentfulFiftyFifty: FiftyFifty,
	ContentfulWideMedia: WideMedia
}

export default ({ item, prevTheme, nextTheme, index, lastSection }) => {
	const Component = componentMap[item.__typename]
	return Component ? (
		<Component
			{...item}
			prevTheme={prevTheme}
			nextTheme={nextTheme}
			lastSection={lastSection}
			index={index}
		/>
	) : null
}
