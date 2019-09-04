import React, { Component } from 'react'
import styled from '@emotion/styled'

import { animations, colors } from 'src/styles'
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

const LinkStyles = `
	font-size: inherit;
  text-decoration: none;
  transition: color ${ animations.mediumSpeed } ease-in-out;
`

const StyledLinkElement = styled.a`
  ${ LinkStyles }
  color: ${ ({ white }) => white ? colors.white : colors.brightBlue };
  span {
    border-bottom: 2px solid ${ ({ white }) => white ? colors.white : colors.brightBlue };
    transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out;
  }
  &:hover {
    color: ${ ({ white }) => white ? colors.unofficialLightGrey : colors.darkBlue };
    span {
      border-color: ${ ({ white, nohover }) => nohover ? (white ? colors.unofficialLightGrey : colors.darkBlue) : (white ? colors.white : colors.brightblue) };
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
  ${ ({ underlined, theme }) => underlined && `border-bottom: 1px solid ${ theme === 'light' ? colors.black : colors.white };` }
  color: ${ ({ theme }) => theme === 'light' ? colors.black : colors.white };
  transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out, color ${ animations.mediumSpeed } ease-in-out;
  &:hover {
    color: ${ ({ nohover }) => !nohover ? colors.unofficialLightGrey : 'inherit' };
    border-bottom-color: ${ colors.unofficialLightGrey };
  }
`

class Link extends Component {
	render () {
		let { to, external, white, noHoverColor, target, children, className, theme, underlined } = this.props
		if (external) {
			return (
				<StyledLinkElement
					className={className}
					href={to}
					target={target}
					white={white}
					nohover={(noHoverColor || '').toString()}
				>
					<span>{children}</span>
				</StyledLinkElement >
			)
		} else {
			return (
				<StyledGatsbyLink
					nohover={(noHoverColor || '').toString()}
					className={className}
					to={to}
					theme={theme}
					underlined={(underlined || '').toString()}
				>
					{children}
				</ StyledGatsbyLink>
			)
		}
	}
}

Link.defaultProps = {
	to: '#',
	external: false,
	target: ''
}

Link.propTypes = {
	to: PropTypes.string.isRequired,
	external: PropTypes.bool.isRequired,
	target: PropTypes.string.isRequired
}

export default Link
