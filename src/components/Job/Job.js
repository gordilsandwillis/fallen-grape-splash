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

const H2 = styled.div`
	${ typography.h2 }
	padding: 30px 0;
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
		console.log(this.state.loading)
		const formData = new FormData(e.target)
		const { questions, compliance } = this.props.jobData
		const allQuestions = compliance.reduce((acc, x) => { return acc.concat(x.questions) }, [...questions])
		console.log(allQuestions)
		allQuestions
			.forEach(metaQ => {
				metaQ.fields
					.forEach(q => {
						switch (q.type) {
						case 'multi_value_single_select':
							if (this.state[q.name] && this.state[q.name].value) formData.append(q.name, this.state[q.name].value)
							break
						case 'multi_value_multi_select':
							if (this.state[q.name] && this.state[q.name].value) formData.append(q.name, this.state[q.name].value)
							break
						default:
							break
						}
					})
			})

		const { ghid } = this.props.jobData
		const url = `${ 'http://localhost:3000/api/' }${ ghid }`
		console.log(url)
		this.setLoadingTimeout()
		axios.post(url, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(res => {
			console.log(res)
		}).catch(e => {
			console.log(e)
		})
	}

	setLoadingTimeout () {
		this.setState({ loading: true })
		setTimeout(() => this.setState({ loading: false }), 10000)
	}

	handleDropdownChange = ({ name, x }) => {
		this.setState({ [name]: x })
	}

	htmlDecode (input) {
		let e = document.createElement('div')
		e.innerHTML = input
		return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue
	}

	render () {
		// eslint-disable-next-line no-unused-vars
		const { ghid, questions, compliance, content, title, location } = this.props.jobData
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
							<MarkupContainer>{content && <div dangerouslySetInnerHTML={{ __html: this.htmlDecode(content) }}/>}</MarkupContainer>
						</ScrollEntrance>
					</Container>
				</ContentBlock>
				<Hr full color={colors.black}/>
				<ContentBlock>
					<Container>
						<ApplyTitle>Apply for this Job</ApplyTitle>
						<form onSubmit={e => this.handleSubmit(e)} encType='multipart/form-data'>
							<input type="hidden" name="id" value={ghid} />
							<input type="hidden" name="mapped_url_token" value="mosaic_website" />
							{questions && questions.map((q, i) => (
								<Question
									onChange={this.handleDropdownChange}
									dropdownValues={this.state[q.label]}
									key={(q.label || i) + i} {...q}
								/>
							))}
							<H2>Compliance</H2>
							{compliance && compliance.map((item, index) => (
								<div key={index + '_compliance'}>
									<div>{item.description && <div dangerouslySetInnerHTML={{ __html: this.htmlDecode(item.description) }}/>}</div>
									{item.questions && item.questions.map((q, i) => (
										<Question
											onChange={this.handleDropdownChange}
											dropdownValues={this.state[q.label]}
											key={(q.label || i) + i} {...q}
										/>
									))}
								</div>
							))}
							{/* {location_questions && (
								<div>
									<H2>Location Questions</H2>
									{location_questions.map((q, i) => (
										<Question
											onChange={this.handleDropdownChange}
											dropdownValue={this.state[q.label]}
											key={(q.label || i) + i} {...q}
										/>
									))}
								</div>
							)} */}
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

export default Job
