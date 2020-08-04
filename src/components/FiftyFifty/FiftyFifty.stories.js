import React from 'react'
import { storiesOf } from '@storybook/react'
import FiftyFifty from './FiftyFifty'
import * as mock from 'src/mock'
import * as mockCopy from 'src/mock/copy'
import themes from 'src/styles/themes'
import { withKnobs, text, boolean, optionsKnob } from '@storybook/addon-knobs'

const imgPositionOptions = {
	left: 'left',
	right: 'right',
	hangLeft: 'hangLeft',
	hangRight: 'hangRight'
}

let themeOptions = {}
Object.keys(themes).map(theme => {
  const key = theme.toString()
  themeOptions[key] = theme
})

const gutterOptions = {
  narrow: 'narrow',
  wide: 'wide',
  none: 'none'
}

const widthOptions = {
  margins: 'margins',
  fullWidth: 'fullWidth'
}

const paddingOptions = {
  padded: 'padded',
  notPadded: 'notPadded'
}

const layoutOptions = {
  '50/50': '50/50',
  '60/40': '60/40',
  '40/60': '40/60'
}

const alignmentOptions = {
  bottom: 'bottom',
  top: 'top',
  center: 'center',
  middle: 'middle',
  baseline: 'baseline',
  stretch: 'stretch'
}

const orderOptions = {
  leftToRight: 'leftToRight',
  rightToLeft: 'rightToLeft'
}

const stories = storiesOf(`Blocks/FiftyFifty`, module)
stories.add(`Default`, () => (
  <FiftyFifty
    theme={ optionsKnob('Theme', themeOptions, 'default', { display: 'select' }) }
    columns={[
      {
        __typename: 'ContentfulImage',
        image: mock.Placeholder32
      },
      {
        content: [
          {
            __typename: 'ContentfulText',
            eyebrow: 'eyebrow',
            headline: 'FiftyFifty',
            text: mockCopy.lorem
          }
        ]
      }
    ]}
    gutters={ optionsKnob('Gutter', gutterOptions, 'wide', { display: 'select' }) }
    width={ optionsKnob('Width', widthOptions, 'margins', { display: 'select' }) }
    padding={ optionsKnob('Padding', paddingOptions, 'padded', { display: 'select' })}
    layout={ optionsKnob('Layout', layoutOptions, '50/50', { display: 'select' })}
    verticalAlignment={ optionsKnob('vertical Alignment', alignmentOptions, 'center', { display: 'select' })}
    columnOrder={ optionsKnob('Column Order', orderOptions, 'leftToRight', { display: 'select' })}
  />
))
