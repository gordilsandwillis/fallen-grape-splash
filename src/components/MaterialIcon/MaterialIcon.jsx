import React from 'react'
import styled from '@emotion/styled'
import { helpers } from 'src/styles'

const Icon = styled.span`
	font-family: "Material Icons";
	font-weight: normal;
	font-style: normal;
	display: inline-block;
	line-height: 1;
	text-transform: none;
	letter-spacing: normal;
	word-wrap: normal;
	white-space: nowrap;
	direction: ltr;
	${ helpers.fontSmoothing }
	font-feature-settings: 'liga';
	color: inherit;
	// 24px is the Google prefered icon size
	font-size: ${ ({ size }) => (size ? `${ size }` : `24px`) };
`

const MaterialIcon = ({ children, size }) => <Icon size={size}>{children}</Icon>

export default MaterialIcon
