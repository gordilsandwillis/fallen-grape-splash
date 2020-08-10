import { lighten, darken, rgba } from 'polished'

export const black = '#000'
export const white = '#fff'

// Site Specific Colors
export const yellow = '#B2A15B'
export const red = '#D14F26'
export const maroon = '#8C291D'
export const green = '#425C3D'
export const blue = '#668EA3'
export const lightGreen = '#C2CCB5'
export const offWhite = '#F2F2ED'
export const pink = '#ECD0C0'
export const beige = '#E4DCD0'
export const brown = '#636357'

// Basic Colors
export const transparent = 'transparent'
export const currentcolor = 'currentcolor'
export const bgColor = white
export const mainColor = brown
export const alert = red
export const notify = yellow
export const success = green
export const textColor = brown
export const lightTextColor = rgba(textColor, 0.4)
export const lightGrey = offWhite
export const hrColor = textColor

// Color Variations
export const mainColorDarken = darken(0.07, mainColor)
export const mainColorLighten = lighten(0.07, mainColor)
