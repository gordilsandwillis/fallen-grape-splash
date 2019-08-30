import * as mq from 'src/styles/mediaQueries'

export const responsiveStyles = (style, large, medium, small) => `
  ${ mq.largerAndUp } {
    ${ style }: ${ large };
  }
  ${ mq.largerAndBelow } {
    ${ style }: ${ medium };
  }
  ${ mq.mediumAndBelow } {
    ${ style }: ${ small };
  }
`

export const fontSmoothing = `
	-webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
`
