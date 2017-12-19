const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

// the clean options to use
let cleanOptions = {
  root:  path.resolve(__dirname, '../node_modules/react-simple-chatbot'),
}

module.exports = {
  entry: path.resolve(__dirname, 'lib/index'),
  output: {
    path: path.resolve(__dirname, '../node_modules/react-simple-chatbot/dist'),
    filename: 'react-simple-chatbot.js',
    publicPath: '../node_modules/react-simple-chatbot/dist/',
    library: 'ReactSimpleChatbot',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], cleanOptions),
    // new UglifyJsPlugin({
    //   comments: false,
    // }),
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
    ],
  },
};
