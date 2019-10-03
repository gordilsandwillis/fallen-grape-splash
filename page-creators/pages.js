const Promise = require(`bluebird`)
const path = require(`path`)
const slug = require(`slug`)
const slash = require(`slash`)

const createContentfulPages = (graphql, createPage) => new Promise((resolve, reject) => {
	graphql(`
    query {
			allContentfulSite {
				edges {
					node {
						pages {
							id
							slug
						}
					}
				}
			}
			allGreenhouseJob {
				edges {
					node {
						id
						title
						greenhouseId: gh_Id
						metadata {
							name
							value
						}
						location {
							name
						}
						departments {
							id
							name
						}
					}
				}
			}	
    }
  `).then(result => {
		if (result.errors) {
			reject(result.errors)
		}

		const pageTemplateMap = {
			page: path.resolve('./src/templates/PageTemplate.jsx'),
			job: path.resolve('./src/templates/JobTemplate.jsx')
		}
		result.data.allContentfulSite.edges[0].node.pages.forEach(page => {
			const template = pageTemplateMap[page.type] || pageTemplateMap['page']
			createPage({
				path: `${ page.slug }`,
				component: template,
				context: {
					id: page.id
				},
			})
		})
		result.data.allGreenhouseJob.edges.forEach(edge => {
			const template = pageTemplateMap['job']
			createPage({
				path: `/careers/${ slug(edge.node.greenhouseId) }/`,
				component: slash(template),
				context: {
					id: edge.node.greenhouseId
				}
			})
		})

		resolve()
	})
})

module.exports = createContentfulPages
