import { graphql } from 'gatsby'

export const query = graphql`
  fragment AboveTheFold on ContentfulAboveTheFold {
    __typename
    id
    eyebrow
    headline
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
      ...Button
    }
  }
`
