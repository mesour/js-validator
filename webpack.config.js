var	path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.jsx'),
	output: {
		library: 'Mesour validator',
		libraryTarget: 'umd',

		path: path.resolve(__dirname, 'dist'),
		filename: 'mesour.validator.js'
	},
	module: {
		loaders: [
			{
				test: /.jsx$/,
				loader: 'babel',
				include: path.resolve(__dirname, 'src')
			}
		]
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
	},
	devtool: 'eval'
};