
/* eslint-disable camelcase */
import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Hr from 'src/components/Hr'
import ScrollEntrance from 'src/components/ScrollEntrance'
import ContentBlock from 'src/components/ContentBlock'
import Dropdown from 'src/components/Dropdown'
import Link from 'src/components/Link'
import { colors, typography, animations, mediaQueries as mq } from 'src/styles'

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

const ResponsiveRightAlign = styled.div`
 max-width: 300;
 ${ mq.mediumAndUp } {
	 margin-left: auto;
 }
`

const JobFilters = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	align-items: center;
	flex-wrap: nowrap;
	justify-content: flex-start;

	${ mq.largeAndBelow } {
		display: none;
		visibility: hidden;
	}
`

const JobButton = styled.div`
	margin-right: 50px;
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

const MobileOnly = styled.span`
	display: none;
	visibility: hidden;
	${ mq.largeAndBelow } {
		display: inherit;
		visibility: visible;
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
	${ typography.responsiveStyles('padding-bottom', 20, 20, 20, 20) }
`

const LocationName = styled.div`
	${ typography.body };
	color: ${ colors.grey };
	padding-top:3px;
	padding-bottom:3px;
`

const Grey = styled.span`
	color: ${ colors.grey };
`

class CareersList extends Component {
	constructor (props) {
		super(props)
		this.state = {
			officeFilter: null,
			departmentFilter: null,
			companyFilter: null,
		}
	}

	handleChangeFilter = (name, x) => {
		this.setState({ [name]: x })
	}

	render () {
		const { officeFilter, departmentFilter, companyFilter } = this.state
		const { unfilteredOffices, unfilteredDepartments } = this.props
		const allCompaniesDictionary = unfilteredDepartments.reduce((acc, department, departmentIndex) => {
			department.jobs && department.jobs.forEach((job, jobIndex) => {
				try {
					job.metadata.forEach(m => {
						if (m.name === 'Company') {
							acc[m.value] = m.value // add to array of companies
							unfilteredDepartments[departmentIndex].jobs[jobIndex].company = m.value // add field to the unfilteredDepartments object
						}
					})
				} catch {}
			})
			return acc
		}, {})
		const allCompanies = allCompaniesDictionary && Object.values(allCompaniesDictionary)
		const allCompaniesForDropdown = [{ value: null, label: 'All Jobs' }].concat(allCompanies.map(x => ({ value: x, label: x })))
		const allDepartments = Object.values(
			unfilteredDepartments.filter(x => (x.jobs && x.jobs.length))
				.reduce((acc, x) => {
					let jobs = []
					if ((acc[x.name.trim()] && acc[x.name.trim()].jobs)) jobs = jobs.concat(acc[x.name.trim()].jobs)
					if (x.jobs) jobs = jobs.concat(x.jobs)
					acc[x.name.trim()] = {
						ghid: x.ghid,
						name: x.name.trim(),
						jobs: jobs
					}
					return acc
				}, {})
		)
		const departmentsWithCompanyFiltered = allDepartments
			.reduce((acc, d) => {
				if (companyFilter) {
					const jobs = d.jobs.filter(j => {
						const found = !companyFilter || j.company === companyFilter
						if (found) return true
					})
					acc = [...acc, { ...d, jobs }]
				} else {
					acc = [...acc, d]
				}
				return acc
			}, [])
			.filter(d => d.jobs && d.jobs.length)
		const allOffices = unfilteredOffices.filter(x => (x.jobs && x.jobs.length))
		const officesForDropdown = [{ value: null, label: 'All Locations' }].concat(allOffices.map(x => ({ value: x.name.trim(), label: x.name.trim() })))
		const departmentsForDropdown = [{ value: null, label: 'All Departments' }].concat(departmentsWithCompanyFiltered.map(x => ({ value: x.name.trim(), label: x.name.trim() })))
		const departmentsWithJobsFiltered = departmentsWithCompanyFiltered
			.filter(d => (!departmentFilter || departmentFilter.value === d.name))
			.reduce((acc, d) => {
				if (officeFilter || companyFilter) {
					const jobs = d.jobs.filter(j => {
						const found = !officeFilter || (j.offices && j.offices.filter(o => o.name === officeFilter.value))
						if (!officeFilter || found.length) return true
					})
					acc = [...acc, { ...d, jobs }]
				} else {
					acc = [...acc, d]
				}
				return acc
			}, [])
			.filter(d => (d.jobs && d.jobs.length))

		return (
			<Wrapper>
				<ScrollEntrance>
					<Container>
						<ContentBlock>
							<Grid small='[1]' medium='[1] [1]' large='[1] [1]'>
								<div style={{ alignSelf: 'center' }}>
									<JobFilters>
										{/* only appears on desktop */}
										<JobButton tabindex="-1" underlined={!companyFilter} onClick={() => this.setState({ companyFilter: null, departmentFilter: null, officeFilter: null })}>All Jobs</JobButton>
										{allCompanies && allCompanies.map(company =>
											<JobButton
												key={company}
												tabindex="-1"
												underlined={companyFilter === company}
												onClick={() => this.setState({ companyFilter: company, departmentFilter: null, officeFilter: null })}
											>
												{company}
											</JobButton>
										)}
									</JobFilters>
									<MobileOnly>
										{/* only appears on mobile */}
										<Dropdown
											value={companyFilter ? { value: companyFilter, label: companyFilter } : null}
											onChange={x => { this.handleChangeFilter('companyFilter', x.value); this.setState({ departmentFilter: null, officeFilter: null }) }}
											clearValue={() => this.handleChangeFilter('companyFilter', null)}
											title="All Jobs"
											items={allCompaniesForDropdown}
										/>
									</MobileOnly>
								</div>
								<div>
									<ResponsiveRightAlign>
										<Grid small='[1]' medium='[1] [1]' large='[1] [1]'>
											<Dropdown
												value={officeFilter}
												onChange={x => this.handleChangeFilter('officeFilter', x.value ? x : null)}
												clearValue={() => this.handleChangeFilter('officeFilter', null)}
												title="Location"
												items={officesForDropdown}
												rightAlign
											/>
											<Dropdown
												value={departmentFilter}
												onChange={x => this.handleChangeFilter('departmentFilter', x.value ? x : null)}
												clearValue={() => this.handleChangeFilter('departmentFilter', null)}
												title="Department"
												items={departmentsForDropdown}
												rightAlign
											/>
										</Grid>
									</ResponsiveRightAlign>
								</div>
							</Grid>
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
														{j.title && <JobName>{j.title} <Grey>{j.company && `at ${ j.company }`}</Grey></JobName>}
														{j.offices &&
															<LocationName>
																{j.offices.map((o, i) => (
																	o.name + ((i < j.offices.length - 1) ? ', ' : '')))
																}</LocationName>}
														<Link to={j.absolute_url} external><span>LEARN MORE</span></Link>
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
								absolute_url
								metadata {
									name
									value
								}
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
