import { resolve, join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const APP_PATH = resolve(process.cwd(), 'src');
const DIST_PATH = resolve(process.cwd(), 'dist');

/** @type {import('webpack').Configuration} */
const webpackConfig = {
	entry: APP_PATH,
	output: {
		filename: 'bundle.js',
		path: DIST_PATH,
	},
	mode: process.env.NODE_ENV || 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js', 'jsx', '.json'],
	},
	devServer: {
		static: APP_PATH,
	},
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
		new HtmlWebpackPlugin({
			inject: true,
			template: join(APP_PATH, 'index.html'),
		}),
		new ForkTsCheckerWebpackPlugin(),
	],
};

export default webpackConfig;
