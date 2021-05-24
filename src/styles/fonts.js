import MaterialIconsWoff from "../assets/fonts/icons/material-icons-regular.woff"
import MaterialIconsWoff2 from "../assets/fonts/icons/material-icons-regular.woff2"

import ArialNarrowWoff from "../assets/fonts/arial-narrow/ArialNarrow.woff"
import ArialNarrowWoff2 from "../assets/fonts/arial-narrow/ArialNarrow.woff2"

import RomieWoff from "../assets/fonts/romie/Romie-Regular.woff"
import RomieWoff2 from "../assets/fonts/romie/Romie-Regular.woff2"

export const fontFace = (
	fontName,
	woff,
	woff2,
	fontWeight = "normal",
	fontStyle = "normal"
) => `
	@font-face {
		font-family: '${fontName}';
		src:  url('${woff}') format('woff'),
					url('${woff2}') format('woff2');
		font-weight: ${fontWeight};
		font-style: ${fontStyle};
	}
`
export const MaterialIcons = "Material Icons"
export const MaterialIconsFont = fontFace(
	MaterialIcons,
	MaterialIconsWoff,
	MaterialIconsWoff2
)

export const ArialNarrow = "Arial Narrow"
export const ArialNarrowFont = fontFace(
	ArialNarrow,
	ArialNarrowWoff,
	ArialNarrowWoff2
)

export const Romie = "Romie"
export const RomieFont = fontFace(Romie, RomieWoff, RomieWoff2)
