const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  entry: {
    index: "./src/index.ts"
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Three Demo TS",
      favicon: "./static/favicon.ico",
      meta: {
        charset: "utf-8",
        description: "THREE Demo",
        viewport: "width=device-width,initial-scale=1,maximum-scale=1,shrink-to-fit=no,user-scalable=no,minimal-ui,viewport-fit=cover"
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      }
    ]
  }
}
