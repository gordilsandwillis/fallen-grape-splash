import React from 'react'
import { storiesOf } from '@storybook/react'
import Columns from './Columns'
import * as mock from 'src/mock'

const stories = storiesOf(`Blocks/Columns`, module)
stories.add(`Default`, () => (
  <Columns
  	columns={[
  		{
  			content: [
  				{
  					__typename: 'ContentfulImage',
						image: mock.Placeholder43
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
