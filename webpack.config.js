const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/index.ts'),
  output: {
    filename: './dist/app.js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          publicPath: "/cv/",
          outputPath: '/dist/images',
        },
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};
