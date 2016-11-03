var path = require('path');

module.exports = {
	context: __dirname,
	entry  : {
		sample: './page/sample'
	},
	output : {
		path         : path.resolve(__dirname, 'dist'),
		filename     : '[name].bundle.js',
		chunkFilename: '[id].chunk.js',
		library      : 'Bundle'
	},
	resolve: {
		modulesDirectories: [
			'node_modules',
			'module'
		]
	}
}