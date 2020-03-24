// 导入 路由 插件
import VueRouter from 'vue-router'


/* 导入对应的 路由组件 */

// 导入 首页 组件
import Home from './components/home/Home.vue';
// 导入 资料馆 分区页 组件
import FilmsLibrary from './components/partition/Partition.vue'


// 创建 路由 对象
var router = new VueRouter({
    // 消除 vue url 中的 锚点 #
    mode: 'history',
    routes: [
        { path: '/', component: Home, meta: { title: '拉片网 & 首页' } },
        { path: '/FilmsLibrary', component: FilmsLibrary, meta: { title: '拉片网 & 资料馆' } }
    ]
})


// 暴露 路由接口
export default router