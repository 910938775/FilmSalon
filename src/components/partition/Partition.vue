<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="Partition-root">

        <!-- 前台分区页 信息栏外部容器 -->
        <div class="Info-Container">
            <!-- 前台分区页 信息栏组件 -->
            <div class="Information">
                <Information></Information>
            </div>

            <!-- 前台分区页 筛选栏组件 -->
            <div class="Filter">
                <!-- 向子组件传递 获取筛选数据与关键字方法 -->
                <Filters @FilterModify="this.FilterModify"></Filters>
            </div>
        </div>

        <!-- 前台分区页 内容缩略区域组件 -->
        <div class="Content">
            <!-- 向子组件传递 筛选数据 关键字 -->
            <Content :FilterData="this.FilterData" :FKeyWord="this.FilterKeyWord" ref="Contents"></Content>
        </div>

        <!-- 前台 用户信息栏组件 -->
        <transition
        @before-enter = "UserBeforeEnter"
        @enter = "UserEnter"
        @before-leave = "UserBeforeLeave"
        @leave = "UserLeave">
            <div class="Users" v-show="this.SwitchUsers">
                <Users></Users>
            </div>
        </transition>

        <!-- 前台 快捷区组件 -->
        <div class="Faster">
            <!-- 向子组件传递 用户信息栏组件开关方法-值 回到顶部方法 -->
            <Faster @OpenUser="this.OpenUser" @CloseUser="this.CloseUser" :SwitchUsers="this.SwitchUsers" :SwitchFaster="this.SwitchFaster" @GOTop="this.GOTop"></Faster>
        </div>

    </div>
</template>

<!-- 组件实例接口区域 -->
<script>
// 导入 前台分区页 信息栏组件
import Information from './Information.vue';
// 导入 前台分区页 筛选栏组件
import Filters from './Filter.vue';
// 导入 前台分区页 内容缩略区组件
import Content from './Content.vue';
// 导入 前台分区页 用户信息栏组件
import Users from '../Users.vue';
// 导入 前台分区页 快捷区组件
import Faster from '../Faster.vue'


// 接口区域
export default {
    // 注册 组件
    components: {
        Information,
        Filters,
        Content,
        Users,
        Faster
    },
    // 数据 接口
    data() {
        return {
            // 前台 用户信息栏组件 开关：默认关闭
            SwitchUsers: false,
            // 前台 快捷区组件 回到顶部容器 开关：默认关闭
            SwitchFaster: false,
            // 获取 当前滚动条高度
            ScrollHeight: '',
            // 获取 当前屏幕的可视高度
            ScreenHeight: '',
            // 前台 快捷区组件 回到顶部容器 定时器
            ScrollTime: '',
            // 前台 快捷区组件 回到顶部容器 加速度
            ScrollSpeed: '',
            // 前台 快捷区组件 回到顶部容器 时间：单位 us
            SpeedTime: 1000,
            // 前台分区页 内容缩略区域组件 筛选器 资源数据
            FilterData: '',
            // 前台分区页 内容缩略区域组件 筛选器 关键字
            FilterKeyWord: ''
        }
    },
    // 方法 接口
    methods: {
        // 前台 用户信息栏组件 打开方法
        OpenUser(event) {
            // 获取事件对象
            let e = event || window.event;
            // 转换开关状态
            this.SwitchUsers = true;
            // 阻止冒泡行为
            // window.event：IE浏览器
            window.event ? e.cancelBubble = true : e.stopPropagation()
        },
        // 前台 用户信息栏组件 关闭方法
        CloseUser(event) {
            // 获取事件对象
            let e = event || window.event;
            // 转换开关状态
            this.SwitchUsers = false;
            // 阻止冒泡行为
            // window.event：IE浏览器
            window.event ? e.cancelBubble = true : e.stopPropagation()
        },

        // 前台 用户信息栏组件 动画 钩子函数
        // 元素进入之前 调用
        UserBeforeEnter(el) {
            // 进入之前为一条线
            el.style.width = '0%';
            el.style.left = '0px';
            // 内部元素逐渐透明化
            el.children[0].children[0].style.opacity = '0';
            el.children[0].children[1].style.opacity = '0'
        },
        // 前台 用户信息栏组件 动画 钩子函数
        // 元素进入之时 调用
        UserEnter(el) {
            // 没有 没法 调出动画
            el.offsetWidth;
            // 进入后 逐渐展开
            el.style.width = '30%';
            el.style.left = '0px';
            // 内部元素逐渐透明化
            el.children[0].children[0].style.opacity = '1';
            el.children[0].children[1].style.opacity = '1';

            el.style.transition = 'all 0.1s ease'
        },
        // 前台 用户信息栏组件 动画 钩子函数
        // 元素离开之前 调用
        UserBeforeLeave(el) {
            // 离开之前 逐渐收缩
            el.style.width = '35%';
            el.style.left = '0px';
            // 内部元素逐渐透明化
            el.children[0].children[0].style.opacity = '0.8';
            el.children[0].children[1].style.opacity = '0.8'
        },
        // 前台 用户信息栏组件 动画 钩子函数
        // 元素离开之时 调用
        UserLeave(el) {
            // 没有 没法 调出动画
            el.offsetWidth;
            // 离开时为一条线
            el.style.width = '0%';
            el.style.left = '15%';
            // 内部元素逐渐透明化
            el.children[0].children[0].style.opacity = '0';
            el.children[0].children[1].style.opacity = '0';

            el.style.transition = 'all 0.1s ease'
        },

        // 前台 快捷区组件 回到顶部容器 方法
        GOTop(event) {
            // 获取事件对象
            let e = event || window.event;
            // 保存 this 指向性
            let that = this;
            // 获取当前的开关状态
            if (this.SwitchFaster) {
                // 开关打开状态
                // 执行返回顶部定时器
                this.ScrollTime = setInterval(function() {
                    // 减少 当前 滚动条高度
                    let a = (document.documentElement.scrollTop -= that.ScrollSpeed) || (document.body.scrollTop -= that.ScrollSpeed)
                }, this.SpeedTime)
            };
            // 阻止冒泡行为
            // window.event：IE浏览器
            window.event ? e.cancelBubble = true : e.stopPropagation()
        },

        // 获取 子组件筛选器 资源数据 关键字
        FilterModify(value) {
            // 设置 筛选器 资源数据
            value.FResource && (
                this.FilterData = value.FResource
            );
            // 设置 筛选器 关键字
            value.FkeyWord && (
                this.FilterKeyWord = value.FkeyWord
            )
        },

        // 获取 内容缩略区域组件 每页资源数量
        CurrentCount() {
            // 获取 内容缩略区域组件 每页资源数量
            let count = this.$refs.Contents.CurrentPaging;
            // 返回数值
            return count
        }
    },
    // 组件挂载完毕 用户可以看到页面 自动执行这个 生命周期函数
    mounted() {
        // 获取 用户信息栏组件 对象
        let User = document.getElementsByClassName('Users')[0];
        // 保存 this 指向性
        let that = this;
        // 设置 当前屏幕的可视高度
        this.ScreenHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // 设置 当前滚动条高度
        this.ScrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
        // 设置 前台 快捷区组件 回到顶部容器 加速度
        this.ScrollSpeed = Math.floor(this.ScrollHeight / 3);
        // 设置 监听器 计数器
        let number = 0;
        // 设置 监听器 上次时间变量
        let preTime = '';
        // 设置 监听器 下次时间变量
        let nexTime = '';


        // 为 用户信息栏组件 添加监听器
        User.addEventListener('click', function(event) {
            that.OpenUser(event)
        }, false);
        // 为 document 添加监听器
        document.addEventListener('click', function(event) {
            that.CloseUser(event)
        }, false);
        document.addEventListener('scroll', function() {
            // 计数开始
            ++number;
            // 设置 当前滚动条高度
            that.ScrollHeight = document.documentElement.scrollTop || document.body.scrollTop;
            // 只有 滚动条高度 大于 网页可视高度 才获取加速度，避免 滚动条高度越小 加速度越慢
            if (that.ScrollHeight >= that.ScreenHeight) {
                // 设置 前台 快捷区组件 回到顶部容器 加速度
                that.ScrollSpeed = Math.floor(that.ScrollHeight / 3)
            };
            // 是否是上一次滚动
            if (number === 1) {
                // 获取上次 滚动 滚动条的 时间
                preTime = new Date().getTime()
            };
            // 是否开始下一次滚动
            if (number === 2) {
                // 获取下次 滚动 滚动条的 时间
                nexTime = new Date().getTime();
                // 重置计数器
                number = 0
            };
            // 判断两次滚动的时间间隔：是否为 手动滚动 --- 100 us 的 计算机时间误差
            if (Math.abs(nexTime - preTime) < that.SpeedTime - 100) {
                // 清除 回到顶部 定时器
                clearInterval(that.ScrollTime)
            }
        }, false)
    },
    // 监视数据的变化 自动执行函数
    watch: {
        // 监视 滚动条高度 变化
        ScrollHeight: function(newVal, oldVal) {
            // 获取 前台 快捷区组件 对象
            let toTop = document.getElementsByClassName('Faster')[0];
            // 如果 滚动条高度 大于 网页可视高度 则显示回到顶部容器
            if (this.ScrollHeight >= this.ScreenHeight) {
                // 转换 回到顶部容器 开关
                this.SwitchFaster = true;
                // 设置 前台 快捷区组件 样式
                toTop.style.height = '30%'
            } else {
                // 转换 回到顶部容器 开关
                this.SwitchFaster = false;
                // 设置 前台 快捷区组件 样式
                toTop.style.height = '25%'
            };

            // 当滚动条回到顶部 清除定时器
            if (this.ScrollHeight === 0) {
                clearInterval(this.ScrollTime)
            }
        }
    }
}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

/* 前台分区页 基本样式 */

// 前台分区页 模板根节点 基本样式
.Partition-root {
    display: flex; position: relative; width: 100%; min-height: 100%
}


// 前台分区页 信息栏外部容器 基本样式
.Info-Container {
    display: flex; position: fixed; width: 20%; flex-direction: column; z-index: 100
}

// 前台分区页 信息栏组件 基本样式
.Information {
    display: flex; position: relative; width: 100%
}

// 前台分区页 筛选栏组件 基本样式
.Filter {
    display: flex; position: relative; width: 100%
}


// 前台分区页 内容缩略区域组件 基本样式
.Content {
    display: flex; position: relative; width: 80%; min-height: 100%; left: 20%
}


// 前台 用户信息栏组件 基本样式
.Users {
    display: flex; position: fixed; width: 30%; height: 85%; top: 7.5%; left: 0px; z-index: 200
}


// 前台 快捷区组件 基本样式
.Faster {
    display: flex; position: fixed; width: 4%; height: 25%; bottom: 15%; right: 30px
}


/* 前台分区页 响应式布局 */
// PC端显示效果
@media(max-width: 1200px) {
    // 前台 用户信息栏组件 基本样式
    .Faster {
        width: 5%
    }
}


/* 前台分区页 响应式布局 */
// 手机端显示效果
@media(max-width: 768px) {
    // 重定义 前台分区页 模板根节点 基本样式
    .Partition-root {
        flex-direction: column
    }

    
    // 重定义 前台分区页 信息栏外部容器 基本样式
    .Info-Container {
        width: 100%; flex-direction: column
    }

    // 重定义 前台分区页 信息栏组件 基本样式
    .Information {
        width: 100%
    }

    // 重定义 前台分区页 筛选栏组件 基本样式
    .Filter {
        width: 100%
    }


    // 重定义 前台分区页 内容缩略区域组件 基本样式
    .Content {
        width: 100%
    }
}

</style>