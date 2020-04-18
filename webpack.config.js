module.exports = {
	mode: 'development',
	entry: {
		app: ['./res/js/app.js']
	},
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	}
}
