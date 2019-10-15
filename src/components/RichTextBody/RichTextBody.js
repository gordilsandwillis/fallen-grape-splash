import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styled from '@emotion/styled'
import { animations, colors } from 'src/styles'

const BoxedText = styled.span`
  border: 2px solid currentColor;
  padding: 0 .2em;
  font-style: normal !important;
	display: inline-block;
`
const Paragraph = styled.p`
	white-space: pre-wrap;
`

const CustomLink = styled.a`
	font-size: inherit;
  text-decoration: none;
  transition: color ${ animations.mediumSpeed } ease-in-out;
	border-bottom: 2px solid currentColor;
	color: ${ colors.black };
	span {
		transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out, color ${ animations.mediumSpeed } ease-in-out;
	}
	transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out, color ${ animations.mediumSpeed } ease-in-out;
  &:hover {
    color: ${ colors.grey }
  }
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
		[INLINES.HYPERLINK]: (node, children) => <CustomLink href={(node && node.data) && node.data.uri}>{children}</CustomLink>
	},
	renderText: text => text
}

export default node => documentToReactComponents(node.json, options)
