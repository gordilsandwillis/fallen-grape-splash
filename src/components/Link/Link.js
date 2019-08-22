import React, { Component } from 'react'
import styled from '@emotion/styled'

import { Link as GatsbyLink } from 'gatsby'

const LinkStyles = `
	font-size: inherit;
	text-decoration: none;
`

const StyledLinkElement = styled.a`
	${ LinkStyles }
`

const StyledGatsbyLink = styled(GatsbyLink)`
	${ LinkStyles }
`

class Link extends Component {
	render () {
		const { to, external, target, children, className } = this.props

		if (external) {
			return (
				<StyledLinkElement
					className={className}
					href={to}
					target={target}
				>
					{children}
				</StyledLinkElement>
			)
		} else {
			return (
				<StyledGatsbyLink
					className={className}
					to={to}
				>
					{children}
				</StyledGatsbyLink>
			)
		}
	}
}

Link.defaultProps = {
	to: '#',
	external: false,
	target: ''
}

export default Link
