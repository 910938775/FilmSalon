<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="Course-root" ref="Course">

        <!-- 影视视频类课程 热度值榜 组件 -->
        <!-- 影视课程组件 外部一级容器 -->
        <div class="Course" v-for="(VIndex, i) in FilmCourseVValue" :key="i" v-show="Type">
            <!-- 影视课程组件 外部二级容器 -->
            <div class="CourseExternal">
                <!-- 影视课程组件 外部三级容器 -->
                <div class="CourseContainer">

                    <!-- 影视课程组件 图片容器 -->
                    <div class="CourseImage">
                        <img :src="VIndex.src" />
                    </div>

                    <!-- 影视课程组件 排行外部容器 -->
                    <div class="CourseRank">
                        <!-- 影视课程组件 排行容器 -->
                        <span class="CourseRanking">排名：{{ VIndex.Ranking }}</span>

                        <!-- 影视课程组件 热度值容器 -->
                        <span class="CourseValue">热度值：{{ VIndex.CourseValue }}</span>
                    </div>

                    <!-- 影视课程组件 名称外部容器 -->
                    <div class="CourseName">
                        <!-- 影视课程组件 名称容器 -->
                        <span class="CourseNaming">名称：</span>

                        <!-- 影视课程组件 名称内容容器 -->
                        <a class="CourseName-Content" href="">{{ VIndex.Name }}</a>
                    </div>

                    <!-- 影视课程组件 分类外部容器 -->
                    <div class="CourseTag">
                        <!-- 影视课程组件 分类容器 -->
                        <span class="CourseTaging">分类：</span>

                        <!-- 影视课程组件 分类内容容器 -->
                        <span class="CourseTag-Content" @mouseenter="VTagAnimation(i)" @mouseleave="VCTagAnimation(i)" ref="Vtag">
                            <!-- 影视课程组件 分类内容 -->
                            <a href="" v-for="(Vtag, j) in VIndex.VideoTag" :key="j">{{ Vtag }}</a>
                        </span>
                    </div>

                </div>
            </div>
        </div>


        <!-- 影视图文类课程 热度值榜 组件 -->
        <!-- 影视课程组件 外部一级容器 -->
        <div class="Course" v-for="(ITIndex, i) in FilmCourseITValue" :key="'IT-' + i" v-show="!Type">
            <!-- 影视课程组件 外部二级容器 -->
            <div class="CourseExternal">
                <!-- 影视课程组件 外部三级容器 -->
                <div class="CourseContainer">

                    <!-- 影视课程组件 图片容器 -->
                    <div class="CourseImage">
                        <img :src="ITIndex.src" />
                    </div>

                    <!-- 影视课程组件 排行外部容器 -->
                    <div class="CourseRank">
                        <!-- 影视课程组件 排行容器 -->
                        <span class="CourseRanking">排名：{{ ITIndex.Ranking }}</span>

                        <!-- 影视课程组件 热度值容器 -->
                        <span class="CourseValue">热度值：{{ ITIndex.CourseValue }}</span>
                    </div>

                    <!-- 影视课程组件 名称外部容器 -->
                    <div class="CourseName">
                        <!-- 影视课程组件 名称容器 -->
                        <span class="CourseNaming">名称：</span>

                        <!-- 影视课程组件 名称内容容器 -->
                        <a class="CourseName-Content" href="">{{ ITIndex.Name }}</a>
                    </div>

                    <!-- 影视课程组件 分类外部容器 -->
                    <div class="CourseTag">
                        <!-- 影视课程组件 分类容器 -->
                        <span class="CourseTaging">分类：</span>

                        <!-- 影视课程组件 分类内容容器 -->
                        <span class="CourseTag-Content" @mouseenter="ITTagAnimation(i)" @mouseleave="ITCTagAnimation(i)" ref="ITtag">
                            <!-- 影视课程组件 分类内容 -->
                            <a href="" v-for="(ITtag, j) in ITIndex.ImageTextTag" :key="'IT-' + j">{{ ITtag }}</a>
                        </span>
                    </div>

                </div>
            </div>
        </div>

    </div>
</template>

<!-- 组件实例接口区域 -->
<script>
// 导入 mint-ui 消息提示 组件
import { Toast } from 'mint-ui';
// 导入 数据请求 模块
import DataRequest from '../../../controllers/DataRequest.js'


// 接口区域
export default {
    // 数据 接口
    data() {
        return {
            // 影视视频类课程 热度值 数据
            FilmCourseVValue: [],
            // 影视图文类课程 热度值 数据
            FilmCourseITValue: [],
            // 后台数据接口 绝对路径
            FilmCoursePath: '/index/filmCourse/',
            // 影视课程 视频 图文 类型判断
            Type: true,
            // 影视课程 分类内容容器 标签动画 加速度
            Accelerated: 5,
            // 影视课程 分类内容容器 标签动画 时间
            Time: 1000,
            // 视频影视课程 分类内容容器 标签动画 速度累加器
            VSpeed: 0,
            // 视频影视课程 分类内容容器 标签动画 定时器
            VTimer: '',
            // 图文影视课程 分类内容容器 标签动画 速度累加器
            ITSpeed: 0,
            // 图文影视课程 分类内容容器 标签动画 定时器
            ITTimer: ''
        }
    },
    // 方法 接口
    methods: {
        // 判断 模板根节点 父节点 是视频区 还是 图文区
        Parent() {
            // 获取 模板根节点 父节点
            let node = this.$refs.Course.parentNode.classList.contains('left-down-container');
            // 如果 父节点 是图文区 则 隐藏 视频节点
            if (node) {
                this.Type = false
            }
        },
        // 获取 后台发过来的 影视课程 热度值数据
        async getFilmCourse() {
            // 封装 请求数据 对象
            let getData = {
                url: this.FilmCoursePath,
                tool: this
            };
            // 实例化请求对象
            let VueOB = new DataRequest();
            // 发起数据请求
            let result = await VueOB.Vue(getData);
            // 数据 获取成功
            (result.status === 0) && (
                // 获取 视频课程 数据部分
                this.FilmCourseVValue = result.content.video,
                // 获取 图文课程 数据部分
                this.FilmCourseITValue = result.content.imageText
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

        // 视频类影视课程 分类标签 动画效果 函数
        VMov(index) {
            // 设置 每次的 速度累加
            this.VSpeed = this.VSpeed + this.Accelerated;
            // 获取 分类内容容器 所有子节点
            let ChildNode = this.$refs.Vtag[index].children;
            // 设置 分类内容容器 所有子节点的 style 左移样式
            for (let i = 0; i < ChildNode.length; i++) {
                if (ChildNode[i].style.left == '') {
                    ChildNode[i].style.left = -this.VSpeed + 'px'
                } else {
                    ChildNode[i].style.left = ChildNode[i].style.left.split('px')[0] - this.VSpeed + 'px'
                }
            };
            // 获取 分类内容容器 第一个子元素的 width 值
            let nodeWidth = ChildNode[0].offsetWidth;
            // 把 左边 第一个溢出的元素 放到 右边最后
            if (ChildNode[0].style.left.split('px')[0] < -nodeWidth) {
                // 复制第一个子节点
                let child = ChildNode[0].cloneNode(true);
                // 把该节点 放到节点列表最后
                this.$refs.Vtag[index].appendChild(child);
                // 删除第一个节点
                this.$refs.Vtag[index].removeChild(ChildNode[0]);
                // 把 分类内容容器 子元素 样式 重置为空
                for (let i = 0; i < ChildNode.length; i++) {
                    ChildNode[i].style.left = ''
                }
            }
        },
        // 视频类影视课程 分类标签 鼠标悬停 动画效果
        VTagAnimation(index) {
            // 设置 定时器 this 指向性问题
            let that = this;
            // 设置定时器
            this.VTimer = setInterval(function() {
                that.VMov(index)
            }, 1000)
        },
        // 视频类影视课程 分类标签 鼠标离开 动画效果
        VCTagAnimation(index) {
            // 清除定时器
            clearInterval(this.VTimer);
            // 速度累加器 归零
            this.VSpeed = 0
        },

        // 图文类影视课程 分类标签 动画效果 函数
        ITMov(index) {
            // 设置 每次的 速度累加
            this.ITSpeed = this.ITSpeed + this.Accelerated;
            // 获取 分类内容容器 所有子节点
            let ChildNode = this.$refs.ITtag[index].children;
            // 设置 分类内容容器 所有子节点的 style 左移样式
            for (let i = 0; i < ChildNode.length; i++) {
                if (ChildNode[i].style.left == '') {
                    ChildNode[i].style.left = -this.ITSpeed + 'px'
                } else {
                    ChildNode[i].style.left = ChildNode[i].style.left.split('px')[0] - this.ITSpeed + 'px'
                }
            };
            // 获取 分类内容容器 第一个子元素的 width 值
            let nodeWidth = ChildNode[0].offsetWidth;
            // 把 左边 第一个溢出的元素 放到 右边最后
            if (ChildNode[0].style.left.split('px')[0] < -nodeWidth) {
                // 复制第一个子节点
                let child = ChildNode[0].cloneNode(true);
                // 把该节点 放到节点列表最后
                this.$refs.ITtag[index].appendChild(child);
                // 删除第一个节点
                this.$refs.ITtag[index].removeChild(ChildNode[0]);
                // 把 分类内容容器 子元素 样式 重置为空
                for (let i = 0; i < ChildNode.length; i++) {
                    ChildNode[i].style.left = ''
                }
            }
        },
        // 图文类影视课程 分类标签 鼠标悬停 动画效果
        ITTagAnimation(index) {
            // 设置 定时器 this 指向性问题
            let that = this;
            // 设置定时器
            this.ITTimer = setInterval(function() {
                that.ITMov(index)
            }, 1000)
        },
        // 图文类影视课程 分类标签 鼠标离开 动画效果
        ITCTagAnimation(index) {
            // 清除定时器
            clearInterval(this.ITTimer);
            // 速度累加器 归零
            this.ITSpeed = 0
        }
    },
    // data 和 methods 初始完毕后，自动执行这个 生命周期函数
    created() {
        // 自动 获取 首页影视课程热度值榜区域 数据
        this.getFilmCourse()
    },
    // 组件挂载完毕 用户可以看到页面 自动执行这个 生命周期函数
    mounted() {
        // 根据不同分区 显示不同内容
        this.Parent()
    }
}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

/* 前台首页 影视课程热度值榜区域 样式 */

// 模板根节点 样式
.Course-root {
    display: inline-block; position: relative; width: 100%; height: 100%
}


// 影视热度值榜区域 外部一级容器 基本样式
.Course {
    display: inline-block; position: relative; width: 99%; height: 65%; top: 3px; left: 0.5%
}


// 影视热度值榜区域 外部二级容器 基本样式
.CourseExternal {
    display: inline-block; position: relative; width: 100%; height: 75%
}


// 影视热度值榜区域 外部三级容器 基本样式
.CourseContainer {
    display: inline-block; position: relative; width: 100%; height: 100%; top: 25%;
    border: 1px solid #808080; font-family: Arial, Helvetica, sans-serif;
    font-size: 14px; color: rgba($color: #B8860B, $alpha: 0.8);
    background-color: rgba($color: #008080, $alpha: 0.1)
}


// 影视热度值榜区域 图片容器 基本样式
.CourseImage {
    display: inline-block; position: absolute; width: 30%; height: 50%; left: 35%; top: -25%;
    border: 1px solid #808080; background-color: rgba($color: #E6E6FA, $alpha: 1); overflow: hidden
}
.CourseImage img {
    width: 100%; height: 100%
}

// 影视热度值榜区域 图片容器 鼠标交互样式
.CourseImage img:hover {
    cursor: pointer;
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -o-transform: scale(1.2);
    transform: scale(1.2)
}


// 影视热度值榜区域 排名外部容器 基本样式
.CourseRank {
    display: flex; position: relative; width: 100%; height: 30%; top: 5%; justify-content: space-between
}
// 影视热度值榜区域 排名容器 基本样式
.CourseRanking {
    width: 30%; height: 100%
}
// 影视热度值榜区域 热度值容器 基本样式
.CourseValue {
    width: 30%; height: 100%
}


// 影视热度值榜区域 名称外部容器 基本样式
.CourseName {
    display: flex; position: relative; width: 100%; height: 30%
}
// 影视热度值榜区域 名称容器 基本样式
.CourseNaming {
    display: flex; position: relative; width: 20%; height: 100%; align-items: center
}
// 影视热度值榜区域 名称内容容器 基本样式
.CourseName-Content {
    display: flex; position: relative; width: 78%; height: 100%;
    color: rgba($color: #D2691E, $alpha: 1); overflow-y: scroll;
    text-decoration: none; align-items: center
}
// 隐藏 overflow 的滚动条
.CourseName-Content::-webkit-scrollbar {
    display: none
}

// 影视热度值榜区域 名称内容容器 鼠标交互样式
.CourseName-Content:hover {
    font-weight: bold
}


// 影视热度值榜区域 分类外部容器 基本样式
.CourseTag {
    display: flex; position: relative; width: 100%; height: 30%; bottom: 5%
}
// 影视热度值榜区域 分类容器 基本样式
.CourseTaging {
    display: flex; position: relative; width: 20%; height: 100%; align-items: center
}
// 影视热度值榜区域 分类内容容器 基本样式
.CourseTag-Content {
    display: flex; position: relative; width: 78%; height: 100%;
    color: rgba($color: #D2691E, $alpha: 1); overflow-y: scroll
}
// 影视热度值榜区域 分类内容容器 a 基本样式
.CourseTag-Content > a {
    display: flex; position: relative; text-decoration: none; color: inherit;
    padding: 2px 3px; align-items: center; white-space: nowrap
}
// 隐藏 overflow 的滚动条
.CourseTag-Content::-webkit-scrollbar {
    display: none
}

// 影视热度值榜区域 分类内容容器 鼠标交互样式
.CourseTag-Content > a:hover{
    font-weight: bold
}


/* 首页 影视热度值榜区域 样式 响应式布局 */
// 手机端 显示效果
@media(max-width: 768px) {
    // 重定义 模板根节点 样式
    .Course-root {
        height: 250px
    }

    // 重定义 影视热度值榜区域 外部一级容器 基本样式
    .Course {
        width: 95%; height: 100px; top: 5px; left: 2.5%
    }
}

</style>