import React from 'react'
import styled from '@emotion/styled'
import Logomark from 'src/assets/images/logo.svg'

import { mq } from 'src/styles'

const StyledLogo = styled(Logomark)`
	width: 50px;
	height: auto;
	display: block;
	${ mq.mediumAndBelow } {
		width: 40px;
	}
	svg {
		width: 100%;
		height: auto;
	}
	* {
		fill: currentcolor;
	}
`

const Logo = ({ className }) => (
	<StyledLogo className={className} />
)

export default Logo
