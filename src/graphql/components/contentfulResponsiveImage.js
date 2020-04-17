import { graphql } from 'gatsby'

export const query = graphql`
  fragment ResponsiveImage on ContentfulResponsiveImage {
    __typename
    id
    caption
    image {
      fluid(maxWidth: 1800, quality: 100) {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
    small {
      fluid(maxWidth: 750, quality: 100) {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
    medium {
      fluid(maxWidth: 1200, quality: 100) {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
    large {
      fluid(maxWidth: 1800, quality: 100) {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
  }
`
