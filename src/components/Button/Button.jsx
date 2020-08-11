import React, { Component } from 'react'
import styled from '@emotion/styled'
import { rgba } from 'polished'

import * as util from 'src/styles/util'
import { colors, typography, animations } from 'src/styles'
import { buttonThemes as themes } from 'src/styles/themes'
import MaterialIcon from 'src/components/MaterialIcon'
import Spinner from 'react-spinner-material'

import Link from 'src/components/Link'

const buttonSizes = {
	tiny: '32px',
	small: '40px',
	medium: '50px',
	large: '60px'
}

const buttonSettings = {
	radius: '0px',
	border: '2px solid',
	transitionSpeed: animations.mediumSpeed,
	verticalOffset: '3px'
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

const setButtonTheme = (theme, state) => `
	color: ${ themes[theme].color };
	background: ${ themes[theme].background };
	${ theme.shadow ? `
		box-shadow: ${ theme.shadow };
	` : `
		box-shadow: none;
	` }
	${ themes[theme].borderColor ? `
		border-color: ${ themes[theme].borderColor };
	` : `
		border-color: ${ themes[theme].background };
	` }
	&:hover {
		${ !state ? `
			color: ${ themes[theme].hoverColor };
			background: ${ themes[theme].hoverBackground };
			${ themes[theme].borderHoverColor ? `
				border-color: ${ themes[theme].borderHoverColor };
			` : `
				border-color: ${ themes[theme].hoverBackground };
			` }
			${ theme.hoverShadow ? `
				box-shadow: ${ theme.hoverShadow };
			` : `` }
		` : `` }
	}
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

const ButtonIcon = styled.div`
	${ ({ position }) => position === 'left' ? `
		margin-right: .5em;
	` : `
		margin-left: .5em;
	` }
	span,
	svg {
		display: block;
	}
`

const ButtonStyles = (state, shape, size, theme) => (`
	appearance: none;
	-webkit-tap-highlight-color: rgba(0,0,0,0);
	-webkit-touch-callout: none;
	outline: none;
	cursor: pointer;
	display: inline-block;
	vertical-align: middle;
	border: ${ buttonSettings.border };
	height: ${ buttonSizes[size] };
	padding: 0 calc(${ buttonSizes[size] } * .5) ${ buttonSettings.verticalOffset };
	min-width: calc(${ buttonSizes[size] } * 2);
	text-transform: none;
	letter-spacing: 0;
	border-radius: ${ buttonSettings.radius };
	${ util.responsiveStyles('font-size', 20, 16, 15, 13) }
	text-align: center;
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

	// Button Shapes
	${ shape ? `
		${ shape.includes('circle') || shape.includes('square') ? `
			padding: 0 !important;
			width: ${ buttonSizes[size] };
			min-width: ${ buttonSizes[size] };
			${ ButtonIcon } {
				margin: 0;
			}
		` : `` }
	` : `` }
	${ shape && shape.includes('circle') ? `border-radius: 50%;` : `` }

	// Button Themes
	${ setButtonTheme(theme, state) }
	${ state === 'disabled' ? `${ DisabledButtonStyles() }` : `` }

	// Button Size Tweaks
	${ ({ size }) => size === 'small' ? `
		font-size: inherit;
	` : `` }
	${ ({ size }) => size === 'tiny' ? `
		font-size: inherit;
	` : `` }

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
	renderIcon = (icon, position, shape, size, loading) => {
		let renderedIcon = false
		if (loading) {
			renderedIcon = <ButtonIcon size={size} position={position} shape={shape}><Spinner radius={18} color='inherit' stroke={2} /></ButtonIcon>
		}
		else if (typeof icon === 'string') {
			renderedIcon = <ButtonIcon size={size} position={position} shape={shape}><MaterialIcon size={this.props.size === 'tiny' && '18px'}>{icon}</MaterialIcon></ButtonIcon>
		} else {
			renderedIcon = <ButtonIcon size={size} position={position} shape={shape}>{icon}</ButtonIcon>
		}
		return renderedIcon
	}

	renderButtonContent = () => {
		const { loading, error, success, children, label, icon, iconPosition, shape, size } = this.props
		if (error) {
			return <ButtonContent>
				big ole error
			</ButtonContent>
		} else if (success) {
			return <ButtonContent>
				yes!
			</ButtonContent>
		} else {
			return <ButtonContent>
				{icon && iconPosition !== 'right' ? this.renderIcon(icon, iconPosition, shape, size, loading) : false}
				{children || label}
				{icon && iconPosition === 'right' ? this.renderIcon(icon, iconPosition, shape, size, loading) : false}
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
			theme,
			className,
			shape,
			size
		} = this.props

		if (to) {
			return (
				<StyledButtonLink
					className={'button ' + className}
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
					theme={theme || setTheme}
					shape={shape}
					size={size}
				>
					{this.renderButtonContent()}
				</StyledButtonLink>
			)
		} else {
			return (
				<StyledButtonElement
					className={'button ' + className}
					icon={icon}
					iconPosition={iconPosition}
					loading={loading}
					error={error}
					success={success}
					disabled={disabled}
					onClick={onClick}
					theme={theme || setTheme}
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
	size: 'medium',
	shape: 'default',
	iconPosition: 'left'
}

export default Button
