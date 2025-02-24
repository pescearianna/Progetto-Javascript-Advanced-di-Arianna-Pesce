const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    main: './assets/script/file.js',
    extra: './assets/script/extra.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'img/[name][ext]' // Percorso di output per le immagini
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Usa il tuo file index.html come template
      filename: 'index.html', // Nome del file generato
      favicon: './assets/img/favicon.jpg' // Percorso del favicon
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css' // Nome del file CSS generato
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i, // Aggiungi 'ico' per gestire il favicon
        type: 'asset/resource'
      }
    ]
  }
};