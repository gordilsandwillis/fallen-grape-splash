import { graphql } from 'gatsby'

export const query = graphql`
  fragment BlockSlider on ContentfulBlockSlider {
    __typename
    id
    title
    showTitle
    items {
      ... on ContentfulItemProduct {
        id
        titleInSlider
        descriptionText: description
        showInSlider
        linkInSlider {
          id
          url
          text
          styleAsButton
          internalExternal
        }
        imageInSlider {
          file {
            url
            fileName
            contentType
          }
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
      ... on ContentfulItemAward {
        id
        companyName: company
        award {
          json
        }
      }
    }
  }
`
