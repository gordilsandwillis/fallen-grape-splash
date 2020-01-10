import { graphql } from 'gatsby'

export const query = graphql`
  fragment TwoColumnText on ContentfulTwoColumnText {
    __typename
    id
    theme
    headline
    headlineSize
    text {
      json
    }
    buttons {
      ...Button
    }
  }
`
