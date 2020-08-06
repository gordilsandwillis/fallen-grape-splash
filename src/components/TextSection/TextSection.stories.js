import React from 'react'
import { storiesOf } from '@storybook/react'
import TextSection from './TextSection'
import * as mock from 'src/mock'
import * as copy from 'src/mock/copy'

const stories = storiesOf(`Blocks`, module)
stories.add(`TextSection`, () => (
  <TextSection
    alignment="center"
    text={[
      {
        __typename: 'ContentfulColumn',
        content: [
          {
            __typename: 'ContentfulImage',
            image: mock.PlaceholderSq,
            maxWidth: '60px'
          },
          {
            __typename: 'ContentfulText',
            text: copy.contentfulRichTextVeryShort
          },
          {
            __typename: 'ContentfulList',
            type: 'horizontal',
            items: [
              {
                __typename: 'ContentfulLink',
                type: 'button',
                label: 'button',
                to: '/'
              },
              {
                __typename: 'ContentfulLink',
                type: 'button',
                label: 'button',
                to: '/',
                theme: 'textColor'
              }
            ]
          }
        ]
      }
    ]}
  />
))
