const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
module.exports ={
    entry : './index.js',
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: 'bundle.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],
    module:{
        rules:[
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 设置上限 如果 没有达到上限，图片就以base64的格式存在，如果达到上限了，就以物理方式存在
                            limit: 18192
                        }
                    }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                // exclude表示哪些文件可以忽略
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                      // 预设值
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-transform-react-jsx']
                  }
                }
              },
              {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader,"sass-loader","css-loader"]
            }
        ]
    }
}