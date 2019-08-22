import MaterialIconsWoff from '../assets/fonts/icons/material-icons-regular.woff'
import MaterialIconsWoff2 from '../assets/fonts/icons/material-icons-regular.woff2'

import DinProLightWoff from '../assets/fonts/din/DINPro-Light.woff'
import DinProLightWoff2 from '../assets/fonts/din/DINPro-Light.woff2'

import DinProRegularWoff from '../assets/fonts/din/DINPro-Regular.woff'
import DinProRegularWoff2 from '../assets/fonts/din/DINPro-Regular.woff2'

import DinProMediumWoff from '../assets/fonts/din/DINPro-Medium.woff'
import DinProMediumWoff2 from '../assets/fonts/din/DINPro-Medium.woff2'

import DinProBoldWoff from '../assets/fonts/din/DINPro-Bold.woff'
import DinProBoldWoff2 from '../assets/fonts/din/DINPro-Bold.woff2'

import DinProBlackWoff from '../assets/fonts/din/DINPro-Black.woff'
import DinProBlackWoff2 from '../assets/fonts/din/DINPro-Black.woff2'

import ProximaNovaRegularWoff from '../assets/fonts/proximanova/proximanova-regular.woff'
import ProximaNovaRegularWoff2 from '../assets/fonts/proximanova/proximanova-regular.woff2'

import ProximaNovaBoldWoff from '../assets/fonts/proximanova/proximanova-bold.woff'
import ProximaNovaBoldWoff2 from '../assets/fonts/proximanova/proximanova-bold.woff2'

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

export const DinProLight = 'DinProLight'
export const DinProLightFont = fontFace(DinProLight, DinProLightWoff, DinProLightWoff2)

export const DinProRegular = 'DinProRegular'
export const DinProRegularFont = fontFace(DinProRegular, DinProRegularWoff, DinProRegularWoff2)

export const DinProMedium = 'DinProMedium'
export const DinProMediumFont = fontFace(DinProMedium, DinProMediumWoff, DinProMediumWoff2)

export const DinProBold = 'DinProBold'
export const DinProBoldFont = fontFace(DinProBold, DinProBoldWoff, DinProBoldWoff2)

export const DinProBlack = 'DinProBlack'
export const DinProBlackFont = fontFace(DinProBlack, DinProBlackWoff, DinProBlackWoff2)

export const ProximaNovaRegular = 'ProximaNovaRegular'
export const ProximaNovaRegularFont = fontFace(ProximaNovaRegular, ProximaNovaRegularWoff, ProximaNovaRegularWoff2)

export const ProximaNovaBold = 'ProximaNovaBold'
export const ProximaNovaBoldFont = fontFace(ProximaNovaBold, ProximaNovaBoldWoff, ProximaNovaBoldWoff2)
