/* jshint esversion: 6 */

const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader" // Webpack helper to transform your JavaScript dependencies (for example, when you import your components into other components) with Babel. Options for this is in .babelrc.
        }
      },
      {
        test: /\.css$/,
        use: [ // order is important, webpack uses loaders from last element to first element
          {
            loader: "style-loader" // injects css into the DOM
          },
          {
            loader: "css-loader",
            options: { // these options enable modular CSS, which means class name will be scoped locally and specific to only the component in question
              modules: true, // 'true' enables modular CSS
              importLoaders: 1, // congifures how many loaders before css-loader should be applied, for example, sass-loader would have to come before css-loader
              localIdentName: "[name]_[local]_[hash:base64]", // configure the generated identification; [name] is name of component, [local] is the name of your class or id; [hash:base64] is the randomly generated hash which will be unique in every component's CSS
              sourceMap: true,
              minimize: true
            }
          }
        ] 
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
};