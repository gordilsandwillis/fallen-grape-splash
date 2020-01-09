import React from 'react'
import styled from '@emotion/styled'
import { typography, colors } from 'src/styles'

const Wrapper = styled.div`
	display: flex;
	padding-top: 1em;
	align-items: baseline;
	padding-left: 2px;
	figcaption {
		padding-left: 1em;
		margin: 0;
		flex-grow: 1;
		flex-shrink: 1;
		letter-spacing: .01em;
		max-width: 42em;
	}
`

const Bullet = styled.div`
	flex-grow: 0;
	flex-shrink: 0;
	width: 10px;
	height: 10px;
	margin-top: -2px;
	transform: rotate(-45deg);
	background: ${ ({ color }) => colors[color] };
`

const Caption = ({ className, children, bulletColor }) => (
  <Wrapper className={className}>
  	<Bullet color={bulletColor} />
  	<figcaption>{children}</figcaption>
  </Wrapper>
)

Caption.defaultProps = {
	bulletColor: "mainColor"
}

export default Caption
