import React from 'react'
import styled from '@emotion/styled'
import { mediaQueries as mq, gridSettings } from 'src/styles'
import Container from 'src/components/Container'
import Link from 'src/components/Link'

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
	h3 {
	margin-bottom: 50px;
		flex: 1;
	}
`

const TitleRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: baseline;
`

const ContentBlock = ({ children }) => (
	<ContentBlockStyles>
		{children}
	</ContentBlockStyles>
)

export default ContentBlock
