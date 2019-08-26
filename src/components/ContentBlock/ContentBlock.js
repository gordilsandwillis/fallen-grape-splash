import React from 'react'
import styled from '@emotion/styled'
import { mediaQueries as mq, gridSettings } from 'src/styles'

const ContentBlockStyles = styled.div`
	max-width: 2500px;
	margin: 0 auto;
  height: 100%;
  padding: ${ gridSettings.containerLargeMargins } 0;
  ${ mq.largeAndBelow } {
		padding: ${ gridSettings.containerMediumMargins } 0;
	}

	${ mq.mediumAndBelow } {
		padding: ${ gridSettings.containerMediumMargins } 0;
	}

	${ mq.smallAndBelow } {
    padding: ${ gridSettings.containerSmallMargins } 0;
	}

`

const ContentBlock = ({ className, ...rest }) => (
	<ContentBlockStyles className={className} {...rest} />
)

export default ContentBlock
