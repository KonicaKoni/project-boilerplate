const glob = require('glob');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: {
    button: glob.sync(`${__dirname}/components/index.js`),
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'index.js',
    library: 'components',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    loaders: [
      {
        rules: [{
          test: /\.js$/,
          loaders: ['babel-loader'],
        }],
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[sha512:hash:base64:7].[ext]' },
          },
        ],
      },
    ],
  },
  externals: [
    'prop-types',
    'react',
    'react-dom',
  ],
  plugins: [
    new UglifyJsPlugin({ minimize: true }),
  ],
};
