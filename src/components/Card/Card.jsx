import React, { Component } from 'react'
import styled from '@emotion/styled'
import ThemeSelector from 'src/components/ThemeSelector'

import { globals, typography, colors, animations, mq, util } from 'src/styles'

const Wrapper = styled(ThemeSelector)`
	border-radius: 2px;
`

class Card extends Component {
	render () {
		const { children, className } = this.props
		return (
			<Wrapper setTheme="lightGrey" className={className}>
				{children}
			</Wrapper>
		)
	}
}

export default Card
