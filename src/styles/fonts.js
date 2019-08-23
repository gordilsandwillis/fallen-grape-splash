import MaterialIconsWoff from '../assets/fonts/icons/material-icons-regular.woff'
import MaterialIconsWoff2 from '../assets/fonts/icons/material-icons-regular.woff2'

import SuisseIntlLightWoff from '../assets/fonts/suisseintl/SuisseIntl-Light.woff'
import SuisseIntlLightWoff2 from '../assets/fonts/suisseintl/SuisseIntl-Light.woff2'

import SuisseIntlRegularWoff from '../assets/fonts/suisseintl/SuisseIntl-Regular.woff'
import SuisseIntlRegularWoff2 from '../assets/fonts/suisseintl/SuisseIntl-Regular.woff2'

import SuisseIntlSemiBoldWoff from '../assets/fonts/suisseintl/SuisseIntl-SemiBold.woff'
import SuisseIntlSemiBoldWoff2 from '../assets/fonts/suisseintl/SuisseIntl-SemiBold.woff2'

import LyonDisplayLightWoff from '../assets/fonts/lyondisplay/LyonDisplay-Light.woff'
import LyonDisplayLightWoff2 from '../assets/fonts/lyondisplay/LyonDisplay-Light.woff2'

export const fontFace = (fontName, woff, woff2, fontWeight = 'normal') => `
	@font-face {
		font-family: '${ fontName }';
		src:  url('${ woff }') format('woff'),
					url('${ woff2 }') format('woff2');
		font-weight: ${ fontWeight };
		font-style: normal;
	}
`
export const MaterialIcons = 'Material Icons'
export const MaterialIconsFont = fontFace(MaterialIcons, MaterialIconsWoff, MaterialIconsWoff2)

export const SuisseIntlLight = 'SuisseIntlLight'
export const SuisseIntlLightFont = fontFace(SuisseIntlLight, SuisseIntlLightWoff, SuisseIntlLightWoff2)

export const SuisseIntlRegular = 'SuisseIntlRegular'
export const SuisseIntlRegularFont = fontFace(SuisseIntlRegular, SuisseIntlRegularWoff, SuisseIntlRegularWoff2)

export const SuisseIntlSemiBold = 'SuisseIntlRegular'
export const SuisseIntlSemiBoldFont = fontFace(SuisseIntlSemiBold, SuisseIntlSemiBoldWoff, SuisseIntlSemiBoldWoff2)

export const LyonDisplayLight = 'LyonDisplayLight'
export const LyonDisplayLightFont = fontFace(LyonDisplayLight, LyonDisplayLightWoff, LyonDisplayLightWoff2)
