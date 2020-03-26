import React, { Component } from 'react'
import styled from '@emotion/styled'
import { colors, animations } from 'src/styles'
import { MdArrowForward } from 'react-icons/md'

import { Link as GatsbyLink } from 'gatsby'

const LinkStyles = (setTheme) => `
	font-size: inherit;
	text-decoration: none;
	cursor: pointer;
`

const StyledLinkElement = styled.a`
	${ ({ setTheme }) => `
		${ LinkStyles(setTheme) }
	` }
`

const StyledGatsbyLink = styled(GatsbyLink)`
	${ ({ setTheme }) => `
		${ LinkStyles(setTheme) }
	` }
`

const ArrowIcon = styled(MdArrowForward)`
	display: inline-block;
	vertical-align: middle;
	margin-left: .3em;
	margin-top: -4px;
`

class Link extends Component {
	render () {
		const { to, external, target, children, className, setTheme } = this.props
		if (external) {
			const externalLink = external.toString()
			return (
				<StyledLinkElement
					className={className}
					href={to}
					target={target}
					setTheme={setTheme}
				>
					{children}
				</StyledLinkElement>
			)
		} else {
			return (
				<StyledGatsbyLink
					className={className}
					to={to}
					setTheme={setTheme}
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
	target: '',
	setTheme: 'alert'
}

export default Link
