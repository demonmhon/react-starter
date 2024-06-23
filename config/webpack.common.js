require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src', 'index.jsx'),
  },
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.svg$/,
        use: [{ loader: '@svgr/webpack' }],
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, `../src/config/config.${process.env.NODE_ENV}.json`),
          to: 'config.json',
        },
        {
          from: path.resolve(__dirname, '../src/public/'),
          to: path.resolve(__dirname, '../dist'),
          globOptions: {
            ignore: ['.DS_Store'],
          },
        },
        {
          from: path.resolve(__dirname, '../src', 'manifest.json'),
          to: path.resolve(__dirname, '../dist'),
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      'src': path.resolve(__dirname, '../src/'),
    },
    extensions: ['.js', '.jsx'],
  },
};
