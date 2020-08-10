import * as colors from './colors'
import { lighten, darken, rgba } from 'polished'

// Themes (ThemeSelector Component)
export const themes = {
	default: {
		color: colors.textColor,
		background: colors.bgColor,
		hoverColor: colors.mainColor,
		hoverBackground: darken(0.07, colors.mainColor)
	},
	offWhite: {
		color: colors.textColor,
		background: colors.lightGrey,
		hoverColor: colors.textColor,
		hoverBackground: darken(0.07, colors.lightGrey)
	},
	brown: {
		color: colors.bgColor,
		background: colors.textColor,
		hoverColor: colors.bgColor,
		hoverBackground: lighten(0.2, colors.textColor)
	},
	green: {
		color: colors.lightGreen,
		background: colors.green,
		hoverColor: colors.offWhite,
		hoverBackground: lighten(0.2, colors.textColor)
	},
	lightGreen: {
		color: colors.green,
		background: colors.lightGreen,
		hoverColor: colors.green,
		hoverBackground: lighten(0.2, colors.textColor)
	},
	pink: {
		color: colors.maroon,
		background: colors.pink,
		hoverColor: colors.textColor,
		hoverBackground: lighten(0.2, colors.textColor)
	},
	yellow: {
		color: colors.green,
		background: colors.yellow,
		hoverColor: colors.bgColor,
		hoverBackground: lighten(0.2, colors.textColor)
	},
	maroon: {
		color: colors.blue,
		background: colors.maroon,
		hoverColor: colors.offWhite,
		hoverBackground: lighten(0.2, colors.textColor)
	},
	blue: {
		color: colors.maroon,
		background: colors.blue,
		hoverColor: colors.maroon,
		hoverBackground: lighten(0.2, colors.textColor)
	}
}

// Button Themes
export const buttonThemes = {
	default: {
		color: colors.offWhite,
		background: colors.textColor,
		hoverColor: colors.bgColor,
		hoverBackground: lighten(0.07, colors.mainColor)
	},
	black: {
		color: colors.bgColor,
		background: colors.black,
		hoverColor: colors.mainColor,
		hoverBackground: darken(0.07, colors.mainColor)
	},
	white: {
		color: colors.textColor,
		background: colors.white,
		hoverColor: colors.mainColor,
		hoverBackground: colors.lightGrey
	},
	buttonDefault: {
		color: colors.bgColor,
		background: colors.mainColor,
		hoverColor: colors.bgColor,
		hoverBackground: lighten(0.07, colors.mainColor)
	},
	lightGrey: {
		color: colors.textColor,
		background: colors.lightGrey,
		hoverColor: colors.textColor,
		hoverBackground: darken(0.07, colors.lightGrey)
	},
	mainColor: {
		color: colors.bgColor,
		background: colors.mainColor,
		hoverColor: colors.bgColor,
		hoverBackground: lighten(0.07, colors.mainColor)
	},
	textColor: {
		color: colors.bgColor,
		background: colors.textColor,
		hoverColor: colors.bgColor,
		hoverBackground: lighten(0.2, colors.textColor)
	}
}

// Input Themes
export const inputThemes = {
	default: {
		color: colors.bgColor,
		background: colors.transparent,
		accentColor: colors.bgColor,
		hoverColor: colors.bgColor,
		borderColor: colors.lightTextColor,
		hoverBorderColor: colors.textColor,
		focusBorderColor: colors.mainColor,
		hoverBackground: colors.transparent,
		focusBackground: colors.transparent,
	}
}

export default themes
