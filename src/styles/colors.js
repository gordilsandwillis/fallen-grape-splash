import { lighten, darken, rgba } from "polished"

export const black = "#000"
export const white = "#fff"

// Site Specific Colors
export const yellow = "#F2AA1E"
export const orange = "#F7880C" //"#F47521"
export const orange2 = "#F45617"
export const lightBrown = "#8C5E44"
export const green = "#35815A"
export const purple = "#D2BFFF"
export const offWhite = "#F4F1EC"
export const brown = "#442500"

// Basic Colors
export const transparent = "transparent"
export const currentcolor = "currentcolor"
export const bgColor = offWhite
export const mainColor = orange
export const alert = orange2
export const notify = yellow
export const success = green
export const textColor = brown
export const lightTextColor = rgba(textColor, 0.4)
export const lightGrey = offWhite
export const hrColor = textColor

// Color Variations
export const mainColorDarken = darken(0.07, mainColor)
export const mainColorLighten = lighten(0.07, mainColor)
