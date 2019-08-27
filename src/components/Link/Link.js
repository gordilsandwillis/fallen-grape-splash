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
  span {
    border-bottom: 2px solid ${ colors.brightBlue };
    transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out;
  }
  &:hover {
    color: ${ colors.darkBlue };
    span {
      border-color: ${ colors.darkBlue };
    }
  }

  &::after {
    content: '↗';
    margin-left: 2px;
    line-height: 1em;
    font-size: 1.25em;
    display: inline-block
  }
`

const StyledGatsbyLink = styled(GatsbyLink)`
  ${ LinkStyles }
  color: ${ colors.white };
  transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out, color ${ animations.mediumSpeed } ease-in-out;
  &:hover {
    color: ${ colors.unofficialLightGrey };
    border-bottom-color: ${ colors.unofficialLightGrey };
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
					<span>{children}</span>
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
