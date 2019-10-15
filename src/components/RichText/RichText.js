import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import Link from 'src/components/Link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from '@emotion/styled'

const BoxedText = styled.span`
  border: 2px solid currentColor;
  padding: 0 .2em;
  font-style: normal !important;
	display: inline-block;
`
const Paragraph = styled.div`
	white-space: pre-wrap;
`

const Bold = ({ children }) => <span style={{ fontWeight: 'bold' }}>{children}</span>
const Italic = ({ children }) => <i>{children}</i>
const Code = ({ children }) => <BoxedText>{children}</BoxedText>
const Text = ({ children }) => <Paragraph>{children}</Paragraph>
const OrderedList = ({ children }) => <ol style={{ listStyleType: 'decimal', paddingLeft: 20 }}>{children}</ol>
const UnorderedList = ({ children }) => <ul style={{ listStyleType: 'disc', paddingLeft: 20 }}>{children}</ul>

const options = {
	renderMark: {
		[MARKS.BOLD]: text => <Bold>{text}</Bold>,
		[MARKS.CODE]: text => <Code>{text}</Code>,
		[MARKS.ITALIC]: text => <Italic>{text}</Italic>
	},
	renderNode: {
		[BLOCKS.OL_LIST]: (node, children) => <OrderedList>{children}</OrderedList>,
  	[BLOCKS.UL_LIST]: (node, children) => <UnorderedList>{children}</UnorderedList>,
		[BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
		[INLINES.HYPERLINK]: (node, children) => <Link external to={(node && node.data) && node.data.uri}>{children}</Link>
	},
	renderText: text => text
}

export default node => documentToReactComponents(node.json, options)
