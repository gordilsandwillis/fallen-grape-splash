import React from 'react'
import styled from '@emotion/styled'

const Wrapper = styled.div``

const List = ({ className, type }) => (
  <Wrapper className={className}>
  	<h3>List</h3>
  	<p>type: {type}</p>
  </Wrapper>
)

export default List
