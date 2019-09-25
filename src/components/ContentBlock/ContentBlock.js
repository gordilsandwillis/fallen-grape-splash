import React from 'react'
import styled from '@emotion/styled'
import { mediaQueries as mq, gridSettings } from 'src/styles'

const ContentBlockStyles = styled.div`
	max-width: 2350px;
	margin: 0 auto;
  height: 100%;
  padding: ${ gridSettings.containerLargeMargins } 0;
  ${ mq.extraLargeAndUp } {
		padding: 60px 0;
	}

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
