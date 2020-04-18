module.exports = {
	mode: 'development',
	entry: {
		app: ['./src/app.js']
	},
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		rules: [{
			test: /\.txt$/i,
			use: [{
				loader: 'raw-loader',
				options: { esModule: false }
			}]
		}]
	}
}
