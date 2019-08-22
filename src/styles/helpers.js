import * as mq from './mediaQueries'

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
