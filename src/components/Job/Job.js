/* eslint-disable no-console */
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
import axios from 'axios'
import { colors, typography } from 'src/styles'

const Wrapper = styled.div`
  color: ${ colors.black };
`

const JobName = styled.div`
	${ typography.h1 }
	padding-bottom: 20px;
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
	/* list-style: none;
	li:before {
		content: '- '
	} */
}
`

const ApplyTitle = styled.div`
	${ typography.h2 }
	padding-bottom: 20px;
`

class Job extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			loading: false
		}
	}
	handleSubmit = e => {
		e.preventDefault()
		if (this.state.loading) return
		const formData = new FormData(e.target)
		const data = this.props.jobData.questions
			.reduce((acc, q) => {
				const value = formData.get(q.name || 'Career')
				switch (q.type) {
				case 'short_text':
					if (value) acc[q.name] = value
					break
				case 'attachment':
					if (value) acc[q.name] = value
					break
				case 'boolean':
					if (this.state[q.name].value) acc[q.name] = this.state[q.name].value
					break
				case 'multi_select':
					break
				default:
					break
				}
				return acc
			}, {})
		const { job_id } = this.props.jobData
		const url = `${ 'http://localhost:3000/api/' }${ job_id }`
		console.log(url)
		this.setState({ loading: true })
		axios.post(url, data, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(res => {
			console.log(res)
			this.setState({ loading: false })
		}).catch(e => {
			console.log(e)
			this.setState({ loading: false })
		})
	}

	handleDropdownChange = ({ name, x }) => {
		this.setState({ [name]: x })
	}

	render () {
		// eslint-disable-next-line no-unused-vars
		const { greenhouseId, job_id, questions, content, internal_content, title, location } = this.props.jobData
		const markup = createMarkup(content || internal_content)
		return (
			<Wrapper>
				<Container>
					<Link dark to={'careers'}><LinkArrow>←</LinkArrow> All Jobs</Link>
				</Container>
				<ContentBlock>
					<Container>
						{title && <JobName>{title}</JobName>}
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
						<form onSubmit={e => this.handleSubmit(e)} encType='multipart/form-data'>
							<input type="hidden" name="id" value={job_id} />
							<input type="hidden" name="mapped_url_token" value="mosaic_website" />
							{questions && questions.map((x, i) => <Question onChange={this.handleDropdownChange} dropdownValue={this.state[x.name]} key={(x.name || i) + i} {...x} />)}
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
