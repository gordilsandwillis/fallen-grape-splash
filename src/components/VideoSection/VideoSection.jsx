import React, { Component, Fragment } from 'react'
import styled from '@emotion/styled'
import { Transition } from 'react-transition-group'
import { colors, typography, animations, mediaQueries as mq } from 'src/styles'
import ReactPlayer from 'react-player'

import { MdPlayArrow } from 'react-icons/md'

import Section from 'src/components/Section'
import Image from 'src/components/Image'
import ScrollEntrance from 'src/components/ScrollEntrance'
import Video from 'src/components/Video'

const Wrapper = styled(ScrollEntrance)``

class VideoSection extends Component {

	render () {
		const { eyebrow, title, coverImage, theme, prevTheme, nextTheme, url, fullWidth } = this.props

		if (!url) {
			return false
		}

		return (
			<Section theme={theme} prevTheme={prevTheme} nextTheme={nextTheme}>
				<Wrapper>
					<Video
						coverImage={coverImage}
						url={url}
					/>
				</Wrapper>
			</Section>
		)
	}
}

VideoSection.defaultProps = {
	fullWidth: false
}

export default VideoSection
