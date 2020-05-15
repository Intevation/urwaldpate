module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  transpileDependencies: ["vuetify"],
  productionSourceMap: false,
  lintOnSave: "error",
  devServer: {
        disableHostCheck: true
    }
};
