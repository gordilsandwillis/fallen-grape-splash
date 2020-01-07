import { graphql } from 'gatsby'

export const query = graphql`
  fragment ResponsiveImage on ContentfulResponsiveImage {
    __typename
    id
    caption
    image {
      fluid {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
    useMultipleImages
    small {
      fluid {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
    medium {
      fluid {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
    large {
      fluid {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
      }
    }
  }
`
