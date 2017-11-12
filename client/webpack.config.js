var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'output/');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
      'app': [
          'react-hot-loader/patch',
           APP_DIR + '/build.jsx'
      ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'index.js'
  },
    module : {
        loaders : [
        {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel-loader'
        }
        ]
    }
};

module.exports = config