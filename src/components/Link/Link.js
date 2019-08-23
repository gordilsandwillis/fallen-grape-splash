import React, { Component } from 'react'
import styled from '@emotion/styled'

import { animations, colors, typography } from 'src/styles'
import { Link as GatsbyLink } from 'gatsby'

const LinkStyles = `
	font-size: inherit;
  text-decoration: none;
  transition: color ${ animations.mediumSpeed } ease-in-out;
`

const StyledLinkElement = styled.a`
  ${ LinkStyles }
  color: ${ colors.brightBlue };
  &:hover {
    color: ${ colors.darkBlue };
  }
`

const StyledGatsbyLink = styled(GatsbyLink)`
  ${ LinkStyles }
  color: ${ colors.white };
  &:hover {
    color: ${ colors.unofficialLightGrey };
  }
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
