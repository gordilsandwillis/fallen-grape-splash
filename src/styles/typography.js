import * as mq from './mediaQueries'

import {
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
	${ responsiveStyles('font-size', 18, 14, 14, 18) }
	${ responsiveStyles('line-height', 21, 21, 21, 24) }
	font-family: ${ bodyFontFamilyRegular };
`
export const bodyLight = `
	${ responsiveStyles('font-size', 18, 14, 14, 18) }
	letter-spacing: 0.33px;
	line-height: 1.6;
	font-family: ${ bodyFontFamilyLight };
`

export const bodyBold = `
${ responsiveStyles('font-size', 18, 14, 14, 18) }
${ responsiveStyles('line-height', 21, 21, 21, 24) }
font-family: ${ bodyFontFamilyBold };
`

export const h1 = `
	${ responsiveStyles('font-size', 60, 48, 44, 38) }
	font-family: ${ titleFontFamily };
	font-weight: lighter;
	letter-spacing: ${ -10 / 1000 }em;
	line-height: 1.2;
`

export const h2 = `
	${ responsiveStyles('font-size', 30, 24, 24, 28) }
	${ responsiveStyles('line-height', 30, 30, 30, 36) }
	${ responsiveStyles('letter-spacing', 20 / 1000, 20 / 1000, 20 / 1000, -20 / 1000) }
	font-family: ${ bodyFontFamilyLight };
`

export const h3 = `
	${ responsiveStyles('font-size', 14, 14, 14, 18) }
	letter-spacing: ${ 20 / 1000 }em;
	font-family: ${ bodyFontFamilyRegular };
	font-weight: 500;
`

export const h4 = `
${ responsiveStyles('font-size', 20, 20, 18, 18) }
font-family: ${ bodyFontFamilyRegular };
line-height: 1.3333;
letter-spacing: 0.33px;

`

export const h5 = `
	${ responsiveStyles('font-size', 20, 20, 18, 18) }
	font-family: ${ bodyFontFamilyRegular };
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
	${ responsiveStyles('font-size', 18, 14, 14, 18) }
	font-family: ${ bodyFontFamilyRegular };
	line-height: ${ 16 / 14 };
	letter-spacing: ${ 20 / 1000 }em;
  text-transform: uppercase;
  padding: 0 2em 1px;
`

export const footer = `
	${ responsiveStyles('font-size', 14, 10, 10, 12) }
	${ responsiveStyles('line-height', 18, 12, 12, 14) }
	letter-spacing: ${ 20 / 1000 }em;
	font-family: ${ bodyFontFamilyRegular };
`

export const h2Special = `
	${ responsiveStyles('font-size', 30, 24, 24, 22) }
	${ responsiveStyles('line-height', 30, 30, 30, 30) }
	${ responsiveStyles('letter-spacing', 20 / 1000, 20 / 1000, 20 / 1000, -20 / 1000) }
	font-family: ${ bodyFontFamilyLight };
`
