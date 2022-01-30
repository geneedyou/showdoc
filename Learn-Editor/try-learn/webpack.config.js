// https://zhuanlan.zhihu.com/p/20367175
var path = require('path');

// var HtmlwebpackPlugin = require('html-webpack-plugin');
const {
    VueLoaderPlugin
} = require('vue-loader')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, './src/main.js');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
    mode: 'development',
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: APP_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    // devServer: {
    //     historyApiFallback: true,
    //     hot: true,
    //     inline: true,
    //     progress: true,
    // },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                include: [
                    // /src/, //在src目录下的css需要编译  
                    // '/node_modules/swiper/dist/css' //增加swiper目录  
                ]
            }, {
                test: /\.styl$/,
                use: ['style-loader', 'css-loader', 'stylus-loader'],
                include: [
                    // /src/, //在src目录下的css需要编译  
                    // '/node_modules/swiper/dist/css' //增加swiper目录  
                ]
            },
            {
                test: /\.ttf$/,
                use: ['file-loader']
            },
            {
                // https://blog.csdn.net/u010086122/article/details/115057270
                test: /.vue$/,
                loader: 'vue-loader',
                // include: [
                //     // /src/, //在src目录下的css需要编译  
                //     // '/node_modules/swiper/dist/css' //增加swiper目录  
                // ]
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // exclude: /node_modules/,
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    //用MiniCssExtractPlugin处理结果
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            }
        ],
        // loaders: [{
        //     test: /\.css$/,
        //     loaders: ['style-loader', 'css-loader'],
        //     include: APP_PATH
        // }]
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        // new HtmlwebpackPlugin({
        //     title: 'Hello World app'
        // }),
        // 请确保引入这个插件！
        new VueLoaderPlugin(),

        new MonacoWebpackPlugin({
            languages: ["javascript", "css", "html", "json", "java"],
            features: ["coreCommands", "find"]
        }),

        // // 重命名提取后的css文件
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: "[id].css"
        })
    ]
};