import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { lighten, rgba } from 'polished'

import * as util from 'src/styles/util'
import { colors, typography, animations } from 'src/styles'
import { buttonThemes as themes } from 'src/styles/themes'
import MaterialIcon from 'src/components/MaterialIcon'

import Link from 'src/components/Link'

const buttonSizes = {
	tiny: '36px',
	small: '48px',
	medium: '50px',
	large: '72px'
}

const buttonSettings = {
	radius: '0px',
	border: '2px solid',
	transitionSpeed: animations.mediumSpeed
}

const getState = (loading, error, success, disabled) => {
	let buttonState = ''
	if (error) {
		buttonState = 'error'
	} else if (loading) {
		buttonState = 'loading'
	} else if (success) {
		buttonState = 'success'
	} else if (disabled) {
		buttonState = 'disabled'
	}

	return buttonState
}

const setButtonTheme = theme => `
	${ theme === 'default' || !theme ? `
		color: ${ themes.default.color };
		background: ${ themes.default.background };
	` : `
		color: ${ themes[theme].color };
		background: ${ themes[theme].background };
	` }
	&:hover {
		color: ${ themes[theme].hoverColor };
		background: ${ themes[theme].hoverBackground };
		${ themes[theme].borderHoverColor ? `
			border-color: ${ themes[theme].borderHoverColor };
		` : `
			border-color: ${ themes[theme].hoverBackground };
		` }
	}
	${ themes[theme].borderColor ? `
		border-color: ${ themes[theme].borderColor };
	` : `
		border-color: ${ themes[theme].background };
	` }
`

const DisabledButtonStyles = () => `
	&[disabled],
	&:disabled {
		opacity: .25;
		background: ${ colors.textColor };
		border-color: ${ colors.textColor };
		color: ${ rgba(colors.bgColor, 0.6) };
		cursor: not-allowed;
	}
`

const ButtonStyles = (state, shape, size, theme) => (`
	appearance: none;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	-webkit-touch-callout: none;
	outline: none;
	display: inline-block;
	vertical-align: middle;
	border: ${ buttonSettings.border };
	height: ${ buttonSizes.medium };
	padding-top: 0;
	padding-bottom: 2px; // offset text if necessary
	padding-left: calc(${ buttonSizes.medium } * .6);
	padding-right: calc(${ buttonSizes.medium } * .6);
	cursor: pointer;
	text-transform: none;
	letter-spacing: 0;
	border-radius: ${ buttonSettings.radius };
	${ util.responsiveStyles('font-size', 20, 16, 15, 13) }
	text-align: center;
	box-shadow: none;
	${ typography.buttonStyle }
	line-height: 1em;
	${ util.fontSmoothing }
	transition: background ${ buttonSettings.transitionSpeed } ease-in-out,
							color ${ buttonSettings.transitionSpeed } ease-in-out,
							border ${ buttonSettings.transitionSpeed } ease-in-out,
							box-shadow ${ buttonSettings.transitionSpeed } ease-in-out,
							transform ${ buttonSettings.transitionSpeed } ease-in-out,
							opacity ${ buttonSettings.transitionSpeed } ease-in-out;
	// Button States
	${ state === 'loading' ? `cursor: wait;` : `` }
	${ state === 'error' || state === 'success' ? `cursor: default;` : `` }

	${ size ? `
		padding-left: calc(${ buttonSizes[size] } * .6);
		padding-right: calc(${ buttonSizes[size] } * .6);
		height: ${ buttonSizes[size] };
		min-width: calc(${ buttonSizes[size] } * 2);
	` : `
		min-width: calc(${ buttonSizes.medium } * 2);
	` }

	${ setButtonTheme(theme) }
	${ state === 'disabled' ? `${ DisabledButtonStyles() }` : `` }

	${ shape ? `
		${ shape.includes('circle') || shape.includes('square') ? `
			padding-top: 0;
			padding-bottom: 0;
			padding-left: 0;
			padding-right: 0;
			${ size ? `
				width: ${ buttonSizes[size] };
				min-width: ${ buttonSizes[size] };
			` : `
				width: ${ buttonSizes.medium };
				min-width: ${ buttonSizes.medium };
			` }
		` : `` }
	` : `` }

	${ shape && shape.includes('circle') ? `border-radius: 50%;` : `` }

`)

const ButtonContent = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	svg {
		* {
			fill: currentcolor;
		}
	}
`

const StyledButtonLink = styled(Link)`
	${ ({ loading, error, success, disabled, shape, size, theme }) => ButtonStyles(getState(loading, error, success, disabled), shape, size, theme) }
`

const StyledButtonElement = styled.button`
	${ ({ loading, error, success, disabled, shape, size, theme }) => ButtonStyles(getState(loading, error, success, disabled), shape, size, theme) }
`

class Button extends Component {
	renderIcon = icon => {
		let renderedIcon = false
		if (typeof icon === 'string') {
			renderedIcon = <MaterialIcon size={this.props.size === 'tiny' && '18px'}>{icon}</MaterialIcon>
		} else {
			renderedIcon = icon
		}
		return renderedIcon
	}

	renderButtonContent = () => {
		const { loading, error, success, children, icon, iconPosition } = this.props
		if (loading) {
			return <ButtonContent>
				...
			</ButtonContent>
		} else if (error) {
			return <ButtonContent>
				big ole error
			</ButtonContent>
		} else if (success) {
			return <ButtonContent>
				yes!
			</ButtonContent>
		} else {
			return <ButtonContent>
				{icon && iconPosition !== 'right' ? this.renderIcon(icon) : false}
				{children}
				{icon && iconPosition === 'right' ? this.renderIcon(icon) : false}
			</ButtonContent>
		}
	}

	render () {
		const {
			to,
			external,
			target,
			icon,
			iconPosition,
			loading,
			error,
			success,
			disabled,
			onClick,
			setTheme,
			className,
			shape,
			size
		} = this.props

		if (to) {
			return (
				<StyledButtonLink
					className={className}
					to={to}
					target={target}
					external={external}
					icon={icon}
					iconPosition={iconPosition}
					loading={loading}
					error={error}
					success={success}
					disabled={disabled}
					onClick={onClick}
					theme={setTheme}
					shape={shape}
					size={size}
				>
					{this.renderButtonContent()}
				</StyledButtonLink>
			)
		} else {
			return (
				<StyledButtonElement
					className={className}
					icon={icon}
					iconPosition={iconPosition}
					loading={loading}
					error={error}
					success={success}
					disabled={disabled}
					onClick={onClick}
					theme={setTheme}
					shape={shape}
					size={size}
				>
					{this.renderButtonContent()}
				</StyledButtonElement>
			)
		}
	}
}

Button.defaultProps = {
	setTheme: 'default',
	size: 'medium'
}

export default Button
