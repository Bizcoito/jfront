const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = {
  bundle: './app/app.jsx',
  vendor: ['react', 'react-dom', 'prop-types'],
};

const modules = {
  rules: [
    { test: /\.html$/, exclude: /node_modules/, use: 'html-loader' },
    { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
    { test: /\.scss$/, exclude: /node_modules/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
  ],
};

const plugins = [
  new HtmlWebpackPlugin({
    template: 'app/index.html',
    inject: true,
  }),
];

module.exports = {
  entry: entries,
  module: modules,
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: '/',
    port: 3000,
  },
  output: {
    path: '/',
    filename: '[name].[chunkhash].js',
  },
};
