import React from 'react'
import styled from '@emotion/styled'
import TextLockup from 'src/components/TextLockup'
import Link from 'src/components/Link'
import Image from 'src/components/Image'
import Video from 'src/components/Video'
import List from 'src/components/List'
import Button from 'src/components/Button'
import ScrollEntrance from 'src/components/ScrollEntrance'

const componentMap = {
	ContentfulText: TextLockup,
	ContentfulLink: {
		default: Link,
		textLink: Link,
		button: Button
	},
	ContentfulImage: Image,
	ContentfulVideo: Video,
	ContentfulList: List
}

const ColumnContent = styled.div`
	> div {
		margin-top: 24px;
	  &:first-of-type {
	  	margin-top: 0;
	  }
  }
`

const RenderContent = ({ items, delay }) => {
	return (
		items.map((item, index) => {
			let Component = componentMap[item.__typename]
			if (item.type || item.type === null) {
				Component = componentMap[item.__typename][item.type]
				if (!Component) {
					Component = componentMap[item.__typename].default
				}
			}
			return Component ? (
				<ScrollEntrance delay={index + delay} transitionIn={item.__typename === 'ContentfulText' ? false : true}>
					<div>
						<Component
							{...item}
							delay={index}
						/>
					</div>
				</ScrollEntrance>
			) : false
		})
	)
}

export default ({ items, delay }) => {
	if (!items) {
		return false
	}

	return (
		<ColumnContent>
			<RenderContent items={items} delay={delay}></RenderContent>
		</ColumnContent>
	)
}
