import * as mq from './mediaQueries'

import {
	MaterialIcons, // TODO
	SuisseIntlLight,
	SuisseIntlRegular,
	SuisseIntlSemiBold,
	LyonDisplayLight
} from './fonts'

// Place global Typography in this file
export const titleFontFamily = `${ LyonDisplayLight }, -apple-system, Helvetica, sans-serif`

// supply a different font family if necessary
export const bodyFontFamilyLight = `${ SuisseIntlLight }, -apple-system, Helvetica, sans-serif`
export const bodyFontFamilyRegular = `${ SuisseIntlRegular }, -apple-system, Helvetica, sans-serif`
export const bodyFontFamilyBold = `${ SuisseIntlSemiBold }, -apple-system, Helvetica, sans-serif`

export const linearInterpolation = (maxInput, minInput, maxWidth, minWidth) => {
	let slope = (maxInput - minInput) / (maxWidth - minWidth)
	let yInterceptor = minInput - slope * minWidth
	return `calc(${ slope * 100 }vw ${ yInterceptor < 0 ? '-' : '+' } ${ yInterceptor.toFixed(2) }px)`
}

export const responsiveStyles = (styleType, large, medium, small, tiny) => `
	${ mq.largerAndUp } {
		${ styleType }: ${ linearInterpolation(medium, large, mq.largerBreakpoint + 1, mq.extraExtraLargeBreakpoint) };
	}
	${ mq.largerAndBelow } {
		${ styleType }: ${ linearInterpolation(small, medium, mq.mediumBreakpoint + 1, mq.largerBreakpoint) };
	}
	${ mq.mediumAndBelow } {
		${ styleType }: ${ linearInterpolation(tiny, small, mq.tinyBreakpoint, mq.mediumBreakpoint) };
	}
`

export const body = `
	${ responsiveStyles('font-size', 22, 18, 18, 16) }
	letter-spacing: 0.33px;
	line-height: 1.6;
	font-family: ${ bodyFontFamilyRegular };
`
export const bodyLight = `
	${ responsiveStyles('font-size', 18, 14, 12, 12) }
	letter-spacing: 0.33px;
	line-height: 1.6;
	font-family: ${ bodyFontFamilyLight };
`

export const bodyBold = `
	${ responsiveStyles('font-size', 13, 13, 13, 13) }
	font-family: ${ bodyFontFamilyBold };
	line-height: ${ 26 / 14 };
	letter-spacing: ${ 0.33 / 14 }em;
`

export const h1 = `
	${ responsiveStyles('font-size', 60, 60, 42, 42) }
	font-family: ${ titleFontFamily };
	font-weight: normal;
	letter-spacing: 0.33px;
	line-height: 1.2;
`

export const h2 = `
	${ responsiveStyles('font-size', 65, 50, 30, 30) }
	font-family: ${ titleFontFamily };
	font-weight: normal;
	line-height: 1.125;
	letter-spacing: 0.33px;
`

export const h3 = `
	${ responsiveStyles('font-size', 40, 40, 20, 20) }
	font-family: ${ titleFontFamily };
	font-weight: normal;
	line-height: 1.16667;
	letter-spacing: 0.33px;
`

export const h4 = `
	${ responsiveStyles('font-size', 26, 26, 18, 18) }
	font-family: ${ titleFontFamily };
	font-weight: 500;
	line-height: 1.25;
	letter-spacing: 0.33px;
`

export const h5 = `
	${ responsiveStyles('font-size', 20, 20, 16, 16) }
	font-family: ${ titleFontFamily };
	font-weight: 500;
	line-height: 1.3333;
	letter-spacing: 0.33px;
`
export const h6 = `
	${ responsiveStyles('font-size', 13, 13, 13, 13) }
	font-family: ${ titleFontFamily };
	font-weight: bold;
	line-height: 1.1482;
	letter-spacing: 1.75px;
	text-transform: uppercase;
`

export const caption = `
	${ responsiveStyles('font-size', 20, 16, 16, 14) }
	line-height: 1.75;
	letter-spacing: 0.33px;
`

export const button = `
	${ responsiveStyles('font-size', 20, 18, 16, 14) }
	font-family: ${ bodyFontFamilyRegular };
	line-height: ${ 16 / 14 };
	letter-spacing: ${ 1.5 / 14 }em;
  text-transform: uppercase;
  padding: 0 2em 1px;
`

export const footer = `
	${ responsiveStyles('font-size', 14, 14, 14, 14) }
	letter-spacing: 0.33px;
	line-height: 1.6;
	font-family: ${ bodyFontFamilyRegular };
`
