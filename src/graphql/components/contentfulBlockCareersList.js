import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockCareersList on ContentfulBlockCareersList {
    __typename
    id
    title
    showCareers
  }
`
