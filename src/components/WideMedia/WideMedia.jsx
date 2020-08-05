import React from 'react'
import styled from '@emotion/styled'
import { rgba } from 'polished'
import Section from 'src/components/Section'
import Image from 'src/components/Image'
import Video from 'src/components/Video'
import Grid from 'src/components/Grid'
import Caption from 'src/components/Caption'
import { colors, mq } from 'src/styles'
import ScrollEntrance from 'src/components/ScrollEntrance'
import Column from 'src/components/Column'

const WideMediaWrap = styled.div`
	${ ({ setHeight }) => setHeight !== 'auto' ? `
		position: relative;
		z-index: 2;
		height: ${ setHeight };
	` : `` }
`

const MediaImage = styled(Image)`
	${ ({ setHeight }) => setHeight !== 'auto' ? `
		> div {
			height: ${ setHeight };
			position: relative;
		}
		img {
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	` : `` }
`

const MediaVideo = styled(Video)`
	${ ({ setHeight }) => setHeight !== 'auto' ? `
		> div {
			height: ${ setHeight };
			min-height: 40vw;
			position: relative;
		}
		video {
			position: absolute;
			top: 0;
			left: 0;
			object-fit: cover;
			width: 100%;
			height: 100%;
		}
	` : `` }
`

const CaptionOverlay = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 1em;
	z-index: 3;
	${ mq.mediumAndBelow } {
		position: relative;
		bottom: auto;
		top: 100%;
		z-index: 1;
		background: ${ colors.black };
		padding-top: 8px;
	}
`

const CaptionBlock = styled.div`
`

const OverlayWrapper = styled.div`
  position: absolute;
  z-index: 5;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: ${ ({ verticalPlacement }) => verticalPlacement || 'center' };
`

function getHorizontalPlacementGridValues ({ fullWidth, horizontalPlacement }) {
  if (!fullWidth) {
    return {
      left: {
        medium: '2 [8] 4',
        large: '2 [8] 4',
        larger: '2 [8] 4'
      },
      center: {
        medium: '2 [10] 2',
        large: '3 [8] 3',
        larger: '4 [6] 4'
      },
      right: {
        medium: '7 [5] 2',
        large: '7 [5] 2',
        larger: '7 [5] 2'
      }
    }[horizontalPlacement]
  } else {
    return {
      left: {
        medium: '1 [9] 4',
        large: '1 [9] 4',
        larger: '1 [9] 4'
      },
      center: {
        medium: '2 [10] 2',
        large: '3 [8] 3',
        larger: '4 [6] 4'
      },
      right: {
        medium: '7 [6] 1',
        large: '7 [6] 1',
        larger: '7 [5] 2'
      }
    }[horizontalPlacement]
  }
}

const WideMedia = ({
  media,
  width,
  theme,
  prevTheme,
  nextTheme,
  caption,
  height,
  overlayComponent,
  overlayPlacement,
  overlayTextAlignment = 'left',
  isFirstSection
}) => {
  if (!media) {
    return false
  }

  const fullWidth = width === 'fullWidth'

  const type = media[0].__typename === 'ContentfulVideo' ? 'video' : 'image'
  media = media[0]

  const heightValues = {
    auto: 'auto',
    fullHeight: '100vh',
    mediumHeight: '70vh',
    shortHeight: '50vh'
  }

  const [verticalPlacement, horizontalPlacement] = (overlayPlacement || 'center center').split(' ')
  const overlayGridSettings = getHorizontalPlacementGridValues({ fullWidth, horizontalPlacement })
  return (
    <Section
      setTheme={theme}
      nextTheme={nextTheme}
      prevTheme={prevTheme}
      padded={!fullWidth}
    >
      <WideMediaWrap setHeight={heightValues[height]}>
        <Grid small={fullWidth ? '[1]' : '1 [12] 1'}>
        {overlayComponent
          ? <OverlayWrapper verticalPlacement={verticalPlacement}>
            <Section padded>
              <Grid small={fullWidth ? '0 [12] 0' : '2 [10] 2'} {...overlayGridSettings}>
                <Column
                  items={overlayComponent.content}
                  type={overlayComponent.type}
                />
              </Grid>
            </Section>
          </OverlayWrapper>
          : ''
        }
          {type === 'image' ? (
            <MediaImage
              image={media.image}
              small={media.small}
              medium={media.medium}
              alt={media.description || media.title}
              setHeight={heightValues[height]}
              loading={isFirstSection ? 'eager' : 'lazy'}
              critical={!!isFirstSection}
            />
          ) : (
              <MediaVideo
                video={media.video}
                playing={true}
                loop={true}
                setHeight={heightValues[height]}
                posterImage={media.posterImage}
                autoplay={true}
              />
            )}
        </Grid>
      </WideMediaWrap>
        {caption && (
          <Grid small="1 [12] 1">
            <div>
              <CaptionBlock>
                <Caption>{caption}</Caption>
              </CaptionBlock>
            </div>
          </Grid>
        )}
    </Section>
  )
}

WideMedia.defaultProps = {
  width: 'margins',
  height: 'auto'
}

export default WideMedia
