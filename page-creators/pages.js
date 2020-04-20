const Promise = require(`bluebird`)
const path = require(`path`)

const createPages = (graphql, createPage) => new Promise((resolve, reject) => {
	graphql(`
		{
			allContentfulPage {
				edges {
					node {
						id
						internalName
						slug
					}
				}
			}
		}
	`).then(result => {
		if (result.errors) {
			reject(result.errors)
		}

		const template = path.resolve('./src/templates/PageTemplate.jsx')

		result.data.allContentfulPage.edges
			.filter(edge => !edge.node.internalName.includes('PLACEHOLDER'))
			.forEach(edge => {
				createPage({
					path: `${ edge.node.slug }`,
					component: template,
					context: {
						id: edge.node.id
					},
				})
			})

		resolve()
	})
})

module.exports = createPages
