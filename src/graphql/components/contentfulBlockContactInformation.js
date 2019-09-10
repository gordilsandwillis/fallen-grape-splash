export const query = graphql`
  fragment BlockContactInformation on ContentfulBlockContactInformation {
    __typename
    id
    title
    smallText {
      json
    }
    descriptionRichText: description {
      json
    }
  }
`
