const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const APP_PATH = path.resolve(__dirname, 'src');

module.exports = {
	entry: APP_PATH,
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: process.env.NODE_ENV || 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js', 'jsx', '.json'],
	},
	devServer: { static: path.join(__dirname, 'src') },
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
					},
				},
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'css-modules-typescript-loader'],
			},
			{
				test: /\.(jpg|jpeg|png|gif|webp|svg|properties)$/,
				use: ['file-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ inject: true, template: path.join(APP_PATH, 'index.html') }),
		new ForkTsCheckerWebpackPlugin(),
	],
};
