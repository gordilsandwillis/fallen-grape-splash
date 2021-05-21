import React from "react"
import styled from "@emotion/styled"
import themes from "src/styles/themes"
import Button from "src/components/Button"
import { rgba } from "polished"

const ThemeWrapper = styled.div`
	${({ "data-theme": setTheme, isOverlay }) =>
		setTheme && setTheme !== "bgColor"
			? `
		background-color: ${isOverlay ? "transparent" : themes[setTheme].background};
		color: ${themes[setTheme].color};
		*::selection {
	    background: ${rgba(themes[setTheme].color, 0.9)};
	    color: ${themes[setTheme].background};
	  }
	`
			: ``}
`

const ThemeSelector = ({
	className,
	isOverlay,
	setTheme = "default",
	...rest
}) => (
	<ThemeWrapper
		data-theme={setTheme}
		className={className}
		isOverlay={isOverlay}
		{...rest}
	/>
)

export default ThemeSelector
