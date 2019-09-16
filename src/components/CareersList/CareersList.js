import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import withSizes from 'react-sizes'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Job from 'src/components/Job'
import Hr from 'src/components/Hr'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ContentBlock from 'src/components/ContentBlock'
import Dropdown from 'src/components/Dropdown'
import Link from 'src/components/Link'
import { colors, animations, typography, mediaQueries as mq } from 'src/styles'
import remapJobData from './helpers/remapJobData'

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
	color: ${ ({ underlined }) => underlined ? colors.black : colors.grey };
	transition: color ${ animations.mediumSpeed } ease-in-out;
  &:after {
    background: currentColor;
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    bottom: -5px;
    opacity: 0;
    transition: transform ${ animations.mediumSpeed } ease-in-out,
			color ${ animations.mediumSpeed } ease-in-out,
			opacity ${ animations.mediumSpeed } ease-in-out;
  }
	&:after {
      ${ ({ underlined }) =>
		underlined &&
		` transform: translate3d(0,-5px, 0);
							 opacity: 1;
					 color: ${ colors.black }
			 ` }
    }
  &:hover, &:focus {
		outline: none;
		border-bottom-color: currentColor;
		color: ${ colors.black };
    &:after {
      ${ ({ underlined }) =>
		!underlined &&
		` transform: translate3d(0,-5px, 0);
			 		opacity: 1;
			 ` }
    }
  }

	cursor: pointer;

`

const JobName = styled.div`
	${ typography.h2 };
`

const Column = styled.div`
	display:flex;
	flex-direction:column;
	align-items:flex-end;
	/* @media (min-width: ${ mq.smallBreakpoint }px) {

	} */
`

const DropdownsContainer = styled.div`
	width: 100%;
`

const JobItem = styled.div`
${ typography.responsiveStyles('padding-bottom', 20, 30, 40, 40) }
`
const DepartmentName = styled.div`
	${ typography.body }
	text-transform: uppercase;
	${ typography.responsiveStyles('padding-bottom', 20, 30, 40, 40) }
`

const LocationName = styled.div`
	${ typography.body };
	color: ${ colors.grey };
	padding-top:3px;
	padding-bottom:3px;
`

const AlignRight = styled.div`
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

	filterByDepartment = jobs => Object.values(jobs).filter(job => {
		const { departmentFilter } = this.state
		if (departmentFilter && job.departmentName !== departmentFilter.value) return false
		return true
	})

	filterByLocation = jobs => Object.values(jobs).filter(job => {
		const { locationFilter } = this.state
		if (locationFilter && job.locationName !== locationFilter.value) return false
		return true
	})

	handleChangeFilter = (name, x) => {
		this.setState({ [name]: x })
	}
	normalizeDepartments = companies => (
		Object.values(companies).reduce((acc, x) => {
			Object.values(x.departments).forEach(y => {
				acc[y.departmentName] = y
			})
			return acc
		}, {})
	)

	getDepartmentDropdownItems = departments => Object.values(departments)
		.filter(({ jobs }) => jobs && Object.keys(jobs).length > 0)
		.map(({ departmentName }) => ({ label: departmentName, value: departmentName }))

	getLocationDropdownItems = departments => Object.values(
		departments && Object.keys(departments)
			.reduce((acc, dKey) => {
				if (departments[dKey].jobs && Object.keys(departments[dKey].jobs).length > 0) {
					Object.values(departments[dKey].jobs)
						.forEach(j => {
							acc[j.locationName] = { label: j.locationName, value: j.locationName }
						})
				}
				return acc
			}, {})
	)

	render () {
		const { selectedJobId, companyFilter, locationFilter, departmentFilter } = this.state
		const { data, windowWidth } = this.props
		let { companies } = data
		companies = Object.values(companies).reduce((acc, c) => {
			if (c.numberOfJobs) acc[c.companyId] = c
			return acc
		}, {})
		let departments = companyFilter ? companies[companyFilter.value].departments : this.normalizeDepartments(companies)
		let departmentsForDepartmentDropdown = departments
		let departmentsForLocationDropdown = departments
		if (locationFilter) {
			departments = Object.values(departments).reduce((acc, d) => {
				let jobs
				if (d.jobs && Object.keys(d.jobs).length > 0) {
					jobs = Object.values(d.jobs).reduce((acc2, j) => {
						if (j.locationName === locationFilter.value) acc2[j.jobId] = j
						return acc2
					}, {})
					acc[d.departmentName] = {
						...departments[d.departmentName],
						jobs
					}
				}
				return acc
			}, {})
			departmentsForDepartmentDropdown = departments
		}
		if (departmentFilter) {
			departments = { [departmentFilter.value]: departments[departmentFilter.value] }
			departmentsForLocationDropdown = { [departmentFilter.value]: departmentsForLocationDropdown[departmentFilter.value] }
		}

		const departmentDropdownItems = this.getDepartmentDropdownItems(departmentsForDepartmentDropdown)
		const locationDropdownItems = this.getLocationDropdownItems(departmentsForLocationDropdown)
		const companyDropdownItems = Object.values(companies).map(({ companyId, companyName }) => ({ value: companyId, label: companyName }))
		// if companies is more than, or if windowidth is smaller than
		return selectedJobId
			? <Job job={selectedJobId} />
			: (
				<Wrapper>
					<ScrollEntrance>
						<Container>
							<ContentBlock>
								<Grid small='[6]' medium='[3] 3 [6]' large='[6] 2 [4]' >
									{ (windowWidth > mq.mediumBreakpoint)
										? (
											<React.Fragment>
												{windowWidth > mq.largeBreakpoint
													? <JobFilters>
														<JobButton tabindex="-1" underlined={!companyFilter} onClick={() => this.setState({ companyFilter: null, departmentFilter: null, locationFilter: null })}>All Jobs</JobButton>
														{companies && companyDropdownItems.map(({ value, label }) => <JobButton key={value} tabindex="-1" underlined={(companyFilter && companyFilter.value) === value} onClick={() => this.setState({ companyFilter: { label, value }, departmentFilter: null, locationFilter: null })}>{label}</JobButton>)}
													</JobFilters>
													: <Dropdown
														value={companyFilter}
														onChange={x => this.setState({ companyFilter: x || null, departmentFilter: null, locationFilter: null })}
														clearValue={() => this.setState({ companyFilter: null, departmentFilter: null, locationFilter: null })}
														align='left'
														title="All Jobs"
														items={companyDropdownItems}
													/>}
												<Grid small='[4]' medium='[3] [3]' large='[3] [3]' >
													<AlignRight>
														<Dropdown
															value={locationFilter}
															onChange={x => this.handleChangeFilter('locationFilter', x)}
															clearValue={() => this.handleChangeFilter('locationFilter', null)}
															align='right'
															title="Location"
															items={locationDropdownItems}
														/>
													</AlignRight>
													<AlignRight>
														<Dropdown
															value={departmentFilter}
															onChange={x => this.handleChangeFilter('departmentFilter', x)}
															clearValue={() => this.handleChangeFilter('departmentFilter', null)}
															align='right'
															title="Department"
															items={departmentDropdownItems}
														/>
													</AlignRight>
												</Grid>
											</React.Fragment>
										) : (
											<Column>
												<DropdownsContainer>
													<Dropdown
														value={companyFilter}
														onChange={x => this.setState({ companyFilter: (x || null), departmentFilter: null, locationFilter: null })}
														clearValue={() => this.setState({ companyFilter: null, departmentFilter: null, locationFilter: null })}
														align='left'
														title="All Jobs"
														items={companyDropdownItems}
													/>
													<Dropdown
														value={locationFilter}
														onChange={x => this.handleChangeFilter('locationFilter', x)}
														clearValue={() => this.handleChangeFilter('locationFilter', null)}
														align='left'
														title="Location"
														items={locationDropdownItems}
													/>
													<Dropdown
														value={departmentFilter}
														onChange={x => this.handleChangeFilter('departmentFilter', x)}
														clearValue={() => this.handleChangeFilter('departmentFilter', null)}
														align='left'
														title="Department"
														items={departmentDropdownItems}
													/>
												</DropdownsContainer>
											</Column>
										)
									}
								</Grid>
							</ContentBlock>
						</Container>
						<Hr full color={colors.black}/>
						{departments && Object.values(departments).filter(({ jobs }) => jobs && Object.keys(jobs).length > 0).map(({ departmentName, id, jobs }, index) => (
							<React.Fragment key={(departmentName || 'noDepartment')}>
								{index > 0 && <Hr color={colors.black}/>}
								<Container>
									<ContentBlock>
										<Grid small="[6]" medium="[4] [8]" large="[4] [8]">
											<DepartmentName>{departmentName}</DepartmentName>
											<div>
												{(jobs && Object.keys(jobs).length > 0) && Object.values(jobs).map(({ jobId, jobName, locationName, companyId, companyName }) => (
													<JobItem key={jobId}>
														<div>
															{jobName && <JobName>{jobName}{companyName &&	 <span> at {companyName}</span>}</JobName>}
															{locationName && <LocationName>{locationName}</LocationName>}
															<Link to={`careers/${ jobId }`} fakeExternal><span>LEARN MORE</span></Link>
														</div>
													</JobItem>
												))}
											</div>
										</Grid>
									</ContentBlock>
								</Container>
							</React.Fragment>
						))}
					</ScrollEntrance>
					<div style={{ height: 60 }}/>
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
