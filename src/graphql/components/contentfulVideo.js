import { graphql } from 'gatsby'

export const query = graphql`
  fragment Video on ContentfulVideo {
    __typename
    id
    posterImage {
    	fluid(maxWidth: 2000, quality: 100) {
        aspectRatio
        src
        srcSet
        srcWebp
        srcSetWebp
        sizes
      }
    }
    video {
    	file {
    		url
    	}
    }
    caption
  }
`
