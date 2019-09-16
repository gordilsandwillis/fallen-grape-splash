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
	white-space: nowrap;
  ${ LinkStyles }
	color: ${ ({ white }) => white ? colors.white : colors.brightBlue };
	transition: color ${ animations.mediumSpeed } ease-in-out, border-bottom-color ${ animations.mediumSpeed } ease-in-out;
  span {
    border-bottom: 2px solid currentColor;
  }
  &:hover {    
		${ ({ nohover, white }) => nohover ? '' : `
			color: ${ white ? colors.unofficialLightGrey : colors.grey };
		` }
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
  ${ ({ underlined }) => underlined && `border-bottom: 2px solid currentColor;` }
  color: ${ ({ dark }) => dark ? colors.black : colors.white };
	span {
		transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out, color ${ animations.mediumSpeed } ease-in-out;
	}
	transition: border-bottom-color ${ animations.mediumSpeed } ease-in-out, color ${ animations.mediumSpeed } ease-in-out;
  &:hover {
    color: ${ ({ nohover }) => !nohover ? colors.unofficialLightGrey : 'inherit' };
  }
`

const StyledLinkElementFakeExternal = styled(GatsbyLink)`
	white-space:nowrap;
  ${ LinkStyles }
  color: ${ ({ white }) => white ? colors.white : colors.brightBlue };
	span {
		border-bottom: 2px solid currentColor;
	}
  &:hover {
    color: ${ ({ white }) => white ? colors.unofficialLightGrey : colors.grey };
  }

&::after {
		content: '↗';
		color: currentColor;
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
					target={target || '_blank'}
					rel="noopener"
					rel="noreferrer"
					white={white}
					nohover={noHoverColor}
				>
					<span>{children}</span>
				</StyledLinkElement >
			)
		} else if (fakeExternal) {
			if (to[0] !== '/') to = '/' + to
			return (
				<StyledLinkElementFakeExternal
					nohover={noHoverColor}
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
					nohover={noHoverColor}
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
	target: '_blank'
}

Link.propTypes = {
	to: PropTypes.string.isRequired,
	external: PropTypes.bool.isRequired,
	target: PropTypes.string.isRequired
}

export default Link
