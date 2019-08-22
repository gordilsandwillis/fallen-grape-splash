import * as typography from './typography'

export const containerStyles = `
	width: 90%;
	margin-left: auto;
	margin-right: auto;
`

export const verticalMargins = `
	${ typography.responsiveStyles('margin-top', 120, 90, 70, 40) }
	${ typography.responsiveStyles('margin-bottom', 120, 90, 70, 40) }
`

export const verticalPadding = `
	${ typography.responsiveStyles('padding-top', 120, 90, 70, 40) }
	${ typography.responsiveStyles('padding-bottom', 120, 90, 70, 40) }
`

export const verticalPaddingHalf = `
	${ typography.responsiveStyles('padding-top', 120, 90, 70, 40) }
	${ typography.responsiveStyles('padding-bottom', 120, 90, 70, 40) }
`
