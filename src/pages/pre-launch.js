import React, { Fragment } from 'react'
import styled from '@emotion/styled'
import SEO from 'src/components/SEO'
import { colors } from 'src/styles'

const Wrapper = styled.div`
	background: #F7F7F1;
	* {
		font-family: inherit !important;
	}
	padding: 4vw 0 7vw;
	circle,
	rect,
	input {
		fill: transparent !important;
		font-family: inherit !important;
	}
	input {
		border-radius: 0 !important;
	}
	img {
		width: 80% !important;
		max-width: 200px !important;
		margin: 0 auto;
	}
	button {
		border-radius: 0 !important;
		height: 16px;
		text-transform: uppercase;
		letter-spacing: .075em !important;
		font-size: 12px !important;
		background: ${ colors.maroon };
		&:hover {
			background: ${ colors.blue };
		}
	}
`

const PreLaunch = props => {
  return (
		<Fragment>
			<SEO
				title='Skin Profile'
				description='Complete your profile by filling out the information below!'
			/>
	    <Wrapper className="klaviyo-form-RRL8cp"/>
		</Fragment>
  )
}

export default PreLaunch
