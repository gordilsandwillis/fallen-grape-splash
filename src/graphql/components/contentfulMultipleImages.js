import { graphql } from 'gatsby'

export const query = graphql`
  fragment MultipleImages on ContentfulMultipleImages {
    __typename
    id
    theme,
    images {
      ...ResponsiveImage
    }
  }
`
