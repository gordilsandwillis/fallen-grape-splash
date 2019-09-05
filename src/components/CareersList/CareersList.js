import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'
import Grid from 'src/components/Grid'
import Container from 'src/components/Container'
import Link from 'src/components/Link'
import Job from 'src/components/Job'
import Hr from 'src/components/Hr'
import ScrollEntrance from 'src/components/ScrollEntrance'
import { colors, typography } from 'src/styles'

const Wrapper = styled(Container)`
  color: ${ colors.black };
`

class CareersBlock extends Component {
	constructor (props) {
		super(props)
		this.state = {
			selectedCompanyId: null,
			selectedJobId: null,
			companyFilter: null,
			locationFilter: null,
			departmentFilter: null,
		}
	}

	render () {
		const { selectedJobId, companyFilter, locationFilter, departmentFilter } = this.state
		const { allDepartments } = this.props
		const companies = findCompanies(this.props.allDepartments)
		const departments = filterDepartments({ allDepartments, companyFilter, locationFilter, departmentFilter })
		return selectedJobId
			? <Job job={selectedJobId} />
			: (
				<Wrapper>
					{/* <Hero /> */}
					<ScrollEntrance>
						<Grid showOverlay={true} small='[6]' medium='[6] 2 [4]' large='[6] 2 [4]' >
						</Grid>
						<Hr full color={colors.black}/>
					</ScrollEntrance>
					<ScrollEntrance>
						{/* {!jobs.length
							? <h2>No Available Jobs</h2>
							: jobs.map(() => (
								<Job>
								</Job>
							))
						} */}
						<h1>selected company: {this.state.selectedCompanyId}</h1>
						<div>
							{companies && companies
								.map(({ id, name }) => <div onClick={() => this.setState({ selectedCompanyId: id })}>{name}</div>)
							}
						</div>
						<div>
							{}
						</div>
					</ScrollEntrance>
				</Wrapper>
			)
	}
}

const filterDepartments = ({ allDepartments, companyFilter, locationFilter, departmentFilter }) => {
	return allDepartments // TODO
}

const findCompanies = all => all.filter(x => !x.node.parent_id).map(x => ({ id: x.node.greenhouseId, name: x.node.name }))
const findCategories = (all, companyJobs) => all.filter(x => x)
const findJobs = (all, id) => all.filter(x => x.node.parent_id === id)

const parseJob = ({ job }) => {
}

export default () => (
	<StaticQuery
		query={graphql`
      query allDepartmentsQuery {
				departments: allGreenhouseDepartment {
					edges {
						node {
							name
							childrenGreenhouseJobPost {
								job_id
								title
							}
							parent_id
							greenhouseId
						}
					}
				}
      }
    `}
		render={data => (
			<CareersBlock allDepartments={data && data.departments.edges} />
		)}
	/>
)
