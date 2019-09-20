/* eslint-disable no-console */
/* eslint-disable camelcase */
import React from 'react'
import styled from '@emotion/styled'
import Question from 'src/components/Question'
import Container from 'src/components/Container'
import Button from 'src/components/Button'
import Link from 'src/components/Link'
import ScrollEntrance from 'src/components/ScrollEntrance'
import Hr from 'src/components/Hr'
import ContentBlock from 'src/components/ContentBlock'
import axios from 'axios'
import parse from 'html-react-parser'
import { colors, typography, mediaQueries as mq } from 'src/styles'

const Wrapper = styled.div`
  color: ${ colors.black };
`

const ErrorMessage = styled.p`
  color: ${ colors.alert };
`

const JobName = styled.div`
	${ typography.h1 }
	padding-bottom: 20px;
`

const LocationName = styled.div`
	${ typography.body }
	color: ${ colors.grey };
`

const LinkStyled = styled(Link)`
* {   color: ${ ({ dark }) => dark ? colors.black : colors.white };}
&:hover, &:hover * {
    color: ${ ({ nohover }) => !nohover ? colors.grey : 'inherit' };
  }
`

const LinkArrow = styled.span`
	${ typography.responsiveStyles('font-size', 21, 21, 21, 21) }
`

const MarkupContainer = styled.div`
ul {
	/* list-style: none;
	li:before {
		content: '- '
	} */
}
`

const TrueCenteredContainer = styled.div`
min-height:700px;
${ mq.mediumAndBelow } {
	min-height:350px;
}
text-align: center;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const H1 = styled.div`
	${ typography.h1 }
	padding-bottom: 30px;
`

const PaddedParagraph = styled.div`
	${ typography.h2 }
	max-width: 23em;
	padding-bottom:10px;
`

const ButtonContainer = styled.div`
	margin-top: 30px;
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
	state = {
		loading: false,
		error: null,
		success: null
	}

	handleSubmit = e => {
		e.preventDefault()
		if (this.state.loading) return

		const formData = new FormData(e.target)
		const { questions } = this.props.jobData
		const compliance = this.props.jobData.compliance
		const allQuestions = compliance.reduce((acc, x) => { return acc.concat(x.questions) }, [...questions])
		allQuestions
			.forEach(metaQ => {
				metaQ && metaQ.fields
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
		const url = ` ${ process.env.GREENHOUSE_JOB_API_HOST }/api/${ process.env.GREENHOUSE_BOARD_TOKEN }/${ ghid }`
		this.setLoadingTimeout()

		axios.post(url, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		}).then(res => {
			this.setState({
				success: res.data.success ? res.data.success : null,
				error: res.data.error ? res.data.error : null
			})
		}).catch(err => {
			console.log(err)
		}).finally(() => {
			this.setState({ loading: false })
		})
	}

	setLoadingTimeout () {
		this.setState({ loading: true })
		setTimeout(() => this.setState({ loading: false }), 10000)
	}

	handleDropdownChange = ({ name, value }) => {
		this.setState({ [name]: value })
	}

	render () {
		const { ghid, questions, compliance, content, title, location } = this.props.jobData
		const { loading, success, error } = this.state
		const complianceLength = compliance && compliance.length
		return (
			<Wrapper>
				<Container>
					<LinkStyled dark to={'careers'}><LinkArrow>←</LinkArrow> All Jobs</LinkStyled>
				</Container>
				{ success
					? <ContentBlock>
						<Container>
							<TrueCenteredContainer>
								<ScrollEntrance>
									<H1>Thank you for applying!</H1>
									<PaddedParagraph>Your application has been received and a member of our team will review it as soon as possible.</PaddedParagraph>
									<ButtonContainer>
										<Link noHoverColor to='/careers'>
											<div style={{ color: colors.black }}>
												<Button style={{ color: colors.black }}>
														BACK TO CAREERS
												</Button>
											</div>
										</Link>
									</ButtonContainer>
								</ScrollEntrance>
							</TrueCenteredContainer>
						</Container>
					</ContentBlock>
					: <React.Fragment>
						<ContentBlock>
							<Container>
								{title && <JobName>{title}</JobName>}
								{(location && location.name) ? <LocationName>{location.name}</LocationName> : ''}
							</Container>
						</ContentBlock>
						<Hr full color={colors.black}/>
						<ContentBlock>
							<Container>
								<ScrollEntrance>
									<MarkupContainer>{content && <div dangerouslySetInnerHTML={{ __html: parse(decodeURI(content)) }}/>}</MarkupContainer>
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
									{!complianceLength ? '' : <H2>Compliance</H2>}
									{!complianceLength ? '' : compliance.map((item, index) => (
										<div key={index + '_compliance'}>
											<div>{!item.description ? '' : <div dangerouslySetInnerHTML={{ __html: parse(decodeURI(item.description)) }}/>}</div>
											{!item.questions ? '' : item.questions.map((q, i) => (
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
										<Button loading={loading} style={{ color: colors.black }}>SUBMIT APPLICATION</Button>
									</div>
									{error && (<ErrorMessage>{error}</ErrorMessage>)}
								</form>
							</Container>
						</ContentBlock>
					</React.Fragment>
				}
			</Wrapper>
		)
	}
}

export default Job
