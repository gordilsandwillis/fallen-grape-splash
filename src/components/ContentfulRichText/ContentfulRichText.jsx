import React from 'react'
import styled from '@emotion/styled'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import BalanceText from 'react-balance-text'

const RichTextWrapper = styled.div`
	white-space: pre-wrap;
	* {
		white-space: pre-wrap;
	}
`
const adjustSpace = (first, last) => {
	let style = {}
	if (first) {
		style.marginTop = 0
	}
	if (last) {
		style.marginBottom = 0
	}
	return style
}

const options = {
	renderMark: {
		[MARKS.BOLD]: text => <b>{text}</b>,
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => (
			<p style={adjustSpace(node.first, node.last)}>{children}</p>
		),
		[BLOCKS.HEADING_1]: (node, children) => (
			<h1 style={adjustSpace(node.first, node.last)}>{children}</h1>
		),
		[BLOCKS.HEADING_2]: (node, children) => (
			<h2 style={adjustSpace(node.first, node.last)}>{children}</h2>
		),
		[BLOCKS.HEADING_3]: (node, children) => (
			<h3 style={adjustSpace(node.first, node.last)}>{children}</h3>
		),
		[BLOCKS.HEADING_4]: (node, children) => (
			<h4 style={adjustSpace(node.first, node.last)}>{children}</h4>
		),
		[BLOCKS.HEADING_5]: (node, children) => (
			<h5 style={adjustSpace(node.first, node.last)}>{children}</h5>
		),
		[BLOCKS.HEADING_6]: (node, children) => (
			<h6 style={adjustSpace(node.first, node.last)}>{children}</h6>
		),
		[BLOCKS.UL_LIST]: (node, children) => (
			<ul style={adjustSpace(node.first, node.last)}>{children}</ul>
		),
		[BLOCKS.OL_LIST]: (node, children) => (
			<ol style={adjustSpace(node.first, node.last)}>{children}</ol>
		),
		[BLOCKS.LIST_ITEM]: (node, children) => (
			<li style={adjustSpace(node.first, node.last)}>{children}</li>
		),
		[BLOCKS.QUOTE]: (node, children) => (
			<blockquote style={adjustSpace(node.first, node.last)}>{children}</blockquote>
		),
		[BLOCKS.HR]: (node, children) => (
			<hr style={adjustSpace(node.first, node.last)}/>
		),
		[BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
			<div style={adjustSpace(node.first, node.last)}>{children}</div>
		),
		[BLOCKS.EMBEDDED_ASSET]: (node, children) => (
			<div style={adjustSpace(node.first, node.last)}>{children}</div>
		)
	},
}

const ContentfulRichText = ({ richText, className }) => {

	const text = richText.content

	// let renderer know which is the first item
	text[0].first = true

	if (text[text.length - 1].content[0].value === '') {
		// remove last item if empty
		text.pop()
		// let renderer know which is the last item
		text[richText.content.length - 2].last = true
	} else {
		// let renderer know which is the last item
		text[richText.content.length - 1].last = true
	}

	return (
		<RichTextWrapper className={className}>
			{documentToReactComponents(richText, options)}
		</RichTextWrapper>
	)
}

// ContentfulRichText.defaultProps = {
// 	richText: richText
// }

export default ContentfulRichText
