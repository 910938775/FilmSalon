<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="Faster-root">

        <!-- 前台分区页 快捷区组件 用户信息容器 -->
        <div class="FUsers" title="用户">
            <i class="layui-icon">&#xe66f;</i>
        </div>

        <!-- 前台分区页 快捷区组件 搜索容器 -->
        <div class="Search" title="搜索">
            <i class="layui-icon">&#xe615;</i>
        </div>

        <transition
        @before-enter = "GoBeforeEnter"
        @enter = "GoEnter"
        @before-leave = "GoBeforeLeave"
        @leave = "GoLeave">
            <!-- 前台分区页 快捷区组件 回到顶部容器 -->
            <div class="GoTop" title="回到顶部" v-show="this.SwitchFaster">
                <i class="layui-icon">&#xe604;</i>
            </div>
        </transition>

        <!-- 前台分区页 快捷区组件 回到首页容器 -->
        <div class="GoHome" title="回到首页">
            <router-link tag="i" to="/" class="layui-icon">&#xe68e;</router-link>
        </div>

    </div>
</template>

<!-- 组件实例接口区域 -->
<script>

// 接口区域
export default {
    // 数据 接口
    data() {
        return {

        }
    },
    // 父组件 数据
    props: ['SwitchUsers', 'SwitchFaster'],
    // 方法 接口
    methods: {
        // 前台分区页 用户信息栏组件 开关方法
        SwitchUserFuc(event) {
            // 获取事件对象
            let e = event || window.event;

            // 前台分区页 用户信息栏组件 关闭状态
            if (! this.SwitchUsers) {
                // 开启 前台分区页 用户信息栏组件
                this.$emit('OpenUser', e)
            } else {
                // 前台分区页 用户信息栏组件 开启状态
                // 关闭 前台分区页 用户信息栏组件
                this.$emit('CloseUser', e)
            }
        },

        // 前台分区页 快捷区组件 回到顶部容器 动画 钩子函数
        // 元素进入之前 调用
        GoBeforeEnter(el) {
            // 进入之前为一条线
            el.style.height = '0%';
            // 进入之前 透明
            el.style.opacity = '0'
        },
        // 前台分区页 快捷区组件 回到顶部容器 动画 钩子函数
        // 元素进入之时 调用
        GoEnter(el) {
            // 没有 没法 调出动画
            el.offsetWidth;
            // 进入后 逐渐展开
            el.style.height = '25%';
            // 进入后 显示
            el.style.opacity = '1';
            el.style.transition = 'all 0.1s ease'
        },
        // 前台分区页 快捷区组件 回到顶部容器 动画 钩子函数
        // 元素离开之前 调用
        GoBeforeLeave(el) {
            // 离开之前 逐渐收缩
            el.style.height = '25%';
            // 离开之前 显示
            el.style.opacity = '1'
        },
        // 前台分区页 快捷区组件 回到顶部容器 动画 钩子函数
        // 元素离开之时 调用
        GoLeave(el) {
            // 没有 没法 调出动画
            el.offsetWidth;
            // 离开时为一条线
            el.style.height = '0%';
            // 离开时 透明
            el.style.opacity = '0';
            el.style.transition = 'all 0.1s ease'
        },

        // 前台分区页 快捷区组件 回到顶部容器 方法
        GoTopFuc(event) {
            // 获取事件对象
            let e = event || window.event;

            // 触发 回到顶部 方法
            this.$emit('GOTop', e)
        }
    },
    // 组件挂载完毕 用户可以看到页面 自动执行这个 生命周期函数
    mounted() {
        // 获取 前台分区页 快捷区组件 用户信息容器 对象
        let FasterUser = document.getElementsByClassName('FUsers')[0];
        // 获取 前台分区页 快捷区组件 回到顶部容器 对象
        let FasterTop = document.getElementsByClassName('GoTop')[0];
        // 保存 this 指向性
        let that = this;


        // 为 前台分区页 快捷区组件 用户信息容器 添加监听器
        FasterUser.addEventListener('click', function (event) {
            that.SwitchUserFuc(event)
        }, false);
        // 为 前台分区页 快捷区组件 回到顶部容器 添加监听器
        FasterTop.addEventListener('click', function(event){
            that.GoTopFuc(event)
        }, false)
    },
    // 监视数据的变化 自动执行函数
    watch: {
        // 监视 回到顶部容器 开关的变化
        SwitchFaster: function(newVal, oldVal) {
            // 获取 快捷组件容器
            let faster = document.getElementsByClassName('Faster-root')[0].children;
            // 判断 开关状态
            if (this.SwitchFaster) {
                // 开关 开启状态
                for (let i = 0; i < faster.length; i++) {
                    faster[i].style.height = '25%'
                }
            } else {
                // 开关 关闭状态
                for (let i = 0; i < faster.length; i++) {
                    faster[i].style.height = '33.3%'
                }
            }
        }
    }
}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

/* 前台分区页 快捷区组件 基本样式 */

// 前台分区页 快捷区组件 模板根节点 基本样式
.Faster-root {
    display: flex; flex-direction: column; position: relative; width: 100%; height: 100%; font-size: 20px
}


// 前台分区页 快捷区组件 用户信息容器 搜索容器 回到顶部容器 回到首页容器 基本样式
.FUsers, .Search, .GoTop, .GoHome {
    display: flex; position: relative; width: 100%; height: 33.3%; border: 1px solid #808080;
    cursor: pointer; background-color: rgba($color: #2E8B57, $alpha: 0.3)
}
.FUsers {
    border-top-left-radius: 5px; border-top-right-radius: 5px
}
.GoHome {
    border-bottom-left-radius: 5px; border-bottom-right-radius: 5px
}


// 前台分区页 快捷区组件 用户信息容器 搜索容器 回到顶部容器 回到首页容器 图标 基本样式
.FUsers i, .Search i, .GoTop i, .GoHome i {
    display: flex; position: relative; width: 100%; height: 100%; font-size: 30px;
    align-items: center; justify-content: center
}
.GoTop i {
    font-size: 50px
}

// 前台分区页 快捷区组件 用户信息容器 搜索容器 回到顶部容器 回到首页容器 图标 鼠标交互样式
.FUsers:hover i, .Search:hover i, .GoTop:hover i, .GoHome:hover i {
    font-weight: bolder
}

</style>