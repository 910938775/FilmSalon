<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="page-container">

        <!-- 导航栏 显示区域 -->
        <navigation class="header"></navigation>


        <!-- 页面内容 显示区域 -->
        <section class="main-content">
            <!-- 路由组件 显示区 -->
            <router-view></router-view>
        </section>


        <!-- 页脚 显示区域 -->
        <Footer class="footer"></Footer>

    </div>
</template>

<!-- 组件实例接口区域 -->
<script>
// 导入 导航栏 组件
import Navigation from './components/Navigation.vue';
// 导入 页脚 组件
import Footer from './components/Footer.vue'


// 接口区域
export default {
    // 注册 组件
    components: {
        Navigation,
        Footer
    },
    // 数据接口
    data() {
        return {
            // .page-container 选择器名称
            PCName: '.page-container',
            // .page-container 添加样式
            AddPCStyle: '.page-container {position: relative; height: 100% }',
            // .page-container 默认样式
            DefaultPC: '.page-container { position: relative; min-height: 100% }',
            // .main-content 选择器名称
            MCName: '.main-content',
            // .main-content 添加样式
            AddMCStyle: `.main-content {
                position: relative; padding-bottom: 65px; padding-top: 45px; height: 100%; overflow: hidden
            }`,
            // .main-content 默认样式
            DefaultMC: `.main-content {
                position: relative; padding-bottom: 65px; padding-top: 45px; height: 100%
            }`
        }
    },
    // 方法 接口
    methods: {
        // 定义 自动修改 前台首页 全屏布局 函数
        hasClassName() {
            /* 动态更新过于复杂 *
            // 获取 前台 页面内容 section 区域 根节点
            var root = document.getElementsByClassName('main-content')[0].childNodes[0];
            // 获取 该根节点的 className
            var tmpName = root.className;
            // 定义 正则表达式 构造函数
            // 指定 查询的 前台首页根节点 className
            var tmpReg = new RegExp('Home-root','g');
            */

            // 获取当前的 路由地址
            let routePath = this.$route.path;
            // 获取 屏幕宽度 判断是否为 手机端
            let width = (
                document.documentElement.offsetWidth || document.body.offsetWidth
            ) <= 768 ? false : true;
            // 获取 样式表集合 CSSStyleSheet 对象
            let sheet = document.styleSheets;
            // 获取 单个样式表集合
            for (let i = 0; i < sheet.length; i++) {
                // 丢弃 外部样式表
                if (sheet[i].href !== null) {
                    continue
                };
                // 获取 样式表内部样式 CSSStyleRule 对象
                // rules 为 IE9 以下 环境
                let rules = sheet[i].cssRules || sheet[i].rules;

                // 获取 样式表内部 单个样式
                for (let j = 0; j < rules.length; j++) {
                    // 获取样式选择器
                    let rule = rules[j].selectorText;
                    // 查询 是否 显示 前台首页
                    if (routePath === '/' && width) {
                        /* 显示的是 前台首页 */
                        // 删除 .page-container 原来样式表
                        // 设置 .page-container 中 height 样式
                        (rule === this.PCName) && (
                            sheet[i].deleteRule(j),
                            sheet[i].insertRule(this.AddPCStyle, j)
                        );
                        // 删除 .main-content 原来样式表
                        // 设置 .main-content 中 height overflow 样式
                        (rule === this.MCName) && (
                            sheet[i].deleteRule(j),
                            sheet[i].insertRule(this.AddMCStyle, j)
                        )
                    } else {
                        /* 其他页面 恢复默认样式 */
                        // 删除 .page-container 原来样式表
                        // 恢复 .page-container 默认样式
                        (rule === this.PCName) && (
                            sheet[i].deleteRule(j),
                            sheet[i].insertRule(this.DefaultPC, j)
                        );
                        // 删除 .main-content 原来样式表
                        // 恢复 .main-content 默认样式
                        (rule === this.MCName) && (
                            sheet[i].deleteRule(j),
                            sheet[i].insertRule(this.DefaultMC, j)
                        )
                    }
                }
            }
        }
    },
    // 组件挂载完毕 用户可以看到页面 自动执行这个 生命周期函数
    mounted() {
        // 前台首页 自动铺面全屏
        this.hasClassName()
    },
    // 监视数值的变化 自动执行函数
    watch: {
        // 监视路由 的变化：不能加 this.xxx
        // 参数：新值，旧值
        '$route.path': function(newval, oldval) {
            this.hasClassName()
        }
    }
}

</script>

<!-- 组件 全局 样式区域 -->
<style lang="scss">

/* 页面 三分式 布局 */

/* 消除 html 页面默认 布局 */
// 为 index.html 页面 min-height 定位 height 高度
html, body {
    margin: 0px; padding: 0px; height: 100%!important
}


// 三分式 布局 容器 定位
.page-container {
    position: relative; min-height: 100%
}


// 导航栏 定位
// 外部组件 的 定位效果 只在内部有效，该组件需要重新 z-index 定位，使其 悬浮 在所有组件上面
.header {
    position: fixed; z-index: 1000!important
}


// 内容区域 定位
// ** 利用 导航栏 header 页脚 footer 定位 内容 main-content 的 content 区域 **
// ** 使用 padding 属性 把 导航栏 包含在 padding-top 内 **
// ** 使用 padding 属性 把 页脚区域 包含在 padding-bottom 内 **

// ** 使得 内容区域 不足屏幕大小时 导航栏紧靠屏幕顶部 页脚紧靠屏幕底部 **
// ** 使得 内容区域 多于屏幕大小时 导航栏固定不随滚轮 页脚紧靠屏幕底部 **
.main-content {
    position: relative; padding-bottom: 65px; padding-top: 45px; height: 100%
}


// 页脚区域 定位
.footer {
    position: absolute; bottom: 0; height: 65px; width: 100%
}

</style>