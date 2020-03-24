<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="Home-root">

        <!-- 前台首页 三分式布局 -->

        <!-- 左边容器 -->
        <div class="left-container">
            <!-- 上部容器 -->
            <div class="left-up-container">
                <!-- 前台首页 影视视频类课程 热度值榜组件 -->
                <Course></Course>
            </div>

            <!-- 下部容器 -->
            <div class="left-down-container">
                <!-- 前台首页 影视图文类课程 热度值榜组件 -->
                <Course></Course>
            </div>
        </div>

        <!-- 中间容器 -->
        <div class="center-container">
            <!-- 上部容器 -->
            <div class="center-up-container">
                <!-- 前台首页 滚动栏组件 -->
                <Scroll></Scroll>
            </div>

            <!-- 下部容器 -->
            <div class="center-down-container">
                <!-- 内容选择区 容器 -->
                <div class="choose-container">
                    <!-- 用户贡献榜选择区 容器 -->
                    <div class="contribution-choose" @click="ContributionChoose()"></div>
                    <!-- 学术热度值榜选择区 容器 -->
                    <div class="academic-choose" @click="AcademicChoose()"></div>
                    <!-- 影视热度值榜选择区 容器 -->
                    <div class="films-choose" @click="FilmsChoose()"></div>
                </div>

                <!-- 内容区域 容器 -->
                <div class="content-container">
                    <transition
                    @before-enter = 'ConbeforeEnter'
                    @enter = 'Conenter'>
                        <!-- 前台首页 用户贡献榜组件 -->
                        <Contribution v-show="this.ConFlag"></Contribution>
                    </transition>

                    <transition
                    @before-enter = 'AcabeforeEnter'
                    @enter = 'Acaenter'>
                        <!-- 前台首页 学术热度值榜组件 -->
                        <Academic v-show="this.AcaFlag"></Academic>
                    </transition>

                    <transition
                    @before-enter = 'FilbeforeEnter'
                    @enter = 'Filenter'>
                        <!-- 前台首页 影视热度值榜组件 -->
                        <Films v-show="this.FilFlag"></Films>
                    </transition>
                </div>
            </div>
        </div>

        <!-- 右边容器 -->
        <div class="right-container">
            <!-- 上部容器 -->
            <div class="right-up-container">
                <!-- 前台首页 其他视频类课程 热度值榜组件 -->
                <Other></Other>
            </div>

            <!-- 下部容器 -->
            <div class="right-down-container">
                <!-- 前台首页 其他图文类课程 热度值榜组件 -->
                <Other></Other>
            </div>
        </div>

    </div>
</template>

<!-- 组件实例接口区域 -->
<script>
// 导入 首页 图片轮播区域 组件
import Scroll from './Scroll.vue';
// 导入 首页 用户贡献榜区域 组件
import Contribution from './Contribution.vue';
// 导入 首页 学术热度榜区域 组件
import Academic from './Academic.vue';
// 导入 首页 影视热度榜区域 组件
import Films from './Films.vue';
// 导入 首页 影视课程热度榜区域 组件
import Course from './Course.vue';
// 导入 首页 影视课程热度榜区域 组件
import Other from './Other.vue'


// 接口区域
export default {
    // 注册 组件
    components: {
        Scroll,
        Contribution,
        Academic,
        Films,
        Course,
        Other
    },
    // 数据 接口
    data() {
        return {
            // 控制 用户贡献榜选择区 显隐 参数
            ConFlag: true,
            // 控制 学术热度值榜选择区 显隐 参数
            AcaFlag: false,
            // 控制 影视热度值榜选择区 显隐 参数
            FilFlag: false
        }
    },
    // 方法 接口
    methods: {
        // 用户贡献榜选择区 控制方法
        ContributionChoose() {
            this.ConFlag = true;
            this.AcaFlag = false;
            this.FilFlag = false
        },
        // 用户贡献榜选择区 动画 钩子函数
        // 元素 进入之前 调用
        ConbeforeEnter(el) {
            // 刚进入时 为一条线
            el.style.width = '0%';
            el.style.left = '50%'
        },
        // 用户贡献榜选择区 动画 钩子函数
        // 元素 进入时 调用
        Conenter(el, done) {
            // 没有 没法 调出动画
            el.offsetWidth;
            // 进入后 逐渐展开
            el.style.width = '100%';
            el.style.left = '0%';
            el.style.transition = 'all 0.1s ease';
            // 引用 afterEnter 钩子函数
            done()
        },

        // 学术热度值榜选择区 控制方法
        AcademicChoose() {
            this.ConFlag = false;
            this.AcaFlag = true;
            this.FilFlag = false
        },
        // 学术热度值榜选择区 动画 钩子函数
        // 元素 进入之前 调用
        AcabeforeEnter(el) {
            // 刚进入时 为一条线
            el.style.width = '0%';
            el.style.left = '50%'
        },
        // 学术热度值榜选择区 动画 钩子函数
        // 元素 进入时 调用
        Acaenter(el, done) {
            // 没有 没法 调出动画
            el.offsetWidth;
            // 进入后 逐渐展开
            el.style.width = '100%';
            el.style.left = '0%';
            el.style.transition = 'all 0.3s ease';
            // 引用 afterEnter 钩子函数
            done()
        },

        // 影视热度值榜选择区 控制方法
        FilmsChoose() {
            this.ConFlag = false;
            this.AcaFlag = false;
            this.FilFlag = true
        },
        // 影视热度值榜选择区 动画 钩子函数
        // 元素 进入之前 调用
        FilbeforeEnter(el) {
            // 刚进入时 为一条线
            el.style.width = '0%';
            el.style.left = '50%'
        },
        // 影视热度值榜选择区 动画 钩子函数
        // 元素 进入时 调用
        Filenter(el, done) {
            // 没有 没法 调出动画
            el.offsetWidth;
            // 进入后 逐渐展开
            el.style.width = '100%';
            el.style.left = '0%';
            el.style.transition = 'all 0.6s ease';
            // 引用 afterEnter 钩子函数
            done()
        },

        // 内容区域 在手机端 768px 全部显示
        ContentContainer() {
            // 获取屏幕宽度
            let width = document.documentElement.offsetWidth || document.body.offsetWidth;
            // 判断是否为 手机端
            if (width <= 768) {
                this.AcaFlag = true;
                this.FilFlag = true
            }
        }
    },
    // data 和 methods 初始完毕后，自动执行这个 生命周期函数
    created() {
        // 内容区域 在手机端 768px 全部显示
        this.ContentContainer()
    }
}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

/* 前台首页 三分式布局 样式 */

// 前台首页 模板根节点 样式
// 消除 div 之间的 默认间距
.Home-root {
    height: 100%; width: 100%; display: inline-block; font-size: 0; line-height: normal;
    box-sizing: border-box
}


// 前台首页 左边容器 右边容器 基本样式
.left-container, .right-container {
    height: 100%; width: 30%; display: inline-block; box-sizing: border-box; overflow: hidden
}

// 前台首页 左边上部容器 右边上部容器 基本样式
.left-up-container, .right-up-container {
    height: 50%; width: 100%; display: inline-block; background-color: rgba($color: #DCDCDC, $alpha: 0.3);
    margin-bottom: 5px; overflow-y: scroll
}
// 隐藏 overflow 滚动条
.left-up-container::-webkit-scrollbar, .right-up-container::-webkit-scrollbar {
    display: none
}

// 前台首页 左边下部容器 右边下部容器 基本样式
.left-down-container, .right-down-container {
    height: 50%; width: 100%; display: inline-block; background-color: rgba($color: #DCDCDC, $alpha: 0.3);
    overflow-y: scroll
}
// 隐藏 overflow 滚动条
.left-down-container::-webkit-scrollbar, .right-down-container::-webkit-scrollbar {
    display: none
}


// 前台首页 中间容器 基本样式
.center-container {
    height: 100%; width: 40%; display: inline-block; border-left: 1px solid #A9A9A9;
    border-right: 1px solid #A9A9A9; box-sizing: border-box; overflow: hidden
}

// 前台首页 中间上部容器 基本样式
.center-up-container {
    height: 50%; width: 100%; display: inline-block; background-color: rgba($color: #DCDCDC, $alpha: 0.3);
    margin-bottom: 5px; overflow: hidden
}

// 前台首页 中间下部容器 基本样式
.center-down-container {
    height: 50%; width: 100%; display: inline-block; background-color: rgba($color: #DCDCDC, $alpha: 0.3);
    overflow: hidden
}


// 前台首页 中间下部 内容选择区 容器 基本样式
.choose-container {
    height: 10%; width: 100%; display: inline-block; position: relative;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
    Geneva, Verdana, sans-serif; font-size: 10px; color: #FF8C00
}


// 前台首页 中间下部 用户贡献榜选择区 容器 基本样式
.contribution-choose {
    width: 30%; height: 0px; display: inline-block; position: absolute; left: 0px; bottom: 0px;
    border-width: 0px 30px 30px 0px;
    border-style: none solid solid;
    border-color: transparent transparent rgba($color: #20B2AA, $alpha: 0.5)
}
// 为 用户贡献榜选择区 容器 添加文字
.contribution-choose::before {
    content: '用户贡献榜'; position: absolute; top: 8px; left: 10px
}
// 用户贡献榜选择区 容器 鼠标交互行为
.contribution-choose:hover::before {
    font-weight: bold; color: #FF4500
}
.contribution-choose:hover {
    border-color: transparent transparent rgba($color: #2E8B57, $alpha: 0.5); cursor: pointer
}


// 前台首页 中间下部 学术热度值榜选择区 容器 基本样式
.academic-choose {
    width: 30%; height: 0px; display: inline-block; position: absolute; left: 30%; bottom: 0px;
    border-width: 0px 30px 30px 0px;
    border-style: none solid solid;
    border-color: transparent transparent rgba($color: #20B2AA, $alpha: 0.5)
}
// 为 学术热度值榜选择区 容器 添加文字
.academic-choose::before {
    content: '学术热度值榜'; position: absolute; top: 8px; left: 10px
}
// 学术热度值榜选择区 容器 鼠标交互行为
.academic-choose:hover::before {
    font-weight: bold; color: #FF4500
}
.academic-choose:hover {
    border-color: transparent transparent rgba($color: #2E8B57, $alpha: 0.5); cursor: pointer
}


// 前台首页 中间下部 影视热度值榜选择区 容器 基本样式
.films-choose {
    width: 30%; height: 0px; display: inline-block; position: absolute; left: 60%; bottom: 0px;
    border-width: 0px 30px 30px 0px;
    border-style: none solid solid;
    border-color: transparent transparent rgba($color: #20B2AA, $alpha: 0.5)
}
// 为 影视热度值榜选择区 容器 添加文字
.films-choose::before {
    content: '影视热度值榜'; position: absolute; top: 8px; left: 10px
}
// 影视热度值榜选择区 容器 鼠标交互行为
.films-choose:hover::before {
    font-weight: bold; color: #FF4500
}
.films-choose:hover {
    border-color: transparent transparent rgba($color: #2E8B57, $alpha: 0.5); cursor: pointer
}


// 前台首页 中间下部 内容区域 容器 基本样式
.content-container {
    height: 90%; width: 100%; display: inline-block
}


/* 前台首页 响应式布局 */
// 平板端显示效果
@media(max-width: 990px) {
    // 重定义 前台首页 中间下部 用户贡献榜选择区 容器 基本样式
    .contribution-choose {
        width: 33%; left: 0px
    }
    // 重定义 用户贡献榜选择区 容器 添加文字 样式
    .contribution-choose::before {
        left: 1px; width: max-content
    }

    // 重定义 前台首页 中间下部 学术热度值榜选择区 容器 基本样式
    .academic-choose {
        width: 33%; left: 33%
    }
    // 重定义 学术热度值榜选择区 容器 添加文字 样式
    .academic-choose::before {
        left: 1px; width: max-content
    }

    // 重定义 前台首页 中间下部 影视热度值榜选择区 容器 基本样式
    .films-choose {
        width: 33%; left: 66%
    }
    // 重定义 影视热度值榜选择区 容器 添加文字 样式
    .films-choose::before {
        left: 1px; width: max-content
    }
}


/* 前台首页 响应式布局 */
// 手机端显示效果
@media(max-width: 768px) {
    // 重定义 前台首页 模板根节点 样式
    .Home-root {
        display: block
    }


    // 重定义 前台首页 左边容器 右边容器 基本样式
    .left-container, .right-container {
        width: 100%; display: block
    }

    // 重定义 前台首页 左边上部容器 右边上部容器 基本样式
    .left-up-container, .right-up-container {
        display: block; background-color: none; margin-bottom: 0px
    }

    // 重定义 前台首页 左边下部容器 右边下部容器 基本样式
    .left-down-container, .right-down-container {
        display: block; background-color: none
    }


    // 重定义 前台首页 中间容器 基本样式
    .center-container {
        width: 100%; display: block; border-left: none; border-right: none
    }

    // 重定义 前台首页 中间上部容器 基本样式
    .center-up-container {
        display: block; background-color: none; margin-bottom: 0px
    }

    // 重定义 前台首页 中间下部容器 基本样式
    .center-down-container {
        display: block; background-color: none
    }

    // 重定义 前台首页 中间下部 内容选择区 容器 基本样式
    .choose-container {
        display: none
    }

    // 重定义 前台首页 中间下部 内容区域 容器 基本样式
    .content-container {
        height: 100%
    }
}

</style>