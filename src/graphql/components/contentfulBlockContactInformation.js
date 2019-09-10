import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockContactInformation on ContentfulBlockContactInformation {
    __typename
    id
    title
    showTitle
    descriptionRichText: description {
      json
    }
    linksTitle
    contactLinks {
      additionalLabel
      id
      text
      url
      internalExternal
    }
  }
`
