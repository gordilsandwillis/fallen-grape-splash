import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockLegalInfo on ContentfulBlockLegalInfo {
    __typename
    id
    title
    showTitle
    subtitle
    bodyTextBeforeBreak {
      json
    }
    bodyTextAfterBreak {
      json
    }
  }
`
