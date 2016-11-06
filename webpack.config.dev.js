import webpack from 'webpack';
import path from 'path';
//import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

// const sassLoaders = [
//   'css-loader',
//   'postcss-loader',
//   'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src')
// ];

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
    new webpack.HotModuleReplacementPlugin(),
  //  new ExtractTextPlugin('dist/styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
    //new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel', query: {compact: false}},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {test: /\.scss$/, loaders: ['style', 'css', 'sass?outputStyle=expanded'] },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.(jpe?g|png|gif)$/i, loader:"file" },
      {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
    ]
  }
};
    //{test: /\.sass$/,loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))},
