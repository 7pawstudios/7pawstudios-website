/* eslint-disable */
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let plugins = []
let optimization = {}

// comment line 9 to disable analyzer
// plugins.push(new BundleAnalyzerPlugin())

function hasMultipleCores() {
  try {
    return require('os').cpus().length > 1
  } catch (e) {
    return false
  }
}

module.exports = {
  // where to put static assets (js/css/img/font/...)
  assetsDir: "",

  publicPath: "/",

  // where to output built files
  outputDir: "dist",

  // filename for index.html (relative to outputDir)
  indexPath: "index.html",

  // PWA config
  pwa: {
    name: '7PawStudios',
    themeColor: "#1a1c20",
    backgroundColor: "#1a1c20",
    assetsVersion: "1.0.1a",
    msTileColor: "#1a1c20"
  },

  // whether filename will contain hash part
  filenameHashing: true,

  // boolean, use full build?
  runtimeCompiler: false,

  // deps to transpile
  transpileDependencies: [],

  // sourceMap for production build?
  productionSourceMap: !process.env.VUE_CLI_TEST,

  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: hasMultipleCores(),

  // multi-page config
  pages: undefined,

  // <script type="module" crossorigin="use-credentials">
  // #1656, #1867, #2025
  crossorigin: undefined,

  // subresource integrity
  integrity: false,

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/_variables.scss";
          @import "@/assets/scss/_mixins.scss";
          @import "@/assets/scss/_wrappers.scss";
        `,
      },
    },
    // extract: true,
    // modules: false,
    // localIdentName: '[name]_[local]_[hash:base64:5]',
    // sourceMap: false,
    // loaderOptions: {}
  },

  // alias resolution
  chainWebpack: (config) => {
    // vue svg loader
    // const svgRule = config.module.rule("svg");
    // custom route resolver
    const link = (name, modulePath) =>
      config.resolve.alias.set(name, path.resolve(modulePath));

    // shorten link function
    // @note js and vue files with the name index are resolved automatically within their directories

    link("@App", "src/App");
    link("@components", "src/components");
    link("@navigation", "src/components/Navigation");
    link("@footer", "src/components/Footer");
    link("@Tile", "src/components/Tile");
    link("@views", "src/views");
    link("@assets", "src/assets");
    link("@images", "src/assets/images");
    link("@icons", "src/assets/icons");

    // svgRule.uses.clear();

    // svgRule
    //   .use("babel-loader")
    //   .loader("babel-loader")
    //   .end()
    //   .use("vue-svg-loader")
    //   .loader("vue-svg-loader");
  },

  // whether to use eslint-loader
  lintOnSave: false,
  configureWebpack: {
    plugins,
    optimization,
  },
  devServer: {
    // open: process.platform === 'darwin',
    // host: '0.0.0.0',
    port: 3900,
    // https: false,
    // hotOnly: false,
    // proxy: null, // string | Object
    // before: app => {}
  },
  // pluginOptions: {
  //   svg: {
  //     inline: {}, // Pass options to vue-svg-loader
  //     data: {}, // Pass options to url-loader
  //     sprite: {}, // Pass options to svg-sprite-loader
  //     external: {} // Pass options to file-loader
  //   }
  // }
};
