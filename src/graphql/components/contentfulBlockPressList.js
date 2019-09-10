import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockPressList on ContentfulBlockPressList {
    __typename
    id
    title
    showTitle
  }
`
