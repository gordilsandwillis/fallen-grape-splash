import MaterialIconsWoff from '../assets/fonts/icons/material-icons-regular.woff'
import MaterialIconsWoff2 from '../assets/fonts/icons/material-icons-regular.woff2'

import FormularWoff from '../assets/fonts/formular/formular-regular.woff'
import FormularWoff2 from '../assets/fonts/formular/formular-regular.woff2'

import FormularLightWoff from '../assets/fonts/formular/formular-light.woff'
import FormularLightWoff2 from '../assets/fonts/formular/formular-light.woff2'

import FormularMonoWoff from '../assets/fonts/formular/formular-mono.woff'
import FormularMonoWoff2 from '../assets/fonts/formular/formular-mono.woff2'

// TBD — Add Real Formular Bold Font
import FormularBoldWoff from '../assets/fonts/formular/formular-bold.woff'
import FormularBoldWoff2 from '../assets/fonts/formular/formular-bold.woff2'

import CaslonWoff from '../assets/fonts/caslon/caslon-rr-extra-cond.woff'
import CaslonWoff2 from '../assets/fonts/caslon/caslon-rr-extra-cond.woff2'

export const fontFace = (fontName, woff, woff2, fontWeight = 'normal', fontStyle = 'normal') => `
	@font-face {
		font-family: '${ fontName }';
		src:  url('${ woff }') format('woff'),
					url('${ woff2 }') format('woff2');
		font-weight: ${ fontWeight };
		font-style: ${ fontStyle };
	}
`
export const MaterialIcons = 'Material Icons'
export const MaterialIconsFont = fontFace(MaterialIcons, MaterialIconsWoff, MaterialIconsWoff2)

export const Formular = 'Formular'
export const FormularFont = fontFace(Formular, FormularWoff, FormularWoff2)
export const FormularLightFont = fontFace(Formular, FormularLightWoff, FormularLightWoff2, '300')
export const FormularBoldFont = fontFace(Formular, FormularBoldWoff, FormularBoldWoff2, '600')
export const FormularMonoFont = fontFace('Formular Mono', FormularMonoWoff, FormularMonoWoff2)

export const Caslon = 'Caslon'
export const CaslonFont = fontFace(Caslon, CaslonWoff, CaslonWoff2)
