import React from 'react'
import styled from '@emotion/styled'
import Logomark from 'src/assets/images/logo.svg'

import { mq } from 'src/styles'

const MarkWrapper = styled.div`
	height: auto;
	display: inlin-block;
	vertical-align: top;
	svg {
		display: inline-block;
		vertical-align: top;
		width: 100%;
		height: auto;
		color: inherit;
		* {
			fill: currentcolor;
		}
	}
`

const Logo = ({ className }) => (
	<MarkWrapper className={className}>
		<Logomark />
	</MarkWrapper>
)

export default Logo
