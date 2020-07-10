module.exports = {
  configureWebpack(config) {
    // config.devtool = "cheap-eval-source-map";
    config.resolve.extensions = [".vue", ".js", ".jsx", ".json"];
    config.devServer = {
      proxy: {
        "^/api": {
          target: "http://localhost:3000",
          changeOrigin: true,
          pathRewrite: {
            "^/api": ""
          }
        }
      }
    };
  }
};
