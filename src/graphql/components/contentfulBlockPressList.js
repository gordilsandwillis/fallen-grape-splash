import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockPressList on ContentfulBlockPressList {
    __typename
    id
    title
    showTitle
    pressContactLink {
      url
      text
      internalExternal
    }
    items {
      id
      title
      mediaOrganizationsLogo {
        id
        svgContent
        fluid(maxWidth: 1440, quality: 100) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      description {
        json
      }
      link {
        url
        text
        internalExternal
        id
      }
      inlineVideo {
        url
        id
        coverImage {
          id
          svgContent
          fluid(maxWidth: 1440, quality: 100) {
            base64
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
      inlineImage {
        id
        svgContent
        fluid(maxWidth: 1440, quality: 100) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
    }
  }
`
