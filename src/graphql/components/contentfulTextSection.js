import { graphql } from 'gatsby'

export const query = graphql`
  fragment TextSection on ContentfulTextSection {
    __typename
    id
    text {
    	...Text
    	...Column
  	}
    theme
    alignment
  }
`
