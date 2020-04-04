const path = require('path');

module.exports = {
  entry: path.join(__dirname, "./src/index.ts"),
  output: {
    publicPath: "/cv/"
  },
  devServer: {
    publicPath: "/cv/",
    contentBase: "./dist",
    historyApiFallback: true
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
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        loader: 'file-loader',
        options: {
          outputPath: "images"
        },
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
};
