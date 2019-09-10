import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockLeadership on ContentfulBlockLeadership {
    __typename
    id
    title
    showTitle
    items {
      name
      id
      role
    }
  }
`
