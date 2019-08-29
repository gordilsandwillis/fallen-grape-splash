import React, { Component } from 'react'
import styled from '@emotion/styled'
import ReactPlayer from 'react-player'
import Grid from 'src/components/Grid'
import { colors, animations } from 'src/styles'
import PlayIcon from 'src/assets/images/play.svg'
const Wrapper = styled.div`
  position: relative;
  cursor: pointer;
  &:hover {
    svg {
      background-color: transparent;
      stroke: ${ colors.unofficialLightGrey };
    }
  }

`

const Overlay = styled.div`
	background: linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
	opacity: .3;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
`

const CoverImageContainer = styled.div`
${ ({ video }) => !video ? `z-index: 1; padding-bottom: 56.25%;` : `display: none;` }
position: relative;
display: flex;
width: 100%;
justify-content: center;
overflow: hidden;
height: 0;
`

const CoverImage = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${ ({ image }) => image }) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const ReactPlayerStyled = styled(ReactPlayer)`
  div {
  position: relative;
  ${ ({ video }) => video && `padding-bottom: 56.25%;` }
  height: 0;
  iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  }
  }
`

const PlayIconStyled = styled(PlayIcon)`
  height: 50px;
  width: 50px;
  stroke: white;
  transition: stroke ${ animations.mediumSpeed } ease-in-out;
  z-index: 6;
`

class VideoEmbed extends Component {
	constructor (props) {
		super(props)
		this.state = { video: false }
	}
	render () {
		const { url, gridSettings, coverImage } = this.props
		const { video } = this.state
		return (
			<Grid
				showOverlay={false}
				{...gridSettings}
			>
				<Wrapper onClick={() => this.setState({ video: true })}>
					<CoverImageContainer video={video} >
						<CoverImage image={coverImage}>
							<Overlay />
							<PlayIconStyled />
						</CoverImage>
					</CoverImageContainer>
					<ReactPlayerStyled controls playing={video} video={video} width={'100%'} height={'100%'} url={url} />
				</Wrapper>
			</Grid >
		)
	}
}

export { VideoEmbed as default }
