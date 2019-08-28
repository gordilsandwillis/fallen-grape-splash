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
  height: 2px;
	background-color: ${ ({ color = colors.primaryColor }) => color };
  ${ mq.largeAndBelow } {
		width: ${ gridSettings.containerMediumMargins };
	}

	${ mq.mediumAndBelow } {
		width: ${ gridSettings.containerMediumMargins };
	}

	${ mq.smallAndBelow } {
		width: ${ gridSettings.containerSmallMargins }};
  }
`

const Hr = ({ color }) => (
	<HrContainer>
		<ShortHr color={color} />
		<ShortHr color={color} />
	</HrContainer>
)

export { Hr as default }
