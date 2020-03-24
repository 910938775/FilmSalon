<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="Content-root">

        <!-- 前台分区页 内容缩略区组件 外部容器 -->
        <div class="ContentContainer" v-for="(item, i) in this.CurrentContent" :key="i">
            <!-- 前台分区页 内容缩略区组件 图像外部容器 -->
            <div class="ImageContainer">
                <!-- 前台分区页 内容缩略区组件 特殊标志容器 -->
                <div class="SymbolContainer">
                    <!-- 前台分区页 内容缩略区组件 特殊标志 -->
                    <span class="Symbol">{{ item.Symbol }}</span>
                </div>

                <!-- 前台分区页 内容缩略区组件 图像容器 -->
                <div class="Image">
                    <!-- 前台分区页 内容缩略区组件 图像封面 -->
                    <router-link tag="img" to="" :src="item.Src"></router-link>
                </div>

                <!-- 前台分区页 内容缩略区组件 信息容器 -->
                <div class="ImageInformation">
                    <!-- 前台分区页 内容缩略区组件 左边信息容器 -->
                    <span class="LeftInformation">{{ item.Director[0] }}</span>
                    <!-- 前台分区页 内容缩略区组件 右边信息容器 -->
                    <span class="RightInformation">{{ item.Time }}</span>
                </div>
            </div>

            <!-- 前台分区页 内容缩略区组件 名称外部容器 -->
            <div class="ContentNameContainer">
                <!-- 前台分区页 内容缩略区组件 名称容器 -->
                <router-link tag="span" to="" class="ContentName">{{ item.Name }}</router-link>
            </div>
        </div>


        <!-- 前台分区页 内容缩略区组件 空白补齐容器 -->
        <div class="Blank"></div>


        <!-- 前台分区页 内容缩略区组件 底部分页栏外部容器 -->
        <div class="paging" id="paging"></div>

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
            // 前台分区页 内容缩略区组件 初始化 绝对路径
            InitializeContent: '/FilmsLibrary/content/',
            // 前台分区页 内容缩略区组件 分页 绝对路径
            PagingContent: '/FilmsLibrary/content/paging/',
            // 前台分区页 内容缩略区组件 资源总量
            TotalContent: '',
            // 前台分区页 内容缩略区组件 每页资源量
            CurrentPaging: 20,
            // 前台分区页 内容缩略区组件 当前页资源
            CurrentContent: [],
            // 前台分区页 模板根节点 宽度
            RootWidth: '',
            // 前台分区页 内容缩略区组件 外部容器宽度
            ContainerWidth: '',
            // 前台分区页 内容缩略区组件 外部容器高度
            ContainerHeight: 270,
            // 前台分区页 内容缩略区组件 底部分页栏外部容器高度
            PagingHeight: 80,
            // 前台分区页 筛选栏组件 关键字
            KeyWord: ''
        }
    },
    // 父组件 数据
    props: ['FilterData', 'FKeyWord'],
    // 方法 接口
    methods: {
        // 前台分区页 内容缩略区组件 初始化内容 方法
        async InitializeFuc() {
            // 封装 请求数据 对象
            let getData = {
                pattern: 'post',
                content: {
                    CurrentCount: this.CurrentPaging
                },
                url: this.InitializeContent,
                tool: this
            };
            // 实例化请求对象
            let VueOB = new DataRequest();
            // 发起数据请求
            let result = await VueOB.Vue(getData);
            // 数据请求成功
            (result.status === 0) && (
                // 保存 资源总量
                this.TotalContent = result.content.totalCount,
                // 保存 当前页资源
                this.CurrentContent = result.content.contents
            );
            // 数据获取失败
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
        // 前台分区页 内容缩略区组件 分页内容 方法
        async PagingContentFuc(Count) {
            // 封装 请求数据 对象
            let getData = {
                pattern: 'post',
                content: {
                    Count: Count,
                    CurrentCount: this.CurrentPaging
                },
                url: this.PagingContent,
                tool: this
            };
            // 实例化请求对象
            let VueOB = new DataRequest();
            // 发起数据请求
            let result = await VueOB.Vue(getData);
            // 数据请求成功
            (result.status === 0) && (
                // 保存 当前页资源
                this.CurrentContent = result.content
            );
            // 数据获取失败
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
        // 前台分区页 内容缩略区组件 分页内容 排序问题
        PaingRank() {
            // 获取 模板根节点 对象
            let root = document.getElementsByClassName('Content-root')[0];
            // 获取 前台分区页 内容缩略区组件 外部容器 对象数量
            let Count = document.getElementsByClassName('ContentContainer').length;
            // 获取 当前内容缩略区 每行资源数量
            let Column = Math.floor(this.RootWidth / this.ContainerWidth);
            // 最后一行 补齐 空白位置 需要的资源数量
            let BlankCount = Column - (Count % Column);
            // 计算 空白位置 宽度
            let Bwidth = this.ContainerWidth * BlankCount;
            // 获取 空白补齐 对象
            let Blank = document.getElementsByClassName('Blank')[0];
            // 设置 空白补齐 对象样式
            if (BlankCount !== 0) {
                Blank.style.display = 'flex';
                Blank.style.width = Bwidth + 'px';
                Blank.style.height = this.ContainerHeight
            }
        },
        // 前台分区页 内容缩略区组件 分页内容 样式问题
        PaingStyle(paingCount) {
            // 获取 模板根节点 对象
            let RootNode = document.getElementsByClassName('Content-root')[0];
            // 声明 模板根结点 高度变量
            let RootHeight = '';

            // 当前的总资源数 是否满足 每个分页最大的资源数
            if (this.TotalContent >= paingCount) {
                // 计算 模板根结点 的实际高度：30px 底部间隔
                RootHeight = Math.ceil(
                        paingCount / Math.floor(this.RootWidth / this.ContainerWidth)
                    ) * this.ContainerHeight + this.PagingHeight + 30
            } else {
                RootHeight = Math.ceil(
                        this.TotalContent / Math.floor(this.RootWidth / this.ContainerWidth)
                    ) * this.ContainerHeight + this.PagingHeight + 30
            };

            // 设置 模板根结点 样式
            RootNode.style.height = RootHeight + 'px'
        },
        // 前台分区页 内容缩略区组件 底部分页栏加载方法
        laypagePaing(that) {
            // 加载 layui UI 框架 模块
            layui.use('laypage', function(){
                // 加载 分页模块
                let laypage = layui.laypage;
  
                // 执行一个 laypage 实例
                laypage.render({
                    // 渲染对象：必须是 ID，不能使用 class
                    elem: 'paging',
                    // 数据总数：从后台服务器获取
                    count: that.TotalContent,
                    // 每页显示的 条目数
                    limit: that.CurrentPaging,
                    // 自定义主题颜色
                    //theme: '',
                    // 自定义功能：总条目数、上一页、分页区、下一页、条目选项
                    layout: ['count', 'prev', 'page', 'next', 'limit'],
                    // 切换分页的 回调函数
                    jump: async function(obj, first) {
                        // 获取 模板根节点 对象
                        let ContentRoot = document.getElementsByClassName('Content-root')[0];
                        // 获取 模板根节点 宽度
                        that.RootWidth = ContentRoot.clientWidth;
                        // 获取 前台分区页 内容缩略区组件 外部容器宽度：20px 左右 margin
                        that.ContainerWidth = ContentRoot.children[0].clientWidth + 40;
                        
                        // 分页首页不执行
                        if (!first) {
                            // 动态调整 模板根结点 样式
                            that.PaingStyle(obj.limit);
                            // 手动调整 分页 每页的资源数量：obj.limit 每页资源数
                            that.CurrentPaging = obj.limit;
                            // 自动获取当前页的资源内容：obj.curr 当前页码
                            await that.PagingContentFuc(obj.curr)
                        }
                    }
                })
            })
        },
        // 前台分区页 内容缩略区组件 动态更新 Symbol 标志
        Symbol() {
            // 获取 特殊标志容器对象
            let SymbolNode = document.getElementsByClassName('SymbolContainer');
            // 获取 特殊标志对象
            let SymbolChild = document.getElementsByClassName('Symbol');
            // 对所有节点进行遍历
            for (let i = 0; i < SymbolChild.length; i++) {
                // 判断 特殊标志 是否存在
                if (SymbolChild[i].innerHTML === '') {
                    // 不存在则 隐藏 特殊标志容器对象
                    SymbolNode[i].style.display = 'none'
                } else {
                    // 存在则 显示 特殊标志容器对象
                    SymbolNode[i].style.display = 'flex'
                }
            }
        }
    },
    // 组件挂载完毕 用户可以看到页面 自动执行这个 生命周期函数
    mounted() {
        // 保存 this 指向性
        let that = this;
        // 获取 模板根节点 对象
        let ContentRoot = document.getElementsByClassName('Content-root')[0];
        

        // 通过 async await 来处异步函数问题，使其内部同步化处理
        // 声明 自执行函数
        (async function Initialize() {
            // await 后面的函数必须是 promise 函数，才能有同步函数效果

            // 前台分区页 内容缩略区组件 自动获取初始化数据
            await that.InitializeFuc();

            // 前台分区页 内容缩略区组件 底部分页栏加载方法
            that.laypagePaing(that)
        })();


        // window 添加监听器：监视浏览器宽度变化
        window.addEventListener('resize', function() {
            // 获取 模板根节点 宽度
            that.RootWidth = ContentRoot.clientWidth;
            // 获取 前台分区页 内容缩略区组件 外部容器宽度：20px 左右 margin
            that.ContainerWidth = ContentRoot.children[0].clientWidth + 40;
            // 动态调整 模板根结点 样式
            that.PaingStyle(that.CurrentPaging);
            // 动态补齐 空白位置
            that.PaingRank()
        }, false)
    },
    // Data 数据 与 页面 保持同步更新后，执行该生命周期函数。
    updated() {
        // 动态更新 节点 Symbol 标志
        this.Symbol();
        // 动态补齐 空白位置
        this.PaingRank()
    },
    // 监视数据的变化 自动执行函数
    watch: {
        // 监视 筛选组件 数据变化
        FilterData: function(newVal, oldVal) {
            // 保存 检索资源总量 结果
            this.TotalContent = newVal.TotalContent;
            // 保存 当前页检索资源 结果
            this.CurrentContent = newVal.CurrentContent;
            // 重新加载 底部分页栏加载方法
            this.laypagePaing(this)
        },
        // 监视 筛选组件 关键字
        FKeyWord: function(newVal, oldVal) {
            // 保存 筛选器 关键字
            this.KeyWord = newVal
        }
    }
}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

/* 前台分区页 内容缩略区组件 基本样式 */

// 前台分区页 内容缩略区组件 模板根节点 基本样式
.Content-root {
    display: flex; flex-wrap: wrap; align-content: flex-start; justify-items: center;
    justify-content: center; position: relative; width: 100%; height: 1200px;
    background-color: rgba($color: #B0C4DE, $alpha: 0.2);
    font-family: Arial, Helvetica, sans-serif; font-size: 13px; font-weight: bolder
}


// 前台分区页 内容缩略区组件 外部容器 基本样式
.ContentContainer {
    display: flex; flex-direction: column; position: relative; width: 15%;
    height: 250px; margin: 20px 20px 0px 20px; box-shadow: 3px 3px 3px #D3D3D3
}


/* 前台分区页 响应式布局 */
// PC端显示效果
@media(max-width: 1200px) {
    // 重定义 前台分区页 内容缩略区组件 模板根节点 基本样式
    .Content-root {
        height: 1450px
    }

    // 重定义 前台分区页 内容缩略区组件 外部容器 基本样式
    .ContentContainer {
        width: 20%
    }
}


// 前台分区页 内容缩略区组件 图像外部容器 基本样式
.ImageContainer {
    display: flex; position: relative; width: 100%; height: 85%;
    border: 1px solid rgba($color: #808080, $alpha: 1.0);
    border-top-left-radius: 5px; border-top-right-radius: 5px
}
.ImageContainer::after {
    content: ''; display: flex; position: absolute; bottom: -1px; width: 100%;
    height: 3px; box-shadow: 0px 3px 3px #808080
}


// 前台分区页 内容缩略区组件 特殊标志容器 基本样式
.SymbolContainer {
    display: flex; position: absolute; width: 30%; height: 12%; right: 0px; top: 0px; z-index: 10
}

// 前台分区页 内容缩略区组件 特殊标志 基本样式
.Symbol {
    display: flex; position: relative; width: 100%; height: 100%;
    background-color: rgba($color: #FFA500, $alpha: 0.8); color: #F8F8FF;
    justify-content: center; align-items: center; border-top-right-radius: 5px;
    border-bottom-left-radius: 5px
}


// 前台分区页 内容缩略区组件 图像容器 基本样式
.Image {
    display: flex; position: relative; width: 100%; height: 100%
}
.Image img {
    display: flex; position: relative; width: 100%; height: 100%; cursor: pointer
}


// 前台分区页 内容缩略区组件 信息容器 基本样式
.ImageInformation {
    display: flex; position: absolute; width: 100%; height: 20%; bottom: 0px
}

// 前台分区页 内容缩略区组件 左边信息容器 基本样式
.LeftInformation {
    display: flex; position: relative; width: 50%; height: 100%; align-items: flex-end;
    justify-content: flex-start; color: rgba($color: #FFFFFF, $alpha: 1.0)
}

// 前台分区页 内容缩略区组件 右边信息容器 基本样式
.RightInformation {
    display: flex; position: relative; width: 50%; height: 100%; align-items: flex-end;
    justify-content: flex-end; color: rgba($color:	#FF8C00, $alpha: 1.0)
}


// 前台分区页 内容缩略区组件 名称外部容器 基本样式
.ContentNameContainer {
    display: flex; position: relative; width: 100%; height: 15%
}

// 前台分区页 内容缩略区组件 名称容器 基本样式
.ContentName {
    display: flex; position: relative; width: 100%; height: 100%; align-items: center;
    justify-content: flex-start; background-color: rgba($color: #F8F8FF, $alpha: 0.8);
    border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; padding: 0px 5px
}

// 前台分区页 内容缩略区组件 名称容器 鼠标交互样式
.ContentName:hover {
    color: rgba($color: #FF8C00, $alpha: 0.8); cursor: pointer
}


// 前台分区页 内容缩略区组件 空白补齐容器 基本样式
.Blank {
    display: flex; position: relative; display: none
}


// 前台分区页 内容缩略区组件 底部分页栏外部容器 基本样式
.paging {
    display: flex; position: absolute; width: 100%; height: 80px; bottom: 0px;
    justify-content: center; align-items: center
}

</style>