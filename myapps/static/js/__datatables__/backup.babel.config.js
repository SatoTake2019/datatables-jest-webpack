module.exports = api => {
    const commonConfig = { "presets": ["@babel/preset-env", ]};
    const isTest = api.env('test');
    if ( !isTest ) {
        commonConfig.plugins.push("@babel/plugin-transform-modules-amd");
    }
  return commonConfig;
};
