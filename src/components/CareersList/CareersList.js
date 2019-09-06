import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import withSizes from 'react-sizes'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Button from 'src/components/Button'
import Job from 'src/components/Job'
import Hr from 'src/components/Hr'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ContentBlock from 'src/components/ContentBlock'
import Dropdown from 'src/components/Dropdown'
import { colors, animations, typography, mediaQueries as mq } from 'src/styles'
import remapJobData from './helpers/remapJobData'
import getValues from './helpers/getValues'

const Wrapper = styled.div`
  color: ${ colors.black };
`

const JobFilters = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: nowrap;
	justify-content: space-between;
`

const JobButton = styled.div`
	${ typography.body }
	-webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-touch-callout: none;
	appearance: none;
	border: 0;
	background: none;
	box-shadow: none;
	outline: none;
  position: relative;
  &:after {
    background: currentColor;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 1px;
    bottom: -5px;
    opacity: 0;
    transition: bottom ${ animations.mediumSpeed } ease-in-out,
      opacity ${ animations.mediumSpeed } ease-in-out;
  }
	&:after {
      ${ ({ underlined }) =>
		underlined &&
        ` bottom: -1px;
			 		opacity: 1;
			 ` }
    }
  &:hover, &:focus {
		outline: none;
		border-bottom-color: currentColor;
    &:after {
      ${ ({ underlined }) =>
		!underlined &&
        ` bottom: -1px;
			 		opacity: 1;
			 ` }
    }
  }

	cursor: pointer;

`

const RowRightAlign = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`

class CareersList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			selectedJobId: null,
			companyFilter: null,
			locationFilter: null,
			departmentFilter: null,
		}
	}

	handleComplexDropdownChange = ({ value, label, category, nameInState }) => {}

	filterByCompany = jobs => Object.values(jobs).filter(job => {
		const { companyFilter } = this.state
		if (companyFilter && job.companyId !== companyFilter) return false
		return true
	})

	filterByDepartment = jobs => Object.values(jobs).filter(job => {
		const { departmentFilter } = this.state
		if (departmentFilter && job.departmentName !== departmentFilter) return false
		return true
	})

	filterByLocation = jobs => Object.values(jobs).filter(job => {
		const { locationFilter } = this.state
		if (locationFilter && job.locationName !== locationFilter) return false
		return true
	})

	render () {
		const { selectedJobId, companyFilter, locationFilter, departmentFilter } = this.state
		const { data, windowWidth } = this.props
		const { jobs, companies } = data
		const companyJobs = this.filterByCompany(jobs)
		const filteredByLocation = this.filterByLocation(companyJobs)
		const filteredByDepartment = this.filterByDepartment(companyJobs)
		const filteredJobs = this.filterByDepartment(filteredByLocation)
		const locations = getValues({ jobs: filteredByLocation, key: 'locationName' })
		const departments = getValues({ jobs: filteredByDepartment, key: 'departmentName' })
		// if companies is more than, or if windowidth is smaller than
		return selectedJobId
			? <Job job={selectedJobId} />
			: (
				<Wrapper>
					{/* <Hero /> */}
					<ScrollEntrance>
						<Container>
							<ContentBlock>
								<Grid small='[6]' medium='[6]' large='[7] 1 [4]' >
									{ (windowWidth > mq.largeBreakpoint)
										? (
											<React.Fragment>
												<JobFilters>
													<JobButton tabindex="-1" underlined={!companyFilter} onClick={() => this.setState({ companyFilter: null })}>All Jobs</JobButton>
													{companies && companies.map(({ id, name }) => <JobButton key={id} tabindex="-1" underlined={companyFilter === id} onClick={() => this.setState({ companyFilter: id, departmentFilter: null, locationFilter: null })}>{name}</JobButton>)}
												</JobFilters>
												<Grid small='[2]' medium='[2]' large='[2] [2]' >
													<Dropdown filters={companyFilter + locationFilter + departmentFilter} onChange={x => this.setState({ locationFilter: (x && x.value) || null })} align='right' title="Location" items={locations} />
													<Dropdown filters={companyFilter + locationFilter + departmentFilter} onChange={x => this.setState({ departmentFilter: (x && x.value) || null })} align='right' title="Department" items={departments} />
												</Grid>
											</React.Fragment>
										) : (
											<RowRightAlign>
												<Dropdown filters={companyFilter + locationFilter + departmentFilter} onChange={x => this.setState({ companyFilter: (x && x.value) || null })} align='right' title="All Jobs" />
												<Dropdown filters={companyFilter + locationFilter + departmentFilter} onChange={this.handleComplexDropdownChange} align='right'
													title="Location / Department"
													categories={[
														{ title: 'Locations', items: locations },
													  { title: 'Departments', items: departments }
													]} />
											</RowRightAlign>
										)
									}
								</Grid>
							</ContentBlock>
						</Container>
						<Hr full color={colors.black}/>
						{filteredJobs && filteredJobs.map(({ companyName, departmentName, title }) => (
							<div key={title + departmentName + companyName} style={{ padding: 20 }}>
								{title && <div>{title}</div>}
								{companyName && <div>{companyName}</div>}
								{departmentName && <div>{departmentName}</div>}
							</div>
						))}
					</ScrollEntrance>
					<ScrollEntrance>
						<Container>
						</Container>
					</ScrollEntrance>
				</Wrapper>
			)
	}
}

const CareersListWithSizes = withSizes(({ width }) => ({ windowWidth: width }))(CareersList)

export default () => (
	<StaticQuery
		query={graphql`
      query allDepartmentsQuery {
				allGreenhouseDepartment {
					edges {
						node {
							name
							parent_id
							greenhouseId
							childrenGreenhouseJobPost {
								job_id
								title
								location {
									id
									name
								}
							}
						}
					}
				}
      }
    `}
		render={data => (
			<CareersListWithSizes data={data && remapJobData(data.allGreenhouseDepartment.edges)} />
		)}
	/>
)
