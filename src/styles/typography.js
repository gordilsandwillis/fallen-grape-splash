import * as mq from './mediaQueries'

import {
	MaterialIcons,
	DinProLight,
	DinProRegular,
	DinProMedium,
	DinProBold,
	DinProBlack,
	ProximaNovaRegular,
	ProximaNovaBold
} from './fonts'

// Place global Typography in this file
export const titleFontFamily = `${ DinProRegular }, -apple-system, Helvetica, sans-serif`
export const titleFontFamilyBold = `${ DinProBold }, -apple-system, Helvetica, sans-serif`

// supply a different font family if necessary
export const bodyFontFamily = `${ DinProRegular }, -apple-system, Helvetica, sans-serif`
export const bodyFontFamilyBold = `${ DinProBold }, -apple-system, Helvetica, sans-serif`

export const smallFontFamily = `${ ProximaNovaRegular }, -apple-system, Helvetica, sans-serif`
export const smallFontFamilyBold = `${ ProximaNovaBold }, -apple-system, Helvetica, sans-serif`

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
	font-family: ${ bodyFontFamily };
`
export const bodySmall = `
	${ responsiveStyles('font-size', 18, 14, 12, 12) }
	letter-spacing: 0.33px;
	line-height: 1.6;
	font-family: ${ smallFontFamily };
`

export const h1 = `
	${ responsiveStyles('font-size', 66, 60, 30, 30) }
	font-family: ${ titleFontFamilyBold };
	font-weight: normal;
	letter-spacing: 0.33px;
	line-height: 1.2;
`

export const h2 = `
	${ responsiveStyles('font-size', 50, 50, 30, 30) }
	font-family: ${ titleFontFamilyBold };
	font-weight: normal;
	line-height: 1.125;
	letter-spacing: 0.33px;
`

export const h3 = `
	${ responsiveStyles('font-size', 40, 40, 20, 20) }
	font-family: ${ titleFontFamilyBold };
	font-weight: normal;
	line-height: 1.16667;
	letter-spacing: 0.33px;
`

export const h4 = `
	${ responsiveStyles('font-size', 26, 26, 18, 18) }
	font-family: ${ titleFontFamilyBold };
	font-weight: 500;
	line-height: 1.25;
	letter-spacing: 0.33px;
`

export const h5 = `
	${ responsiveStyles('font-size', 20, 20, 16, 16) }
	font-family: ${ titleFontFamilyBold };
	font-weight: 500;
	line-height: 1.3333;
	letter-spacing: 0.33px;
`
export const h6 = `
	${ responsiveStyles('font-size', 13, 13, 13, 13) }
	font-family: ${ titleFontFamilyBold };
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
	${ responsiveStyles('font-size', 18, 14, 14, 14) }
	font-family: ${ bodyFontFamilyBold };
	font-weight: bold;
	line-height: ${ 16 / 14 };
	letter-spacing: ${ 1.75 / 14 }em;
	text-transform: uppercase;
`

export const small = `
	${ responsiveStyles('font-size', 13, 13, 13, 13) }
	font-family: ${ smallFontFamily };
	line-height: ${ 26 / 14 };
	letter-spacing: ${ 0.33 / 14 }em;
`
