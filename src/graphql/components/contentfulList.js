import { graphql } from 'gatsby'

export const query = graphql`
  fragment List on ContentfulList {
    __typename
    id
    internalTitle
    displayTitle
    items {
      ... on ContentfulLink {
        ...Link
      }
    }
  }
`
