<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="scroll-root">

        <!-- 首页 图片轮播区域 -->
        <!-- 图片轮播区域 一级容器 -->
        <div class="mui-slider">

            <!-- 图片轮播区域 左快捷容器 -->
            <div class="left-container" @click="ScrollNext()">
                <!-- 图片轮播区域 左快捷箭头 -->
                <div class="left-arrow"></div>
            </div>

            <!-- 图片轮播区域 右快捷容器 -->
            <div class="right-container" @click="ScrollPrevious()">
                <!-- 图片轮播区域 右快捷箭头 -->
                <div class="right-arrow"></div>
            </div>

            <!-- 图片轮播区域 二级容器 -->
            <div class="mui-slider-group mui-slider-loop">

                <!-- 支持循环，需要重复图片 最后一个 节点 -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href=""><img :src="this.readdir[this.readdir.length-1]" /></a>
                </div>

                <!-- 图片轮播区域 内容容器 -->
                <div class="mui-slider-item" v-for="(item, i) in readdir" :key="i">
                    <a href="" @click.prevent><img :src="item" /></a>
                </div>

                <!-- 支持循环，需要重复图片 第一个 节点 -->
                <div class="mui-slider-item mui-slider-item-duplicate">
                    <a href=""><img :src="this.readdir[0]" /></a>
                </div>

            </div>

        </div>

    </div>
</template>

<!-- 组件实例接口区域 -->
<script>
// 导入 MUI 前端 js 代码库
import mui from '../../lib/mui-master/dist/js/mui.min.js';
// 导入 mint-ui 信息提示 组件
import { Toast } from 'mint-ui';
// 导入 数据请求 模块
import DataRequest from '../../../controllers/DataRequest.js'


// 接口区域
export default {
    // 数据 接口
    data() {
        return {
            // 首页图片轮播区域 绝对路径
            ScrollPath: '/public/images/Scroll/',
            // 首页图片轮播区域 目录名数组
            readdir: [],
            // 首页图片轮播区域 滚动速度
            ScrollSpeed: 3000
        }
    },
    // 方法 接口
    methods: {
        // 获取 后端 发过来的 首页图片轮播区域 轮播图片所在 目录名数据
        async getScroll() {
            // 封装 请求数据 对象
            let getData = {
                url: this.ScrollPath,
                tool: this
            };
            // 实例化请求对象
            let VueOB = new DataRequest();
            // 发起数据请求
            let result = await VueOB.Vue(getData);
            // 数据 获取成功
            (result.status === 0) && (
                // 赋值 数据
                this.readdir = result.content
            );
            // 数据 获取失败
            (result.status === 1) && (
                Toast({
                    // 提示信息
                    message: result.message,
                    // 提示信息 显示位置
                    position: 'middle',
                    // 提示信息 持续时间 单位：us
                    duration: 3000
                })
            )
        },

        // 首页图片轮播区域 动画效果
        ScrollSlide() {
            // 获得 slider 插件对象
            let gallery = mui('.mui-slider');
            gallery.slider({
                // 半自动轮播周期，若为 0 则不自动播放，默认为 0，单位 us
                // js 动态获取内容 的需要 手动初始化
                // 需要手动点击 第一张播放 后 才能自动循环
                interval: this.ScrollSpeed
            })

            /* 全自动 轮播播放 消耗内存 不建议
            setTimeout(function() {
                // 获得 slider 插件对象
                let gallery = mui('.mui-slider');
                // 定时自动开始 播放第一张
                gallery.slider( { interval: 0 } ).gotoItem(1);
                // 跳转到第 index 张图片，index 从 0 开始
                gallery.slider( { interval: this.ScrollSpeed } )
            }, this.ScrollSpeed)
            */
        },

        // 首页图片轮播区域 左快捷切换功能
        ScrollNext() {
            // 轮播图片 最大 索引值，从 0 开始
            let index = this.readdir.length-1;
            // 获得 slider 插件对象
            let gallery = mui('.mui-slider');
            // 捕获 监听对象
            let object = document.querySelector('.mui-slider');
            // 定义 监听器 执行函数
            let slideFunction = function(event) {
                 // 跳转到第 index 张图片，index 从 0 开始
                if (event.detail.slideNumber !== 0) {
                    // 当前图片 索引数 不是最小值
                    gallery.slider( { interval: 1 } ).gotoItem(event.detail.slideNumber-1)
                } else if(event.detail.slideNumber === '') {
                    // 当前图片 索引数 不存在
                    // 网页刚刷新 没有初始化滚动
                    gallery.slider( { interval: 1 } ).gotoItem(index)
                } else {
                    // 当前图片 索引数 是最小值
                    gallery.slider( { interval: 1 } ).gotoItem(index)
                };
                // 删除 监听器
                object.removeEventListener('slide',slideFunction);
                // 恢复 正常滚动时间
                gallery.slider( { interval: this.ScrollSpeed } )
            };
            // 添加 监听器
            object.addEventListener('slide',slideFunction)
        },

        // 首页图片轮播区域 右快捷切换功能
        ScrollPrevious() {
            // 轮播图片 最大 索引值，从 0 开始
            let index = this.readdir.length-1;
            // 获得 slider 插件对象
            let gallery = mui('.mui-slider');
            // 捕获 监听对象
            let object = document.querySelector('.mui-slider');
            // 定义 监听器 执行函数
            let slideFunction = function(event) {
                 // 跳转到第 index 张图片，index 从 0 开始
                if (event.detail.slideNumber !== index) {
                    // 当前图片 索引数 不是最大值
                    gallery.slider( { interval: 1 } ).gotoItem(event.detail.slideNumber+1)
                } else if(event.detail.slideNumber === '') {
                    // 当前图片 索引数 不存在
                    // 网页刚刷新 没有初始化滚动
                    gallery.slider( { interval: 1 } ).gotoItem(1)
                } else {
                    // 当前图片 索引数 是最大值
                    gallery.slider( { interval: 1 } ).gotoItem(0)
                };
                // 删除 监听器
                object.removeEventListener('slide',slideFunction);
                // 恢复 正常滚动时间
                gallery.slider( { interval: this.ScrollSpeed } )
            };
            // 添加 监听器
            object.addEventListener('slide',slideFunction)
        }
    },
    // data 和 methods 初始完毕后，自动执行这个 生命周期函数
    created() {
        // 自动 获取 首页图片轮播区域 目录名数据
        this.getScroll()
    },
    // 组件挂载完毕 用户可以看到页面 自动执行这个 生命周期函数
    mounted() {
        // 自动播放 轮播图片
        this.ScrollSlide()
    }
}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

/* 首页 图片轮播区 样式 */

// 图片轮播区 根节点样式
.scroll-root {
    display: inline-block; position: relative; width: 100%; height: 100%
}


// 图片轮播区 一级容器 div 基本样式
// 使其固定在 顶部位置
.mui-slider {
    display: inline-block; position: absolute; border-radius: 10px; top: 3px;
    -webkit-box-shadow: 0.3px 0.5px 0.8px #708090;
    -moz-box-shadow: 0.3px 0.5px 0.8px #708090;
    box-shadow: 0.3px 0.5px 0.8px #708090
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 768px) {
    // 重定义 图片轮播区 根节点样式
    .scroll-root {
        width: 95%; height: 415px; left: 2.5%; top: 5px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 700px) {
    // 重定义 图片轮播区 根节点样式
    .scroll-root {
        height: 375px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 600px) {
    // 重定义 图片轮播区 根节点样式
    .scroll-root {
        height: 325px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 500px) {
    // 重定义 图片轮播区 根节点样式
    .scroll-root {
        height: 270px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 425px) {
    // 重定义 图片轮播区 根节点样式
    .scroll-root {
        height: 230px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 375px) {
    // 重定义 图片轮播区 根节点样式
    .scroll-root {
        height: 205px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 320px) {
    // 重定义 图片轮播区 根节点样式
    .scroll-root {
        height: 175px
    }
}


/* 首页 图片轮播区 快捷区域 样式 */

// 图片轮播区 快捷容器 div 基本样式
.left-container, .right-container {
    position: absolute; width: 10%; height: 20%; background-color: rgba($color: #000000, $alpha: 0.5);
    z-index: 1000!important; top: 30%; right: 0%; cursor: pointer
}
// 图片轮播区 快捷箭头 div 基本样式
// 清除 div 的默认样式 content
.left-arrow, .right-arrow {
    position: relative; border-style: solid; border-width: 20px;
    border-color: transparent transparent transparent rgba($color: #F0F8FF, $alpha: 0.4);
    height: 0px; width: 0px; left: 25%; top: 10%
}

// 图片轮播区 左快捷容器 div 基本样式
.left-container {
    top: 30%; left: 0%;
    // 解决 left-arrow 利用 border-color 制作右三角时，right 定位失效的问题
    // 通过 右三角 翻转方法 达到同样的左三角效果
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    transform: rotateY(180deg)
}


// 图片轮播区 快捷容器 鼠标交互行为
.left-container:hover, .right-container:hover {
    background-color: rgba($color: #000000, $alpha: 0.8)
}
.left-container:hover > .left-arrow, .right-container:hover > .right-arrow {
    left: 30%; top: 12%;
    border-color: transparent transparent transparent rgba($color: #F0F8FF, $alpha: 0.6);
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    transform: scale(1.05)
}


/* 首页 图片轮播区 样式 响应式布局 */
// PC端显示效果
@media(max-width: 1130px) {
    // 重定义 图片轮播区 快捷箭头 div 基本样式
    .left-arrow, .right-arrow {
        border-width: 18px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// PC端显示效果
@media(max-width: 1000px) {
    // 重定义 图片轮播区 快捷箭头 div 基本样式
    .left-arrow, .right-arrow {
        border-width: 15px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 平板端显示效果
@media(max-width: 850px) {
    // 重定义 图片轮播区 快捷箭头 div 基本样式
    .left-arrow, .right-arrow {
        border-width: 13px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 768px) {
    // 重定义 图片轮播区 快捷箭头 div 基本样式
    .left-arrow, .right-arrow {
        border-width: 28px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 600px) {
    // 重定义 图片轮播区 快捷箭头 div 基本样式
    .left-arrow, .right-arrow {
        border-width: 20px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 500px) {
    // 重定义 图片轮播区 快捷箭头 div 基本样式
    .left-arrow, .right-arrow {
        border-width: 18px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 425px) {
    // 重定义 图片轮播区 快捷箭头 div 基本样式
    .left-arrow, .right-arrow {
        border-width: 14px
    }
}


/* 首页 图片轮播区 样式 响应式布局 */
// 手机端显示效果
@media(max-width: 320px) {
    // 重定义 图片轮播区 快捷箭头 div 基本样式
    .left-arrow, .right-arrow {
        border-width: 12px
    }
}

</style>