import { lighten, darken, rgba } from 'polished'

export const black = '#000'
export const white = '#fff'

// Site Specific Colors
export const yellow = '#FACC02'
export const red = '#FF4438'
export const green = '#00C771'

// Basic Colors
export const transparent = 'transparent'
export const currentcolor = 'currentcolor'
export const bgColor = white
export const mainColor = red
export const alert = red
export const notify = yellow
export const success = green
export const textColor = black
export const lightTextColor = rgba(textColor, 0.4)
export const lightGrey = '#F2F2F2'
export const hrColor = rgba(textColor, 0.1)

// Color Variations
export const mainColorDarken = darken(0.07, mainColor)
export const mainColorLighten = lighten(0.07, mainColor)

// Themes
export const themes = {
	default: {
		color: bgColor,
		background: mainColor,
		hoverColor: bgColor,
		hoverBackground: lighten(0.07, mainColor)
	},
	mainColor: {
		color: bgColor,
		background: mainColor,
		hoverColor: bgColor,
		hoverBackground: lighten(0.07, mainColor)
	},
	textColor: {
		color: bgColor,
		background: textColor,
		hoverColor: bgColor,
		hoverBackground: lighten(0.2, textColor)
	}
}