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
    defaultSeo {
      ...Seo
    }
    bannerText {
      json
    }
    bannerColor
    navigation {
      ...NavigationLink
    }
  }
`
