import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockAboveTheFold on ContentfulBlockAboveTheFold {
    __typename
    id
    verticalTextAlignment
    animatedGradientInsteadOfImage
    smallText {
      json
    }
    image {
      fluid(maxWidth: 1440, quality: 100) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
    horizontalTextAlignment
    horizontalBreak
    headline {
      json
    }
    button {
      url
      text
      internalExternal
      id
    }
  }
`
