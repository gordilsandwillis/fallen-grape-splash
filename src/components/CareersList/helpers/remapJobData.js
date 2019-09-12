/* eslint-disable camelcase */
const remapJobData = data => {
	let companies = {}

	data.filter(x => !x.node.parent_id) // companies
		.forEach(({ node: { greenhouseId, name, childrenGreenhouseJobPost } }) => {
			companies[greenhouseId] = {
				...companies[greenhouseId],
				companyId: greenhouseId.toString(),
				companyName: name,
				departments: {
					...(companies[greenhouseId] && companies[greenhouseId].departments),
				}
			}
			childrenGreenhouseJobPost.forEach(({ job_id, title, location = {} }, index) => {
				companies[greenhouseId].numberOfJobs = (companies[greenhouseId].numberOfJobs || 0) + 1
				companies[greenhouseId].departments.noDepartment = {
					...companies[greenhouseId].departments.noDepartment,
					numberOfJobs: ((companies[greenhouseId].departments.noDepartment && companies[greenhouseId].departments.noDepartment.numberOfJobs) || 0) + 1,
					jobs: {
						...(companies[greenhouseId].departments.noDepartment && companies[greenhouseId].departments.noDepartment.jobs),
						[job_id]: {
							jobId: job_id,
							jobName: title,
							locationName: location.name.replace(/(^\s+|\s+$)/g, ''),
							departmentName: null,
							companyId: greenhouseId,
							companyName: name,
						}
					}
				}
			})
		})
	data.filter(x => x.node.parent_id) // departments
		.forEach(({ node: { greenhouseId, parent_id, name, childrenGreenhouseJobPost } }) => {
			name = name.replace(/(^\s+|\s+$)/g, '')
			companies[parent_id].departments[name] = {
				...companies[parent_id].departments[name],
				departmentName: name,
				companyId: parent_id,
				companyName: companies[parent_id].companyName,
			}
			childrenGreenhouseJobPost.forEach(({ job_id, title, location = {} }) => {
				companies[parent_id].numberOfJobs = (companies[parent_id].numberOfJobs || 0) + 1
				companies[parent_id].departments[name].numberOfJobs = (companies[parent_id].departments[name].numberOfJobs || 0) + 1
				companies[parent_id].departments[name].jobs = {
					...companies[parent_id].departments[name].jobs,
					[job_id]: {
						jobId: job_id,
						jobName: title,
						locationName: location.name && location.name.replace(/(^\s+|\s+$)/g, ''),
						departmentName: name,
						companyId: parent_id,
						companyName: companies[parent_id].companyName
					}
				}
			})
		})
	// Object.keys(companies).forEach(cKey => {
	// 	companies[cKey].departments = Object.values(companies[cKey].departments.forEach).forEach(dKey => {

	// 		})
	// 	})
	// })
	return { companies }
}
// 	data.forEach(({ node: { greenhouseId, name, parent_id, childrenGreenhouseJobPost } }) => {
// 		let restOfData = {}
// 		if (!parent_id) { // if company
// 			companies[greenhouseId] = {
// 				...companies[greenhouseId],
// 				id: greenhouseId.toString(),
// 				name,
// 			}
// 			restOfData = { ...restOfData,
// 				companyId: greenhouseId.toString(),
// 				companyName: name,
// 			}
// 		} else { // if department
// 			restOfData = { ...restOfData,
// 				departmentName: name,
// 				companyId: parent_id.toString()
// 			}
// 			companies[parent_id] = {
// 				...companies[parent_id],
// 				id: parent_id.toString(),
// 				departments: {
// 					...(companies[parent_id] && companies[parent_id].departments),
// 					[greenhouseId]: {
// 						id: greenhouseId.toString(),
// 						name: name,
// 					},
// 				},
// 			}
// 		}
// 		childrenGreenhouseJobPost.forEach(({ job_id, title, location = {} }) => {
// 			jobs[job_id] = {
// 				...restOfData,
// 				...jobs[job_id],
// 				id: job_id.toString(),
// 				title,
// 				locationName: location.name,
// 			}
// 		})
// 	})
// 	Object.keys(jobs).forEach(i => { jobs[i].companyName = companies[jobs[i].companyId].name })
// 	const companiesArray = Object.values(companies).filter(({ id }) => {
// 		let found = false // filter out companies with no jobs
// 		Object.values(jobs).forEach(({ companyId }) => { if (companyId.toString() === id.toString()) found = true })
// 		return found
// 	})
// 	Object.values(jobs).forEach(job => {
// 		if (!result[job.companyId]) {
// 			result[job.companyId] =
// 		result[job.companyId].push(job)
// 		}
// 	})
// 	return { jobs, companies: companiesArray }
// }

export default remapJobData
