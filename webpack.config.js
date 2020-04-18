module.exports = {
	mode: 'development',
	entry: {
		app: ['./src/app.js']
	},
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	}
}
