const Promise = require(`bluebird`)
const path = require(`path`)

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
    }
  `).then(result => {
		if (result.errors) {
			reject(result.errors)
		}

		const pageTemplateMap = {
			page: path.resolve('./src/templates/PageTemplate.jsx'),
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

		resolve()
	})
})

module.exports = createContentfulPages
