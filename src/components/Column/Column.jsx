import React from 'react'
import styled from '@emotion/styled'
import TextLockup from 'src/components/TextLockup'
import Link from 'src/components/Link'
import Image from 'src/components/Image'
import Video from 'src/components/Video'
import List from 'src/components/List'
import Button from 'src/components/Button'
import Card from 'src/components/Card'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { util, colors } from 'src/styles'

const componentMap = {
	ContentfulText: TextLockup,
	ContentfulLink: {
		default: Link,
		textLink: Link,
		button: Button
	},
	ContentfulImage: Image,
	ContentfulVideo: Video,
	ContentfulList: {
		default: List,
		horizontal: List,
		vertical: List,
		checkList: List
	}
}

const ColumnContent = styled.div`
	> div {
	  &:not(:first-of-type) {
	  	${ util.responsiveStyles('margin-top', 30, 24, 20, 16) }
	  }
  }
  ${ ({ type }) => type.startsWith('card') ? `
  	${ util.responsiveStyles('padding', 60, 50, 40, 16) }
  	height: 100%;
  ` : `` }

  ${ ({ type }) => type === 'card CTA' ? `
  	h1, h2, h3, h4 {
  		margin: 0;
  	}
  	h3 {
  		color: ${ colors.blue };
  	}
  ` : `` }
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
			console.log(item)
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

const Column = ({ items, delay, type }) => {
	if (!items) {
		return false
	}

	console.log(items)

	return (
		<ColumnContent as={type.startsWith('card') ? Card : 'div'} type={type}>
			<RenderContent items={items} delay={delay}/>
		</ColumnContent>
	)
}

Column.defaultProps = {
	type: 'default'
}

export default Column
