import React from 'react'
import styled from '@emotion/styled'
import { colors, gridSettings, mediaQueries as mq } from 'src/styles'

const HrContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  left: 0;
`

const HrStyles = styled.div`
  height: 2px;
	background-color: ${ ({ color = colors.primaryColor }) => color };
`

const FullHr = styled(HrStyles)`
	width: 100%;
`

const ShortHr = styled(HrStyles)`
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
`

const Hr = ({ color, full }) => (
	<HrContainer>
		{full
			? <FullHr color={color} />
			: <React.Fragment>
				<ShortHr color={color} />
				<ShortHr color={color} />
			</React.Fragment>
		}
	</HrContainer>
)

export { Hr as default }
