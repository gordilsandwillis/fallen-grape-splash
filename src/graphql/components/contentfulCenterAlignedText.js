import { graphql } from 'gatsby'

export const query = graphql`
  fragment CenterAlignedText on ContentfulCenterAlignedText {
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
      ...Button
    }
  }
`
