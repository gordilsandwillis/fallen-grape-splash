import { graphql } from 'gatsby'

export const query = graphql`
  fragment WideImageVideo on ContentfulWideMedia {
    __typename
    id
    image {
      ...ResponsiveImage
    }
    video {
      file {
        url
      }
    }
    fullWidth
    caption
    theme
  }
`
