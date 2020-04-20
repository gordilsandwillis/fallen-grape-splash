import { graphql } from 'gatsby'

export const query = graphql`
  fragment Columns on ContentfulColumns {
    __typename
    id
    theme
    alignment
    columns {
    	...Column
    }
  }
`
