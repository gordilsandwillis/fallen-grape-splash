import React from 'react'
import { storiesOf } from '@storybook/react'
import MultipleImages from './MultipleImages'
import { optionsKnob } from '@storybook/addon-knobs'
import * as mock from 'src/mock'
import themes from 'src/styles/themes'

let themeOptions = {}
Object.keys(themes).map((theme) => {
  const key = theme.toString()
  themeOptions[key] = theme
})

const stories = storiesOf(`Blocks/Multiple Images`, module)
stories.add(`2 Images`, () => (
  <MultipleImages
    theme={ optionsKnob('Theme', themeOptions, 'bgColor', { display: 'select' })}
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
    theme={ optionsKnob('Theme', themeOptions, 'bgColor', { display: 'select' })}
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
    theme={ optionsKnob('Theme', themeOptions, 'bgColor', { display: 'select' })}
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
