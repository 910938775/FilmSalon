<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="Information-root">

        <!-- 前台分区页 信息栏 名称容器 -->
        <div class="NameContainer">
            <!-- 前台分区页 信息栏 名称 -->
            <span class="Name">名称：</span>
            <!-- 前台分区页 信息栏 名称内容 -->
            <router-link tag="span" to="" class="NameContent">Name</router-link>
        </div>


        <!-- 前台分区页 信息栏 国家地区容器 -->
        <div class="CountryAreaContainer">
            <!-- 前台分区页 信息栏 国家容器 -->
            <div class="CountryContainer">
                <!-- 前台分区页 信息栏 国家 -->
                <span class="Country">国家：</span>
                <!-- 前台分区页 信息栏 国家内容 -->
                <span class="CountryContent">Country</span>
            </div>

            <!-- 前台分区页 信息栏 地区容器 -->
            <div class="AreaContainer">
                <!-- 前台分区页 信息栏 地区 -->
                <span class="Area">地区：</span>
                <!-- 前台分区页 信息栏 地区内容 -->
                <span class="AreaContent">Area</span>
            </div>
        </div>


        <!-- 前台分区页 信息栏 年代类型容器 -->
        <div class="TimeTypeContainer">
            <!-- 前台分区页 信息栏 年代容器 -->
            <div class="TimeContainer">
                <!-- 前台分区页 信息栏 年代 -->
                <span class="Time">年代：</span>
                <!-- 前台分区页 信息栏 年代内容 -->
                <span class="TimeContent">Time</span>
            </div>

            <!-- 前台分区页 信息栏 类型容器 -->
            <div class="TypeContainer">
                <!-- 前台分区页 信息栏 类型 -->
                <span class="Type">类型：</span>
                <!-- 前台分区页 信息栏 类型内容 -->
                <span class="TypeContent">Type</span>
            </div>
        </div>


         <!-- 前台分区页 信息栏 导演编剧容器 -->
        <div class="DirectorWritterContainer">
            <!-- 前台分区页 信息栏 导演容器 -->
            <div class="DirectorContainer">
                <!-- 前台分区页 信息栏 导演 -->
                <span class="Director">导演：</span>
                <!-- 前台分区页 信息栏 导演内容 -->
                <router-link tag="span" to="" class="DirectorContent">Director</router-link>
            </div>

            <!-- 前台分区页 信息栏 编剧容器 -->
            <div class="WritterContainer">
                <!-- 前台分区页 信息栏 编剧 -->
                <span class="Writter">编剧：</span>
                <!-- 前台分区页 信息栏 编剧内容 -->
                <router-link tag="span" to="" class="WritterContent">Writter</router-link>
            </div>
        </div>


         <!-- 前台分区页 信息栏 票房评分容器 -->
        <div class="BoxOfficeGradeContainer">
            <!-- 前台分区页 信息栏 票房容器 -->
            <div class="BoxOfficeContainer">
                <!-- 前台分区页 信息栏 票房 -->
                <span class="BoxOffice">票房：</span>
                <!-- 前台分区页 信息栏 票房内容 -->
                <span class="BoxOfficeContent">
                    BOV &nbsp; <i class="layui-icon">&#xe702;</i>

                    <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏容器 -->
                    <div class="BoxOfficeSidebar">
                        <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 -->
                        <div class="TheLocalBoxOffice">
                            <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 名称 -->
                            <span class="BoxOfficeName">本地票房</span>
                            <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 内容 -->
                            <span class="BoxOfficeValue">100,000,000</span>
                        </div>

                        <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 中国票房容器 -->
                        <div class="ChinaBoxOffice">
                            <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 名称 -->
                            <span class="BoxOfficeName">中国票房</span>
                            <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 内容 -->
                            <span class="BoxOfficeValue">100,000,000</span>
                        </div>

                        <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 全球票房容器 -->
                        <div class="WorldWideBoxOffice">
                            <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 名称 -->
                            <span class="BoxOfficeName">全球票房</span>
                            <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 内容 -->
                            <span class="BoxOfficeValue">100,000,000</span>
                        </div>
                    </div>
                </span>
            </div>

            <!-- 前台分区页 信息栏 评分容器 -->
            <div class="GradeContainer">
                <!-- 前台分区页 信息栏 评分 -->
                <span class="Grade">评分：</span>
                <!-- 前台分区页 信息栏 评分内容 -->
                <span class="GradeContent">
                    Grade &nbsp; <i class="layui-icon">&#xe702;</i>

                    <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏容器 -->
                    <div class="GradeSidebar">
                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 IMDB评分容器 -->
                        <div class="IMDB">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 IMDB评分容器 名称 -->
                            <span class="GradeName">IMDB</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 IMDB评分容器 容器 -->
                            <span class="GradeValue">10</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄专业人士新鲜度 -->
                        <div class="TOMATOMETER">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄专业人士新鲜度 名称 -->
                            <span class="GradeName">烂番茄专业人士新鲜度</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄专业人士新鲜度 容器 -->
                            <span class="GradeValue">100% &nbsp; - &nbsp; 1000人</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄观众新鲜度 -->
                        <div class="AUDIENCESCORE">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄观众新鲜度 名称 -->
                            <span class="GradeName">烂番茄观众新鲜度</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄观众新鲜度 容器 -->
                            <span class="GradeValue">100% &nbsp; - &nbsp; 1000人</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC专业人士评分 -->
                        <div class="MetaScore">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC专业人士评分 名称 -->
                            <span class="GradeName">MTC专业人士评分</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC专业人士评分 容器 -->
                            <span class="GradeValue">100%</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC观众评分 -->
                        <div class="UserScore">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC观众评分 名称 -->
                            <span class="GradeName">MTC观众评分</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC观众评分 容器 -->
                            <span class="GradeValue">10</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 豆瓣 -->
                        <div class="DouBan">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 豆瓣 名称 -->
                            <span class="GradeName">豆瓣</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 豆瓣 容器 -->
                            <span class="GradeValue">10</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 时光网 -->
                        <div class="Mtime">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 时光网 名称 -->
                            <span class="GradeName">时光网</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 时光网 容器 -->
                            <span class="GradeValue">10</span>
                        </div>
                    </div>
                </span>
            </div>
        </div>


        <!-- 前台分区页 信息栏 备注容器 -->
        <div class="NotesContainer">
            <!-- 前台分区页 信息栏 备注 -->
            <span class="Notes">备注：</span>
            <!-- 前台分区页 信息栏 备注内容 -->
            <span class="NotesContent">Notes</span>
        </div>

    </div>
</template>

<!-- 组件实例接口区域 -->
<script>

// 接口区域
export default {

}

</script>

<!-- 组件样式区域 -->
<style lang="scss" scoped>

/* 前台分区页 信息栏组件 基本样式 */

// 前台分区页 信息栏组件 模板根节点 基本样式
.Information-root {
    display: flex; flex-direction: column; position: relative; width: 100%; height: 250px;
    border: 1px solid rgba($color: #696969, $alpha: 1.0); border-radius: 5px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: 13px;
    background-color: rgba($color: #AFEEEE, $alpha: 0.1)
}


// 前台分区页 信息栏组件 名称容器 基本样式
.NameContainer {
    display: flex; position: relative; width: 100%; height: 15%
}

// 前台分区页 信息栏组件 名称 基本样式
.Name {
    display: flex; position: relative; width: 20%; height: 100%; align-items: center; font-weight: bold
}

// 前台分区页 信息栏组件 名称内容 基本样式
.NameContent {
    display: flex; position: relative; width: 80%; height: 100%; align-items: center;
    overflow-x: scroll; cursor: pointer
}

// 前台分区页 信息栏组件 名称内容 隐藏滚动条
.NameContent::-webkit-scrollbar {
    display: none
}

// 前台分区页 信息栏组件 名称内容 鼠标交互样式
.NameContent:hover {
    color: rgba($color: #191970, $alpha: 1.0); font-weight: bolder
}


// 前台分区页 信息栏组件 国家地区容器 年代类型容器 导演编剧容器 票房评分容器 基本样式
.CountryAreaContainer, .TimeTypeContainer, .DirectorWritterContainer, .BoxOfficeGradeContainer {
    display: flex; position: relative; width: 100%; height: 12%
}


// 前台分区页 信息栏组件 国家容器 年代容器 导演容器 票房容器 基本样式
.CountryContainer, .TimeContainer, .DirectorContainer, .BoxOfficeContainer {
    display: flex; position: relative; width: 50%; height: 100%
}

// 前台分区页 信息栏组件 国家 年代 导演 票房 基本样式
.Country, .Time, .Director, .BoxOffice {
    display: flex; position: relative; width: 40%; height: 100%; align-items: center; font-weight: bold
}

// 前台分区页 信息栏组件 国家内容 年代内容 导演内容 票房内容 基本样式
.CountryContent, .TimeContent, .DirectorContent, .BoxOfficeContent {
    display: flex; position: relative; width: 60%; height: 100%; align-items: center;
    overflow-x: scroll; cursor: pointer
}

// 前台分区页 信息栏组件 票房内容 基本样式
.BoxOfficeContent {
    overflow: visible
}
// 前台分区页 信息栏组件 票房内容 鼠标交互样式
.BoxOfficeContent:hover .BoxOfficeSidebar {
    visibility: visible; color: #000000; font-weight: normal;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s
}

// 前台分区页 信息栏组件 国家内容 年代内容 导演内容 票房内容 隐藏滚动条
.CountryContent::-webkit-scrollbar, .TimeContent::-webkit-scrollbar,
.DirectorContent::-webkit-scrollbar, .BoxOfficeContent::-webkit-scrollbar {
    display: none
}

// 前台分区页 信息栏组件 国家内容 年代内容 导演内容 票房内容 鼠标交互样式
.CountryContent:hover, .TimeContent:hover, .DirectorContent:hover, .BoxOfficeContent:hover {
    color: rgba($color: #191970, $alpha: 1.0); font-weight: bolder
}


// 前台分区页 信息栏组件 地区容器 类型容器 编剧容器 评分容器 基本样式
.AreaContainer, .TypeContainer, .WritterContainer, .GradeContainer {
    display: flex; position: relative; width: 50%; height: 100%
}

// 前台分区页 信息栏组件 国家 类型 编剧 评分 基本样式
.Area, .Type, .Writter, .Grade {
    display: flex; position: relative; width: 40%; height: 100%; align-items: center; font-weight: bold
}

// 前台分区页 信息栏组件 国家内容 类型内容 编剧内容 评分内容 基本样式
.AreaContent, .TypeContent, .WritterContent, .GradeContent {
    display: flex; position: relative; width: 60%; height: 100%; align-items: center;
    overflow-x: scroll; cursor: pointer
}

// 前台分区页 信息栏组件 评分内容 基本样式
.GradeContent {
    overflow: visible
}
// 前台分区页 信息栏组件 评分内容 鼠标交互样式
.GradeContent:hover .GradeSidebar {
    visibility: visible; color: #000000; font-weight: normal;
    -webkit-transition: all ease 0.3s;
    -moz-transition: all ease 0.3s;
    -o-transition: all ease 0.3s;
    transition: all ease 0.3s
}

// 前台分区页 信息栏组件 国家内容 类型内容 编剧内容 评分内容 隐藏滚动条
.AreaContent::-webkit-scrollbar, .TypeContent::-webkit-scrollbar,
.WritterContent::-webkit-scrollbar, .GradeContent::-webkit-scrollbar {
    display: none
}

// 前台分区页 信息栏组件 国家内容 类型内容 编剧内容 评分内容 鼠标交互样式
.AreaContent:hover, .TypeContent:hover, .WritterContent:hover, .GradeContent:hover {
    color: rgba($color: #191970, $alpha: 1.0); font-weight: bolder
}


// 前台分区页 信息栏 备注容器 基本样式
.NotesContainer {
    display: flex; flex-direction: column; position: relative; width: 100%; height: 37%
}

// 前台分区页 信息栏 备注 基本样式
.Notes {
    display: flex; position: relative; width: 100%; height: 30%; align-items: center; font-weight: bold
}

// 前台分区页 信息栏 备注内容 基本样式
.NotesContent {
    display: flex; position: relative; width: 100%; height: 70%; align-items: center;
    overflow-y: scroll; cursor: pointer
}

// 前台分区页 信息栏 备注内容 隐藏滚动条
.NotesContent::-webkit-scrollbar {
    display: none
}

// 前台分区页 信息栏组件 备注内容 鼠标交互样式
.NotesContent:hover {
    color: rgba($color: #191970, $alpha: 1.0); font-weight: bolder
}


// 前台分区页 信息栏 票房内容 隐藏式侧边栏容器 基本样式
.BoxOfficeSidebar {
    display: flex; flex-direction: column; position: absolute; left: 100%; width: 180px;
    height: 90px; z-index: 100; border: 1px solid #808080; visibility: hidden
}


// 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 中国票房容器 全球票房容器 基本样式
.TheLocalBoxOffice, .ChinaBoxOffice, .WorldWideBoxOffice {
    display: flex; position: relative; width: 100%; height: 30px
}
.TheLocalBoxOffice, .ChinaBoxOffice {
    margin-bottom: 1px
}

// 前台分区页 信息栏 票房内容 隐藏式侧边栏 票房容器 名称 基本样式
.BoxOfficeName {
    display: flex; position: relative; width: 40%; height: 100%; align-items: center;
    justify-content: center; background-color: rgba($color: #008080, $alpha: 1.0)
}

// 前台分区页 信息栏 票房内容 隐藏式侧边栏 票房容器 内容 基本样式
.BoxOfficeValue {
    display: flex; position: relative; width: 60%; height: 100%; align-items: center;
    background-color: rgba($color: #D3D3D3, $alpha: 1.0)
}


// 前台分区页 信息栏 评分内容 隐藏式侧边栏容器 基本样式
.GradeSidebar {
    display: flex; flex-direction: column; position: absolute; left: 100%; width: 280px;
    height: 210px; z-index: 100; border: 1px solid #808080; visibility: hidden
}


// 前台分区页 信息栏 评分内容 隐藏式侧边栏 IMDB评分容器 基本样式
.IMDB, .TOMATOMETER, .AUDIENCESCORE, .MetaScore, .UserScore, .DouBan, .Mtime {
    display: flex; position: relative; width: 100%; height: 30px
}
.IMDB, .TOMATOMETER, .AUDIENCESCORE, .MetaScore, .UserScore, .DouBan {
    margin-bottom: 1px
}

// 前台分区页 信息栏 评分内容 隐藏式侧边栏 评分容器 名称 基本样式
.GradeName {
    display: flex; position: relative; width: 50%; height: 100%; align-items: center;
    justify-content: center; background-color: rgba($color: #008080, $alpha: 1.0)
}

// 前台分区页 信息栏 评分内容 隐藏式侧边栏 评分容器 内容 基本样式
.GradeValue {
    display: flex; position: relative; width: 50%; height: 100%; align-items: center;
    background-color: rgba($color: #D3D3D3, $alpha: 1.0)
}

</style>