import { graphql } from 'gatsby'

export const query = graphql`
  fragment Button on ContentfulButton {
    __typename
    id
    theme
    to
    label
    alternateLabelSmall
    alternateLabelMedium
    external
  }
`
