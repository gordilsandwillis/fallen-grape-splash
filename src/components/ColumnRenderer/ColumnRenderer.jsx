import React from 'react'

import TextLockup from 'src/components/TextLockup'
import Link from 'src/components/Link'
import Image from 'src/components/Image'
import Video from 'src/components/Video'
import List from 'src/components/List'
import Button from 'src/components/Button'

const componentMap = {
	ContentfulText: TextLockup,
	// ContentfulLink: Link,
	ContentfulLink: {
		default: Link,
		textLink: Link,
		button: Button
	},
	ContentfulLinkbutton: Button,
	ContentfulImage: Image,
	ContentfulVideo: Video,
	ContentfulList: List
}

export default ({ item, columnCount }) => {
	let Component = componentMap[item.__typename]
	if (item.type || item.type === null) {
		Component = componentMap[item.__typename][item.type]
		if (!Component) {
			Component = componentMap[item.__typename].default
		}
	}

	return Component ? (
		<Component
			{...item}
			columnCount={columnCount}
		/>
	) : 'null'
}
