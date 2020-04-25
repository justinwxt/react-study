const merge = require('webpack-merge')
const commonConfig = require('./webpack.common')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = merge(commonConfig,{
    devtool:'inline-source-map',
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
        ]
    },
    devServer:{
        contentBase:'./dist',
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({title:'react test',template:'./template/test.html'})
    ]
})