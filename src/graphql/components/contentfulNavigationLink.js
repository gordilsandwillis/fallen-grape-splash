import { graphql } from 'gatsby'

export const query = graphql`
  fragment NavigationLink on ContentfulNavigationLink {
    __typename
    id
    label
    to {
      id
      slug
    }
    dropdownLinks {
      id
      label
      to {
        id
        slug
      }
    }
  }
`
