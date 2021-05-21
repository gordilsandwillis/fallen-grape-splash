import * as colors from "./colors"
import { lighten, darken, rgba } from "polished"

// Themes (ThemeSelector Component)
export const themes = {
	default: {
		color: colors.textColor,
		background: colors.bgColor,
		hoverColor: colors.mainColor,
		hoverBackground: darken(0.07, colors.mainColor),
	},
	orange: {
		color: colors.offWhite,
		background: colors.orange,
		hoverColor: colors.mainColor,
		hoverBackground: darken(0.07, colors.mainColor),
	},
}

// Button Themes
export const buttonThemes = {
	// default: {
	// 	color: colors.orange,
	// 	background: colors.textColor,
	// 	hoverColor: colors.textColor,
	// 	hoverBackground: colors.offWhite,
	// 	borderHoverColor: colors.offWhite,
	// },
	default: {
		color: colors.textColor,
		background: "transparent",
		borderColor: colors.textColor,
		hoverColor: colors.offWhite,
		hoverBackground: colors.textColor,
		borderHoverColor: colors.textColor,
	},
	transparent: {
		color: colors.textColor,
		background: "transparent",
		hoverColor: colors.orange,
		hoverBackground: "transparent",
	},
}

// Input Themes
export const inputThemes = {
	default: {
		color: colors.textColor,
		background: "transparent",
		accentColor: colors.mainColor,
		hoverColor: colors.textColor,
		borderColor: colors.textColor,
		hoverBorderColor: colors.textColor,
		focusBorderColor: colors.mainColor,
		hoverBackground: "transparent",
		focusBackground: "transparent",
	},
}

export default themes
