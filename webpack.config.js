const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: "production",
  entry: './src/components/index.tsx',
  // target: 'web',
  // Enable sourcemaps for debugging webpack's output.
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        // use: [
        //   "to-string-loader",
        //   "css-loader",
        //   "sass-loader"
        // ],
        use: ExtractTextPlugin.extract({
          use:[{
            loader:'css-loader',
            // options:{
            //   minimize:true
            // }
          },
          "sass-loader"
        ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    }),
    new ExtractTextPlugin("style.css")
  ],
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
//   externals: {
//     'react': 'React'
// },
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  }
};

  //    // "test": "echo \"Error: no test specified\" && exit 1",


   // "main": "src/components/index.tsx",


  // "build": "webpack --config webpack.config.js",
  // "test": "react-scripts test",
  // "eject": "react-scripts eject"