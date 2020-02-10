import React from 'react'
import { storiesOf } from '@storybook/react'
import MultipleImages from './MultipleImages'
import * as mock from 'src/mock'

const stories = storiesOf(`Blocks/Multiple Images`, module)
stories.add(`2 Images`, () => (
  <MultipleImages
  	images={[
  		{
	  		image: mock.Placeholder34,
	  		caption: 'Caption',
	  		id: 'img1'
  		},
  		{
	  		image: mock.Placeholder43,
	  		caption: 'Caption',
	  		id: 'img2'
  		}
  	]}
  />
)).add(`3 Images`, () => (
  <MultipleImages
    images={[
      {
        image: mock.Placeholder34,
        caption: 'Caption',
        id: 'img1'
      },
      {
        image: mock.Placeholder43,
        caption: 'Caption',
        id: 'img2'
      },
      {
        image: mock.Placeholder34,
        caption: 'Caption',
        id: 'img1'
      }
    ]}
  />
)).add(`4 Images`, () => (
  <MultipleImages
    images={[
      {
        image: mock.Placeholder34,
        caption: 'Caption',
        id: 'img1'
      },
      {
        image: mock.Placeholder43,
        caption: 'Caption',
        id: 'img2'
      },
      {
        image: mock.Placeholder34,
        caption: 'Caption',
        id: 'img1'
      },
      {
        image: mock.Placeholder43,
        caption: 'Caption',
        id: 'img2'
      }
    ]}
  />
))
