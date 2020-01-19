import { graphql } from 'gatsby'

export const query = graphql`
  fragment AboveTheFold on ContentfulAboveTheFold {
    __typename
    id
    eyebrow
    headline
    headlineSize
    text {
      text
      json
    }
    image {
      ...ResponsiveImage
    }
    video {
      file {
        url
      }
    }
    textAlignment
    hAlignment
    vAlignment
    fullHeight
    buttons {
      ...Link
    }
    theme
  }
`
