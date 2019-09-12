/* eslint-disable camelcase */
import React from 'react'
import styled from '@emotion/styled'
import Question from 'src/components/Question'
import Container from 'src/components/Container'
import Link from 'src/components/Link'
import Button from 'src/components/Button'
import ScrollEntrance from 'src/components/ScrollEntrance'
import Hr from 'src/components/Hr'
// eslint-disable-next-line no-unused-vars
import { colors, typography, mediaQueries as mq } from 'src/styles'

const Wrapper = styled.div`
  color: ${ colors.black };
`

const JobName = styled.div`
	${ typography.h1 }
`

const CompanyName = styled.div`
	${ typography.h2 }
`

const LocationName = styled.div`
	${ typography.body }
	color: ${ colors.grey };
`

const LinkArrow = styled.span`
	${ typography.responsiveStyles('font-size', 21, 21, 21, 21) }
	${ typography.responsiveStyles('padding-bottom', 0, 0, 0, 2) }
`

const MarkupContainer = styled.div`
`

const ApplyTitle = styled.div`
	${ typography.h2 }
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
		const { companyName } = this.props
		const markup = createMarkup(content || internal_content)
		return (
			<Wrapper>
				<Container>
					<Link dark to={'careers'}><LinkArrow>←</LinkArrow> All Jobs</Link>
					{title && <JobName>{title}</JobName>}
					{companyName && <CompanyName>at {companyName}</CompanyName>}
					{(location && location.name) && <LocationName>{location.name}</LocationName>}
				</Container>
				<Hr full color={colors.black}/>
				<Container>
					<ScrollEntrance>
						<MarkupContainer>{markup && <div dangerouslySetInnerHTML={markup}/>}</MarkupContainer>
					</ScrollEntrance>
				</Container>
				<Hr full color={colors.black}/>
				<Container>
					<ApplyTitle>Apply for this Job</ApplyTitle>
					<form onSubmit={this.handleSubmit}>
						{questions && questions.map((x, i) => <Question key={x.name + i} {...x} />)}
						<Button style={{ color: colors.black }}>SUBMIT APPLICATION</Button>
					</form>
				</Container>
			</Wrapper>
		)
	}
}
const createMarkup = string => string ? { __html: string } : null

export default Job
