var path = require('path');
var webpack = require('webpack');
const pxtorem = require('postcss-pxtorem');
//const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');


module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
//      root: __dirname,
      modulesDirectories: [
        'node_modules',
        path.join(__dirname, '../node_modules'),
        './src',
      ],
  extensions: ['', '.web.jsx', '.web.js', '.js', '.jsx', '.json']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
    },
   {
      test: /\.css$/,
      loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
    },
    {
      test: /\.(svg)$/i,
      loader: 'svg-sprite-loader',
      include: [
        require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. svg files of antd-mobile
        // path.resolve(__dirname, 'src/my-project-svg-foler'),  // folder of svg files in your project
      ]
    },

  ],
    rules: [
      {
        exclude: [
          /\.less$/,
          /\.svg$/,
        ]
      },
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        options: {
          plugins: [
            ['import', { libraryName: 'antd-mobile', style: true }],
          ],
          cacheDirectory: true,
        }
      },
      // It is generally necessary to use the Icon component, need to configure svg-sprite-loader
      {
        test: /\.(svg)$/i,
        loader: 'svg-sprite-loader',
        include: [
          require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. svg files of antd-mobile
          // path.resolve(__dirname, 'src/my-project-svg-foler'),  // folder of svg files in your project
        ]
      },
      {
        test: /\.less$/,
        use: [
          require.resolve('style-loader'),
          require.resolve('css-loader'),
        {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss', // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
                }),
                pxtorem({ rootValue: 100, propWhiteList: [] })
              ],
            },
          },
          {
            loader: require.resolve('less-loader'),
            options: {
              modifyVars: { "@primary-color": "#1DA57A" },
            },
          },
        ],
      }
    ]
  }
};
