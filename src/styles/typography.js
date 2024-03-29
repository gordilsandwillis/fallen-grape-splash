import * as mq from "./mediaQueries"
import { rgba } from "polished"
import * as colors from "./colors"
import { responsiveStyles } from "./util"

import "./fonts"

// Place global Typography in this file
export const primaryFont = `Arial Narrow, -apple-system, sans-serif`
export const secondaryFont = `Romie, serif`
export const codeFont = `monospaced, Formular Mono, monospaced`
export const light = "normal"
export const medium = "normal"
export const bold = "normal"

export const body = `
	${responsiveStyles("font-size", 30, 26, 24, 22)}
	line-height: 1.3em;
	font-family: ${primaryFont};
	letter-spacing: -.02em;
	font-weight: normal;
`

export const bodyLarge = `
	${body}
	text-transform: uppercase;
	line-height: 1.2em;
	${responsiveStyles("font-size", 22, 20, 20, 18)}
`
export const bodyMedium = `
	${body}
	text-transform: uppercase;
	line-height: 1.2em;
	${responsiveStyles("font-size", 34, 26, 23, 22)}
`
export const bodySmall = `
	${body}
	text-transform: uppercase;
	line-height: 1.2em;
	${responsiveStyles("font-size", 22, 20, 17, 15)}
`

export const h1 = `
	${responsiveStyles("font-size", 140, 100, 70, 60)}
	line-height: .85em;
	font-family: ${secondaryFont};
	font-weight: normal;
	letter-spacing: 0;
	text-transform: uppercase;
`

export const h2 = `
	${responsiveStyles("font-size", 100, 60, 60, 44)}
	line-height: .85em;
	font-family: ${secondaryFont};
	font-weight: normal;
	letter-spacing: 0;
	text-transform: uppercase;
`

export const h3 = `
	${responsiveStyles("font-size", 110, 80, 56, 38)}
	line-height: .85em;
	font-family: ${secondaryFont};
	font-weight: normal;
	letter-spacing: 0;
	text-transform: uppercase;
`

export const h4 = `
	${responsiveStyles("font-size", 90, 70, 48, 28)}
	line-height: .85em;
	font-family: ${primaryFont};
	font-weight: normal;
	letter-spacing: 0;
	text-transform: uppercase;
`

export const h5 = `
	${responsiveStyles("font-size", 76, 64, 40, 24)}
	font-family: ${primaryFont};
	font-weight: normal;
	line-height: .85em;
	letter-spacing: 0;
	text-transform: uppercase;
`
export const h6 = `
	${responsiveStyles("font-size", 16, 14, 14, 13)}
	font-family: ${primaryFont};
	font-weight: normal;
	line-height: 1.25em;
	letter-spacing: 0;
	text-transform: uppercase;
`

export const blockquote = `
	${bodyLarge}
	font-style: normal;
`

export const eyebrow = `
	${h6}
`

export const buttonStyle = `
	${bodySmall}
	font-weight: normal;
	line-height: 1em;
`

export const storyNotes = `
	max-width: 750px;
	p {
		code {
			background: ${rgba(colors.textColor, 0.1)};
			color: ${colors.textColor};
			border-radius: 3px;
			padding: .05em .35em .15em;
			font-style: normal;
			font-family: ${codeFont};
		}
	}
`
