import { graphql } from 'gatsby'

export const query = graphql`
  fragment SiteSettings on ContentfulSiteSettings {
    __typename
    id
    title
    favicon {
      fixed(width: 30, quality: 100) {
        src
      }
    }
    touchIcon {
      fixed(width: 120, quality: 100) {
        src
      }
    }
    defaultShareImage {
      fixed(width: 250, quality: 100) {
        src
      }
    }
    footerSections {
      ... on ContentfulList {
        id
        to
        displayTitle
        items {
          ... on ContentfulLink {
            ...Link
          }
        }
      }
    }
    footerNewsletterTitle
    footerNewsletterRichText {
      json
    }
  }
`
