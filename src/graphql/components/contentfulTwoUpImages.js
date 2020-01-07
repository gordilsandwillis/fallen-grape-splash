import { graphql } from 'gatsby'

export const query = graphql`
  fragment TwoUpImages on ContentfulTwoUpImages {
    __typename
    id
    theme,
    images {
      ...ResponsiveImage
    }
  }
`
