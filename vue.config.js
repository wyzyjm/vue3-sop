const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  // 基本路径
  publicPath: "/",
  // 输出文件目录
  outputDir: "dist",
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // webpack 设置,可覆盖默认配置
  chainWebpack: config => {
    config.external = {
      vue: "Vue",
      "element-ui": "ELEMENT"
    };
    config.resolve.alias
      .set("@", resolve("src"))
  },
  css: {
    // 配置高于chainWebpack中关于css loader的配置
    requireModuleExtension: true, // 是否开启支持‘foo.module.css’样式
    extract: true, // 是否使用css分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用<style>方式内联至html文件中
    sourceMap: false // 是否在构建样式地图，false将提高构建速度
  },
  productionSourceMap: false, // 是否生成map文件
  devServer: {
    port: "8084", // 端口号
    host: "dev-platform.ceboss.cn",
    https: false, // https:{type:Boolean}
    open: true, // 配置自动启动浏览器
    hot: true
  },
  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  }
};
