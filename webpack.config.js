const path = require('path');

module.exports = {
  entry: path.join(__dirname, "./src/index.ts"),
  output: {
    publicPath: "/cv/"
  },
  devServer: {
    publicPath: "/cv/",
    contentBase: "./dist"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
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
          outputPath: '/images',
          publicPath: '/images/'
        },
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};
