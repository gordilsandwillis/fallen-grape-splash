/* eslint-disable camelcase */
import React from 'react'
import styled from '@emotion/styled'
import Question from 'src/components/Question'
import Container from 'src/components/Container'
import Link from 'src/components/Link'
import Button from 'src/components/Button'
import ScrollEntrance from 'src/components/ScrollEntrance'
import Hr from 'src/components/Hr'
import ContentBlock from 'src/components/ContentBlock'
// eslint-disable-next-line no-unused-vars
import { colors, typography, mediaQueries as mq } from 'src/styles'

const Wrapper = styled.div`
  color: ${ colors.black };
`

const JobName = styled.div`
	${ typography.h1 }
	padding-bottom: 20px;
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
ul {
	list-style: none;
	li:before {
		content: '- '
	}
}
`

const ApplyTitle = styled.div`
	${ typography.h2 }
	padding-bottom: 20px;
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
				</Container>
				<ContentBlock>
					<Container>
						{title && <JobName>{title}</JobName>}
						{companyName && <CompanyName>at {companyName}</CompanyName>}
						{(location && location.name) && <LocationName>{location.name}</LocationName>}
					</Container>
				</ContentBlock>
				<Hr full color={colors.black}/>
				<ContentBlock>
					<Container>
						<ScrollEntrance>
							<MarkupContainer>{markup && <div dangerouslySetInnerHTML={markup}/>}</MarkupContainer>
						</ScrollEntrance>
					</Container>
				</ContentBlock>
				<Hr full color={colors.black}/>
				<ContentBlock>
					<Container>
						<ApplyTitle>Apply for this Job</ApplyTitle>
						<form onSubmit={this.handleSubmit}>
							{questions && questions.map((x, i) => <Question key={x.name + i} {...x} />)}
							<div style={{ marginTop: 20 }}>
								<Button style={{ color: colors.black }}>SUBMIT APPLICATION</Button>
							</div>
						</form>
					</Container>
				</ContentBlock>
			</Wrapper>
		)
	}
}
const createMarkup = string => string ? { __html: string } : null

export default Job
