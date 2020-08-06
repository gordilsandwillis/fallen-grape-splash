import React from 'react'
import { storiesOf } from '@storybook/react'
import WideMedia from './WideMedia'
import * as mock from 'src/mock'
import * as mockCopy from 'src/mock/copy'
import { boolean, optionsKnob } from '@storybook/addon-knobs'
import themes from 'src/styles/themes'

let themeOptions = {}
Object.keys(themes).map(theme => {
  const key = theme.toString()
  themeOptions[key] = theme
})

const widthOptions = {
  margins: 'margins',
  fullWidth: 'fullWidth'
}

const heightOptions = {
  auto: 'auto',
  fullHeight: 'fullHeight',
  mediumHeight: 'mediumHeight',
  shortHeight: 'shortHeight'
}

const overlayPlacementOptions = {
  'top left': 'top left',
  'top center': 'top center',
  'top right': 'top right',
  'center left': 'center left',
  'center center': 'center center',
  'center right': 'center right',
  'bottom left': 'bottom left',
  'bottom center': 'bottom center',
  'bottom right': 'bottom right',
}

const overlayAlignmentOptions = {
  left: 'left',
  center: 'center',
  right: 'right'
}

const stories = storiesOf(`Blocks/Wide Media`, module)
stories.add(`Default`, () => (
  <WideMedia
    theme={optionsKnob('Theme', themeOptions, 'default', { display: 'select' })}
    media={[
      {
        __typename: 'ContentfulImage',
        image: mock.Placeholder169
      }
    ]}
    caption="caption"
    width={optionsKnob('Width', widthOptions, 'default', { display: 'select' })}
    height={optionsKnob('Height', heightOptions, 'auto', { display: 'select' })}
  />
))
  .add(`Overlay Component`, () => (
    <WideMedia
      theme={optionsKnob('Theme', themeOptions, 'default', { display: 'select' })}
      media={[
        {
          __typename: 'ContentfulImage',
          image: mock.Placeholder169
        }
      ]}
      overlayComponent={{
        __typename: 'ContentfulColumn',
        content: [
          {
            __typename: 'ContentfulText',
            eyebrow: 'eyebrow',
            headline: 'FiftyFifty',
            text: mockCopy.lorem
          },
        ]
      }}
      overlayPlacement={optionsKnob('Overlay Placement', overlayPlacementOptions, 'center center', { display: 'select' })}
      overlayTextAlignment={optionsKnob('Overlay Text Alignment', overlayAlignmentOptions, 'center', { display: 'select' })}
      width={optionsKnob('Width', widthOptions, 'default', { display: 'select' })}
      height={optionsKnob('Height', heightOptions, 'auto', { display: 'select' })}
    />
  ))
  .add(`HTML5 Video`, () => (
    <WideMedia
      theme={optionsKnob('Theme', themeOptions, 'default', { display: 'select' })}
      loop={true}
      width={optionsKnob('Width', widthOptions, 'default', { display: 'select' })}
      height={optionsKnob('Height', heightOptions, 'auto', { display: 'select' })}
      media={[
        {
          __typename: 'ContentfulVideo',
          video: {
            file: {
              url: 'https://hightidesite.cdn.prismic.io/hightidesite%2F5d1b0cec-c72d-4b0b-80d7-52588efbd852_about_video.mp4'
            }
          }
        }
      ]}
    />
  )).add(`Video Embed`, () => (
    <WideMedia
      theme={optionsKnob('Theme', themeOptions, 'default', { display: 'select' })}
      width={optionsKnob('Width', widthOptions, 'default', { display: 'select' })}
      height={optionsKnob('Height', heightOptions, 'auto', { display: 'select' })}
      media={[
        {
          __typename: 'ContentfulVideo',
          video: {
            file: {
              url: 'https://www.youtube.com/watch?v=_wUIexMVG9k'
            }
          }
        }
      ]}
    />
  )).add(`Video Width Cover`, () => (
    <WideMedia
      theme={optionsKnob('Theme', themeOptions, 'default', { display: 'select' })}
      width={optionsKnob('Width', widthOptions, 'default', { display: 'select' })}
      height={optionsKnob('Height', heightOptions, 'auto', { display: 'select' })}
      media={[
        {
          __typename: 'ContentfulVideo',
          posterImage: mock.Placeholder169,
          video: {
            file: {
              url: 'https://www.youtube.com/watch?v=_wUIexMVG9k'
            }
          }
        }
      ]}
    />
  ))
