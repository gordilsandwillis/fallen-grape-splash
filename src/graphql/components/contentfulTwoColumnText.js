import { graphql } from 'gatsby'

export const query = graphql`
  fragment TwoColumnText on ContentfulTwoColumnText {
    __typename
    id
    theme
    headline
    text {
      json
    }
    buttons {
      ...Button
    }
  }
`
