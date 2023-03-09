//const webpackMerge = require("webpack-merge").merge;
import { merge } from "webpack-merge";
const webpackMerge = merge;

//const commonConf = require("./webpack.common.js");
import commonConf from "./webpack.common.js";

const outputFile =`[name]`;
const htmlMinifyOption = false;

// module.exports = 
export default () => webpackMerge(commonConf({outputFile, htmlMinifyOption}), {
    mode: 'development',
    devtool: "source-map"
});


