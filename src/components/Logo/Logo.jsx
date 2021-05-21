import React from "react"
import styled from "@emotion/styled"
import LogoSvg from "src/assets/images/logo.svg"
import GriffinSvg from "src/assets/images/griffin.svg"

const LogoWrapper = styled.div`
	height: auto;
	display: inlin-block;
	vertical-align: top;
	svg {
		display: inline-block;
		vertical-align: top;
		width: 100%;
		height: auto;
		color: inherit;
		* {
			fill: currentcolor;
		}
	}
`

const Logo = ({ className }) => (
	<LogoWrapper className={className}>
		<LogoSvg />
	</LogoWrapper>
)

export const Logomark = ({ className }) => (
	<LogoWrapper className={className}>
		<GriffinSvg />
	</LogoWrapper>
)

export default Logo
