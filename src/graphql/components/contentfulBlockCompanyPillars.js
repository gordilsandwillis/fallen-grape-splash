export const query = graphql`
  fragment BlockCompanyPillars on ContentfulBlockCompanyPillars {
    __typename
    id
    title
    showTitle
    items {
      title
      keywords
      descriptionLongText: description {
        descriptionText: description
      }
    }
  }
`
