const path = require('path');

module.exports = (outputFile, htmlMinifyOption) => ({
  entry: {
    table: './index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../'),
  },
});
