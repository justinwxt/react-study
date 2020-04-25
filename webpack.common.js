const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
    entry:{
        app:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].bundle.js'
    },
    module:{
        rules:[
          
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:'babel-loader'
            },
            {
                test:/\.(png|jpg|gif)$/,
                use:{
                    loader:'url-loader',
                    options:{
                        limit:10000
                    }
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        
    ]
}