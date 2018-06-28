const path = require('path');

module.exports = {
  // mode: 'production',
  entry: {
    home:'./src/views/home.js',
  },
  output: {
    filename: 'home.js',
    path: __dirname + '/dist'
  },
  module: {
     rules: [{
      test: /\.js[x]?$/,
      exclude: path.resolve(__dirname, "/node_modules"),
      loader: 'babel-loader',
    }]
  }
};
