const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(commonConfig,{
    mode:'production',
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            }
        ]
    },
    optimization:{
        runtimeChunk:"single",//把webpack运行代码提取出来，降低入口文件(每个入口文件都含有runtime代码部分)的体积
        splitChunks: {
            maxInitialRequests:5,
            cacheGroups: {
                commons:{
                    chunks:'all',
                    minChunks:2,
                    minSize:0,
                },
              vendor: {
                test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                name: 'vendor',
                chunks: 'all',
              }
             
            }
          }
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
          }),
        new HtmlWebpackPlugin({title:'my react app',template:'./template/index.html'})
    ],
    externals:{
        'react':'React',
        'react-dom':'ReactDOM'
    }
})