import React from 'react'
import styled from '@emotion/styled'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import BalanceText from 'react-balance-text'

const RichTextWrapper = styled.div`
	> h1:first-child,
	> h2:first-child,
	> h3:first-child,
	> h4:first-child {
		margin-top: 0;
	}
	white-space: pre-wrap;
	* {
		white-space: pre-wrap;
	}
`

const Heading1 = ({ children }) => <h1><div>{children}</div></h1>

const options = {
	renderMark: {
		[MARKS.BOLD]: text => <b>{text}</b>,
	},
	renderNode: {
		[BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
	},
}

const ContentfulRichText = ({ richText, className }) => (
	<RichTextWrapper className={className}>
		{documentToReactComponents(richText, options)}
	</RichTextWrapper>
)

// ContentfulRichText.defaultProps = {
// 	richText: richText
// }

export default ContentfulRichText
