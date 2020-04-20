import { graphql } from 'gatsby'

export const query = graphql`
  fragment Column on ContentfulColumn {
    __typename
    id
    content {
      ...Link
      ...Text
      ...List
      ...GWImage
      ...GWVideo
	  }
  }
`
