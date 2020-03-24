<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="Contribution-root">

        <!-- 影视热度值榜 外部容器 -->
        <div class="Contribution">

            <!-- 影视热度值榜 标题 容器 -->
            <div class="ContributionTitle">
                <!-- 影视热度值榜 标题 左边区域 容器 -->
                <div class="LeftTitleContainer">
                    <span class="TitleRanking">排名</span>
                    <span class="TitleName">影视名</span>
                </div>

                <!-- 影视热度值榜 标题 右边区域 容器 -->
                <div class="RightTitleContainer">
                    <span>热度值</span>
                </div>
            </div>

            <!-- 影视热度值榜 内容 一级容器 -->
            <div class="ContributionContent">
                <!-- 影视热度值榜 内容 二级容器 -->
                <div class="ContentContainer" v-for="(item, i) in FilmValue" :key="i">

                    <!-- 影视热度值榜 内容 左边区域 容器 -->
                    <div class="LeftContentContainer">
                        <span class="ContentRanking">{{ item.Ranking }}</span>
                        <a class="ContentName" href="">{{ item.Name }}</a>
                    </div>

                    <!-- 影视热度值榜 内容 右边区域 容器 -->
                    <div class="RightContentContainer">
                        <span>{{ item.FilmsValue }}</span>
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
            // 影视 热度值 数据
            FilmValue: [],
            // 后台数据接口 绝对路径
            FilmPath: '/index/film/'
        }
    },
    // 方法 接口
    methods: {
        // 获取 后台发过来的 影视 热度值数据
        async getFilm() {
            // 封装 请求数据 对象
            let getData = {
                url: this.FilmPath,
                tool: this
            };
            // 实例化请求对象
            let VueOB = new DataRequest();
            // 发起数据请求
            let result = await VueOB.Vue(getData);
            // 数据 获取成功
            (result.status === 0) && (
                // 赋值 数据
                this.FilmValue = result.content
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
        }
    },
    // data 和 methods 初始完毕后，自动执行这个 生命周期函数
    created() {
        // 自动 获取 首页影视热度值榜区域 数据
        this.getFilm()
    }
}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

/* 首页 影视热度值榜区域 样式 */

// 影视热度值榜 根节点样式
.Contribution-root {
    display: inline-block; position: relative; width: 100%; height: 100%
}


// 影视热度值榜 外部容器 基本样式
.Contribution {
    display: inline-block; width: 100%; height: 100%; border: 1px solid #D3D3D3
}


// 影视热度值榜 标题容器 基本样式
.ContributionTitle {
    position: relative; display: inline-block; width: 100%; height: 10%;
    background-color: rgba($color: #87CEFA, $alpha: 0.9);
    font-family: "Trebuchet MS", Helvetica, sans-serif; font-size: 15px; color: #FAFAD2
}


// 影视热度值榜 内容一级容器 基本样式
// 固定高度 处理溢出显示
.ContributionContent {
    position: relative; display: inline-block; width: 100%; height: 90%;
    font-family: "Trebuchet MS", Helvetica, sans-serif; font-size: 12px;
    color: #696969; overflow-y: scroll
}

// 影视热度值榜 内容二级容器 基本样式
.ContentContainer {
    border-bottom: 2px solid #DCDCDC; height: 15%
}
.ContentContainer:last-child {
    border-bottom: none
}


// 影视热度值榜 左边容器 基本样式
.LeftTitleContainer, .LeftContentContainer {
    display: inline-block; padding: 3px; width: 80%
}

// 影视热度值榜 左边容器 排名 基本样式
.TitleRanking, .ContentRanking {
    display: inline-block; width: 20%
}

// 影视热度值榜 左边容器 影视名 基本样式
.TitleName, .ContentName {
    display: inline-block; width: 75%
}

// 影视热度值榜 右边容器 基本样式
.RightTitleContainer, .RightContentContainer {
    display: inline-block; padding: 3px;  width: 18%
}


// 影视热度值榜 内容 左边容器 影视名 鼠标交互设计
// 清除 a链接 默认字体颜色 覆盖问题
.ContentName {
    text-decoration: none; color: #696969
}
.ContentName:hover, .ContentName:focus {
    color: #2F4F4F; font-weight: bold
}


/* 首页 影视热度值榜区域 样式 响应式布局 */
// 平板端 显示效果
@media(max-width: 960px) {
    // 重定义 影视热度值榜 标题容器 基本样式
    .ContributionTitle {
        font-size: 13px
    }

    // 重定义 影视热度值榜 内容一级容器 基本样式
    .ContributionContent {
        font-size: 11px
    }

    // 重定义 影视热度值榜 左边容器 基本样式
    .LeftTitleContainer, .LeftContentContainer {
        width: 70%
    }

    // 重定义 影视热度值榜 右边容器 基本样式
    .RightTitleContainer, .RightContentContainer {
        width: 25%
    }
}


/* 首页 影视热度值榜区域 样式 响应式布局 */
// 手机端 显示效果
@media(max-width: 768px) {
    // 重定义 影视热度值榜 根节点样式
    .Contribution-root {
        width: 95%; left: 2.5%; height: 210px; top: 15px
    }
}


/* 首页 影视热度值榜区域 样式 响应式布局 */
// 手机端 显示效果
@media(max-width: 710px) {
    // 重定义 影视热度值榜 标题容器 基本样式
    .ContributionTitle {
        font-size: 12px
    }

    // 重定义 影视热度值榜 内容一级容器 基本样式
    .ContributionContent {
        font-size: 10px
    }
}


/* 首页 影视热度值榜区域 样式 响应式布局 */
// 手机端 显示效果
@media(max-width: 630px) {
    // 重定义 影视热度值榜 左边容器 基本样式
    .LeftTitleContainer, .LeftContentContainer {
        width: 66%
    }

    // 重定义 影视热度值榜 左边容器 排名 基本样式
    .TitleRanking {
        width: 25%
    }

    // 重定义 影视热度值榜 左边容器 影视名 基本样式
    .TitleName {
        width: 70%
    }

    // 重定义 影视热度值榜 右边容器 基本样式
    .RightTitleContainer, .RightContentContainer {
        width: 30%
    }
}


/* 首页 影视热度值榜区域 样式 响应式布局 */
// 手机端 显示效果
@media(max-width: 600px) {
    // 重定义 影视热度值榜 左边容器 基本样式
    .LeftTitleContainer, .LeftContentContainer {
        width: 80%
    }

    // 重定义 影视热度值榜 左边容器 排名 基本样式
    .TitleRanking {
        width: 20%
    }

    // 重定义 影视热度值榜 左边容器 影视名 基本样式
    .TitleName {
        width: 75%
    }

    // 重定义 影视热度值榜 右边容器 基本样式
    .RightTitleContainer, .RightContentContainer {
        width: 18%
    }
}

</style>