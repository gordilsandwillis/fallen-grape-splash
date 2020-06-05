import { graphql } from 'gatsby'

export const query = graphql`
  fragment Image on ContentfulImage {
    __typename
    id
    maxWidth
    image {
      svgContent
      fluid(maxWidth: 2000, quality: 100) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
    small {
      fluid(maxWidth: 2000, quality: 100) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
    medium {
      fluid(maxWidth: 2000, quality: 100) {
        base64
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
    caption
  }
`
