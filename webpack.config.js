// 加载 node path 模块
const path = require('path');
// webpack-dev-server 自启动热更新步骤2
const webpack = require("webpack");
// 插件 html-webpack-plugin 作用：
// 1.在内存中生存虚拟页面
// 2.把 bundle.js 追加到 index.html 中
const htmlwebpackplugin = require('html-webpack-plugin');
// 引入 vue-loader 插件 VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 接口：webpack 的打包方式
module.exports = {
    // webpack 入口文件
    entry: path.join(__dirname, './src/main.js'),
    // webpack 出口文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'Bundle.js'
    },
    // 配置 webpack-dev-server 自启动热更新步骤1
    devServer: {
        // 自动打开浏览器
        open: true,
        // 运行 http 协议的端口
        port: 3000,
        // webpack 托管 bundle.js 的根目录
        contentBase: path.join(__dirname, './src'),
        // 启动热更新
        hot: true,
        // 本地服务 IP 地址
        //host: '127.0.0.1'
    },
    // webpack 插件配置节点
    plugins: [
        // 创建 webpack-dev-server 热更新插件模块，自启动热更新步骤3
        new webpack.HotModuleReplacementPlugin(),
        // 创建 htmlwebpackplugin 插件模块
        new htmlwebpackplugin({
            // htmlwebpackplugin 托管页面的路径
            template: path.join(__dirname, './views/index.html'),
            // 内存中生成的托管文件名称
            filename: 'index.html'
        }),
        // webpack 1 向 webpack 2 迁移的过渡插件
        new webpack.LoaderOptionsPlugin({
            options: {
                // 兼容旧loader：读取 context 信息
                context: __dirname,
                // 兼容旧loader：切换到 debug 模式
                debug: true,
                /*
                // 处理 css 自动根据浏览器添加前缀
                postcss: [
                    // 调用autoprefixer插件
                    require('autoprefixer')
                ]
                */
            }
        }),
        // vue-loader 15 版本更新后的 loader 插件 配置
        new VueLoaderPlugin()
    ],
    // 配置第三方模块加载器节点：处理其他非 js 格式文件以及 js 高级文件
    module: {
        // 第三方模块加载器匹配规则
        rules: [
            // webpack 处理 css 文件的第三方加载器规则
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // webpack 处理 less 文件的第三方加载器规则
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            // webpack 处理 sass 文件的第三方加载器规则
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            // webpack 处理 图片 文件的第三方加载器规则：
            // limit 限制图片大小 byte，小于则转为 base64 格式字符串
            // name 图片的命名规则：8 位 hash 值
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader？limit=7631&name=[hash: 8]-[name].[ext]' },
            // webpack 处理 字体 文件的第三方加载器规则
            { test: /\.(ttf|eot|svg|woff|woff2|otf)$/, use: 'url-loader' },
            // webpack 处理 js 高级 ES 语法的第三方加载器规则
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            // webpack 处理 vue 文件的第三方加载器规则
            { test: /\.vue$/, use: 'vue-loader' }
        ]
    },
    // 配置模块如何解析
    resolve: {
        // 修改被导入的包路径别名：
        // 常用的导入路径更加简洁
        alias: {
            // 修改 vue 的导入路径别名
            // $ 为精确查找
            "vue$": 'vue/dist/vue.js'
        }
    },
    // 设置 webpack 的运行模式：
    // 开发环境
    mode: 'development',
    // 定义 webpack Entrypoint
    stats: {
        children: false
    }
}