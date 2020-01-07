import { graphql } from 'gatsby'

export const query = graphql`
  fragment Link on ContentfulLink {
    __typename
    id
    to
    label
    external
  }
`
