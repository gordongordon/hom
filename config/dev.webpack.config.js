var path = require("path");
var webpack = require("webpack");
const pxtorem = require("postcss-pxtorem");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const svgDirs = [
  require.resolve("antd-mobile").replace(/warn\.js$/, "") // 1. 属于 antd-mobile 内置 svg 文件
  //path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

const HTMLWebpackPlugin = require('html-webpack-plugin');

//var CompressionPlugin = require("compression-webpack-plugin");
 var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

//const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

// loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
module.exports = { 
  //devtool: 'eval',
  //
  //context: __dirname + "/public",
  entry: {
//    "webpack-dev-server/client?http://localhost:3000",
//    "webpack/hot/only-dev-server",
//    "./src/index"
     index : './src/index.js'
  },

  output: {
    publicPath: '/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname , 'public')
//    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: path.join(__dirname, '/public/'),
    //contentBase: __dirname + `\public\`,
    inline: true,
    host: "0.0.0.0",
    compress: true,
    port: 9090,
  },
//   output: {
//     // path: path.join(__dirname, 'public'),
//     // filename: 'bundle.js',
//     publicPath: '/public/',

// //    path: path.join(__dirname, "public"),
//     // filename: 'bundle.js',
//     //publicPath: "/public/",

// //    filename: "bundle.js"
//     //path: __dirname + '/dist'
//     filename: '[name].bundle.js',
//     path: path.resolve(__dirname, 'public')    
//   },

  plugins: [
    // new CopyWebpackPlugin([
    //   {
    //     context: path.resolve(__dirname, 'app/'),
    //     from: 'index.html',
    //     to: path.resolve(__dirname, 'public'),
    //   },
    // ]),    

    //new webpack.HotModuleReplacementPlugin(),
    // new HTMLWebpackPlugin({
    //   title: 'Code Splitting'
    // })    
    //  new CompressionPlugin({
    // 		asset: "[path].gz[query]",
    // 		algorithm: "gzip",
    // 		test: /\.(js|html)$/,
    // 		threshold: 10240,
    // 		minRatio: 0.8
    // 	}),
     //new BundleAnalyzerPlugin(),
     new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
     new webpack.DefinePlugin({
       // <-- key to reducing React's size
       "process.env": {
         NODE_ENV: JSON.stringify("production")
       }
     }),
    //  new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('development')
    //   }
    // });     
     new webpack.optimize.UglifyJsPlugin({
       mangle: true,
       compress: {
         warnings: false, // Suppress uglification warnings
         pure_getters: true,
         unsafe: true,
         unsafe_comps: true,
         screw_ie8: true
       },
       parallel: {
        cache: true,
        workers: 2 // for e.g
      },       
       output: {
         comments: false,
       },
       exclude: [/\.min\.js$/gi] // skip pre-minified libs
     }),
     new webpack.optimize.AggressiveMergingPlugin(),//Merge chunks

    //new webpackConfig.babel.plugins.push(['import', { libraryName: 'antd-mobile', style: 'css' }])
  ],
  // resolveLoader: {
  //   root: path.resolve(__dirname, "node_modules")
  // },
  resolve: {
    // "alias": {
    //   "react": "preact-compat",
    //   "react-dom": "preact-compat"
    // },    
    modules: [
      path.join(__dirname, "src"),
      "node_modules",
      "./components",
      "./data",
      "./store",
      "./firebase",
      "./mobxs",
      "./tests"
    ],
    extensions: [".web.jsx", ".web.js", ".js", ".jsx", ".json"]
  },
  module: {
//    loaders: [
     rules: [

      // {
      //   test: /\.(js|jsx)$/,
      //   // exclude: /node_modules/,
      //   loader: "babel-loader",
      //   // include: path.join(__dirname, "src")
      // },
    //   {
    //     test: /\.css$/,
    //     include: /node_modules/,
    //     loaders: ["style-loader", "css-loader", "sass-loader"]
    //   },
    //   {
    //     test: /\.(svg)$/,
    //     loader: 'svg-sprite-loader',
    //     include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理        
    //   }
    // ],
    //rules: [
      // {
      //   exclude: [/\.less$/, /\.svg$/]
      // },
      // Process JS with Babel.
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
            "presets": [
              "react",
              "es2015",
              "stage-0"
            ],
            "plugins": [
              "transform-decorators-legacy",
              ["import", { "style": "css", "libraryName": "antd-mobile" }]
            ]
        }
      },
      //It is generally necessary to use the Icon component, need to configure svg-sprite-loader
      {
        test: /\.(svg)$/,
        loader: "svg-sprite-loader",
        include: [
          require.resolve("antd-mobile").replace(/warn\.js$/, "") // 1. svg files of antd-mobile
          // path.resolve(__dirname, 'src/my-project-svg-foler'),  // folder of svg files in your project
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },      
      {
        test: /\.less$/,
        use: [
          {
             loader: "style-loader",
             loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss", // https://webpack.js.org/guides/migrating/#complex-options
              plugins: () => [
                autoprefixer({
                  browsers: [
                    "last 2 versions",
                    "Firefox ESR",
                    "> 1%",
                    "ie >= 8",
                    "iOS >= 8",
                    "Android >= 4"
                  ]
                }),
                pxtorem({ rootValue: 100, propWhiteList: [] })
              ]
            }
          },
          {
            loader: "less-loader",
            options: {
              modifyVars: { "@primary-color": "#1DA57A" }
            }
          }
        ]
      }
    ]
  },
  // devServer: {
  //   historyApiFallback: true
  // },
  // devServer: {
  //   open: true, // to open the local server in browser
  //   contentBase: __dirname + '/src',
  // },  
  devtool: "eval"
  //devtool: "cheap-module-source-map"
};
