/* eslint-disable camelcase */
import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Job from 'src/components/Job'
import Hr from 'src/components/Hr'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ContentBlock from 'src/components/ContentBlock'
import Dropdown from 'src/components/Dropdown'
import Link from 'src/components/Link'
import { colors, typography } from 'src/styles'

const Wrapper = styled.div`
  color: ${ colors.black };
	#job-filters {
		flex: 1 !important;
	display: flex !important;
	flex-direction: row !important;
	align-items: center !important;
	flex-wrap: nowrap !important;
	justify-content: space-between !important;
	}
`

const JobName = styled.div`
	${ typography.h2 };
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

class CareersList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			selectedJobId: null,
			officeFilter: null,
			departmentFilter: null,
		}
	}

	handleComplexDropdownChange = ({ value, label, category, nameInState }) => {}

	filterByDepartment = jobs => jobs.filter(job => {
		const { departmentFilter } = this.state
		if (departmentFilter && job.departmentName !== departmentFilter.value) return false
		return true
	})

	filterByLocation = jobs => jobs.filter(job => {
		const { officeFilter } = this.state
		if (officeFilter && job.locationName !== officeFilter.value) return false
		return true
	})

	handleChangeFilter = (name, x) => {
		this.setState({ [name]: x })
	}

	getDepartmentDropdownItems = departments => Object.values(departments)
		.filter(({ jobs }) => jobs && jobs.length > 0)
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
		const { selectedJobId, officeFilter, departmentFilter } = this.state
		const { unfilteredOffices, unfilteredDepartments } = this.props
		const allDepartments = unfilteredDepartments.filter(x => (x.jobs && x.jobs.length))
		const allOffices = unfilteredOffices.filter(x => (x.jobs && x.jobs.length))
		const officesForDropdown = allOffices.map(x => ({ value: x.ghid, label: x.name }))
		const departmentsForDropdown = allDepartments.map(x => ({ value: x.ghid, label: x.name }))
		const departmentsWithJobsFiltered = allDepartments
			.filter(d => (!departmentFilter || departmentFilter.value === d.ghid))
			.reduce((acc, d) => {
				if (officeFilter) {
					const jobs = d.jobs.filter(j => {
						const found = j.offices && j.offices.filter(o => o.ghid === officeFilter.value)
						if (found && found.length) return true
					})
					acc = [...acc, { ...d, jobs }]
				} else {
					acc = [...acc, d]
				}
				return acc
			}, [])
			.filter(d => (d.jobs && d.jobs.length))

		return selectedJobId
			? <Job job={selectedJobId} />
			: (
				<Wrapper>
					<ScrollEntrance>
						<Container>
							<ContentBlock>
								<div style={{ marginLeft: 'auto', width: 300 }}>
									<Grid small='[1]' medium='[1] [1]' large='[1] [1]'>
										<Dropdown
											value={officeFilter}
											onChange={x => this.handleChangeFilter('officeFilter', x)}
											clearValue={() => this.handleChangeFilter('officeFilter', null)}
											align='left'
											title="Location"
											items={officesForDropdown}
										/>
										<Dropdown
											value={departmentFilter}
											onChange={x => this.handleChangeFilter('departmentFilter', x)}
											clearValue={() => this.handleChangeFilter('departmentFilter', null)}
											align='left'
											title="Department"
											items={departmentsForDropdown}
										/>
									</Grid>
								</div>
							</ContentBlock>
						</Container>
						<Hr full color={colors.black}/>
						{departmentsWithJobsFiltered && departmentsWithJobsFiltered.map(({ name, ghid, jobs }, index) => (
							<React.Fragment key={(ghid + index)}>
								{index > 0 && <Hr color={colors.black}/>}
								<Container>
									<ContentBlock>
										<Grid small="[6]" medium="[4] [8]" large="[4] [8]">
											<DepartmentName>{name}</DepartmentName>
											<div>
												{(jobs && jobs.length > 0) && jobs.map(j => (
													<JobItem key={j.ghid}>
														<div>
															{j.title && <JobName>{j.title}</JobName>}

															{j.offices &&
															<LocationName>
																{j.offices.map((o, i) => (
																	o.name + ((i < j.offices.length - 1) ? ', ' : '')))
																}</LocationName>}
															<Link to={`careers/${ j.ghid }`} fakeExternal><span>LEARN MORE</span></Link>
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

export default () => (
	<StaticQuery
		query={graphql`
      query allJobsQuery {
				allGreenhouseDepartment {
					edges {
						node {
							ghid: gh_Id
							name
							jobs {
								title
								ghid: gh_Id
								offices {
									name
									ghid: gh_Id
								}
							}
						}
					}
				}
				allGreenhouseOffice {
					edges {
						node {
							ghid: gh_Id
							name
							jobs {
								ghid: gh_Id
							}
						}
					}
				}
			}
    `}
		render={data => (
			<CareersList
				unfilteredOffices={(data && data.allGreenhouseOffice) && data.allGreenhouseOffice.edges.map(x => x.node)}
				unfilteredDepartments={(data && data.allGreenhouseDepartment) && data.allGreenhouseDepartment.edges.map(x => x.node)}
			/>
		)}
	/>
)
