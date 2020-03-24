// 导入 express 后端框架
var express = require('express')

// 开启 后端服务
var app = express()

// 导入 express-art-template 后端模板引擎
app.engine('html', require('express-art-template'));
// 自定义 views 视图区 文件路径
app.set('views', './src/components/views/')

// 导入 后端 路由表
var router = require('./routes/router.js')

// 导入 后端 数据请求 插件
var bodyparser = require('body-parser');
// 配置 bodyparser 中间件
// 解析 表单 post 数据请求体
app.use(bodyparser.urlencoded({ extended: false }));
// post 数据请求体 转为 json 对象
app.use(bodyparser.json())

// 导入 Session 处理插件
var session = require('express-session');
// 手动安装 Session 中间件
app.use(session({
    // 设置保存在客户端 cookie 中的名称
    name: 'Users_qualification',
    // 无论修改与否 都会再次保存到 客户端cookie
    resave: true,
    // 强制未初始化的 session 保存到数据库
    saveUninitialized: false,
    // 设置的 secret 字符串，来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    secret: 'Film_Salon',
    // 指定客户端 cookie 的相关属性
    cookie: {
        // 默认保存时间：单位 us，7 天免登陆
        maxAge: 7 * 24 * 60 * 60 * 1000,
        // 不允许脚本文件操作 cookie，防止 xss 攻击
        httpOnly: true
    }
}))

// 导入 处理 vue-router history 模式 中间件
var history = require('connect-history-api-fallback');
app.use(history({
    // 配置 前台浏览器地址栏 默认的 后端路由指向
    index: '/',
    // 配置 前台浏览器地址栏 后端路由指向
    rewrites: [{ // 后台首页 /management 开头 后台路由
        from: /^\/management.*$/,
        to: function(data) {
            return '/management'
        }
    }]
}))

// 开放 前端 静态资源
app.use('/public/', express.static('./public/'));
// vue 服务器渲染 方式 开放 Bundle.js 资源
app.use('/Bundle.js/', express.static('./dist/Bundle.js/'));
// 开放 第三方包库
app.use('/src/lib/', express.static('./src/lib/'))

// 挂载 路由 模块
app.use(router)

// 监听 前端 端口 请求服务
app.listen(3000, function() {
    console.log('The service is running...')
})

// 对外 暴露 接口
module.exports = app