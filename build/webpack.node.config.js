// tslint:disable:no-var-requires
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

const tsConfigPath = path.join(__dirname, '../tsconfig.json');
const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist/node')

module.exports = {
  entry: path.join(srcDir, './index.js'),
  target: "node",
  output: {
    filename: 'index.js',
    path: distDir,
  },
  node: false,
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
    plugins: [new TsconfigPathsPlugin({
      configFile: tsConfigPath,
    })]
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    // https://github.com/webpack/webpack/issues/196#issuecomment-397606728
    exprContextCritical: false,
    rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFile: tsConfigPath
        }
      },
    ],
  },
  resolveLoader: {
    modules: [path.join(__dirname, '../node_modules')],
    extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
    mainFields: ['loader', 'main'],
    moduleExtensions: ['-loader'],
  },
};
