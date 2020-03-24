// 导入 vue 前端框架
import Vue from 'vue'

// 导入 路由 插件
import VueRouter from 'vue-router';
// 手动安装 路由插件
Vue.use(VueRouter)

// 导入 前端数据请求 插件
import VueResource from 'vue-resource';
// 安装 前端数据请求 插件
Vue.use(VueResource);
// 设置 数据请求 根路径
//Vue.http.options.root = 'http://www.filmsalon.org/'

// 导入 jquery js 库
import $ from 'jquery'

// 导入 bootstrap js 库
import 'bootstrap/dist/js/bootstrap.min.js';
// 导入 bootstrap css 库
import 'bootstrap/dist/css/bootstrap.min.css';
// 导入 bootstrap 图标 库
import 'open-iconic/sprite/open-iconic.min.svg'

// 导入 MUI 前端 UI 代码库
import './lib/mui-master/dist/css/mui.min.css'

// 导入 Mint-UI 前端 UI 组件库
import MintUI from 'mint-ui';
// 单独引入 Mint-UI 样式库
import '../node_modules/mint-ui/lib/style.css';
// 手动按照 Mint-UI 组件库
Vue.use(MintUI)

// 导入 前端 路由表
import router from './Router'

// 导入 前端 APP 根组件
import APP from './APP.vue'

// 引入 路由钩子函数 来动态改变 index.html 首页 title
// 路由 跳转之前 执行
router.beforeEach((to, from, next) => {
    // to：即将进入的 路由对象
    if (to.meta.title) {
        document.title = to.meta.title
    };
    // 继续往下 执行导航
    next()
})

// 定义 VM 实例来渲染 index.html
var VM = new Vue({
    el: '#app',
    router,
    render: c => c(APP)
})