import { graphql } from 'gatsby'

export const query = graphql`
  fragment FiftyFifty on ContentfulFiftyFifty {
    __typename
    id
    theme
    columns {
    	...Column
    	...GWImage
        ...GWVideo
        ...Text
        ...List
    }
    layout
    padding
    width
    gutters
    verticalAlignment
    columnOrder
  }
`
