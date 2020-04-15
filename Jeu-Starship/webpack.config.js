const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
  entry: './src/scripts/bundle.js',

  mode : 'development',  // 'production'
  watch: true,

  output: {
    path: path.resolve('./dist'),
    filename: 'scripts/bundle.js'
  },
  plugins: [
    new CopyPlugin([
      { from: 'src/index.html', to: 'index.html' },
    ]),
  ],

  module : {
    rules: [
        {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ]
        },
        {
          test: /\.(png|jpg|gif)/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath:'images/'
              }
            }
          ]
        }
      ]
  }

};
