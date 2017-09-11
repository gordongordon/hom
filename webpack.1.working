var path = require("path");
var webpack = require("webpack");
const pxtorem = require("postcss-pxtorem");

const svgDirs = [
  require.resolve("antd-mobile").replace(/warn\.js$/, "") // 1. 属于 antd-mobile 内置 svg 文件
  //path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

//var CompressionPlugin = require("compression-webpack-plugin");
// var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
module.exports = {
  //devtool: 'eval',
  //
  entry: [
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/index"
  ],
  output: {
    // path: path.join(__dirname, 'public'),
    // filename: 'bundle.js',
    // publicPath: '/public/'

    path: path.join(__dirname, "public"),
    // filename: 'bundle.js',
    publicPath: "/public/",

    filename: "bundle.js"
    //path: __dirname + '/dist'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    //  new CompressionPlugin({
    // 		asset: "[path].gz[query]",
    // 		algorithm: "gzip",
    // 		test: /\.(js|html)$/,
    // 		threshold: 10240,
    // 		minRatio: 0.8
    // 	}),
    //new BundleAnalyzerPlugin(),
    //new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.DefinePlugin({
      // <-- key to reducing React's size
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
    //  new webpack.optimize.DedupePlugin(), //dedupe similar code
    //  new webpack.optimize.UglifyJsPlugin({
    //    mangle: true,
    //    compress: {
    //      warnings: false, // Suppress uglification warnings
    //      pure_getters: true,
    //      unsafe: true,
    //      unsafe_comps: true,
    //      screw_ie8: true
    //    },
    //    output: {
    //      comments: false,
    //    },
    //    exclude: [/\.min\.js$/gi] // skip pre-minified libs
    //  }),
    //  new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks
    //   new webpack.optimize.UglifyJsPlugin({
    // compress: {
    //   warnings: false
    // }
    // } )
    //new webpackConfig.babel.plugins.push(['import', { libraryName: 'antd-mobile', style: 'css' }])
  ],
  resolveLoader: {
    root: path.resolve(__dirname, "node_modules")
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      "node_modules",
      //        path.join(__dirname, '../node_modules'),
      path.join(__dirname, "src"),
      //        './src',
      "./components",
      "./data",
      "./store",
      "./firebase",
      "./mobxs",
      "./tests"
    ],

    extensions: ["",".web.jsx", ".web.js", ".js", ".jsx", ".json"]
  },
  // "alias": {
  //   "react": "preact-compat",
  //   "react-dom": "preact-compat"
  // },
  module: {
    //{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    // preLoaders: [
    //   {
    //     test: /\.(js|jsx)$/,
    //     loader: 'eslint-loader',
    //     exclude: /node_modules/,
    //     query: require(path.resolve(__dirname, 'eslink.config.js'))
    //   }
    // ],
    loaders: [
      {
        //      test: /\.jsx?$/,
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        //      loaders: ['babel'],
        //loaders: ['babel'],
        //loaders: ['babel'],
        loader: "babel-loader",
        include: path.join(__dirname, "src")
        //include: path.join(__dirname, 'node_modules'),
      },
      {
        test: /\.css$/,
//        exclude: /node_modules/,
        include: /node_modules/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      // { test: /\.css$/, loader: 'style!css' }, // 把css处理成内联style，动态插入到页面
      {
        test: /\.(svg)$/,
        //test: /\.(svg)$/i,
        loader: 'svg-sprite-loader',
        include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理        
        // loader: "svg-sprite-loader",
        // include: [
        //   require.resolve("antd-mobile").replace(/warn\.js$/, "") // 1. svg files of antd-mobile
        //   // path.resolve(__dirname, 'src/my-project-svg-foler'),  // folder of svg files in your project
        // ]
      }
    ],
    rules: [
      // {
      //   exclude: [/\.less$/, /\.svg$/]
      // },
      // // Process JS with Babel.
      // {
      //   test: /\.(js|jsx)$/,
      //   options: {
      //     plugins: [["import", { libraryName: "antd-mobile", style: true }]],
      //     cacheDirectory: true
      //   }
      // },
      // It is generally necessary to use the Icon component, need to configure svg-sprite-loader
      // {
      //   test: /\.(svg)$/i,
      //   loader: "svg-sprite-loader",
      //   include: [
      //     require.resolve("antd-mobile").replace(/warn\.js$/, "") // 1. svg files of antd-mobile
      //     // path.resolve(__dirname, 'src/my-project-svg-foler'),  // folder of svg files in your project
      //   ]
      // },
      // {
      //   test: /\.less$/,
      //   use: [
      //     require.resolve("style-loader"),
      //     require.resolve("css-loader"),
      //     {
      //       loader: require.resolve("postcss-loader"),
      //       options: {
      //         ident: "postcss", // https://webpack.js.org/guides/migrating/#complex-options
      //         plugins: () => [
      //           autoprefixer({
      //             browsers: [
      //               "last 2 versions",
      //               "Firefox ESR",
      //               "> 1%",
      //               "ie >= 8",
      //               "iOS >= 8",
      //               "Android >= 4"
      //             ]
      //           }),
      //           pxtorem({ rootValue: 100, propWhiteList: [] })
      //         ]
      //       }
      //     },
      //     {
      //       loader: require.resolve("less-loader"),
      //       options: {
      //         modifyVars: { "@primary-color": "#1DA57A" }
      //       }
      //     }
      //   ]
      // }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  devtool: "cheap-module-eval-source-map"
};
