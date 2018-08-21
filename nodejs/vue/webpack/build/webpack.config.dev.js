'use strict'

const webpack = require( 'webpack' )
const { VueLoaderPlugin } = require( 'vue-loader' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const CopyWebpackPlugin = require( 'copy-webpack-plugin' )
const path = require( 'path' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )

function resolve( dir ) {
	return path.resolve( __dirname, '..', dir )
}

module.exports = {
	mode: 'development',
	entry: [
		'./src/app.js'
	],
	devServer: {
		hot: true, // enables hot module replacement
		watchOptions: {
			poll: true
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/, // file type to be processed by loader
				use: 'vue-loader' // the loader, splits out html, js, css, etc. to separate files
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.styl(us)?$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'stylus-loader'
				]
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.(js|vue)$/,
				use: 'eslint-loader',
				enforce: 'pre' // enables pre-loading and will run before other loaders
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'index.html',
			inject: true
		}),
		new CopyWebpackPlugin([{
			from: resolve( 'static/img' ), // all copy all images in this directory
			to: resolve( 'dist/static/img' ), // paste all images into this directory
			toType: 'dir'
		}]),
		new MiniCssExtractPlugin({
			filename: 'main.css'
		})
	]
}