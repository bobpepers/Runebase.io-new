const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (options) => {
  const ExtractSASS = new ExtractTextPlugin(`/styles/${options.cssFileName}`);

  const webpackConfig = {
    devtool: options.devtool,
    entry: [
      `webpack-dev-server/client?https://dev.runebase.io:${+ options.port}`,
      'webpack/hot/dev-server',
      Path.join(__dirname, '../src/app/index'),
    ],
    output: {
      path: Path.join(__dirname, '../dist'),
      filename: `./scripts/${options.jsFileName}`,
      publicPath: '/',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              }
            }
          }
        ]
      },
      {
                test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'Fonts/',
                        publicPath: '../Fonts/'
                    }
                }]
            },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /.jsx?$/,
        include: Path.join(__dirname, '../src/app'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              '@babel/plugin-transform-runtime',
            ]
          }
        }
      }],
    },
    plugins: [
      new Webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(options.isProduction ? 'production' : 'development'),
        },
      }),
      new HtmlWebpackPlugin({
        template: Path.join(__dirname, '../src/index.html'),
      }),
    ],
  };

  if (options.isProduction) {
    webpackConfig.entry = [Path.join(__dirname, '../src/app/index')];

    webpackConfig.plugins.push(
      new Webpack.optimize.OccurenceOrderPlugin(),
      new Webpack.optimize.UglifyJsPlugin({
        compressor: {
          warnings: false,
        },
      }),
      ExtractSASS
    );

    webpackConfig.module.rules.push({
      test: /\.scss$/,
      use: ExtractSASS.extract(['css', 'sass']),
    });
  } else {
    webpackConfig.plugins.push(
      new Webpack.HotModuleReplacementPlugin()
    );

    webpackConfig.module.rules.push({
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    });

    webpackConfig.devServer = {
      contentBase: Path.join(__dirname, '../'),
      disableHostCheck: true,
      hot: true,
      port: options.port,
      inline: true,
      progress: true,
      historyApiFallback: true,
      stats: 'errors-only',
    };
  }

  return webpackConfig;
};
