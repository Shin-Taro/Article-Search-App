const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const globImporter = require('node-sass-glob-importer');
const Dotenv = require('dotenv-webpack');

const enabledSourceMap =  process.env.NODE_ENV !== 'production';

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src/js/index.tsx"),
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
    publicPath: '',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader:  "ts-loader",
          }
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env", 
                "@babel/preset-react", 
              ],
              plugins: [
                ['@babel/plugin-transform-runtime', {corejs: 3}],
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: enabledSourceMap,
              postcssOptions: {
                plugins: ["autoprefixer"],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              implementation: require('sass'),
              sourceMap: enabledSourceMap,
              sassOptions: {
                importer: globImporter()
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.(gif|png|jpe?g|svg|eot|wof|woff|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]'
            }
          }
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/html/index.html"),
      filename: 'index.html',
    }),
  ],
  watchOptions: {
    ignored: /node_modules/
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./public"),
      watch: true,
    },
    open: true,
  },
};