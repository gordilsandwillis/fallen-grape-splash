import { graphql } from 'gatsby'

export const query = graphql`
  fragment Text on ContentfulText {
    __typename
    id
    eyebrow
    headline
    headlineSize
    text {
    	json
    }
    textSize
  }
`
