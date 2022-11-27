const path = require('path');
const WatchExternalFilesPlugin = require('webpack-watch-files-plugin').default;


module.exports = {
  resolve: {
    alias: {
      Svg: path.resolve(__dirname, './src/svg'),
      Components: path.resolve(__dirname, './src/js')
    }
  },
  entry: [
   './src/js/index.js',
   './src/styles/theme.scss',
  ],
  output: {
    publicPath: '',
    path: path.join(__dirname, '/assets'),
    filename: 'bundle.js'
  },

  plugins: [
    new WatchExternalFilesPlugin({
      files: [
        './src/js/**/*.js',
        '!./src/js/**/*.test.js'
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: '[name].css'
        },
        use: [
          'sass-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      }
    ]
  }
}
