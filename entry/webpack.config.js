const path = require('path');
module.exports = {
    // 入口文件 入口文件允许多个
    entry:{
        home:'./home.js',
        about: './about.js',
        myself:'./myself.js'
    },
    output: {
           // 所有输出文件的目标路径
        // 必须是绝对路径（使用 Node.js 的 path 模块）
       path: path.resolve(__dirname, "dist"), // string
        filename: "[name].bundle.js", // string [name]指代上面的key，n个入口生成n个文件
    },
    // mode指定打包的模式
    mode:'development' // production 为生产环境

}