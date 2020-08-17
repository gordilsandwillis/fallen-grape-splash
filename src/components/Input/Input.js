import React, { Component } from 'react'
import styled from '@emotion/styled'

import { lighten, darken, rgba } from 'polished'
import { colors, typography, animations, util } from 'src/styles'
import ConditionalRender from 'src/components/ConditionalRender'
import MaterialIcon from 'src/components/MaterialIcon'
import { isEmoji } from 'src/utils/validations'
import { inputThemes as themes } from 'src/styles/themes'

const inputVars = {
	tiny: '32px',
	small: '40px',
	medium: '50px',
	large: '60px',
	borderWidth: '2px',
	backgroundColor: 'transparent',
	borderRadius: '0px',
	hPadding: '1em'
}

const setInputTheme = theme => {
	return `
		color: ${ themes[theme].color };
		input {
			background: ${ themes[theme].background };
			border-color: ${ themes[theme].borderColor };
			caret-color: ${ themes[theme].color };
			color: ${ themes[theme].color };
			&:active,
			&:focus,
			&:active:hover,
			&:focus:hover {
				background: ${ darken(0.05, themes[theme].focusBackground) };
				border-color: ${ themes[theme].focusBorderColor };
			}
			&:hover {
				background: ${ darken(0.05, themes[theme].hoverBackground) };
				border-color: ${ themes[theme].hoverBorderColor };
			}
			&:-internal-autofill-selected,
			&:-webkit-autofill,
			&:-internal-autofill-selected:hover,
			&:-webkit-autofill:hover,
			&:-internal-autofill-selected:focus,
			&:-webkit-autofill:focus,
			&:-internal-autofill-selected:active,
			&:-webkit-autofill:active {
				border-color: ${ themes[theme].borderColor } !important;
				-webkit-text-fill-color: ${ themes[theme].color } !important;
				color: ${ themes[theme].color } !important;
			  transition: background-color 5000s ease-in-out 0s;
			}
			::placeholder {
				color: ${ rgba(themes[theme].color, 1) };
			}
		}
	`
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

const InputWrap = styled.div`
	position: relative;
	display: inline-block;
	width: 100%;
	${ typography.smallCaps }
	${ ({ theme }) => setInputTheme(theme) }
`

const InputStyles = (state, size, icon, iconPosition, theme, label) => (`
  appearance: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-touch-callout: none;
  outline: none;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  background: ${ inputVars.backgroundColor };
  border: ${ inputVars.borderWidth } solid;
  height: ${ inputVars.medium };
  line-height: 1em;
  text-transform: inherit;
  letter-spacing: 0;
  border-radius: ${ inputVars.borderRadius };
  color: inherit;
  font-style: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-align: left;
  box-shadow: none;
  padding: 2px ${ inputVars.hPadding } 0;
  ${ icon ? `
		padding-${ iconPosition }: ${ inputVars.medium };
		${ size === 'tiny' ? `
			${ util.responsiveStyles('font-size', 16, 14, 13, 13) }
			padding-${ iconPosition }: ${ inputVars.tiny };
		` : `` }
		${ size === 'small' ? `
			padding-${ iconPosition }: ${ inputVars.small };
		` : `` }
		${ size === 'large' ? `
			padding-${ iconPosition }: ${ inputVars.medium };
		` : `` }
	` : `` }
  padding-bottom: 1px;
  ${ util.fontSmoothing }
  transition: background ${ animations.mediumSpeed } ease-in-out,
              color ${ animations.mediumSpeed } ease-in-out,
              border ${ animations.mediumSpeed } ease-in-out,
              box-shadow ${ animations.mediumSpeed } ease-in-out,
              transform ${ animations.mediumSpeed } ease-in-out,
              opacity ${ animations.mediumSpeed } ease-in-out;
	// Input States
	::placeholder {
		color: ${ colors.lightTextColor };
	}
	${ state === 'disabled' ? `cursor: not-allowed;` : `` }
	${ state === 'loading' ? `cursor: wait;` : `` }
	${ state === 'error' ? `
		border-color: ${ colors.alert };
	` : `` }

	${ size === 'tiny' ? `
		height: ${ inputVars.tiny };
		${ util.responsiveStyles('font-size', 16, 14, 13, 13) }
	` : `` }
	${ size === 'small' ? `
		height: ${ inputVars.small };
	` : `` }
	${ size === 'large' ? `
		height: ${ inputVars.large };
	` : `` }

	${ label ? `${ util.responsiveStyles('padding-top', 18, 16, 16, 14) }` : `` }

`)

const StyledInput = styled.input`
	${ ({
		loading,
		error,
		success,
		disabled,
		size,
		icon,
		iconPosition,
		label,
		theme,
		style,
	}) => InputStyles(getState(loading, error, success, disabled), size, icon, iconPosition, theme, label) }
`

const InputIcon = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	pointer-events: none;
	overflow: hidden;
	${ ({ emojiIcon }) => emojiIcon && `
		padding-top: .3em;
		font-size: 18px;
		line-height: 1em;
	` }
	${ ({ iconPosition }) => iconPosition }: ${ inputVars.borderWidth };
	width: ${ inputVars.medium };
	height: ${ inputVars.medium };
	${ ({ size }) => size === 'tiny' ? `
		width: ${ inputVars.tiny };
		height: ${ inputVars.tiny };
	` : `` }
	${ ({ size }) => size === 'small' ? `
		width: ${ inputVars.small };
		height: ${ inputVars.small };
	` : `` }
	${ ({ size }) => size === 'large' ? `
		width: ${ inputVars.medium };
		height: ${ inputVars.large };
	` : `` }
	span, svg {
		display: block;
	}
`

const InputLabel = styled.label`
	position: absolute;
	font-style: inherit;
  font-size: inherit;
  font-family: inherit;
  font-weight: inherit;
  line-height: inherit;
	top: 0;
	left: ${ inputVars.borderWidth };
	height: 100%;
	display: flex;
	align-items: center;
	pointer-events: none;
	margin: 0 ${ inputVars.hPadding };
	color: ${ ({ error }) => error ? `${ colors.alert }` : `inherit` };
	transition: transform ${ animations.mediumSpeed } ease-in-out, color ${ animations.mediumSpeed } ease-in-out;
	transform-origin: 0% 50%;
	${ props => props.placeholder || props.value || props.focused ? `
		transform: translate3d(0, -10px, 0) scale(.75);
	` : `` }
	${ props => props.focused ? `
		color: ${ themes[props.theme].color };
	` : `` }
	${ ({ icon, iconPosition, size }) => icon ? `
		margin-${ iconPosition }: ${ inputVars.medium };
		${ size === 'tiny' ? `
			height: ${ inputVars.tiny };
			${ util.responsiveStyles('font-size', 16, 14, 13, 13) }
			margin-${ iconPosition }: ${ inputVars.tiny };
		` : `` }
		${ size === 'small' ? `
			height: ${ inputVars.small };
			margin-${ iconPosition }: ${ inputVars.small };
		` : `` }
		${ size === 'large' ? `
			height: ${ inputVars.large };
			margin-${ iconPosition }: ${ inputVars.large };
		` : `` }
	` : `` }
`

class Input extends Component {
	state = {
		focused: false,
		hasValue: false
	}

	renderIcon = (icon, size, iconPosition, theme) => {
		let renderedIcon = false
		let isEmojiIcon = isEmoji(icon)
		if (isEmojiIcon) {
			renderedIcon = <InputIcon size={size} iconPosition={iconPosition} theme={theme} emojiIcon>{icon}</InputIcon>
		} else if (typeof icon === 'string') {
			renderedIcon = <InputIcon size={size} iconPosition={iconPosition} theme={theme}><MaterialIcon size={this.props.size === 'tiny' && '18px'}>{icon}</MaterialIcon></InputIcon>
		} else {
			renderedIcon = <InputIcon size={size} iconPosition={iconPosition} theme={theme}>{icon}</InputIcon>
		}
		return renderedIcon
	}

	setFocus = status => {
		this.setState({ focused: status })
	}

	render () {
		const {
			value,
			type,
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
			size,
			placeholder,
			label,
			spellcheck,
			name,
			onChange
		} = this.props

		const { focused } = this.state

		return (
			<InputWrap className={className} theme={theme}>
				<StyledInput
					type={type}
					placeholder={placeholder}
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
					onFocus={() => this.setFocus(true)}
					onBlur={() => this.setFocus(false)} // needs work
					onChange={onChange}
					value={value}
					label={label}
					name={name}
					spellCheck={spellcheck}
				/>
				<ConditionalRender condition={label}>
					<InputLabel
						icon={icon}
						iconPosition={iconPosition}
						size={size}
						error={error}
						theme={theme}
						value={value}
						htmlFor={name}
						focused={focused}
						placeholder={placeholder}
						className={placeholder || value || focused ? 'focused' : 'unfocused' /* to select from styled component */}
					>
						{label}
					</InputLabel>
				</ConditionalRender>
				{icon && (
					this.renderIcon(icon, size, iconPosition, theme)
				)}
			</InputWrap>
		)
	}
}

Input.defaultProps = {
	type: 'text',
	iconPosition: 'left',
	theme: 'default',
	spellcheck: false,
	onChange: () => {}
}

export default Input
