import { BLOCKS, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from '@emotion/styled'

const BoxedText = styled.span`
  border: 1px solid currentColor;
  padding: 0 .28em;
  font-style: normal !important;
`

const Bold = ({ children }) => <span style={{ fontWeight: 'bold' }}>{children}</span>
const Italic = ({ children }) => <i>{children}</i>
const Code = ({ children }) => <BoxedText>{children}</BoxedText>
const Text = ({ children }) => <div>{children}</div>

const options = {
	renderMark: {
		[MARKS.BOLD]: text => <Bold>{text}</Bold>,
		[MARKS.CODE]: text => <Code>{text}</Code>,
		[MARKS.ITALIC]: text => <Italic>{text}</Italic>
	},
	renderNode: {
		[BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
	},
	renderText: text => text
}

export default node => documentToReactComponents(node.json, options)
