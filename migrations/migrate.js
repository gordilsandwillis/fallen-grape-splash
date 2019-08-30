const path = require('path')
const fs = require('fs')
const runMigration = require('contentful-migration/built/bin/cli').runMigration
const argv = require('yargs')
	.version('v')
	.alias('v', 'version')
	.help('h')
	.alias('h', 'help')
	.usage('Usage: yarn migrate [options]')
	.example('yarn migrate  -s <contentful-space> -t <management-token> -n <filename>')
	.alias('s', 'space')
	.describe('s', 'CONTENTFUL_SPACE, this will use .env.developement variable if not present')
	.alias('t', 'token')
	.describe('t', 'CONTENTFUL_MANAGEMENT_ACCESS_TOKEN, this will use .env.developement variable if not present')
	.alias('n', 'name')
	.describe('n', 'name of the migration file, if this arg is not present it will migrate all the files in the contenful folder')
	.argv

require('dotenv').config({
	path: path.resolve('.env.development'),
})

const spaceId = argv.space ? argv.space : process.env.CONTENTFUL_SPACE
const token = argv.token ? argv.token : process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN

const options = {
	spaceId: spaceId,
	accessToken: token,
	yes: true
}

const migrationFolder = './migrations/contentful'

const migrationOne = async () => {
	await runMigration({
		...options,
		...{ filePath: path.resolve(`${ migrationFolder }/${ argv.name }`) }
	})
}

const migrationAll = async () => {
	fs.readdir(migrationFolder, (err, files) => {
		if (err) {
			return
		}
		files.map(async file => {
			await runMigration({
				...options,
				...{ filePath: path.resolve(`${ migrationFolder }/${ file }`) }
			})
		})
	})
}

if (argv.name) {
	migrationOne()
} else {
	migrationAll()
}
