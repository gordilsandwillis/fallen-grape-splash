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
	white-space:nowrap;
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
  ${ ({ underlined, dark }) => underlined && `border-bottom: 1px solid ${ dark ? colors.black : colors.white };` }
  color: ${ ({ dark }) => dark ? colors.black : colors.white };
  transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out, color ${ animations.mediumSpeed } ease-in-out;
  &:hover {
    color: ${ ({ nohover }) => !nohover ? colors.unofficialLightGrey : 'inherit' };
    border-bottom-color: ${ colors.unofficialLightGrey };
  }
`

const StyledLinkElementFakeExternal = styled(GatsbyLink)`
	white-space:nowrap;
  ${ LinkStyles }
  color: ${ ({ white }) => white ? colors.white : colors.brightBlue };
	border-bottom: 2px solid ${ ({ white }) => white ? colors.white : colors.brightBlue };
  transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out, color ${ animations.mediumSpeed } ease-in-out;
  &:hover {
    color: ${ ({ white }) => white ? colors.unofficialLightGrey : colors.darkBlue };
		border-color: ${ ({ white, nohover }) => nohover ? (white ? colors.unofficialLightGrey : colors.darkBlue) : (white ? colors.white : colors.brightblue) };
  }

&::after {
    content: '↗';
    margin-left: 2px;
    line-height: 1em;
    font-size: 1.25em;
    display: inline-block
  }
`

class Link extends Component {
	render () {
		let { to, external, fakeExternal, white, noHoverColor, target, children, className, dark, underlined } = this.props
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
		} else if (fakeExternal) {
			if (to[0] !== '/') to = '/' + to
			return (
				<StyledLinkElementFakeExternal
					nohover={(noHoverColor || '').toString()}
					className={className}
					to={to}
					dark={(dark || '').toString()}
					underlined={(underlined || '').toString()}
				>
					{children}
				</ StyledLinkElementFakeExternal>
			)
		} else {
			if (to[0] !== '/') to = '/' + to
			return (
				<StyledGatsbyLink
					nohover={(noHoverColor || '').toString()}
					className={className}
					to={to}
					dark={(dark || '').toString()}
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
