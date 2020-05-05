const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './lib/components/index.js'],
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
  module: {
    rules: [
      { test: /\.js$/, exlude: /node_modules/, use: 'babel-loader' }
    ]
  }
};

module.exports = config;
