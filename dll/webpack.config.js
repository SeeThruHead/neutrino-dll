const webpack = require('webpack');
const path = require('path')

module.exports = {
  entry:{
    runtimedeps: ['./test']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].dll.js',
    library: '[name]_[hash]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, 'build', '[name].manifest.json'),
      name: '[name]_[hash]'
    })
  ]
};
