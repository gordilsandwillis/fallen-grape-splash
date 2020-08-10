import * as mq from './mediaQueries'
import { rgba } from 'polished'
import * as colors from './colors'
import { responsiveStyles } from './util'

import './fonts'

// Place global Typography in this file
export const primaryFont = `Formular, -apple-system, sans-serif`
export const secondaryFont = `Caslon, -apple-system, serif`
export const codeFont = `monospaced, Formular Mono, monospaced`
export const light = 300
export const medium = 600
export const bold = 600

export const bodyLarge = `
	${ responsiveStyles('font-size', 24, 22, 20, 18) }
	line-height: 1.5em;
	font-family: ${ primaryFont };
	letter-spacing: -.02em;
	text-transform: none;
	font-weight: normal;
`
export const bodyMedium = `
	${ responsiveStyles('font-size', 20, 18, 18, 16) }
	line-height: 1.5em;
	font-family: ${ primaryFont };
	letter-spacing: -.02em;
	text-transform: none;
	font-weight: normal;
`
export const body = `
	${ responsiveStyles('font-size', 18, 16, 16, 14) }
	line-height: 1.6em;
	font-family: ${ primaryFont };
	letter-spacing: -.02em;
	text-transform: none;
	font-weight: normal;
`
export const bodySmall = `
	${ responsiveStyles('font-size', 16, 14, 14, 14) }
	line-height: 1.6em;
	font-family: ${ primaryFont };
	letter-spacing: -.02em;
	text-transform: none;
	font-weight: normal;
`

export const h1 = `
	${ responsiveStyles('font-size', 170, 130, 76, 52) }
	line-height: .85em;
	font-family: ${ secondaryFont };
	font-weight: normal;
	letter-spacing: 0;
	text-transform: uppercase;
`

export const h2 = `
	${ responsiveStyles('font-size', 140, 100, 68, 46) }
	line-height: .85em;
	font-family: ${ secondaryFont };
	font-weight: normal;
	letter-spacing: 0;
	text-transform: uppercase;
`

export const h3 = `
	${ responsiveStyles('font-size', 110, 80, 56, 38) }
	line-height: .85em;
	font-family: ${ secondaryFont };
	font-weight: normal;
	letter-spacing: 0;
	text-transform: uppercase;
`

export const h4 = `
	${ responsiveStyles('font-size', 90, 70, 48, 28) }
	line-height: .85em;
	font-family: ${ secondaryFont };
	font-weight: normal;
	letter-spacing: 0;
	text-transform: uppercase;
`

export const h5 = `
	${ responsiveStyles('font-size', 76, 64, 40, 24) }
	font-family: ${ secondaryFont };
	font-weight: normal;
	line-height: .85em;
	letter-spacing: 0;
	text-transform: uppercase;
`
export const h6 = `
	${ responsiveStyles('font-size', 16, 14, 14, 13) }
	font-family: ${ primaryFont };
	font-weight: ${ bold };
	line-height: 1.25em;
	letter-spacing: .1em;
	text-transform: uppercase;
`

export const blockquote = `
	${ bodyLarge }
	font-style: normal;
`

export const eyebrow = `
	${ h6 }
`

export const buttonStyle = `
	${ body }
	${ responsiveStyles('font-size', 14, 14, 14, 13) }
	font-weight: ${ bold };
	line-height: 1em;
`

export const storyNotes = `
	max-width: 750px;
	p {
		code {
			background: ${ rgba(colors.textColor, 0.1) };
			color: ${ colors.textColor };
			border-radius: 3px;
			padding: .05em .35em .15em;
			font-style: normal;
			font-family: ${ codeFont };
		}
	}
`
