// const path = require('path');
import { path } from "path";
const __dirname = path.resolve(path.dirname('')); 


module.exports = (outputFile, htmlMinifyOption) => ({
  entry: {
    table: './index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../'),
  },
});
