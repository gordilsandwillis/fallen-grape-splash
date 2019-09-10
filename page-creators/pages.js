const Promise = require(`bluebird`)
const path = require(`path`)

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
    }
  `).then(result => {
		if (result.errors) {
			reject(result.errors)
		}
		console.log(JSON.stringify(result, null, 4))

		const pageTemplateMap = {
			page: path.resolve('./src/templates/PageTemplate.jsx'),
			// careers: path.resolve('./src/templates/Careers.jsx')
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

		resolve()
	})
})

module.exports = createContentfulPages
