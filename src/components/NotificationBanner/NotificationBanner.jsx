import React, { Component } from 'react'
import styled from '@emotion/styled'
import Collapse from 'src/components/Collapse'
import Button from 'src/components/Button'
import ThemeSelector from 'src/components/ThemeSelector'
import ContentfulRichText from 'src/components/ContentfulRichText'
import { typography } from 'src/styles'
import { themes } from 'src/styles/themes'
import { MdClose } from 'react-icons/md'

const NotificationCollapse = styled(Collapse)`
	position: relative;
`

const Wrapper = styled(ThemeSelector)`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	p {
		margin: 0;
		${ typography.bodySmall }
		font-weight: ${ typography.medium };
	}
`

const CloseButton = styled(Button)`
	position: absolute;
	top: 50%;
	right: 15px;
	margin-right: -11px;
	transform: translateY(-50%);
	color: inherit;
	background: transparent;
	border-color: transparent;
	&:hover {
		color: inherit;
		border-color: transparent;
		background: transparent;
		color: ${ ({ color }) => color };
	}
`

class NotificationBanner extends Component {
	render () {
		const { className, setTheme, text, closeBanner, collapsed } = this.props

		if (!text) {
			return false
		}

		let bannerColor = setTheme
		if (setTheme === null) {
			bannerColor = 'mainColor'
		}

		return (
			<NotificationCollapse collapsed={collapsed}>
				<Wrapper className={className} setTheme={bannerColor}>
					{text.json ? (
						<ContentfulRichText richText={text.json}/>
					) : <p>{text}</p> }
					<CloseButton color={themes[bannerColor].hoverColor} onClick={closeBanner} icon={<MdClose size="18"/>} shape="circle" size="tiny"/>
				</Wrapper>
		  </NotificationCollapse>
		)
	}
}

NotificationBanner.defaultProps = {
	setTheme: 'mainColor',
	collapsed: false
}

export default NotificationBanner
