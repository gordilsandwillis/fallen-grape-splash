import React, { Component } from 'react'
import styled from '@emotion/styled'

import { fontSmoothing } from 'src/styles/helpers'
import { animations, colors, typography } from 'src/styles'

import MaterialIcon from 'src/components/MaterialIcon'

import Link from 'src/components/Link'

const buttonSizes = {
	tiny: '24px',
	small: '30px',
	medium: '50px',
	large: '66px',
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

const ButtonStyles = (state, shape, size) => (`
	padding: 30px 0;
	appearance: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-touch-callout: none;
  outline: none;
  display: inline-block;
  vertical-align: middle;
  background: transparent;
  border: 2px solid ${ colors.white };
	${ typography.responsiveStyles('height', 50, 30, 30, 45) }
	height: ${ buttonSizes.small };
  cursor: pointer;
  line-height: 1em;
  text-transform: none;
  letter-spacing: 0;
  border-radius: 0;
  color: ${ colors.white };
  font-style: normal;
  font-family: inherit;
  ${ typography.button }
  min-width: 100px;
  text-align: center;
  box-shadow: none;
  ${ fontSmoothing }
  transition: background ${ animations.mediumSpeed } ease-in-out,
              color ${ animations.mediumSpeed } ease-in-out,
              border ${ animations.mediumSpeed } ease-in-out,
              box-shadow ${ animations.mediumSpeed } ease-in-out,
              transform ${ animations.mediumSpeed } ease-in-out,
              opacity ${ animations.mediumSpeed } ease-in-out;
	// Button States
	${ state === 'disabled' ? `cursor: not-allowed;` : `` }
	${ state === 'loading' ? `cursor: wait;` : `` }
	${ state === 'error' ? `cursor: default;` : `` }
	${ state !== 'disabled' ? `
		&:hover {
      background: ${ colors.whiteLowOpacity };
		}
	` : `` }

	${ shape === 'circle' || shape === 'square' ? `
		padding: 0;
		min-width: 0;
		width: ${ buttonSizes.medium };
		min-width: ${ buttonSizes.medium };
		${ size === 'tiny' ? `
			width: ${ buttonSizes.tiny };
			min-width: ${ buttonSizes.tiny };
		` : `` }
		${ size === 'small' ? `
			width: ${ buttonSizes.small };
			min-width: ${ buttonSizes.small };
		` : `` }
		${ size === 'large' ? `
			width: ${ buttonSizes.large };
			min-width: ${ buttonSizes.large };
		` : `` }
	` : `` }

	${ shape === 'circle' ? `border-radius: 50%;` : `` }

	${ size === 'tiny' ? `
		height: ${ buttonSizes.tiny };
		${ typography.responsiveStyles('font-size', 16, 14, 13, 13) }
	` : `` }
	${ size === 'small' ? `
		height: ${ buttonSizes.small };
	` : `` }
	${ size === 'large' ? `
		height: ${ buttonSizes.large };
	` : `` }
`)

const ButtonContent = styled.div`
	display: flex;
	${ typography.responsiveStyles('padding-top', 2, 1, 1, 2) }
	align-items: center;
	justify-content: center;
	height: 100%;
	svg {
		* {
			fill: currentcolor;
		}
	}
`

const StyledButtonLink = styled(Link)`
	${ props => ButtonStyles(getState(props.loading, props.error, props.success, props.disabled), props.shape, props.size) }
`

const StyledButtonElement = styled.button`
	${ props => ButtonStyles(getState(props.loading, props.error, props.success, props.disabled), props.shape, props.size) }
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

	render () {
		const { to,
			external,
			target,
			children,
			icon,
			iconPosition,
			loading,
			error,
			success,
			disabled,
			onClick,
			theme,
			className,
			shape,
			size
		} = this.props

		if (to) {
			return (
				<StyledButtonLink
					className={className}
					href={to}
					target={target}
					external={external}
					icon={icon}
					iconPosition={iconPosition}
					loading={loading}
					error={error}
					success={success}
					disabled={disabled}
					onClick={onClick}
					theme={theme}
					shape={shape}
					size={size}
				>
					<ButtonContent>
						{icon && iconPosition !== 'right' ? this.renderIcon(icon) : false}
						{children}
						{icon && iconPosition === 'right' ? this.renderIcon(icon) : false}
					</ButtonContent>
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
					theme={theme}
					shape={shape}
					size={size}
				>
					<ButtonContent>
						{icon && iconPosition !== 'right' ? this.renderIcon(icon) : false}
						{children}
						{icon && iconPosition === 'right' ? this.renderIcon(icon) : false}
					</ButtonContent>
				</StyledButtonElement>
			)
		}
	}
}
export default Button
