import React from 'react'
import styled from '@emotion/styled'
import { mediaQueries as mq, gridSettings } from 'src/styles'

const ContainerStyles = styled.div`
	max-width: 2500px;
	width: calc(100% - ${ gridSettings.containerLargeMargins } * 2);
	margin: 0 auto;
  height: 100%;

	${ mq.largeAndBelow } {
		width: calc(100% - ${ gridSettings.containerMediumMargins } * 2);
	}

	${ mq.mediumAndBelow } {
		width: calc(100% - ${ gridSettings.containerMediumMargins } * 2);
	}

	${ mq.smallAndBelow } {
		width: calc(100% - ${ gridSettings.containerSmallMargins } * 2);
	}
`

const Container = ({ className, ...rest }) => (
	<ContainerStyles className={className} {...rest} />
)

export default Container
