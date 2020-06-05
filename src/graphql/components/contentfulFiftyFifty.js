import { graphql } from 'gatsby'

export const query = graphql`
  fragment FiftyFifty on ContentfulFiftyFifty {
    __typename
    id
    theme
    columns {
    	...Column
    	...Image
        ...Video
        
    }
    layout
    padding
    width
    gutters
    verticalAlignment
    columnOrder
  }
`
