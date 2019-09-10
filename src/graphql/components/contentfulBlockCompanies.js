import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockCompanies on ContentfulBlockCompanies {
    __typename
    id
    title
    showTitle
    items {
      name
      description {
        json
      }
      logo {
        file {
          url
          fileName
          contentType
        }
        fluid(maxWidth: 800, quality: 100) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      linkToSite {
        url
        text
        internalExternal
        id
      }
    }
  }
`
