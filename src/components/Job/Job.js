/* eslint-disable camelcase */
import React from 'react'
import styled from '@emotion/styled'
import Question from 'src/components/Question'
// eslint-disable-next-line no-unused-vars
import { colors, typography, mediaQueries as mq } from 'src/styles'

const Wrapper = styled.div`
  color: ${ colors.black };
`

class Job extends React.Component {
	handleSubmit = e => {
		e.preventDefault()
		// const data = new FormData(e.target)
		// console.log(e.target)
		// console.log(data)
	}

	render () {
		// eslint-disable-next-line no-unused-vars
		const { greenhouseId, job_id, questions, content, internal_content, title, location } = this.props.jobData
		const markup = createMarkup(content || internal_content)
		return (
			<Wrapper>
				{markup && <div dangerouslySetInnerHTML={markup}/>}
				<form onSubmit={this.handleSubmit}>
					{questions && questions.map((x, i) => <Question key={x.name + i} {...x} />)}
					<button type="submit">Submit</button>
				</form>
			</Wrapper>
		)
	}
}
const createMarkup = string => string ? { __html: string } : null

export default Job
