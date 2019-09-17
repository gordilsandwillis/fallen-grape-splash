const Promise = require(`bluebird`)
const path = require(`path`)
const slug = require(`slug`)
const slash = require(`slash`)

const createContentfulPages = (graphql, createPage) => new Promise((resolve, reject) => {
	graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            id
            slug
          }
        }
			}
			allGreenhouseJob {
				edges {
					node {
						id
						title
						greenhouseId: gh_Id
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
		console.log(result)
		result.data.allContentfulPage.edges.forEach(edge => {
			const template = pageTemplateMap[edge.node.type] || pageTemplateMap['page']
			createPage({
				path: `${ edge.node.slug }`,
				component: template,
				context: {
					id: edge.node.id
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
