import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockHeroImage on ContentfulBlockHeroImage {
    __typename
    id
    title
    image {
      file {
        url
        fileName
        contentType
      }
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
  }
`
