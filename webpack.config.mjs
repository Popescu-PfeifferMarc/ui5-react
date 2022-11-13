import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const APP_PATH = resolve(process.cwd(), 'src');
const DIST_PATH = resolve(process.cwd(), 'dist');
const PUBLIC_PATH = resolve(process.cwd(), 'public');
const INDEX_PATH = resolve(process.cwd(), 'index.html');

/** @type {import('webpack').Configuration} */
const webpackConfig = {
	entry: APP_PATH,
	output: {
		filename: 'bundle.js',
		path: DIST_PATH,
        publicPath: '/',
	},
	devtool: 'source-map',
	mode: process.env.NODE_ENV || 'development',
	resolve: {
		extensions: ['.tsx', '.ts', '.js', 'jsx', '.json'],
	},
	devServer: {
		static: APP_PATH,
		historyApiFallback: true,
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
		new CopyPlugin({
			patterns: [
				{
					from: PUBLIC_PATH,
					to: '',
				},
			],
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: INDEX_PATH,
		}),
		new ForkTsCheckerWebpackPlugin(),
	],
};

export default webpackConfig;
