import { graphql } from 'gatsby'

export const query = graphql`
  fragment CalloutText on ContentfulCalloutText {
    __typename
    id
    headlineSize
    eyebrow
    headline
    headlineSize
    text {
      text
      json
    }
    theme
    buttons {
      ...Link
    }
    alignment
  }
`
