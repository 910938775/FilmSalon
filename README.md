# **拉片网开发日记**

## 1.文档结构

| 文件名            | 子文件        | 功能                                         |
| ---------------- |:-------------:| ------------------------------------------: |
| controllers      |               | 后端业务逻辑处理文件                          |
| developdoc       |               | 开发文档                                     |
| dist             | Bundle.js     | Webpack出口文件：把高级语法转化成低级语法       |
| models           |               | 后端储存使用设计的数据模型：mongodb            |
| node_modules     |               | 第三方插件库：npm                             |
| public           | images        | 静态资源库：图片                              |
| public           | texts         | 静态资源库：html文本                          |
| public           | videos        | 静态资源库：视频                              |
| routes           |               | 后端路由表文件：业务多，代码量大                |
| src              | components    | 前端组件库                                    |
| src              | css           | 前端css外部样式库                             |
| src              | js            | 前端js外部脚本库                              |
| src              | lib           | 第三方代码库                                  |
| src              | App.vue       | 前端组件入口文件：Components组件库整体架构      |
| src              | main.js       | Webpack入口文件：所有文件的总入口 网站总体架构   |
| src              | Router.js     | 前端路由表文件：组件导航                        |
| views            | index.html    | 网站首页                                       |
| .babelrc         |               | 第三方Loader babel配置文件：Webpack转换高级ES语法|
| .gitignore       |               | Git代码管理工具配置文件：不用上传的文件           |
| app.js           |               | 后端项目入口文件：后台服务开启 端口监听           |
| LICENSE          |               | 开源闭源声明文件                                |
| Management.html  |               | 后台管理系统                                   |
| package-lock.json|               | 第三方包版本锁定文件：Npm5以后才有               |
| package.json     |               | Npm配置文件：包描述文件                         |
| webpack.config.js|               | Webpack配置文件                                |

## 2.开发工具

> **前端开发**

- Vue：前端框架 （生产环境）

- Vue-resource：Vue 数据请求插件 Get，post，jsonp 数据请求 （生产环境）

- Vue-router：Vue 前端路由插件 （生产环境）

- Bootstrap：前端 css 样式库 （生产环境）

- Open-iconic：Bootstrap 4 以后的图标文件 （生产环境）

- Popper.js：Bootstrap 4 以后的依赖文件 （生产环境）

- Jquery：前端 js 代码库 （生产环境）

- Webpack：前端打包工具 (全局)（开发环境）

- Webpack-dev-server：服务自启动，Bundle.js 托管到内存中 （开发环境）

- Html-webpack-plugin：把 Bundle.js 注入 index.html 中 （开发环境）

- Style-loader，Css-loader：Webpack 处理 css 文件 （开发环境）

- Less-loader：Webpack 处理 less 文件 （开发环境）

- Sass-loader：Webpack 处理 sass 文件 （开发环境）

- Url-loader：Webpack 处理图片，字体库等 url （开发环境）

- File-loader：webpack 处理文件名以及路径等 （开发环境）

- Babel-loader：Webpack 处理高级的 ES 语法 （开发环境）

- Babel-core：负责 babel 的解析高级 ES 语法功能 （开发环境）

- Babel-preset-env：负责 babel 的转换与生成低级 ES 语法功能 （开发环境）

- Babel-preset-stage-0：babel 运行时环境 （开发环境）

- Babel-plugin-transform-remove-strict-mode：babel 移除 js ES 严格模式 （生产环境）

- Babel-plugin-transform-runtime：babel 转译插件 （开发环境）

- Babel-runtime：babel 转译插件运行时 （生产环境）

- Babel-plugin-component：mint-ui UI 框架按需导入插件 （开发环境）

- Vue-loader：Webpack 处理 vue 文件 （开发环境）

- Vue-template-compiler：将 vue 模板语法转为 js render 函数 （开发环境）

- Moment：格式化时间插件 （生产环境）

- Node-sass：webpack 编译文件内部 sass 样式 （生产环境）

- MUI：前端 UI 代码库 （生产环境）

- Hui：前端 UI 代码库 （生产环境）

- Layui：前端 UI 代码库 （生产环境）

> **后台开发**

- Node：后台运行时 （生产环境）

- Nodemon：后台服务自启动插件：热更新 （全局）（开发环境）

- Express：后台框架 （生产环境）

- Art-template：后台模板引擎 （生产环境）

- Express-art-template：基于 Express 的后台模板引擎 （生产环境）

- Body-parser：Node 中获取 post 请求数据体插件 （生产环境）

- Express-session：网页 session 数据操作插件，服务器临时数据储存，数据加密传输 （生产环境）

- Blueimp-md5：数据 MD5 级加密传输储存 （生产环境）

- Vue-server-renderer：vue 服务端渲染模板引擎 （生产环境）

- Multer：Express 处理文件 上传下载 的中间件 （生产环境）

- Connect-history-api-fallback：Express 处理 vue-router history 模式 中间件

> **数据库开发**

- MongoDB：非关系型数据库 （生产环境）

- Mongoose：Node 中操作 MongoDB 的第三方包 （生产环境）

## 3.配置基本运行环境

- 开发工具下载

> 注意版本兼容问题：安装错误提示（nrm，Babel-preset-env，mongoDB等）

windows7 32 位操作系统

- 配置 Webpack.config.js 文件

- 配置 LICENSE 文件

- 配置 .babelrc 文件

- 配置 .gitignore 文件

## 4.首页搭建

> **index.html**

- 项目容器：前端组件

> **main.js**

- 初步定义 vue 组件的 render 函数

为了看到初步的页面效果，验证代码的“正确性”

> **APP.vue**

引入初步定义的组件

> **导航栏**

- **导航栏组件：Navigation.vue**

**1.错误提示：**

```powershell
ERROR in Entry module not found: Error: Can't resolve './src' in 'E:\filmsalon'
```

问题出处：

1. webpack.config.js 文件名大写错误

2. 插件缺失：Babel-preset-stage-0 ，File-loader

3. 新建 ./dist/Bundle.js 文件

4. 命令行改为：webpack 入口文件 -o 出口文件

**2.新的错误提示：**

```powershell
Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema.
  - configuration has an unknown property 'Plugin'. These properties are valid:
   object { amd?, bail?, cache?, context?, dependencies?, devServer?, devtool?, entry?, externals?, infrastructureLogging?, loader?, mode?, module?, name?, node?, optimization?, output?, parallelism?, performance?, plugins?, profile?, recordsInputPath?, recordsOutputPath?, recordsPath?, resolve?, resolveLoader?, serve?, stats?, target?, watch?, watchOptions? }
   For typos: please correct them.
   For loader options: webpack >= v2.0.0 no longer allows custom properties in configuration.
     Loaders should be updated to allow passing options via loader options in module.rules.
     Until loaders are updated one can use the LoaderOptionsPlugin to pass these options to the loader:
     plugins: [
       new webpack.LoaderOptionsPlugin({
         // test: /\.xxx$/, // may apply this only for some modules
         options: {
           Plugin: …
         }
       })
     ]
```

问题出处：

**``webpack.config.js 文件中部分 属性名称 书写错误：``**

```javascript
...

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
        })
    ],

...
```

1. **devServer 写成了 devserver （ 小写了 s ）； ``webpack 误以为这个配置是 LoaderOptionsPlugin 插件下的配置``**

2. plugins 写成了 Plugin （ 大写了 P，少个 s ）;

3. LoaderOptionsPlugin 写成了 loaderoptionsplugin （ 小写了 l，小写了 o，小写了 p ）；

4. options 写成了 option （少个 s）

**3.新的错误提示：**

```powershell
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! filmsalon@1.0.0 dev: `webpack-dev-server`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the filmsalon@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2019-11-24T09_07_50_155Z-debug.log
```

问题出处：

postcss属性不兼容？

```javascript
...

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
        })
    ],

...
```

**4.新的错误提示：**

```powershell
ERROR in ./src/main.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
Error: Cannot find module '@babel/core'
Require stack:
- E:\filmsalon\node_modules\babel-loader\lib\index.js
- E:\filmsalon\node_modules\loader-runner\lib\loadLoader.js
- E:\filmsalon\node_modules\loader-runner\lib\LoaderRunner.js
- E:\filmsalon\node_modules\webpack\lib\NormalModule.js
- E:\filmsalon\node_modules\webpack\lib\NormalModuleFactory.js
- E:\filmsalon\node_modules\webpack\lib\Compiler.js
- E:\filmsalon\node_modules\webpack\lib\webpack.js
- E:\filmsalon\node_modules\webpack-dev-server\bin\webpack-dev-server.js
 babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:794:15)
    at Function.Module._load (internal/modules/cjs/loader.js:687:27)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at Object.<anonymous> (E:\filmsalon\node_modules\babel-loader\lib\index.js:10:11)
    at Module._compile (internal/modules/cjs/loader.js:956:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)
    at Module.load (internal/modules/cjs/loader.js:812:32)
    at Function.Module._load (internal/modules/cjs/loader.js:724:14)
    at Module.require (internal/modules/cjs/loader.js:849:19)
```

问题出处：

版本兼容性问题："babel-core": "^6.26.3"

babel-loader": "^8.0.6" 改为 "^7.0.0"

**5.新的错误提示：**

```powershell
ERROR in ./src/main.js
Module build failed (from ./node_modules/babel-loader/lib/index.js):
ReferenceError: Unknown plugin "transform-runtime" specified in "E:\\filmsalon\\.babelrc" at 0, attempted to resolve relative to "E:\\filmsalon"
    at E:\filmsalon\node_modules\babel-core\lib\transformation\file\options\option-manager.js:180:17
    at Array.map (<anonymous>)
    at Function.normalisePlugins (E:\filmsalon\node_modules\babel-core\lib\transformation\file\options\option-manager.js:158:20)
    at OptionManager.mergeOptions (E:\filmsalon\node_modules\babel-core\lib\transformation\file\options\option-manager.js:234:36)
    at OptionManager.init (E:\filmsalon\node_modules\babel-core\lib\transformation\file\options\option-manager.js:368:12)
    at File.initOptions (E:\filmsalon\node_modules\babel-core\lib\transformation\file\index.js:212:65)
    at new File (E:\filmsalon\node_modules\babel-core\lib\transformation\file\index.js:135:24)
    at Pipeline.transform (E:\filmsalon\node_modules\babel-core\lib\transformation\pipeline.js:46:16)
    at transpile (E:\filmsalon\node_modules\babel-loader\lib\index.js:48:20)
    at Object.module.exports (E:\filmsalon\node_modules\babel-loader\lib\index.js:163:20)
```

问题出处：

插件缺失：Babel-plugin-transform-runtime，Babel-runtime

**6.新的错误提示：**

- 不能显示页面内容

能显示 index.html 内容，但是立马被 main.JS **空白内容覆盖**，所以怀疑 main.JS 配置有问题？

```javascript
// 导入 vue 前端框架
import vue from 'vue'

// 定义 VM 实例来渲染 index.html
var VM = new vue({
    el: '#app',
    render: c => c(1)
})
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <!-- 项目视图 容器 -->
    <div id="app">2</div>
</body>

</html>
```

问题出处：

render 渲染函数后面只能跟**组件模板**

**7.新的错误提示：**

```powershell
vue.js:633 [Vue warn]: Error in render: "TypeError: Cannot read property 'matched' of undefined"

found in

---> <APP> at src/APP.vue
       <Root>
warn @ vue.js:633
logError @ vue.js:1892
globalHandleError @ vue.js:1887
handleError @ vue.js:1847
Vue._render @ vue.js:3546
updateComponent @ vue.js:4060
get @ vue.js:4471
Watcher @ vue.js:4460
mountComponent @ vue.js:4067
Vue.$mount @ vue.js:9037
Vue.$mount @ vue.js:11922
init @ vue.js:3124
createComponent @ vue.js:5966
createElm @ vue.js:5913
patch @ vue.js:6502
Vue._update @ vue.js:3939
updateComponent @ vue.js:4060
get @ vue.js:4471
Watcher @ vue.js:4460
mountComponent @ vue.js:4067
Vue.$mount @ vue.js:9037
Vue.$mount @ vue.js:11922
Vue._init @ vue.js:5005
Vue @ vue.js:5071
eval @ main.js:32
./src/main.js @ Bundle.js:1396
__webpack_require__ @ Bundle.js:727
fn @ Bundle.js:101
eval @ client:3
0 @ Bundle.js:1407
__webpack_require__ @ Bundle.js:727
(anonymous) @ Bundle.js:794
(anonymous) @ Bundle.js:797
Show 3 more frames
vue.js:1896 TypeError: Cannot read property 'matched' of undefined
    at render (vue-router.esm.js:88)
    at createFunctionalComponent (vue.js:3064)
    at createComponent (vue.js:3237)
    at _createElement (vue.js:3421)
    at createElement (vue.js:3359)
    at vm._c (vue.js:3490)
    at Proxy.render (APP.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options:13)
    at VueComponent.Vue._render (vue.js:3544)
    at VueComponent.updateComponent (vue.js:4060)
    at Watcher.get (vue.js:4471)
```

问题出处：

vscode终端没有错误提示：没有 ``代码书写`` 或者 ``代码格式`` 错误

浏览器console控制台错误提示：缺少 代码

没有**挂载路由**

```javascript
// 导入 vue 前端框架
import Vue from 'vue'
// 导入 路由 插件
import VueRouter from 'vue-router'
// 手动安装 路由插件
Vue.use(VueRouter)

// 导入 路由表
import router from './Router'

// 导入 APP 组件
import APP from './APP.vue'

// 定义 VM 实例来渲染 index.html
var VM = new Vue({
    el: '#app',
    router,
    render: c => c(APP)
})
```

**7.新的错误提示：**

```powershell
ERROR in ./src/APP.vue?vue&type=template&id=ec61c590&scoped=true& 2:0
Module parse failed: Unexpected token (2:0)
File was processed with these loaders:
 * ./node_modules/vue-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
|
> <router-view></router-view>
|
 @ ./src/APP.vue 1:0-94 10:2-8 11:2-17 30:4-35:6 30:78-35:5 32:16-22 33:25-40
 @ ./src/main.js

ERROR in ./src/components/Navigation.vue?vue&type=template&id=81440b78&scoped=true& 3:0
Module parse failed: Unexpected token (3:0)
File was processed with these loaders:
 * ./node_modules/vue-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
|
|
> <!-- 导航栏 -->
| <header class="navbar-wrapper">
|       <div class="navbar navbar-black">
 @ ./src/components/Navigation.vue 1:0-101 11:2-8 12:2-17 31:4-36:6 31:85-36:5 33:16-22 34:25-40
 @ ./src/Router.js
 @ ./src/main.js

ERROR in ./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true& 57:0
Module parse failed: Unexpected token (57:0)
File was processed with these loaders:
 * ./node_modules/vue-loader/lib/index.js
You may need an additional loader to handle the result of these loaders.
|
|
> .navbar-wrapper{ height: 45px}
| .navbar{ position:relative; z-index:1030}
| .navbar-black{ background-color: #222}
 @ ./src/components/Navigation.vue 4:0-95
 @ ./src/Router.js
 @ ./src/main.js
```

```vscode
//vscode 代码提示
Vue Error: The template root requires exactly one element.
```

问题出处：

vue 中 ``<template>`` 标签有且只能有一个**根节点**，一般用``<div></div>``嵌套。

```javascript
<!-- 组件模板区域 -->
<template>
<!-- 模板根节点 -->
<div>

<router-link to="/Navigation">1</router-link>
<router-view></router-view>

</div>
</template>

...
```

**8.新的错误提示：**

```powershell
E:\filmsalon\webpack.config.js:84
            new VueLoaderPlugin()
                ^

ReferenceError: VueLoaderPlugin is not defined
    at Object.<anonymous> (E:\filmsalon\webpack.config.js:84:17)
?[90m    at Module._compile (internal/modules/cjs/loader.js:956:30)?[39m
?[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)?[39m
?[90m    at Module.load (internal/modules/cjs/loader.js:812:32)?[39m
?[90m    at Function.Module._load (internal/modules/cjs/loader.js:724:14)?[39m
?[90m    at Module.require (internal/modules/cjs/loader.js:849:19)?[39m
?[90m    at require (internal/modules/cjs/helpers.js:74:18)?[39m
    at WEBPACK_OPTIONS (E:\filmsalon\node_modules\?[4mwebpack-cli?[24m\bin\utils\convert-argv.js:114:13)
    at requireConfig (E:\filmsalon\node_modules\?[4mwebpack-cli?[24m\bin\utils\convert-argv.js:116:6)
    at E:\filmsalon\node_modules\?[4mwebpack-cli?[24m\bin\utils\convert-argv.js:123:17
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! filmsalon@1.0.0 dev: `webpack-dev-server`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the filmsalon@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2019-11-25T04_13_44_153Z-debug.log

events.js:187
      throw er; // Unhandled 'error' event
      ^

Error: listen EADDRINUSE: address already in use 127.0.0.1:3000
?[90m    at Server.setupListenHandle [as _listen2] (net.js:1300:14)?[39m
?[90m    at listenInCluster (net.js:1348:12)?[39m
?[90m    at GetAddrInfoReqWrap.doListen [as callback] (net.js:1487:7)?[39m
?[90m    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:65:10)?[39m
Emitted 'error' event on Server instance at:
?[90m    at emitErrorNT (net.js:1327:8)?[39m
?[90m    at processTicksAndRejections (internal/process/task_queues.js:80:21)?[39m {
  code: ?[32m'EADDRINUSE'?[39m,
  errno: ?[32m'EADDRINUSE'?[39m,
  syscall: ?[32m'listen'?[39m,
  address: ?[32m'127.0.0.1'?[39m,
  port: ?[33m3000?[39m
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! filmsalon@1.0.0 dev: `webpack-dev-server`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the filmsalon@1.0.0 dev script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2019-11-25T05_07_43_734Z-debug.log
```

问题出处：

有进程占据了自定义的端口：``node.exe``（任务管理器）

**9.新的错误提示：**

```powershell
ERROR in ./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true& (./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true&)
Module build failed (from ./node_modules/sass-loader/dist/cjs.js):
Error: Cannot find module 'node-sass'
Require stack:
- E:\filmsalon\node_modules\sass-loader\dist\getDefaultSassImplementation.js
- E:\filmsalon\node_modules\sass-loader\dist\getSassImplementation.js
- E:\filmsalon\node_modules\sass-loader\dist\index.js
- E:\filmsalon\node_modules\sass-loader\dist\cjs.js
- E:\filmsalon\node_modules\loader-runner\lib\loadLoader.js
- E:\filmsalon\node_modules\loader-runner\lib\LoaderRunner.js
- E:\filmsalon\node_modules\webpack\lib\NormalModule.js
- E:\filmsalon\node_modules\webpack\lib\NormalModuleFactory.js
- E:\filmsalon\node_modules\webpack\lib\Compiler.js
- E:\filmsalon\node_modules\webpack\lib\webpack.js
- E:\filmsalon\node_modules\webpack-dev-server\bin\webpack-dev-server.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:794:15)
    at Function.Module._load (internal/modules/cjs/loader.js:687:27)
    at Module.require (internal/modules/cjs/loader.js:849:19)
    at require (internal/modules/cjs/helpers.js:74:18)
    at getDefaultSassImplementation (E:\filmsalon\node_modules\sass-loader\dist\getDefaultSassImplementation.js:24:10)
    at getSassImplementation (E:\filmsalon\node_modules\sass-loader\dist\getSassImplementation.js:19:72)
    at Object.loader (E:\filmsalon\node_modules\sass-loader\dist\index.js:40:61)
 @ ./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true& (./node_modules/style-loader/dist!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true&) 1:14-310 20:4-31:5 23:25-321
 @ ./src/components/Navigation.vue?vue&type=style&index=0&id=81440b78&lang=scss&scoped=true&
 @ ./src/components/Navigation.vue
 @ ./src/Router.js
 @ ./src/main.js
```

```css
...

<!-- 组件样式区域 -->
<style lang="scss" scoped>

.navbar-wrapper{ height: 45px}
.navbar{ position:relative; z-index:1030}
.navbar-black{ background-color: #222}
.navbar-fixed-top{ position:fixed; top:0;left: 0; right: 0; z-index:1030}

/*logo*/
.logo{ display:inline-block; text-decoration:none; cursor:pointer}
a.logo:hover{ text-decoration:none}
.navbar .logo{height: 44px;line-height: 44px;margin-right: 10px;float: left}
.navbar-logo,.navbar-logo-m{font-size: 16px}
.navbar-slogan{ font-size:12px; cursor: default}
.navbar .container{ position:relative}
.navbar-userbar{position:absolute;top:0px; right:15px}
.navbar .container .navbar-userbar{ right:0px}

/*导航*/
.nav{ z-index:1}
.nav > ul{ font-size:0; line-height:0}
.nav > ul > li{ position:relative}
.nav > ul > li,.nav > ul > li > a{ display:inline-block; height:44px; line-height:44px;text-align:center;font-size:14px}
.nav > ul > li > a{ padding:0 20px}
.nav > ul > li > a:hover,.nav > ul > li.current > a{background-color:rgba(255,255,255,0.2); text-decoration:none;
    -webkit-transition: background-color 0.3s ease 0s;
    -moz-transition: background-color 0.3s ease 0s;
    -o-transition: background-color 0.3s ease 0s;
    -ms-transition: background-color 0.3s ease 0s;
    transition: background-color 0.3s ease 0s
}
@media (max-width: 767px) {
    .logo{ margin-right: 0}
    .navbar-nav{display: none}
    .navbar-nav > ul > li{ width: 100%; text-align: left}
    .navbar-nav > ul > li > a{display:block;padding:0 15px; text-align: left}
    .nav-collapse ul,.nav-collapse li {width: 100%;display: block}
    .js .nav-collapse {position: absolute;display: block;float:none; clear:both;max-height: 0;clip: rect(0 0 0 0);margin-left: -15px; margin-right: -15px;overflow: hidden;zoom: 1;
        -webkt-transition:max-height 284ms ease 0s;
        -moz-transition:max-height 284ms ease 0s;
        -o-transition:max-height 284ms ease 0s;
        -ms-transition:max-height 284ms ease 0s;
        transition:max-height 284ms ease 0s}
    .js-nav-active .nav-collapse.closed {max-height: none}
    .nav-collapse.opened {max-height: 9999px}
}

/*导航条风格-黑色*/
.navbar-black{background-color:#222;border-bottom:#080808 1px solid;-moz-box-shadow: 0 0 4px #333333;-webkit-box-shadow: 0 0 4px #333333;box-shadow: 0 0 4px #333333}
.navbar-black .logo{ color: #fff }
.navbar-black .navbar-logo-m{color: #eee}
.navbar-black .navbar-nav > ul > li,
.navbar-black .navbar-nav > ul > li > a{ color:#fff}
.navbar-black .navbar-nav > ul > li > a:hover,
.navbar-black .navbar-nav > ul > li.current > a{color:#fff}
.navbar-black .navbar-userbar{ color: #fff}
@media (max-width: 767px) {
.navbar-black .navbar-nav > ul > li{border-bottom: solid 1px #222}
.navbar-black .navbar-nav > ul > li > a:hover,
.navbar-black .navbar-nav > ul > li.current > a{ background: #777}
}

/*面包导航*/
.nav-toggle,a.nav-toggle{position:absolute; top:0px; right:15px; font-size: 20px; color:#999; padding:6px 11px;background-color:rgba(0,0,0,0.5);color:#fff;-webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
-o-user-select: none;
user-select: none}
.nav-toggle:hover,a.nav-toggle:hover{ text-decoration: none; color:#fff}

</style>
```

问题出处：

缺少插件：node-sass 编译 vue **文件内部 css 属性**

**10.新的错误提示：**

- 加载了 H-ui 前端 UI 框架

```powershell
ERROR in ./src/lib/H-ui/static/h-ui/css/H-ui.css (./node_modules/css-loader/dist/cjs.js!./src/lib/H-ui/static/h-ui/css/H-ui.css)
Module build failed (from ./node_modules/css-loader/dist/cjs.js):
CssSyntaxError

(3214:38) Unknown word

  3212 |
  3213 | */
> 3214 | .topnav{height:30px;line-height:30px;background-color;#f7f7f7;border-bottom:1px solid #EBEBEB; font-size:12px}
       |                                      ^
  3215 | .topbar{background-color: #ECECEC;border-bottom:1px solid #ddd}
  3216 | .topbar a{margin-right:5px}
```

问题出处：

?

**11.新的错误提示：**

- 安装引入 bootstrap 样式库

```powershell
ERROR in ./node_modules/bootstrap/dist/js/bootstrap.js
Module not found: Error: Can't resolve 'popper.js' in 'E:\filmsalon\node_modules\bootstrap\dist\js'
 @ ./node_modules/bootstrap/dist/js/bootstrap.js 7:101-121
 @ ./src/main.js
```

问题出处：

缺少 bootstrap 4 以后依赖插件：popper.js

**12.经验总结：**

- 相同样式覆盖问题：**权重覆盖**

```css

div .a { hight: 10px }

// 不能覆盖 div .a 的样式
.a { hight: 30px }

// 能覆盖 div .a 的样式
div .a { hight: 20px }

```

**13.问题反思：**

vue 文件内获取不到 dom 样式：

1. js 方法：``el.style.dispaly ; el.currentStyle("display") ; getComputedStyle(el)["display"]``

2. vue 方法：``$ref``

```javascript
...

export default {
    methods: {
        MENU () {
            var SW = this.$refs.open.style.cssText
            if ( SW.display == none ){
                    this.$refs.open.style.display = block
            }else{
                this.$refs.open.style.display = none
            }
        }
    }
}

...
```

**14.经验总结：**

> css position flex float 定位：**高度坍塌问题   排列问题**

- fixed：脱离文档流

- absolute：脱离文档流

``absolute margin`` 部分 定位到最近已定为的 **父元素** 的 ``relative content`` 部分

- relative：文档流

相对于 文档流 中的 正常位置

- float：脱离文档流，又具有流动性

清除 隐藏子元素 对父元素的影响

- flex：

**15.问题反思：**

padding-inline-start：？

let：块级作用域声明

width：max-content  ``让文本元素不换行自动充满一行``

**16.经验总结：**

> 如何消除 ``li`` 带来的 横向排列 间距

```css

// 消除间距:li 顶部对齐
ul { font-size: 0 }

// 居中
li { vertical-align: middle }

```

**17.问题反思：**

> transition 该放在什么地方？

消失出现：``visibility, opacity`` 放在 元素 本身

颜色渐变：``background-color`` 放在 父元素 身上

**18.经验总结：**

下拉菜单 的 绝对定位 应该采用 ``top left``，以保证下拉菜单的 复用性，不然会导致每次修改内容都需要 重新修改定位。

> **底部通用区域**

- **底部通用区域组件：Footer.vue**

**1.问题反思：**

> ``span``padding 属性撑不开 父元素？

```javascript

// 块状元素 能撑开 父元素
span { display: inline-block }

```

**2.问题反思：**

> 页面的 弹性盒子 布局：三分式布局？

```javascript

/* 页面 弹性盒子布局 */

// 清除 html 默认布局
html { margin: 0px; padding: 0px; height: 100% }
body { display: flex; flex-direction: column; height: 100% }

// 页面 三分式 布局
// 导航栏 固定顶部 只占用设定空间
.header { flex: 0 0 auto }
// 主体内容 占用可用的全部空间
.main-content { flex: 1 0 auto }
// 页脚 固顶底部 只占用设定空间
.footer { flex: 0 0 auto }

```

**3.经验总结：**

> min-height 不起作用的问题？

min-height 是相对于 父元素 的 height 来说的（ max，min等属性类似 ）

vue 文件中 利用 max min 等属性 定位 index.html 中的 html body 一定要注意 不要加 ``scope`` 属性

```javascript

// 全局样式 可以 作用到 index.html
<style lang="scss">

</style>

```

> **首页内容区域**

- **首页滚动栏区域组件：Scroll.vue**

**1.经验总结：**

数组赋值问题：

数组方法 push：可以适用于 所有数组 情况

```javascript

for (var i in readdirs) {
    // 不能使用 赋值方式 传值
    // 两个数组 length 不一样
    this.readdir.push('../../../public/images/Scroll/' + readdirs[i])
}

```

算术赋值法：仅适用于 数组 length 相同的情况

```javascript

var readdir = [];

readdir.length = 3;

var readdirs = [];

readdirs.length = 3;

for (var i in readdirs) {
    // 不能使用 赋值方式 传值
    // 两个数组 length 不一样
    readdir[i] = '../../../public/images/Scroll/' + readdirs[i]
}

```

**2.经验总结：**

css 中哪些样式需要考虑 **兼容性** 问题：

```javascript

-moz- xxx

-webkit- xxx

-ms- xxx

-o- xxx

```

1. width: max-content

2. transform

3. transition

4. box-shadow

**3.问题反思：**

``<i></i>`` 区别于 ``<div></div>`` 在 ``position: relative`` 定位时，为何使用 ``border-color: transparent`` 会出现 **梯形** 而不是 **三角形**？

```css

<i></i>：梯形

<div></div>：三角形

i, div { position: relative; border-style: solid; border-width: 20px; border-color: transparent transparent transparent rgba($color: #F0F8FF, $alpha: 0.4) }

```

**4.问题反思：**

为什么 ``border-color`` 右三角 使用 ``right`` 定位 会无效，没法保持**固定间距**，反而跟随移动？

```css
...

 <!-- 图片轮播区域 左快捷容器 -->
<div class="left-container">
    <!-- 图片轮播区域 左快捷箭头 -->
    <div class="left-arrow"></div>
</div>

<!-- 图片轮播区域 右快捷容器 -->
<div class="right-container">
    <!-- 图片轮播区域 右快捷箭头 -->
    <div class="right-arrow"></div>
</div>

...

// 图片轮播区 左快捷容器 div 基本样式
.left-container { position: absolute; width: 10%; height: 20%; background-color: rgba($color: #000000, $alpha: 0.5); z-index: 1000!important; top: 30%; left: 0%; cursor: pointer }
// 图片轮播区 左快捷箭头 div 基本样式
// 清除 div 的默认样式 content
.left-arrow { position: relative; border-style: solid; border-width: 20px; border-color: transparent rgba($color: #F0F8FF, $alpha: 0.4) transparent transparent; height: 0px; width: 0px; right: 20%; top: 10% }

// 图片轮播区 右快捷容器 div 基本样式
.right-container { position: absolute; width: 10%; height: 20%; background-color: rgba($color: #000000, $alpha: 0.5); z-index: 1000!important; top: 30%; right: 0%; cursor: pointer }
// 图片轮播区 右快捷箭头 div 基本样式
// 清除 div 的默认样式 content
.right-arrow { position: relative; border-style: solid; border-width: 20px; border-color: transparent transparent transparent rgba($color: #F0F8FF, $alpha: 0.4); height: 0px; width: 0px; left: 20%; top: 10% }

...
```

**5.经验总结：**

什么情况下，不能使用 **%** 来作为 属性 的单位值：

1. border-width

2. 父元素没有确定高度的子元素：body，html

**6.经验总结：**

1. **事件监听器** 中不能放 事件监听函数 的执行步骤，这样会导致 **事件函数** 死循环：触发式，循环式

2. 事件函数 如需要调用 事件监听器 中的 **参数结果**，则需要利用 **回调函数**：promise异步处理函数

**7.问题反思：**

关于 图片轮播区 卡顿等 性能优化的问题？

## 5.基本后台搭建

> **app.js**

运行基本**后台监视服务**

**1.问题反思：**

```javascript

// 挂载 路由 模块
router(app)

```

为何报错 ``TypeError: Cannot read property 'apply' of undefined`` ?

版本更新：配置方式变化？

```javascript

// 挂载 路由 模块
app.use(router)

```

> **router.js**

搭建前端首页的基本**后端路由**

**1.经验总结：**

请求路径：请求路径要以 '' / XXX / '' 方式 **包裹式命名**，不然会造成 浏览器 两次请求 来补齐 '' / ''

``/public/images/Scroll/``

> **Handle.js**

处理前端首页的滚动栏区域数据方法

## 6.基本数据库搭建

> **database.js**

定义数据库的基本 连接监听

> **dataformat.js**

定义基本的 数据库 文档数据结构 对外暴露 模型构造函数

## 7.完善 index.html 页面的 head 区域

通过 引入 路由钩子函数 ``router.beforeEach((to, from, next) => { })`` 来完成 动态渲染

## 8.基本后台管理系统搭建

> **Management.html**

搭建基本的 后台管理系统 页面布局 模板文件

**1.问题反思：**

html 标签内的 链接 **具体到文件名** 不能以 **包裹式命名**？

```javascript

management:1 Refused to apply style from 'http://localhost:3000/src/lib/layui-v2.5.5/layui.css/' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
localhost/:1 Failed to load resource: the server responded with a status of 404 (Not Found)
management:83 Uncaught ReferenceError: layui is not defined
    at management:83
management:1 Refused to apply style from 'http://localhost:3000/src/lib/layui-v2.5.5/layui.css/' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.

```

```html

<!-- 错误 -->
<link rel="stylesheet" href="/src/lib/layui-v2.5.5/layui.css/">
<script src="/src/lib/layui-v2.5.5/layui.js/"></script>

<!-- 正确 -->
<link rel="stylesheet" href="/src/lib/layui-v2.5.5/layui.css">
<script src="/src/lib/layui-v2.5.5/layui.js"></script>

```

**2.经验总结：**

所有经过 **后端路由** 发起的 **二次请求** 都必须通过 ``app.use( )`` API 开放资源

> **index.html**

导入 后台管理系统 模板文件，搭建基本的首页样式。

**1.经验总结：**

``response.render('index.html')`` API 中 **参数** 必须是 **字符串形式**

```javascript
ReferenceError: index is not defined
    at E:\filmsalon\routes\router.js:74:21
    at Layer.handle [as handle_request] (E:\filmsalon\node_modules\express\lib\router\layer.js:95:5)
    at next (E:\filmsalon\node_modules\express\lib\router\route.js:137:13)
    at Route.dispatch (E:\filmsalon\node_modules\express\lib\router\route.js:112:3)
    at Layer.handle [as handle_request] (E:\filmsalon\node_modules\express\lib\router\layer.js:95:5)
    at E:\filmsalon\node_modules\express\lib\router\index.js:281:22
    at Function.process_params (E:\filmsalon\node_modules\express\lib\router\index.js:335:12)
    at next (E:\filmsalon\node_modules\express\lib\router\index.js:275:10)
    at Function.handle (E:\filmsalon\node_modules\express\lib\router\index.js:174:3)
    at router (E:\filmsalon\node_modules\express\lib\router\index.js:47:12)
```

**2.问题反思：**

art-template 中使用 ``{{ each }}{{ /each }}`` 循环结构时，其中 数据 必须依据 ``[ { } , { } ]`` ，这种结构。

```html

<!-- 数据结构 -->
scroll: {
    message: [xxx, xxx, xxx],
    status: xxx
}

<!-- 循环结构 -->
{{ each scroll }}
<div>
    <img src="{{ $value.message }}">
</div>
{{ /each }}

```

**3.问题反思：**

1. 图片轮播区 的 relative 定位，怎么会影响后面 表单 的 absolute 定位，放在前面就不影响，或者都设置为 absolute 定位也不影响？

2. 图片轮播区 的 relative 定位，后面 表单 的 relative 定位，怎么不是紧挨着 兄弟元素？

**4.经验总结：**

``.classList.remove`` ``.classList.add`` 方法 只能用 ``document.getElementById('')`` 方式 获取对象

**5.问题反思：**

``var ListeningBTN = document.getElementsByClassName('modify');`` 明明 只有一个 class 类，为什么要使用 ``ListeningBTN[0]`` 数组方法 来调用？

``ClassName Tagname name`` 等 获取的是一个 **数组对象**？

```javascript

management:278 Uncaught TypeError: ListeningBTN.addEventListener is not a function
    at n.<anonymous> (management:278)
    at c (layui.all.js:2)
    at n.use (layui.all.js:2)
    at management:238

```

**6.经验总结：**

导入 mongoose 后台数据库 操作文件，导致出现了 如下问题：

```javascript

 throw new TypeError('Undefined type `' + name + '` at `' + path +
    ^

TypeError: Undefined type `undefined` at `Users.Status.required`
  Did you try nesting Schemas? You can only nest using refs or arrays.
    at Function.Schema.interpretAsType (E:\filmsalon\node_modules\?[4mmongoose?[24m\lib\schema.js:669:11)
    at Schema.path (E:\filmsalon\node_modules\?[4mmongoose?[24m\lib\schema.js:525:29)
    at Schema.add (E:\filmsalon\node_modules\?[4mmongoose?[24m\lib\schema.js:407:12)
    at Schema.add (E:\filmsalon\node_modules\?[4mmongoose?[24m\lib\schema.js:396:14)
    at Schema.add (E:\filmsalon\node_modules\?[4mmongoose?[24m\lib\schema.js:396:14)
    at new Schema (E:\filmsalon\node_modules\?[4mmongoose?[24m\lib\schema.js:105:10)
    at Object.<anonymous> (E:\filmsalon\models\dataformat.js:11:23)
?[90m    at Module._compile (internal/modules/cjs/loader.js:956:30)?[39m
?[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)?[39m
?[90m    at Module.load (internal/modules/cjs/loader.js:812:32)?[39m
?[90m    at Function.Module._load (internal/modules/cjs/loader.js:724:14)?[39m
?[90m    at Module.require (internal/modules/cjs/loader.js:849:19)?[39m
?[90m    at require (internal/modules/cjs/helpers.js:74:18)?[39m
    at Object.<anonymous> (E:\filmsalon\routes\router.js:21:10)
?[90m    at Module._compile (internal/modules/cjs/loader.js:956:30)?[39m
?[90m    at Object.Module._extensions..js (internal/modules/cjs/loader.js:973:10)?[39m

```

解决方法：
mongoose Schema 定义的 数据库 数据模型 中，``type: xxx`` 写成了 ``Type: xxx``？

**7.经验总结：**

关于 数组 push 方法的问题：

```javascript

// 错误
var value = {};
for(i in data)  {
    value = data[i];
    readdir.push(value)
}

```

问题分析：
由于 数组 object 对象 等 **复合数据类型**，采用的是 **堆栈** 的储存方式，采用的是 **数据引用地址** 的方式记录数据，一旦在 外部定义变量，内部 **循环函数** 调用并赋值，会导致结果都一样。

循环函数 内部动态循环 定义变量 就可以避免这个问题：

```javascript

// 正确
for(i in data)  {
    var value = {};
    value = data[i];
    readdir.push(value)
}

```

**8.经验总结：**

1. 数据库 mongoose Schema 怎么定义的数据，就怎么样的 形式赋值

2. 数据库 mongoose Schema 不同类型作用 的数据必须 分开定义 Schema

3. 数据库中 Schema 非必填项 ``required`` 与 ``unique``，最好同时存在，不然会造成 **空白键重复**。

4. 数据库 **独立 Schema** 不要使用 相同的 **collection** 名称，这样会导致必须同时满足所有模型的 **数据验证**，不然就会报错，这也与 独立数据模型 相悖驰。

```javascript

// 空白键重复
{"code":11000,"index":0,"errmsg":"insertDocument :: caused by :: 11000 E11000 duplicate key error index: filmsalon.filmsalon.$Users.Message.ID_1  dup key: { : null }","op":{"updateTime":"2019-12-24T11:31:32.204Z","createTime":"2019-12-24T11:31:32.204Z","_id":"5e01f7148999e122349160c3","Scroll":[{"_id":"5e01f7148999e122349160c4","Message":[{"Name":"2","link":"/public/images/Scroll/1.png","notes":"test2","_id":"5e01f7148999e122349160c5"}]}]}}


// 模型冲突：各个 独立模型 使用了相同的 collection 名称
(node:9220) UnhandledPromiseRejectionWarning: MongoError: E11000 duplicate key error index: filmsalon.filmsalon.$Users.Message.NickName_1  dup key: { : null }
    at Function.MongoError.create (E:\filmsalon\node_modules\mongodb-core\lib\error.js:31:11)
    at E:\filmsalon\node_modules\mongodb-core\lib\connection\pool.js:497:72
    at authenticateStragglers (E:\filmsalon\node_modules\mongodb-core\lib\connection\pool.js:443:16)
    at Connection.messageHandler (E:\filmsalon\node_modules\mongodb-core\lib\connection\pool.js:477:5)
    at Socket.<anonymous> (E:\filmsalon\node_modules\mongodb-core\lib\connection\connection.js:333:22)
    at Socket.emit (events.js:210:5)
    at addChunk (_stream_readable.js:308:12)
    at readableAddChunk (_stream_readable.js:289:11)
    at Socket.Readable.push (_stream_readable.js:223:10)
    at TCP.onStreamRead (internal/stream_base_commons.js:182:23)
(node:9220) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function
without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:9220) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:9220) UnhandledPromiseRejectionWarning: MongoError: E11000 duplicate key error index: filmsalon.filmsalon.$Videos.Message.Name_1  dup key: { : null }
    at Function.MongoError.create (E:\filmsalon\node_modules\mongodb-core\lib\error.js:31:11)
    at E:\filmsalon\node_modules\mongodb-core\lib\connection\pool.js:497:72
    at authenticateStragglers (E:\filmsalon\node_modules\mongodb-core\lib\connection\pool.js:443:16)
    at Connection.messageHandler (E:\filmsalon\node_modules\mongodb-core\lib\connection\pool.js:477:5)
    at Socket.<anonymous> (E:\filmsalon\node_modules\mongodb-core\lib\connection\connection.js:333:22)
    at Socket.emit (events.js:210:5)
    at addChunk (_stream_readable.js:308:12)
    at readableAddChunk (_stream_readable.js:289:11)
    at Socket.Readable.push (_stream_readable.js:223:10)
    at TCP.onStreamRead (internal/stream_base_commons.js:182:23)
(node:9220) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function
without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
(node:9220) UnhandledPromiseRejectionWarning: MongoError: E11000 duplicate key error index: filmsalon.filmsalon.$ImageText.Message.Name_1  dup key: { : null }
    at Function.MongoError.create (E:\filmsalon\node_modules\mongodb-core\lib\error.js:31:11)
    at E:\filmsalon\node_modules\mongodb-core\lib\connection\pool.js:497:72
    at authenticateStragglers (E:\filmsalon\node_modules\mongodb-core\lib\connection\pool.js:443:16)
    at Connection.messageHandler (E:\filmsalon\node_modules\mongodb-core\lib\connection\pool.js:477:5)
    at Socket.<anonymous> (E:\filmsalon\node_modules\mongodb-core\lib\connection\connection.js:333:22)
    at Socket.emit (events.js:210:5)
    at addChunk (_stream_readable.js:308:12)
    at readableAddChunk (_stream_readable.js:289:11)
    at Socket.Readable.push (_stream_readable.js:223:10)
    at TCP.onStreamRead (internal/stream_base_commons.js:182:23)
(node:9220) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function
without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 3)


// find() 函数查询 嵌套模型 格式错误
events.js:187
      throw er; // Unhandled 'error' event
      ^

TypeError: Cannot read property 'Message' of undefined
    at E:\filmsalon\routes\router.js:112:46
    at model.Query.<anonymous> (E:\filmsalon\node_modules\?[4mmongoose?[24m\lib\model.js:4093:16)
    at E:\filmsalon\node_modules\?[4mkareem?[24m\index.js:273:21
    at E:\filmsalon\node_modules\?[4mkareem?[24m\index.js:131:16
?[90m    at processTicksAndRejections (internal/process/task_queues.js:75:11)?[39m
Emitted 'error' event on Function instance at:
    at model.Query.<anonymous> (E:\filmsalon\node_modules\?[4mmongoose?[24m\lib\model.js:4095:13)
    at E:\filmsalon\node_modules\?[4mkareem?[24m\index.js:273:21
    at E:\filmsalon\node_modules\?[4mkareem?[24m\index.js:131:16
?[90m    at processTicksAndRejections (internal/process/task_queues.js:75:11)?[39m


// find() 函数 嵌套模型查询 返回值格式：data
[
  model {
    '$__': InternalCache {
      strictMode: true,
      selected: {},
      shardval: undefined,
      saveError: undefined,
      validationError: undefined,
      adhocPaths: undefined,
      removing: undefined,
      inserting: undefined,
      version: undefined,
      getters: {},
      _id: 5e0212b592baee1eb8dbdaa2,
      populate: undefined,
      populated: undefined,
      wasPopulated: false,
      scope: undefined,
      activePaths: [StateMachine],
      pathsToScopes: {},
      ownerDocument: undefined,
      fullPath: undefined,
      emitter: [EventEmitter],
      '$options': true
    },
    isNew: false,
    errors: undefined,
    _doc: {
      Scroll: [Array],
      createTime: 2019-12-24T13:29:25.954Z,
      updateTime: 2019-12-24T13:29:25.954Z,
      _id: 5e0212b592baee1eb8dbdaa2
    },
    '$init': true
  },
  model {
    '$__': InternalCache {
      strictMode: true,
      selected: {},
      shardval: undefined,
      saveError: undefined,
      validationError: undefined,
      adhocPaths: undefined,
      removing: undefined,
      inserting: undefined,
      version: undefined,
      getters: {},
      _id: 5e0212c392baee1eb8dbdaa5,
      populate: undefined,
      populated: undefined,
      wasPopulated: false,
      scope: undefined,
      activePaths: [StateMachine],
      pathsToScopes: {},
      ownerDocument: undefined,
      fullPath: undefined,
      emitter: [EventEmitter],
      '$options': true
    },
    isNew: false,
    errors: undefined,
    _doc: {
      Scroll: [Array],
      createTime: 2019-12-24T13:29:39.914Z,
      updateTime: 2019-12-24T13:29:39.914Z,
      _id: 5e0212c392baee1eb8dbdaa5
    },
    '$init': true
  },
  model {
    '$__': InternalCache {
      strictMode: true,
      selected: {},
      shardval: undefined,
      saveError: undefined,
      validationError: undefined,
      adhocPaths: undefined,
      removing: undefined,
      inserting: undefined,
      version: undefined,
      getters: {},
      _id: 5e0212d392baee1eb8dbdaa8,
      populate: undefined,
      populated: undefined,
      wasPopulated: false,
      scope: undefined,
      activePaths: [StateMachine],
      pathsToScopes: {},
      ownerDocument: undefined,
      fullPath: undefined,
      emitter: [EventEmitter],
      '$options': true
    },
    isNew: false,
    errors: undefined,
    _doc: {
      Scroll: [Array],
      createTime: 2019-12-24T13:29:55.829Z,
      updateTime: 2019-12-24T13:29:55.829Z,
      _id: 5e0212d392baee1eb8dbdaa8
    },
    '$init': true
  }
]


// find() 函数 嵌套模型查询 返回值格式：data[0].Scroll[0]
[
  model {
    '$__': InternalCache {
      strictMode: true,
      selected: {},
      shardval: undefined,
      saveError: undefined,
      validationError: undefined,
      adhocPaths: undefined,
      removing: undefined,
      inserting: undefined,
      version: undefined,
      getters: {},
      _id: 5e0212b592baee1eb8dbdaa2,
      populate: undefined,
      populated: undefined,
      wasPopulated: false,
      scope: undefined,
      activePaths: [StateMachine],
      pathsToScopes: {},
      ownerDocument: undefined,
      fullPath: undefined,
      emitter: [EventEmitter],
      '$options': true
    },
    isNew: false,
    errors: undefined,
    _doc: {
      Scroll: [Array],
      createTime: 2019-12-24T13:29:25.954Z,
      updateTime: 2019-12-24T13:29:25.954Z,
      _id: 5e0212b592baee1eb8dbdaa2
    },
    '$init': true
  }
]
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
The service is running...
Database connection successful...
model {
  '$__': InternalCache {
    strictMode: true,
    selected: {},
    shardval: undefined,
    saveError: undefined,
    validationError: undefined,
    adhocPaths: undefined,
    removing: undefined,
    inserting: undefined,
    version: undefined,
    getters: {},
    _id: 5e0212b592baee1eb8dbdaa2,
    populate: undefined,
    populated: undefined,
    wasPopulated: false,
    scope: undefined,
    activePaths: StateMachine {
      paths: [Object],
      states: [Object],
      stateNames: [Array]
    },
    pathsToScopes: {},
    ownerDocument: undefined,
    fullPath: undefined,
    emitter: EventEmitter {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: 0
    },
    '$options': true
  },
  isNew: false,
  errors: undefined,
  _doc: {
    Scroll: [
      [EmbeddedDocument],
      _path: 'Scroll',
      toBSON: [Function: toBSON],
      _atomics: {},
      _parent: [Circular],
      _cast: [Function: _cast],
      _markModified: [Function: _markModified],
      _registerAtomic: [Function: _registerAtomic],
      '$__getAtomics': [Function: $__getAtomics],
      hasAtomics: [Function: hasAtomics],
      _mapCast: [Function: _mapCast],
      push: [Function: push],
      nonAtomicPush: [Function: nonAtomicPush],
      '$pop': [Function: $pop],
      pop: [Function: pop],
      '$shift': [Function: $shift],
      shift: [Function: shift],
      pull: [Function: pull],
      splice: [Function: splice],
      unshift: [Function: unshift],
      sort: [Function: sort],
      addToSet: [Function: addToSet],
      set: [Function: set],
      toObject: [Function: toObject],
      inspect: [Function: inspect],
      indexOf: [Function: indexOf],
      remove: [Function: pull],
      id: [Function: id],
      create: [Function: create],
      notify: [Function: notify],
      isMongooseArray: true,
      isMongooseDocumentArray: true,
      validators: [],
      _schema: [DocumentArray],
      _handlers: [Object]
    ],
    createTime: 2019-12-24T13:29:25.954Z,
    updateTime: 2019-12-24T13:29:25.954Z,
    _id: 5e0212b592baee1eb8dbdaa2
  },
  '$init': true
}
[nodemon] restarting due to changes...
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
The service is running...
Database connection successful...
EmbeddedDocument {
  __parentArray: [
    [Circular],
    _path: 'Scroll',
    toBSON: [Function: toBSON],
    _atomics: {},
    _parent: model {
      '$__': [InternalCache],
      isNew: false,
      errors: undefined,
      _doc: [Object],
      '$init': true
    },
    _cast: [Function: _cast],
    _markModified: [Function: _markModified],
    _registerAtomic: [Function: _registerAtomic],
    '$__getAtomics': [Function: $__getAtomics],
    hasAtomics: [Function: hasAtomics],
    _mapCast: [Function: _mapCast],
    push: [Function: push],
    nonAtomicPush: [Function: nonAtomicPush],
    '$pop': [Function: $pop],
    pop: [Function: pop],
    '$shift': [Function: $shift],
    shift: [Function: shift],
    pull: [Function: pull],
    splice: [Function: splice],
    unshift: [Function: unshift],
    sort: [Function: sort],
    addToSet: [Function: addToSet],
    set: [Function: set],
    toObject: [Function: toObject],
    inspect: [Function: inspect],
    indexOf: [Function: indexOf],
    remove: [Function: pull],
    id: [Function: id],
    create: [Function: create],
    notify: [Function: notify],
    isMongooseArray: true,
    isMongooseDocumentArray: true,
    validators: [],
    _schema: DocumentArray {
      casterConstructor: [Function],
      caster: [Function],
      '$isMongooseArray': true,
      path: 'Scroll',
      instance: 'Array',
      validators: [],
      setters: [],
      getters: [],
      options: [Object],
      _index: null,
      defaultValue: [Function],
      schema: [Schema],
      '$isMongooseDocumentArray': true
    },
    _handlers: { isNew: [Function: notify], save: [Function: notify] }
  ],
  __parent: model {
    '$__': InternalCache {
      strictMode: true,
      selected: {},
      shardval: undefined,
      saveError: undefined,
      validationError: undefined,
      adhocPaths: undefined,
      removing: undefined,
      inserting: undefined,
      version: undefined,
      getters: {},
      _id: 5e0212b592baee1eb8dbdaa2,
      populate: undefined,
      populated: undefined,
      wasPopulated: false,
      scope: undefined,
      activePaths: [StateMachine],
      pathsToScopes: {},
      ownerDocument: undefined,
      fullPath: undefined,
      emitter: [EventEmitter],
      '$options': true
    },
    isNew: false,
    errors: undefined,
    _doc: {
      Scroll: [Array],
      createTime: 2019-12-24T13:29:25.954Z,
      updateTime: 2019-12-24T13:29:25.954Z,
      _id: 5e0212b592baee1eb8dbdaa2
    },
    '$init': true
  },
  __index: 0,
  '$__': InternalCache {
    strictMode: true,
    selected: undefined,
    shardval: undefined,
    saveError: undefined,
    validationError: undefined,
    adhocPaths: undefined,
    removing: undefined,
    inserting: undefined,
    version: undefined,
    getters: {},
    _id: 5e0212b592baee1eb8dbdaa3,
    populate: undefined,
    populated: undefined,
    wasPopulated: false,
    scope: undefined,
    activePaths: StateMachine {
      paths: [Object],
      states: [Object],
      stateNames: [Array]
    },
    pathsToScopes: {},
    ownerDocument: model {
      '$__': [InternalCache],
      isNew: false,
      errors: undefined,
      _doc: [Object],
      '$init': true
    },
    fullPath: 'Scroll',
    emitter: EventEmitter {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: 0
    },
    '$options': {}
  },
  isNew: false,
  errors: undefined,
  _doc: {
    Message: [
      [EmbeddedDocument],
      _path: 'Message',
      toBSON: [Function: toBSON],
      _atomics: {},
      _parent: [Circular],
      _cast: [Function: _cast],
      _markModified: [Function: _markModified],
      _registerAtomic: [Function: _registerAtomic],
      '$__getAtomics': [Function: $__getAtomics],
      hasAtomics: [Function: hasAtomics],
      _mapCast: [Function: _mapCast],
      push: [Function: push],
      nonAtomicPush: [Function: nonAtomicPush],
      '$pop': [Function: $pop],
      pop: [Function: pop],
      '$shift': [Function: $shift],
      shift: [Function: shift],
      pull: [Function: pull],
      splice: [Function: splice],
      unshift: [Function: unshift],
      sort: [Function: sort],
      addToSet: [Function: addToSet],
      set: [Function: set],
      toObject: [Function: toObject],
      inspect: [Function: inspect],
      indexOf: [Function: indexOf],
      remove: [Function: pull],
      id: [Function: id],
      create: [Function: create],
      notify: [Function: notify],
      isMongooseArray: true,
      isMongooseDocumentArray: true,
      validators: [],
      _schema: [DocumentArray],
      _handlers: [Object]
    ],
    _id: 5e0212b592baee1eb8dbdaa3
  },
  '$init': true
}


// find() 函数 嵌套模型查询 返回值格式：data[0].Scroll[0].Message[0].xxx
EmbeddedDocument {
  __parentArray: [
    [Circular],
    _path: 'Message',
    toBSON: [Function: toBSON],
    _atomics: {},
    _parent: EmbeddedDocument {
      __parentArray: [Array],
      __parent: [model],
      __index: 0,
      '$__': [InternalCache],
      isNew: false,
      errors: undefined,
      _doc: [Object],
      '$init': true
    },
    _cast: [Function: _cast],
    _markModified: [Function: _markModified],
    _registerAtomic: [Function: _registerAtomic],
    '$__getAtomics': [Function: $__getAtomics],
    hasAtomics: [Function: hasAtomics],
    _mapCast: [Function: _mapCast],
    push: [Function: push],
    nonAtomicPush: [Function: nonAtomicPush],
    '$pop': [Function: $pop],
    pop: [Function: pop],
    '$shift': [Function: $shift],
    shift: [Function: shift],
    pull: [Function: pull],
    splice: [Function: splice],
    unshift: [Function: unshift],
    sort: [Function: sort],
    addToSet: [Function: addToSet],
    set: [Function: set],
    toObject: [Function: toObject],
    inspect: [Function: inspect],
    indexOf: [Function: indexOf],
    remove: [Function: pull],
    id: [Function: id],
    create: [Function: create],
    notify: [Function: notify],
    isMongooseArray: true,
    isMongooseDocumentArray: true,
    validators: [],
    _schema: DocumentArray {
      casterConstructor: [Function],
      caster: [Function],
      '$isMongooseArray': true,
      path: 'Message',
      instance: 'Array',
      validators: [],
      setters: [],
      getters: [],
      options: [Object],
      _index: null,
      defaultValue: [Function],
      schema: [Schema],
      '$isMongooseDocumentArray': true
    },
    _handlers: { isNew: [Function: notify], save: [Function: notify] }
  ],
  __parent: EmbeddedDocument {
    __parentArray: [
      [Circular],
      _path: 'Scroll',
      toBSON: [Function: toBSON],
      _atomics: {},
      _parent: [model],
      _cast: [Function: _cast],
      _markModified: [Function: _markModified],
      _registerAtomic: [Function: _registerAtomic],
      '$__getAtomics': [Function: $__getAtomics],
      hasAtomics: [Function: hasAtomics],
      _mapCast: [Function: _mapCast],
      push: [Function: push],
      nonAtomicPush: [Function: nonAtomicPush],
      '$pop': [Function: $pop],
      pop: [Function: pop],
      '$shift': [Function: $shift],
      shift: [Function: shift],
      pull: [Function: pull],
      splice: [Function: splice],
      unshift: [Function: unshift],
      sort: [Function: sort],
      addToSet: [Function: addToSet],
      set: [Function: set],
      toObject: [Function: toObject],
      inspect: [Function: inspect],
      indexOf: [Function: indexOf],
      remove: [Function: pull],
      id: [Function: id],
      create: [Function: create],
      notify: [Function: notify],
      isMongooseArray: true,
      isMongooseDocumentArray: true,
      validators: [],
      _schema: [DocumentArray],
      _handlers: [Object]
    ],
    __parent: model {
      '$__': [InternalCache],
      isNew: false,
      errors: undefined,
      _doc: [Object],
      '$init': true
    },
    __index: 0,
    '$__': InternalCache {
      strictMode: true,
      selected: undefined,
      shardval: undefined,
      saveError: undefined,
      validationError: undefined,
      adhocPaths: undefined,
      removing: undefined,
      inserting: undefined,
      version: undefined,
      getters: {},
      _id: 5e0212b592baee1eb8dbdaa3,
      populate: undefined,
      populated: undefined,
      wasPopulated: false,
      scope: undefined,
      activePaths: [StateMachine],
      pathsToScopes: {},
      ownerDocument: [model],
      fullPath: 'Scroll',
      emitter: [EventEmitter],
      '$options': {}
    },
    isNew: false,
    errors: undefined,
    _doc: { Message: [Array], _id: 5e0212b592baee1eb8dbdaa3 },
    '$init': true
  },
  __index: 0,
  '$__': InternalCache {
    strictMode: true,
    selected: undefined,
    shardval: undefined,
    saveError: undefined,
    validationError: undefined,
    adhocPaths: undefined,
    removing: undefined,
    inserting: undefined,
    version: undefined,
    getters: {},
    _id: 5e0212b592baee1eb8dbdaa4,
    populate: undefined,
    populated: undefined,
    wasPopulated: false,
    scope: undefined,
    activePaths: StateMachine {
      paths: [Object],
      states: [Object],
      stateNames: [Array]
    },
    pathsToScopes: {},
    ownerDocument: model {
      '$__': [InternalCache],
      isNew: false,
      errors: undefined,
      _doc: [Object],
      '$init': true
    },
    fullPath: 'Scroll.Message',
    emitter: EventEmitter {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: 0
    },
    '$options': {}
  },
  isNew: false,
  errors: undefined,
  _doc: {
    _id: 5e0212b592baee1eb8dbdaa4,
    notes: 'test1',
    link: '/public/images/Scroll/1.png',
    Name: '1'
  },
  '$init': true
}

```

**9.问题反思：**

关于 mongoose ``find()`` 函数 与 ``for in`` 循环函数 结合使用，会因为 **异步操作** 而导致结果出错？

```powershell

[
  {
    message: '/public/images/Scroll/3.png',
    name: '1',
    link: '/public/images/Scroll/1.png',
    notes: 'test1'
  },
  status: 0
]
[
  {
    message: '/public/images/Scroll/3.png',
    name: '1',
    link: '/public/images/Scroll/1.png',
    notes: 'test1'
  },
  {
    message: '/public/images/Scroll//public/images/Scroll/3.png',
    name: '2',
    link: '/public/images/Scroll/2.png',
    notes: 'test2'
  },
  status: 0
]
[
  {
    message: '/public/images/Scroll/3.png',
    name: '1',
    link: '/public/images/Scroll/1.png',
    notes: 'test1'
  },
  {
    message: '/public/images/Scroll//public/images/Scroll/3.png',
    name: '2',
    link: '/public/images/Scroll/2.png',
    notes: 'test2'
  },
  {
    message: '/public/images/Scroll//public/images/Scroll//public/images/Scroll/3.png',
    name: '3',
    link: '/public/images/Scroll/3.png',
    notes: 'test3'
  },
  status: 0
]

```

**10.问题反思：**

``for`` 循环 与 ``for in`` 循环， 在某些时候作用有区别：

1. for in 对 dom 对象，不起作用。

2. for in 对部分限制其 循环 的条件不起作用：强制性循环完毕？

3. for in 数据库 Mondb 回调数据时，会把 其中所有的 **属性方法** 也循环一遍。

```javascript

// if 不起作用 依然会全部输出
for (i in data) {
    // 获取 图片名称
    var name = data[i].split('.')[0];
    // 设置 数据库查询 数据
    var db = {
        "Scroll.Message.Name": name.toString()
    };
    ManageScroll(function(dbdata) {
        if (i == data.length - 1) {
            console.log(dbdata)
        }
    })
}

// if 起作用 只会按需输出
for (let index = 0; index < data.length; index++) {
    // 获取 图片名称
    var name = data[index].split('.')[0];
    // 设置 数据库查询 数据
    var db = {
        "Scroll.Message.Name": name.toString()
    };
    ManageScroll(function(dbdata) {
        if (index == data.length - 1) {
            console.log(dbdata)
        }
    })
}

```

**11.经验总结：**

node.js ``renameSync`` 定义文件名称 方式错误：

```powershell
Error: ENOENT: no such file or directory, rename '5dba796c5de38d3faaf9ada878b49c2f' -> '4.png'
    at Object.renameSync (fs.js:643:3)
    at E:\filmsalon\routes\router.js:236:16
    at Layer.handle [as handle_request] (E:\filmsalon\node_modules\express\lib\router\layer.js:95:5)
    at next (E:\filmsalon\node_modules\express\lib\router\route.js:137:13)
    at Immediate.<anonymous> (E:\filmsalon\node_modules\multer\lib\make-middleware.js:53:37)
    at processImmediate (internal/timers.js:441:21)
```

**12.经验总结：**

express 不能在 **同一路由** 中，重复发送前台 **响应数据** ``response.status().json()``。

```powershell
(node:6296) UnhandledPromiseRejectionWarning: Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (_http_outgoing.js:485:11)
    at ServerResponse.header (E:\filmsalon\node_modules\express\lib\response.js:771:10)
    at ServerResponse.location (E:\filmsalon\node_modules\express\lib\response.js:888:15)
    at ServerResponse.redirect (E:\filmsalon\node_modules\express\lib\response.js:926:18)
    at files (E:\filmsalon\routes\router.js:193:22)
    at processTicksAndRejections (internal/process/task_queues.js:93:5)
(node:6296) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function
without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
```

**13.经验总结：**

表单元素中有两种 属性值：

1. attribute：该 属性 可以通过 ``getAttribute()`` 方法获取，并且这是 dom 元素的 **初始值**。

2. property：该 属性 可以通过 ``xxx.xxx`` 方法获取，这是 dom 元素的 **动态值**。

**14.问题反思：**

> 关于 multer 中间件，在同时 post **文件表单** 与 **数据表单** 时，文件或者数据丢失的问题？

1. 表单属性问题：``enctype="multipart/form-data"`` 与 multer 的兼容性问题？

2. 端口冲突问题：同时传输 两个表单 到 同一路由，导致了 部分数据丢失？

3. 同步提交的问题：一个页面，不能同时使用两次及以上的 ``submit()``？

**15.经验总结：**

如果 表单数据类型 设置为 ``enctype="multipart/form-data"`` 那么，即使表单只提交 纯数据，``request.body`` 也无法获取，只能 路由中 加载 文件处理中间件后，才能读取数据。

**16.优化设计：**

渲染效率问题：后台管理系统 动态信息栏 为何在第三轮 才能动态显示信息？

## 9.前台首页布局优化

> **前台首页组件：Home.vue**

**1.经验总结：**

要想使用 ``height`` % 单位属性，必须 使得 每级父元素 都必须具备 该属性。

**2.问题反思：**

利用 ``div border`` 制作的 **直角梯形**，绝对定位时 ``bottom: 0px`` ，不仅没有 对齐，反而 缩小 了？

原因：子元素 大于 父元素

**3.问题反思：**

``vue transition`` 两组动画设置 相同的时间，为何会出现其中一组 不起作用 的问题？

**4.问题反思：**

伪元素 ``content`` 中字体 最小可调大小 为 **12px**？

- **前台首页用户贡献榜组件：Contribution.vue**

- **前台首页学术热度值榜组件：Academic.vue**

- **前台首页影视热度值榜组件：Films.vue**

- **前台首页影视课程热度值榜组件：Course.vue**

## 10.前台首页的后台数据接口

- **前台首页用户贡献榜组件：Contribution.vue**

**1.经验总结：**

排行榜，分页等 数据排序 原则：

1. 数据排序 尽量放在 **数据上传** 的过程中，以便于 **数据读取** 过程迅速。

2. 排序尽量不要 **并列排名**，相同名次的 按 **注册时间** 排序，以简化 数据设计难度。

**2.经验总结：**

嵌套复合数据声明方式：

```javascript

// 错误 用法1
var Users = {};
Users.message.xxx = xxx;  // 一个对象 不能设置 三层嵌套数据：xxx.xxx = xxx


// 错误 用法2
var Users = { message: {} };
Users.message.push();  // push 不能对 对象 使用


// 错误 用法3
var Users = [];
Users.message.push();  // push 不能对 对象 使用


// 正确 用法
var Users = { message: [] };
Users.message.push();

```

**3.问题反思：**

Mongodb 数据读取 **不稳定问题**：前台首页用户贡献榜组件？

解决方法:
**v-if** 每次切换都会 **删除节点与数据**，会造成大量的 **二次数据请求**。
**v-show** 每次切换都不会 **删除节点与数据**，只是暂时性的 **隐藏节点**，不会再次的 **二次数据请求**。

- **前台首页学术热度值榜组件：Academic.vue**

- **前台首页影视热度值榜组件：Films.vue**

- **前台首页影视课程热度值榜组件：Course.vue**

**1.经验总结：**

影视课程 **图片名称** 与对应的 **数据库名称** 设置相同，可以减少相应的 **工作量 代码量**。

**2.问题反思：**

div 内部右边子元素添加 ``overflow`` 时，导致布局混乱，左边子元素 对齐于 右边子元素的 底部滚动条位置？

**3.问题反思：**

vue 问题：

```powershell

Duplicate keys detected: '0'. This may cause an update error.

```

问题出处：v-for key 值 **重复** 导致，如果 索引值 key 是独立声明的变量，那么多个 key 会造成 重复问题。
（独立变量+拼接字符；项目值中不重复值作为key）

```javascript

// 错误示范：项目名 item 重复，索引值 i 重复
// i = 0, 1, 2, 3 ...
// i = 0, 1, 2, 3 ...
<a v-for='(item, i) in xxx' :key='i'></a>
<a v-for='(item, i) in xxx' :key='i'></a>

// 错误示范：索引值 i j 重复
// i = 0, 1, 2, 3 ...
// j = 0, 1, 2, 3 ...
<a v-for='(Vitem, i) in xxx' :key='i'></a>
<a v-for='(ITitem, j) in xxx' :key='j'></a>

// 正确示范：
// i = 0, 1, 2, 3 ...
// j = IT-0, IT-1, IT-2, IT-3 ...
<a v-for='(Vitem, i) in xxx' :key='i'></a>
<a v-for='(ITitem, j) in xxx' :key=''IT-' + j'></a>

```

**4.经验总结：**

``xxx.style`` 不能对 节点数组集合 使用，必须使用 for 循环，对 每个节点 单独添加样式。

**5.经验总结：**

获取元素的属性时 单位 的问题：

屏幕以及元素的 宽高：无单位

**6.经验总结：**

关于 ``定时器 setInterval setTimeout`` 设置问题:

```javascript

/* 匿名无参型： */

// 1. 常规型：
Timer = setInterval(function() {
  xxx;
}, 1000)

// 2. 代码块型：
Timer = setInterval(xxx, 1000);  // 错误示范：代码块立即执行，且只执行一次，没有定时效果。
Timer = setInterval(' xxx; ', 1000)  // 正确示范

// 3. 外部引用型：
xxx() {
  xxx;
};
Timer = setInterval(xxx(), 1000);  // 错误示范：外部函数立即执行，且只执行一次，没有定时效果。
Timer = setInterval(' xxx() ', 1000);  // 正确示范：类似 Eval() 函数，字符串内 相当于 “ 可执行代码 ”
Timer = setInterval(xxx, 1000)  // 正确示范


/* 传参型： */

// 1. 常规型：
Timer = setInterval(function(xxx) {
  xxx;
}, 1000)

// 2. 外部引用型：
xxx(xxx) {
  xxx;
};
Timer = setInterval(xxx(xxx), 1000);  // 错误示范：外部函数立即执行，且只执行一次，没有定时效果。
Timer = setInterval(' xxx(xxx) ', 1000)  // 正确示范 不推荐：类似 Eval() 函数，字符串内 相当于 “ 可执行代码 ”，但是参数无法周期性更新。

// 3.常规与外部引用结合型：
xxx(xxx) {
  xxx;
};
Timer = setInterval(function(xxx) {  // 正确示范：推荐
  xxx(xxx)
}, 1000)

// 4. 外部引用嵌套型：
xxx(xxx) {
  return xxx(xxx) {
    xxx;
  }
};
Timer = setInterval(xxx(xxx), 1000);  // 正确示范：返回函数，有定时效果。
Timer = setInterval(' xxx(xxx) ', 1000)  // 正确示范：不推荐

```

关于 ``定时器 setInterval setTimeout`` this 指向性问题:

```javascript

// 错误示范：匿名函数内部 this 指向 windows
VMov(index) {
  xxx;
};
this.VTimer = setInterval(function() {
    this.VMov(index)
}, 1000)

// 正确示范：引用函数名 以及 外部函数 中的 this 指向 vue
VMov(index) {
  return xxx(xxx) {
    this.xxx;
  }
};
this.VTimer = setInterval(this.VMov(index), 1000)

// 正确示范 推荐：外部函数 this，匿名函数内部 that，都指向 vue
VMov(index) {
  this.xxx;
};
var that = this;
this.VTimer = setInterval(function() {
    that.VMov(index)
}, 1000)

// 正确示范 推荐：外部函数 箭头函数内部 this，都指向 vue
VMov(index) {
  this.xxx;
};
this.VTimer = setInterval(() => {
    this.VMov(index)
}, 1000)

```

**7.经验总结：**

用 promise 函数 改造 回调地域问题：router.js

只要数据请求其中一环出错就必须重新请求，以减少 **代码量**，增加 **代码可阅读性**。（请求视频图片，请求图文图片，请求视频数据，请求图文数据）

**8.经验总结：**

关于 ``promise.then 链式调用`` 问题：

``.then`` 回调函数作用域：每个 then 的**回调参数**，不能相互调用，即便 逻辑上 后面的 then **嵌套**在 前面的 then 内部，因为每个 ``then return`` 只返回下一个 then 要执行的函数，而没有返回参数，所以每个 then **相互独立的作用域**。

```javascript

// 变量储存
var data;

// 初始回调函数
promise.resolve(data1)

// 初始回调
.then(function(data2) { // data2 = data1
    data = data2;  // 储存变量
    return promise.resolve(data3)
})

// 上级回调函数结果
.then(function(data4) { // data4 = data3
    console.log(data2);  // 错误示范：data2 与 data4 相互独立的 作用域，不能调用 前面的数据，即使逻辑上 data4 是 data2 的内部函数。
    console.log(data)  // 正确示范：通过 外部中间变量赋值，也可以访问 前面的数据。因为 后面的函数没执行完，前面的函数不会销毁，直到所有的链式调用 then 执行完毕，才销毁所有 then 函数。
})

```

**9.经验总结：**

``for 循环异步函数 promise`` 效率低下，可以用 ``promise.all`` 来同时处理大量的 异步函数 promise。

- **前台首页其他课程热度值榜组件：Other.vue**

## 11.前台分区页

- **前台分区页组件：Partition.vue**

**1.经验总结：**

``min-height 与 height`` 的区别：
height **高度固定**，多余内容会 **溢出**；min-height **高度变化**，但有最低高度，不存在 内容溢出 的情况。（首页底部固定栏 footer）
height 与 min-height **无法兼容**，height 必须与 height 搭配，才能使用 % 来排版。

**2.问题反思：**

如何在路由跳转后，恢复 js 删除的 css 样式？

**3.经验总结：**

动态监测环境中，对于 HTML **节点** 的检测，最为复杂，无论是 **watch computed** 都是在 **create 生命函数阶段** 执行的，是无法 动态准确的 读取节点的，所以必须利用其他 create 阶段的条件，比如：path。

注意：动态监测函数，无法在初次挂载时执行，所以必须“ **生命周期函数 + 动态函数** ”结合的方式。

**4.经验总结：**

``vue transition`` 标签，必须配合 ``v-if v-show`` 属性 使用才能有效果

**5.经验总结：**

``clearInterval()`` 与 ``removeEventListener()`` 可以在 没有创建 的前提下起作用，而不会导致 报错？

- **前台分区页信息栏组件：Information.vue**

**1.经验总结：**

``flex`` 布局的特征：

内部任意元素一旦确定了 宽高数值，所有的的元素皆以此元素为 参考数值。

任意超过 默认的 数值，都会导致 设置的数值 失效。

内部高度值 确定的情况下，外部 ``min-height`` 会导致布局错乱，外部会以内部为 基准，会把高过 设定高度 的部分，全部显示出来，导致布局 重叠。而 ``height`` 则会把 超过部分隐藏起来，而且会把 无效的设定值 变成为按比例分配。

外部高度值 确定的情况下，内部 ``height`` 会把所有内容 显示出来，而且会把 无效的设定值 变成为按比例分配，不会产生溢出。而 ``min-height`` 则会按照指定的高度布局，超过部分会溢出。

- **前台分区页信息栏组件：Filter.vue**

**1.经验总结：**

筛选信息 不支持 再次点击 取消选中功能，以简化 代码逻辑难度。

**2.经验总结：**

``addEventListener`` ``removeEventListener`` 监听器函数：

该函数与 **定时器函数** 有着相似的问题：**函数定义与引用问题，传参问题，this 指向性问题**

```javascript
ChooseFilter(event, index) {
  xxx;
};
var indexs = xxx;

// 变量型传参：
xxx.addEventListener('click', function(event, indexs) {
  ChooseFilter(event, indexs)  // 错误示范：调用传参 indexs 与 函数形参 index 不相同
})

// 赋值型传参：
xxx.addEventListener('click', function(event) {
  ChooseFilter(event, 0)  // 正确示范：推荐
})

```

- **前台分区页信息栏组件：Content.vue**

**1.问题反思：**

vue 中加载 layui 前端 UI 框架，main.js 中 import 加载样式库时，为何会出现如下错误：

```powershell

Refused to apply style from 'http://localhost:3000/css/modules/layer/default/layer.css?v=3.1.1' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.

```

问题出处：

webpack 在处理 import 的 css 文件时，会利用 **hash 值** 来 重命名 **css 样式名**，而 layui html 节点 却是 **网页挂载时** 通过 **js 创建** 的，没有经过 webpack 的 hash 值 重命名，这样就导致了获取不到 layui 的样式。

**2.经验总结：**

vue 生命周期函数，只代表其执行的先后问题，不代表一定要在 前面 执行完了，在执行 后面 的步骤。

例如：

create 生命周期中的 vue-router 请求的异步结果，mounted 中获取不到其结果，因为执行 mounted 时，这个 create 异步函数还没有执行完毕。

解决办法：

1. promise.then 函数：在 mounted 中，调用该 异步函数，并把要获取该 异步结果 的步骤，放在 回调 then 之后。

2. updata 生命周期：通过该生命周期，可以获取到 create 异步函数赋值给 data 中的值，但是该生命周期可能会导致 重复执行，比如那些 初始化 的步骤，会造成重复 初始化。

3. async await 函数：该函数可以把 异步函数，处理成 同步函数 的效果，让内部的所有步骤，按 同步函数 的方式来执行。

**3.经验总结：**

``Vue V-for`` 在分页中，在 **某些相同节点** 的渲染过程中，前面分页 的节点不会被删除，它们只会 **替换数据**，而 **保留节点**，以至于会出现前面节点的 **内联样式** 等标签属性，会 原封不动 的 **继承** 给后面的 分页节点。

**4.经验总结：**

JS 时间对象 Data，不能使用 字符串 方法来进行拆分，比如：``split 等``。

**5.经验总结：**

``v-for`` 所绑定的 data 数据，一旦更新，节点也自动 更新。

**6.经验总结：**

**数组清空** 不能使用赋值运算 ``a = []``，这相当于重新给 变量赋值，只能使用 属性方法 ``a.length = 0`` 清空数组。

**7.经验总结：**

> 条件语句 的巧妙运用：

```javascript

// 对象
var a = {
  b: 1
};
var d = {};
if (a.c) {  // 对象属性不存在：undefined = 0 = false
  xxx;
};
if (d) {  // 对象为空：Object.keys().length = 0 = false
  xxx;
};


// 数组
var d = [];
if (d.length) {  // 数组长度为0：length = 0 = false
  xxx;
};


// Error 异常抛出
function xxx() {
  xxx;
  if (error) return false
};
var e = xxx();
if (e) {  // 返回 false
  xxx;
};

```

**8.经验总结：**

``new Date(xxx)`` 内部如果不是 字符串类型，则会返回 ``Fri Jan 01 2016 08:00:00 GMT+0800 (中国标准时间)``。

**9.经验总结：**

数据类型：

new xxx()：object 对象
时间戳，Date.parse()，.getTime() 等时间方法：number

**10.经验总结：**

> **多条件 短路表达式** 运用规则：

```javascript

// 规则 1：条件越多的越要放在下面，这样可以保证数据不会被多次修改。
if (FilmsValue) {
    // 1. SearchValue 存在
    SearchValue && (leftRank = SearchValue);
    // 2. TagValue 存在
    TagValue && (leftRank = TagValue);
    // 3. WatchValue 存在
    WatchValue && (leftRank = WatchValue);
    // 4. SearchValue TagValue 存在
    SearchValue && TagValue && (leftRank = SearchValue + TagValue);
    // 5. SearchValue WatchValue 存在
    SearchValue && WatchValue && (leftRank = SearchValue + WatchValue);
    // 6. TagValue WatchValue 存在
    TagValue && WatchValue && (leftRank = TagValue + WatchValue);
    // 7. SearchValue TagValue WatchValue 存在
    SearchValue && TagValue && WatchValue && (leftRank = SearchValue + TagValue + WatchValue);
}


// 规则 2：短路表达式内，不能出现 关键字。
xxx && (return xxx)  // 错误
xxx && (let xxx = xxx)  // 错误
xxx && (for(xxx) { xxx; })  // 错误
xxx && (xxx = xxx)  // 正确：赋值运算


// 规则 3：短路表达式内，不能使用不存在对象的 属性。
Object && xxx  // 正确：Object undefined
Object.xxx && xxx  // 错误：Object undefined


// 规则 4：短路表达式之间，同等级关系 需要用 括号 包含起来。
A && B || C = (A && B) || C  // AB同级：A B 中任意一个非真，都执行 C。
A && (B || C)  // BC同级：A 为真，执行 B C 其中一个。

```

**11.经验总结：**

Mongoose 的**数据库模板**，不仅仅只是 **数据储存** 规范，也是 **数据读取** 的规范，原来数据库不经模板储存的 不规范数据，经过模板读取也会报错。

Mongoose **查询数据 读取数据** 的区别：查询数据使用的是数据库**原始的储存数据**，而读取数据则是经过 **数据库模板** 处理过的数据。

Mongoose 查询条件中，$eexists 不能与其他查询条件共存，只能单独存在？

**12.经验总结：**

关于异步操作 回调函数 参数：

mongoose数据操作：``function(error, data)``

文件读取操作：``function(error, data)``

promise函数：``function(data, error)``

**13.经验总结：**

> Mongoose 新方法总结：

.modelName：数据库模型对应的名字

- **前台分区页信息栏组件：Faster.vue**

**1.经验总结：**

阻止监听器冒泡行为，只能在 参数为false，即 冒泡阶段触发，才有效果；如果是在 ture 捕获阶段触发，阻止冒泡行为将导致网页监听器失效。

- **前台分区页信息栏组件：Users.vue**

**1.问题反思：**

关于 ``FormData`` 创建的数据，无论设置什么 头部类型（ ``application/x-www-form-urlencoded`` ），都是以 ``multipart/form-data`` 格式显示？

**2.经验总结：**

``Http request：Content-Type`` 与 ``Http response：Content-Type = Accept`` 头部类型必须保持一致，才能保证后台顺利解析。

**3.经验总结：**

``express-session`` 后台服务器，默认情况下，刷新都会造成 数据丢失，导致前端即便 cookie sid 没有失效，服务器验证也会失败。

**4.经验总结：**

css 样式规则：内部标签 大于 外部标签

- **数据库整改**

**1.经验总结：**

数据库模型设计原则：
对象化：数据结构必须是 纯粹的对象
default 约束器：必须有 默认值

**2.经验总结：**

> 异步函数经验总结：

执行顺序问题：.then 与 回调函数 外部代码 比 内部代码 先执行

return 问题：外部代码执行完毕后，再执行内部代码，有时候执行完毕，异步函数还没有得到结果，导致引用的返回值为 undefined。

await 与 .then 问题：两者不能同时出现，否则会导致 await 获取不到值，异步函数就销毁了。

await 返回值问题：数据若 不存在，则会返回 空数组。

```javascript

this.dbData = await this.FindDB(FindWords, this.dbmodel)

.then(function(data) {
    console.log(1, this.dbData)  // 1：this 指向性问题
})

.catch(
    // 捕获错误
    function(error) {
        this.Error(error)
    });

console.log(2, this.dbData)  // 2：函数被销毁，变量值不存在了。

```

**3.经验总结：**

对象封装属性 key 时，如果需要 动态变量 来封装，需要使用 ``xxx[xxx] = xxx`` 模式来赋值。

**4.经验总结：**

函数传参问题：

实参 与 形参 数量可以不对称，只要该参数没有被 本次调用 使用。
函数内部 给 子函数 传参，也遵循这个规律。

**5.经验总结：**

> 数据类型判断 问题：

``xxx instanceof xxx``：不能判断 字符串 类型（不是实例对象）

``typeof()``：能判断 “number”，”string”，”undefined”，”boolean”，”object”，“function”，“symbol” (ES6新增)七种

``Object.prototype.toString.call()``：判断 内置类型

**6.经验总结：**

``mongoose`` 数据筛选过程中，不存在 返回空数组，不足的 有多少返回多少。

- **前台组件整改**

**1.经验总结：**

数据请求格式：

```javascript

Data = {
  // 0: 请求成功; 1: 请求失败; -1: 请求数据不存在; 2: 身份验证失败;
  status: '数据请求状态',
  // 前台提示信息
  message: '返回信息',
  // 前台需要的相关数据
  content: '返回数据'
}

```

**2.经验总结：**

``Object.assign()`` 方法内部，不能使用 逻辑运算符 来选择数据源浅拷贝。

**3.经验总结：**

构造函数 问题：

构造函数的 原型函数 prototype 中，所有的 方法 属性 是共享的，原型上调用的 实例数据，也会在原型上复制一份。
构造函数 函数名 不要与 其他参数 重名，这样会导致 其他实例 无法找到该原型函数。

**4.经验总结：**

``express: response.send()`` 不会自动结束后面语句，需要手动设置 结束语句。

**5.经验总结：**

问题描述：

子组件 不能修改 父组件 传值

```powershell
Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "FilterResource"
```

解决办法：

子组件 调用 父组件 修改值的 方法

**6.经验总结：**

``vue: $emit`` 与 ``vue: $parent`` 在调用 父组件 方法时，前者返回的是 this 对象，后者返回的是 函数返回值。

**7.经验总结：**

Vue 中，在 Data 数据改变时立即获取 页面节点，会导致 **内存中虚拟节点生成被延后**，从而导致 获取到的节点还是 旧的节点，相当于 **BeforeUpdate** 生命周期，所以想要获取 最新节点，必须使用 **Updated** 生命周期函数。

**8.经验总结：**

vue 子组件 的更新也会触发 父组件 的 Updated 生命周期函数

生命周期函数内部的子函数，不能随意使用 this 对象，函数内部的 **变量**，可以直接访问，加上 this 之后反而找不到，系统只会去 this 对象的属性中去找（**data，methods**）。
