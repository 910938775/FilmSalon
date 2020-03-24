<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="Filter-root">

        <!-- 前台分区页 筛选栏 国家地区外部容器 -->
        <div class="CountryAreaContainer">
            <!-- 前台分区页 筛选栏 国家地区标题容器 -->
            <div class="CATitleContainer" @click="OpenFilter($event)">
                <!-- 前台分区页 筛选栏 国家地区标题内容容器 -->
                <span class="CATitleContent">国家地区</span>

                <!-- 前台分区页 筛选栏 国家地区标题图标容器 -->
                <span class="FilterIcon"></span>
            </div>

            <!-- 前台分区页 筛选栏 国家地区内容容器 -->
            <div class="CountryAreaContent">
                <span class="CAChoose Choose">全部</span>
                <span class="CAChoose">内地</span>
                <span class="CAChoose">中国香港</span>
                <span class="CAChoose">中国台湾</span>
                <span class="CAChoose">美国</span>
                <span class="CAChoose">日本</span>
                <span class="CAChoose">韩国</span>
                <span class="CAChoose">印度</span>
                <span class="CAChoose">泰国</span>
                <span class="CAChoose">英国</span>
                <span class="CAChoose">法国</span>
                <span class="CAChoose">德国</span>
                <span class="CAChoose">意大利</span>
                <span class="CAChoose">西班牙</span>
                <span class="CAChoose">北欧</span>
                <span class="CAChoose">加拿大</span>
                <span class="CAChoose">澳大利亚</span>
                <span class="CAChoose">墨西哥</span>
                <span class="CAChoose">拉丁美洲</span>
                <span class="CAChoose">欧洲</span>
                <span class="CAChoose">东南亚</span>
                <span class="CAChoose">其他</span>
            </div>
        </div>


        <!-- 前台分区页 筛选栏 年代外部容器 -->
        <div class="TimeContainer">
            <!-- 前台分区页 筛选栏 年代标题容器 -->
            <div class="TimeTitleContainer" @click="OpenFilter($event)">
                <!-- 前台分区页 筛选栏 年代标题内容容器 -->
                <span class="TimeTitleContent">年代</span>

                <!-- 前台分区页 筛选栏 年代标题图标容器 -->
                <span class="FilterIcon"></span>
            </div>

            <!-- 前台分区页 筛选栏 年代内容容器 -->
            <div class="TimeContent">
                <span class="TChoose Choose">全部</span>
                <span class="TChoose">2020</span>
                <span class="TChoose">2019</span>
                <span class="TChoose">2018</span>
                <span class="TChoose">2017</span>
                <span class="TChoose">2016</span>
                <span class="TChoose">2015</span>
                <span class="TChoose">2014</span>
                <span class="TChoose">2013-2011</span>
                <span class="TChoose">2010-2006</span>
                <span class="TChoose">2005-2000</span>
                <span class="TChoose">90年代</span>
                <span class="TChoose">80年代</span>
                <span class="TChoose">其他</span>
            </div>
        </div>


        <!-- 前台分区页 筛选栏 类型外部容器 -->
        <div class="TypeContainer">
            <!-- 前台分区页 筛选栏 类型标题容器 -->
            <div class="TypeTitleContainer" @click="OpenFilter($event)">
                <!-- 前台分区页 筛选栏 类型标题内容容器 -->
                <span class="TypeTitleContent">类型</span>

                <!-- 前台分区页 筛选栏 类型标题图标容器 -->
                <span class="FilterIcon"></span>
            </div>

            <!-- 前台分区页 筛选栏 类型内容容器 -->
            <div class="TypeContent">
                <span class="TYChoose Choose">全部</span>
                <span class="TYChoose">剧情</span>
                <span class="TYChoose">喜剧</span>
                <span class="TYChoose">动作</span>
                <span class="TYChoose">爱情</span>
                <span class="TYChoose">惊悚</span>
                <span class="TYChoose">犯罪</span>
                <span class="TYChoose">警匪</span>
                <span class="TYChoose">悬疑</span>
                <span class="TYChoose">战争</span>
                <span class="TYChoose">科幻</span>
                <span class="TYChoose">动画</span>
                <span class="TYChoose">恐怖</span>
                <span class="TYChoose">灾难</span>
                <span class="TYChoose">家庭</span>
                <span class="TYChoose">传记</span>
                <span class="TYChoose">冒险</span>
                <span class="TYChoose">公路</span>
                <span class="TYChoose">奇幻</span>
                <span class="TYChoose">武侠</span>
                <span class="TYChoose">历史</span>
                <span class="TYChoose">运动</span>
                <span class="TYChoose">歌舞</span>
                <span class="TYChoose">音乐</span>
                <span class="TYChoose">纪录</span>
                <span class="TYChoose">伦理</span>
                <span class="TYChoose">西部</span>
                <span class="TYChoose">艺术</span>
                <span class="TYChoose">武士剑戟</span>
                <span class="TYChoose">风月</span>
                <span class="TYChoose">粉红</span>
                <span class="TYChoose">实验</span>
            </div>
        </div>


        <!-- 前台分区页 筛选栏 其他外部容器 -->
        <div class="OtherContainer">
            <!-- 前台分区页 筛选栏 其他标题容器 -->
            <div class="OtherTitleContainer" @click="OpenFilter($event)">
                <!-- 前台分区页 筛选栏 其他标题内容容器 -->
                <span class="OtherTitleContent">其他</span>

                <!-- 前台分区页 筛选栏 其他标题图标容器 -->
                <span class="FilterIcon"></span>
            </div>

            <!-- 前台分区页 筛选栏 其他内容容器 -->
            <div class="OtherContent">
                <span class="OChoose Choose">默认</span>
                <span class="OChoose">热度值</span>
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
            // 前台分区页 筛选栏组件 筛选的资源
            FResource: {},
            // 前台分区页 筛选栏组件 筛选器关键字
            FkeyWord: {},
            // 前台分区页 筛选栏组件 资源检索绝对地址
            FilterPath: '/FilmsLibrary/filter/'
        }
    },
    // 方法 接口
    methods: {
        // 前台分区页 筛选栏组件 标题容器 点击事件
        OpenFilter(event) {
            // 1. 检查是否有被打开的筛选栏
            let rootChild = document.getElementsByClassName('Filter-root')[0].children;
            // 声明 筛选栏开关变量：默认关闭
            let openNode = false;
            // 声明 筛选栏开关节点变量
            let Node = '';
            for (let i = 0; i < rootChild.length; i++) {
                // 2. 如果有打开元素，删除样式。
                if (rootChild[i].classList.contains('OutContainer')) {
                    // 删除 外部容器样式
                    rootChild[i].classList.remove('OutContainer');
                    // 保存 标题容器节点
                    Node = rootChild[i].children[0];
                    // 删除 标题容器样式
                    rootChild[i].children[0].classList.remove('TitleContainer');
                    // 删除 图标样式
                    rootChild[i].children[0].children
                        [rootChild[i].children[0].children.length-1].classList.remove('Icon');
                    // 删除 内容容器样式
                    rootChild[i].children
                        [rootChild[i].children.length-1].classList.remove('Content');
                    // 删除 内容容器 子元素 span 样式
                    for (
                        let j = 0, item = rootChild[i].children[rootChild[i].children.length-1].children;
                        j < item.length; j++
                    ) {
                        rootChild[i].children
                            [rootChild[i].children.length-1].children[j].classList.remove('ChildContent')
                    };
                    // 打开开关
                    openNode = true
                }
            };
            // 3. 检查当前点击元素是否就是被打开的元素
            let sameNode = event.currentTarget || window.event.currentTarget;
            // 4. 如果没有打开元素，或者当前点击元素不是被打开的元素，添加样式。
            if (!openNode || sameNode !== Node) {
                // 添加 外部容器样式
                sameNode.parentNode.classList.add('OutContainer');
                // 添加 标题容器样式
                sameNode.classList.add('TitleContainer');
                // 添加 图标样式
                sameNode.children[sameNode.children.length-1].classList.add('Icon');
                // 添加 内容容器样式
                sameNode.nextElementSibling.classList.add('Content');
                // 添加 内容容器 子元素 span 样式
                for (let k = 0; k < sameNode.nextElementSibling.children.length; k++) {
                    sameNode.nextElementSibling.children[k].classList.add('ChildContent')
                }
            }
        },
        // 前台分区页 筛选栏组件 内容容器 子元素 span 选中事件
        ChooseFilter(event, index) {
            // 1. 检查当前点击节点是否是已选中的节点
            let clickNode = event.currentTarget || window.event.currentTarget;
            // 声明 已选中的节点
            let chooseNode = document.getElementsByClassName('Choose')[index];
            // 2. 如果不是，先删除已选中节点样式。
            if (clickNode !== chooseNode) {
                chooseNode.classList.remove('Choose')
            };
            // 3. 给点击节点添加样式
            clickNode.classList.add('Choose')
        },
        // 前台分区页 筛选栏组件 内容容器 关键字获取
        KeyWord() {
            // 获取当前 选中的 筛选器关键词
            let Choose = document.getElementsByClassName('Choose');
            // 设置 默认关键字
            this.FkeyWord.CountryArea = '';
            this.FkeyWord.Time = '';
            this.FkeyWord.Type = '';
            this.FkeyWord.Other = '';
            // 循环节点 获取关键字
            for (let i = 0; i < Choose.length; i++) {
                // 获取 关键字
                let keyWord = Choose[i].innerHTML;
                // 获取该节点其他 ClassName 以判断 筛选类型
                let Type = Choose[i].classList;

                // 判断 关键字 类型
                // 国家地区
                Type.contains('CAChoose') && (keyWord !== '全部') && (
                    this.FkeyWord.CountryArea = keyWord
                );
                // 年代
                Type.contains('TChoose') && (keyWord !== '全部') && (
                    this.FkeyWord.Time = keyWord
                );
                // 类型
                Type.contains('TYChoose') && (keyWord !== '全部') && (
                    this.FkeyWord.Type = keyWord
                );
                // 其他
                Type.contains('OChoose') && (keyWord !== '默认') && (
                    this.FkeyWord.Other = keyWord
                )
            }
        },
        // 前台分区页 筛选栏组件 内容容器 点击筛选事件
        async ClickFilter(event) {
            // 获取 检索关键字
            this.KeyWord();

            // 向服务端发送 数据检索 请求
            // 获取 内容缩略区域组件 每页资源数
            let count = this.$parent.CurrentCount();
            this.FkeyWord.count = count;
            // 封装 请求数据 对象
            let getData = {
                pattern: 'post',
                content: this.FkeyWord,
                url: this.FilterPath,
                tool: this
            };
            // 实例化请求对象
            let VueOB = new DataRequest();
            // 发起数据请求
            let result = await VueOB.Vue(getData);
            // 数据获取 成功
            (result.status === 0) && (
                // 保存 检索数据资源 对象：总资源量 TotalContent，当前页资源 CurrentContent
                this.FResource = result.content
            );
            // 数据获取 失败
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
    // 组件挂载完毕 用户可以看到页面 自动执行这个 生命周期函数
    mounted() {
        // 解决监听器下 this 指向性问题
        let that = this;

        // 前台分区页 筛选栏组件 国家地区内容容器 子元素 span 添加监听器
        // 获取 国家地区内容容器 子元素 span
        let CAChooses = document.getElementsByClassName('CAChoose');
        for (let i = 0; i < CAChooses.length; i++) {
            CAChooses[i].addEventListener('click', function(event) {
                // 添加 选中样式
                that.ChooseFilter(event, 0);
                // 发起 数据请求
                that.ClickFilter()
            })
        };

        // 前台分区页 筛选栏组件 年代内容容器 子元素 span 添加监听器
        // 获取 年代内容容器 子元素 span
        let TChooses = document.getElementsByClassName('TChoose');
        for (let j = 0; j < TChooses.length; j++) {
            TChooses[j].addEventListener('click', function(event) {
                // 添加 选中样式
                that.ChooseFilter(event, 1);
                // 发起 数据请求
                that.ClickFilter()
            })
        };

        // 前台分区页 筛选栏组件 类型内容容器 子元素 span 添加监听器
        // 获取 类型内容容器 子元素 span
        let TYChooses = document.getElementsByClassName('TYChoose');
        for (let k = 0; k < TYChooses.length; k++) {
            TYChooses[k].addEventListener('click', function(event) {
                // 添加 选中样式
                that.ChooseFilter(event, 2);
                // 发起 数据请求
                that.ClickFilter()
            })
        };

        // 前台分区页 筛选栏组件 其他内容容器 子元素 span 添加监听器
        // 获取 其他内容容器 子元素 span
        let OChooses = document.getElementsByClassName('OChoose');
        for (let g = 0; g < OChooses.length; g++) {
            OChooses[g].addEventListener('click', function(event) {
                // 添加 选中样式
                that.ChooseFilter(event, 3);
                // 发起 数据请求
                that.ClickFilter()
            })
        }
    },
    // 监视数据的变化 自动执行函数
    watch: {
        // 监视 筛选栏组件 筛选的资源
        FResource: function(newVal, oldVal) {
            // 设置参数
            let params = {
                FResource: newVal
            };
            // 触发父组件方法
            this.$emit('FilterModify', params)
        },
        // 监视 筛选栏组件 筛选器关键字
        FkeyWord: function(newVal, oldVal) {
            // 设置参数
            let params = {
                FkeyWord: newVal
            };
            // 触发父组件方法
            this.$emit('FilterModify', params)
        }
    }
}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

/* 前台分区页 筛选栏组件 基本样式 */

// 前台分区页 筛选栏组件 模板根节点 基本样式
.Filter-root {
    display: flex; flex-direction: column; position: relative; width: 100%; height: 250px;
    border: 1px solid rgba($color: #696969, $alpha: 1.0); border-radius: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 13px;
    background-color: rgba($color: #AFEEEE, $alpha: 0.1); overflow-y: scroll
}

// 前台分区页 筛选栏组件 模板根节点 隐藏滚动条
.Filter-root::-webkit-scrollbar {
    display: none
}


// 前台分区页 筛选栏组件 国家地区外部容器 年代外部容器 类型外部容器 其他外部容器 基本样式
.CountryAreaContainer, .TimeContainer, .TypeContainer, .OtherContainer {
    display: flex; flex-direction: column; position: relative; width: 100%; min-height: 25%
}


// 前台分区页 筛选栏组件 国家地区标题容器 年代标题容器 类型标题容器 其他标题容器 基本样式
.CATitleContainer, .TimeTitleContainer, .TypeTitleContainer, .OtherTitleContainer {
    display: flex; position: relative; width: 100%; height: 50%; align-items: center; cursor: pointer
}

// 前台分区页 筛选栏组件 国家地区标题内容容器 年代标题内容容器 类型标题内容容器 其他标题内容容器 基本样式
.CATitleContent, .TimeTitleContent, .TypeTitleContent, .OtherTitleContent {
    display: flex; position: relative; width: 40%; height: 100%; align-items: center;
    padding: 1px 5px; background-color: rgba($color: #008080, $alpha: 1.0);
    color: rgba($color: #40E0D0, $alpha: 1.0); font-weight: bold
}


// 前台分区页 筛选栏组件 标题容器 鼠标交互样式
.CATitleContainer::after, .TimeTitleContainer::after,
.TypeTitleContainer::after, .OtherTitleContainer::after {
    content: ''; left: 0px; position: absolute; width: 0%; height: 100%;
    background-color: rgba($color: #40E0D0, $alpha: 0.3); z-index: -1
}
.CATitleContainer:hover::after, .TimeTitleContainer:hover::after,
.TypeTitleContainer:hover::after, .OtherTitleContainer:hover::after {
    width: 100%;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s
}
// 前台分区页 筛选栏组件 标题内容容器 鼠标交互样式
.CATitleContainer:hover .CATitleContent, .TimeTitleContainer:hover .TimeTitleContent,
.TypeTitleContainer:hover .TypeTitleContent, .OtherTitleContainer:hover .OtherTitleContent {
    font-weight: bolder
}


// 前台分区页 筛选栏组件 图标容器 基本样式
.FilterIcon {
    display: flex; position: relative; width: 0px; height: 0px; border-width: 10px; border-style: solid;
    border-color: transparent transparent transparent rgba($color: #2E8B57, $alpha: 0.8); left: 10px
}


// 前台分区页 筛选栏组件 国家地区内容容器 年代内容容器 类型内容容器 其他内容容器 基本样式
.CountryAreaContent, .TimeContent, .TypeContent, .OtherContent {
    display: flex; position: relative; width: 100%; height: 50%; overflow: hidden;
    flex-wrap: wrap; background-color: rgba($color: #FFFAFA, $alpha: 1.0)
}

// 前台分区页 筛选栏组件 国家地区内容容器 年代内容容器 类型内容容器 其他内容容器 子元素 span 基本样式
.CountryAreaContent span, .TimeContent span, .TypeContent span, .OtherContent span {
    display: flex; position: relative; height: 100%; margin: 0px 3px; padding: 1px 3px;
    align-items: center; border-radius: 10px; cursor: pointer
}

// 前台分区页 筛选栏组件 国家地区内容容器 年代内容容器 类型内容容器 其他内容容器 子元素 span 鼠标交互样式
.CountryAreaContent span:hover, .TimeContent span:hover,
.TypeContent span:hover, .OtherContent span:hover {
    font-weight: bold
}


// 前台分区页 筛选栏组件 span 选中样式
.Choose {
    background-color: rgba($color: #FF4500, $alpha: 0.8); font-weight: bolder
}


// 前台分区页 筛选栏组件 外部容器 点击样式：.OutContainer
.Filter-root .OutContainer {
    min-height: 90%
}
// 前台分区页 筛选栏组件 标题容器 点击样式：.TitleContainer
.Filter-root .TitleContainer {
    height: 15%; align-items: flex-end
}
// 前台分区页 筛选栏组件 图标 点击样式：Icon
.Filter-root .Icon {
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -o-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
}
// 前台分区页 筛选栏组件 内容容器 点击样式：.Content
.Filter-root .Content {
    height: 85%
}
// 前台分区页 筛选栏组件 内容容器 子元素 span 点击样式：.ChildContent
.Filter-root .ChildContent {
    height: 13%
}

</style>