import { graphql } from 'gatsby'

export const query = graphql`
  fragment WideMedia on ContentfulWideMedia {
    __typename
    id
    width
    height
    theme
    media {
    	...Image
    	...Video
  	}
    overlayComponent {
      ...Column
    }
    overlayPlacement
    overlayTextAlignment
  }
`
