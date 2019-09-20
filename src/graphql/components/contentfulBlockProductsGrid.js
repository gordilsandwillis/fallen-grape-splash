import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockProductsGrid on ContentfulBlockProductsGrid {
    __typename
    id
    title
    showTitle
    items {
      __typename
      id
      title
      links {
        text
        url
        internalExternal
        id
      }
      icon {
        svgContent
        file {
          url
          fileName
          contentType
          details {
            image {
              width
              height
            }
          }
        }
        fluid(maxWidth: 400, quality: 100) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          tracedSVG
        }
      }
      descriptionText: description
      company {
        name
        id
      }
    }
  }
`
