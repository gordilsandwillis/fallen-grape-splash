import { graphql } from 'gatsby'

export const query = graphql`
  fragment FiftyFifty on ContentfulFiftyFifty {
    __typename
    id
    theme
    eyebrow
    headline
    imagePosition
    text {
      text
      json
    }
    image {
      ...ResponsiveImage
    }
    video {
      file {
        url
      }
    }
    buttons {
      ...Button
    }
  }
`