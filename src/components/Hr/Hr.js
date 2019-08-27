import React from 'react'
import styled from '@emotion/styled'
import { typography, colors, gridSettings, mediaQueries as mq } from 'src/styles'

const HrContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 0;
`

const ShortHr = styled.div`
  width: ${ gridSettings.containerLargeMargins };
  ${ mq.largeAndBelow } {
		width: ${ gridSettings.containerMediumMargins };
	}

	${ mq.mediumAndBelow } {
		width: ${ gridSettings.containerMediumMargins };
	}

	${ mq.smallAndBelow } {
		width: ${ gridSettings.containerSmallMargins }};
  }
	height: 2px;
	background-color: ${ ({ color = colors.primaryColor }) => color };
	${ typography.responsiveStyles('margin-top', 18, 18, 18, 8) }
	${ typography.responsiveStyles('margin-bottom', 34, 30, 26, 16) }
`

const Hr = ({ color }) => (
	<HrContainer>
		<ShortHr color={color} />
		<ShortHr color={color} />
	</HrContainer>
)

export { Hr as default }
