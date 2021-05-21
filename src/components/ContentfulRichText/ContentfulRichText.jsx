import React from "react"
import styled from "@emotion/styled"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

const RichTextWrapper = styled.div`
	white-space: pre-wrap;
	* {
		white-space: pre-wrap;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin-top: 0.75em;
	}
	li {
		p {
			margin-top: 0.75em;
			margin-bottom: 0;
			&:first-of-type {
				margin-top: 0;
			}
			&:last-of-type {
				margin-bottom: 1.5em;
			}
		}
		ul {
			padding-left: 1.2em;
		}
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

const options = (linkInNewTab) => {
	const textOptions = {
		renderMark: {
			[MARKS.BOLD]: (text) => <b>{text}</b>,
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
				<blockquote style={adjustSpace(node.first, node.last)}>
					{children}
				</blockquote>
			),
			[BLOCKS.HR]: (node, children) => (
				<hr style={adjustSpace(node.first, node.last)} />
			),
			[BLOCKS.EMBEDDED_ENTRY]: (node, children) => (
				<div style={adjustSpace(node.first, node.last)}>{children}</div>
			),
			[BLOCKS.EMBEDDED_ASSET]: (node, children) => (
				<div style={adjustSpace(node.first, node.last)}>{children}</div>
			),
			[INLINES.HYPERLINK]: (node, children) => (
				<a href={node.data.uri} target={linkInNewTab ? "_blank" : ""}>
					{children}
				</a>
			),
		},
	}
	return textOptions
}

const ContentfulRichText = ({ richText, className, linkInNewTab }) => {
	const text = richText.content

	// let renderer know which is the first item
	text[0].first = true

	if (
		text[text.length - 1].content[0].value === "" &&
		text[text.length - 1].content.length === 1
	) {
		// remove last item if empty
		text.pop()
		// let renderer know which is the last item
		text[richText.content.length - 1].last = true
	} else {
		// let renderer know which is the last item
		text[richText.content.length - 1].last = true
	}

	return (
		<RichTextWrapper className={className}>
			{documentToReactComponents(richText, options(linkInNewTab))}
		</RichTextWrapper>
	)
}

// ContentfulRichText.defaultProps = {
// 	richText: richText
// }

export default ContentfulRichText
