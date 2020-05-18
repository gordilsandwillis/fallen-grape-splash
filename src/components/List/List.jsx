import React from 'react'
import styled from '@emotion/styled'
import Column from 'src/components/Column'
import { typography, colors } from 'src/styles'
import { MdCheck } from 'react-icons/md'

const Wrapper = styled.ul`
	list-style: none;
	padding: 0;
	${ ({ type }) => type === 'horizontal' ? `
		letter-spacing: 0;
		li {
			display: inline-block;
			padding-left: 10px;
			padding-right: 10px;
		}
	` : `` }
`

const ListItem = styled.li`
	${ ({ type }) => type === 'checklist' ? `
		margin-bottom: .75em;
		display: flex;
		align-items: flex-start;
		&:last-of-type {
			margin-bottom: 0;
		}
	` : `` }
`

const ListIcon = styled.div`
	margin-right: 12px;
	color: ${ colors.mainColor };
	font-size: 1em;
	border-radius: 50%;
	flex-shrink: 0;
	svg {
		margin-top: .1em;
		display: block;
	}
`

const List = ({ className, type, items }) => (
  <Wrapper className={className} type={type}>
  	{items.map(( item, index ) => (
  		<ListItem type={type}>
  			{type === 'checklist' && (
  				<ListIcon>
	  				<MdCheck />
  				</ListIcon>
  			)}
	  		<Column items={[ item ]}/>
  		</ListItem>
  	))}
  </Wrapper>
)

export default List
