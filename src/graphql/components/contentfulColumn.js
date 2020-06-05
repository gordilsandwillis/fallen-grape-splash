import { graphql } from 'gatsby'

export const query = graphql`
  fragment Column on ContentfulColumn {
    __typename
    id
    type
    content {
      ... on ContentfulImage {
        ...Image
      }
      ... on ContentfulLink {
        ...Link
      }
      ... on ContentfulList {
        ...List
      }
      ... on ContentfulText {
        ...Text
      }
      ... on ContentfulVideo {
        ...Video
      }
    }
  }
`