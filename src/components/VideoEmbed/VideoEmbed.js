import React, { Component } from 'react'
import styled from '@emotion/styled'
import ReactPlayer from 'react-player'
import Grid from 'src/components/Grid'
import { typography, colors, animations, gridSettings, mediaQueries as mq } from 'src/styles'
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

const PlayButton = styled.div`
  height: 50px;
  width: 50px;
  svg {
    stroke: white;
    transition: stroke ${ animations.mediumSpeed } ease-in-out;
  }
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
				showOverlay={true}
				{...gridSettings}
			>
				<Wrapper onClick={() => this.setState({ video: true })}>
					<CoverImageContainer video={video} >
						<CoverImage image={coverImage}>
							<PlayButton><PlayIcon /></PlayButton>
						</CoverImage>
					</CoverImageContainer>
					<ReactPlayerStyled controls playing={video} video={video} width={'100%'} height={'100%'} url={url} />
				</Wrapper>
			</Grid >
		)
	}
}

export { VideoEmbed as default }
