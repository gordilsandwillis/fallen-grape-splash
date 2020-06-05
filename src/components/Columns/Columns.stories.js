import React from 'react'
import { storiesOf } from '@storybook/react'
import Columns from './Columns'
import * as mock from 'src/mock'
import * as copy from 'src/mock/copy'

const stories = storiesOf(`Blocks/Columns`, module)
stories.add(`Default`, () => (
  <Columns
    columns={[
      {
        content: [
          {
            __typename: 'ContentfulImage',
						image: mock.Placeholder43
          },
          {
            __typename: 'ContentfulText',
            text: copy.contentfulRichTextVeryShort
          }
        ]
      },
      {
        content: [
          {
            __typename: 'ContentfulVideo',
						video: {
              file: {
                url: 'https://hightidesite.cdn.prismic.io/hightidesite%2F5d1b0cec-c72d-4b0b-80d7-52588efbd852_about_video.mp4'
              }
            }
          },
          {
            __typename: 'ContentfulList',
            type: 'horizontal',
            items: [
              {
                __typename: 'ContentfulLink',
                type: 'default',
                label: 'Link item title',
                to: '/'
              },
              {
                __typename: 'ContentfulText',
                text: copy.contentfulRichTextVeryShort
              },
              {
                __typename: 'ContentfulLink',
                type: 'default',
                label: 'Link item title',
                to: '/'
              },
              {
                __typename: 'ContentfulText',
                text: copy.contentfulRichTextVeryShort
              }
            ]
          },
          {
            __typename: 'ContentfulLink',
            type: 'button',
            label: 'Button',
            to: '/'
          }
        ]
      },
      {
        content: [
          {
          __typename: 'ContentfulImage',
						image: mock.Placeholder43
          }
        ]
      }
    ]}
  />
))
