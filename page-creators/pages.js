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
			allGreenhouseJobPost {
				edges {
					node {
						id
						job_id
						slug
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
		result.data.allGreenhouseJobPost.edges.forEach(edge => {
			const template = pageTemplateMap['job']
			createPage({
				path: `/careers/${ slug(edge.node.job_id) }/`,
				component: slash(template),
				context: {
					id: edge.node.job_id
				}
			})
		})

		resolve()
	})
})

module.exports = createContentfulPages
