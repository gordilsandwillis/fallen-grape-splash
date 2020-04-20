import { graphql } from 'gatsby'

export const query = graphql`
  fragment Seo on ContentfulSeo {
    __typename
    id
    keywords
    description {
      description
    }
    shareImage {
      file {
        url
      }
    }
  }
`
