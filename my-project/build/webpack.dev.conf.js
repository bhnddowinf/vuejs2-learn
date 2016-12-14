var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({
      sourceMap: config.dev.cssSourceMap
    })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      chunks: ['main'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'h0201.html',
      template: 'h0201.html',
      inject: true,
      chunks: ['j0201'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁 end
    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'h0202.html',
      template: 'h0202.html',
      inject: true,
      chunks: ['j0202'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁 end
    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'vuex01.html',
      template: 'views/vuex01.html',
      inject: true,
      chunks: ['vuex01'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁 end
    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'vuex02.html',
      template: 'views/vuex02.html',
      inject: true,
      chunks: ['vuex02'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁 end
    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'counter_hot.html',
      template: 'src/vuex-demo/counter-hot/index.html',
      inject: true,
      chunks: ['counter_hot'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁 end
    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'shopping_cart.html',
      template: 'src/vuex-demo/shopping-cart/index.html',
      inject: true,
      chunks: ['shopping_cart'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁 end
    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'todomvc.html',
      template: 'src/vuex-demo/todomvc/index.html',
      inject: true,
      chunks: ['todomvc'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁    end
    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'mint_ui1.html',
      template: 'src/vuex-demo/mint_ui1.html',
      inject: true,
      chunks: ['mint_ui1'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁    end

    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'treeview.html',
      template: 'src/vuejs2-demo/treeview/index.html',
      inject: true,
      chunks: ['treeview'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁    end
    // --------多頁 start
    new HtmlWebpackPlugin({
      filename: 'iscomponent.html',
      template: 'src/vuejs2-demo/is-component/index.html',
      inject: true,
      chunks: ['iscomponent'], //需要引入的chunk，不配置就会引入所有页面的资源
    }),
    // --------多頁    end

  ]
})
