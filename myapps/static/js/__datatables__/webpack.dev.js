const webpackMerge = require("webpack-merge").merge;
const commonConf = require("./webpack.common.js");
const outputFile =`[name]`;
const htmlMinifyOption = false;

module.exports = () => webpackMerge(commonConf({outputFile, htmlMinifyOption}), {
    mode: 'development',
    devtool: "source-map"
});


