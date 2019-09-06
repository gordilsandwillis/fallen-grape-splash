/* eslint-disable camelcase */
const remapJobData = data => {
	const companies = {}
	const jobs = {}
	// const companies = data.filter(x => !x.node.parent_id) // all company objects
	// const departments = data.filter(x => x.node.parent_id) // all department objects
	data.forEach(({ node: { greenhouseId, name, parent_id, childrenGreenhouseJobPost } }) => {
		let restOfData = {}
		if (!parent_id) { // if company
			companies[greenhouseId] = {
				...companies[greenhouseId],
				id: greenhouseId.toString(),
				name,
			}
			restOfData = { ...restOfData,
				companyId: greenhouseId.toString(),
				companyName: name.replace(/(^\s+|\s+$)/g, '')
			}
		} else { // if department
			restOfData = { ...restOfData,
				departmentId: greenhouseId.toString(),
				departmentName: name.replace(/(^\s+|\s+$)/g, ''),
				companyId: parent_id.toString()
			}
			companies[parent_id] = {
				...companies[parent_id],
				id: parent_id.toString(),
				departments: {
					...(companies[parent_id] && companies[parent_id].departments),
					[greenhouseId]: {
						id: greenhouseId.toString(),
						name: name.replace(/(^\s+|\s+$)/g, '')
					},
				},
			}
		}
		childrenGreenhouseJobPost.forEach(({ job_id, title, location = {} }) => {
			jobs[job_id] = {
				...restOfData,
				...jobs[job_id],
				id: job_id.toString(),
				title,
				locationId: location.id.toString(),
				locationName: location.name.replace(/(^\s+|\s+$)/g, ''),
			}
		})
	})
	Object.keys(jobs).forEach(i => { jobs[i].companyName = companies[jobs[i].companyId].name })
	const companiesArray = Object.values(companies).filter(({ id }) => {
		let found = false // filter out companies with no jobs
		Object.values(jobs).forEach(({ companyId }) => { if (companyId.toString() === id.toString()) found = true })
		return found
	})
	return { jobs, companies: companiesArray }
}

export default remapJobData
