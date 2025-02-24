// const path = require('path');
// const HtmlWebpackplugin = require('html-webpack-plugin')

// module.exports = {
//     entry: {
//         index: './assets/script/file.js'
//     },
//     output:{
//         path: path.resolve(__dirname, 'dist'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules:[
//             {
//                 test: /\.css$/i,
//                 use: ['style-loader', 'css-loader']
//             },
//             {
//                 test: /\.js$/i,
//                 exclude:/node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options:{
//                         presets:['@babel/preset-env']
//                     }
//                 }
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebpackplugin({
//             title: 'Applicazione webpack',
//             template: './index.hmtl'
//         })
//     ],
//     devServer:{
//         port: 5000,
//         open: true,
//         static: path.resolve(__dirname, 'dist')
//     },
//     mode: 'development'
// }

const path = require('path');

module.exports = {
  entry: {
    main: './assets/script/file.js',
    extra: './assets/script/extra.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  }
};