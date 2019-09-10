import React from 'react'
import styled from '@emotion/styled'
import { mediaQueries as mq, gridSettings } from 'src/styles'

const ContentBlockStyles = styled.div`
	max-width: 2500px;
	margin: 0 auto;
  height: 100%;
  padding: ${ gridSettings.containerLargeMargins } 0;
	/* // TODO RESPONSIVE PADDING, AND EXTRA PADDING ON HUGE SCREENS */
  ${ mq.largeAndBelow } {
		padding: ${ gridSettings.containerMediumMargins } 0;
	}

	${ mq.mediumAndBelow } {
		padding: ${ gridSettings.containerMediumMargins } 0;
	}

	${ mq.smallAndBelow } {
    padding: ${ gridSettings.containerSmallMargins } 0;
	}
	h2 {
	margin-bottom: 50px;
		flex: 1;
	}
`

const ContentBlock = ({ children }) => (
	<ContentBlockStyles>
		{children}
	</ContentBlockStyles>
)

export default ContentBlock
