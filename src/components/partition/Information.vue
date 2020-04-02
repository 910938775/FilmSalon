<!-- 组件模板区域 -->
<template>
    <!-- 模板根节点 -->
    <div class="Information-root">

        <!-- 前台分区页 信息栏 名称容器 -->
        <div class="NameContainer">
            <!-- 前台分区页 信息栏 名称 -->
            <span class="Name">名称：</span>
            <!-- 前台分区页 信息栏 名称内容 -->
            <router-link tag="span" to="" class="NameContent">{{ this.FilmName }}</router-link>
        </div>


        <!-- 前台分区页 信息栏 国家地区容器 -->
        <div class="CountryAreaContainer">
            <!-- 前台分区页 信息栏 国家容器 -->
            <div class="CountryContainer">
                <!-- 前台分区页 信息栏 国家 -->
                <span class="Country">国家：</span>
                <!-- 前台分区页 信息栏 国家内容 -->
                <span class="CountryContent">
                    <a href="" v-for="(item, i) in this.FilmCountry" :key="'Country' + i">{{ item }}</a>
                </span>
            </div>

            <!-- 前台分区页 信息栏 地区容器 -->
            <div class="AreaContainer">
                <!-- 前台分区页 信息栏 地区 -->
                <span class="Area">地区：</span>
                <!-- 前台分区页 信息栏 地区内容 -->
                <span class="AreaContent">
                    <a href="" v-for="(item, i) in this.FilmArea" :key="'Area' + i">{{ item }}</a>
                </span>
            </div>
        </div>


        <!-- 前台分区页 信息栏 年代类型容器 -->
        <div class="TimeTypeContainer">
            <!-- 前台分区页 信息栏 年代容器 -->
            <div class="TimeContainer">
                <!-- 前台分区页 信息栏 年代 -->
                <span class="Time">年代：</span>
                <!-- 前台分区页 信息栏 年代内容 -->
                <span class="TimeContent">{{ this.FilmTime }}</span>
            </div>

            <!-- 前台分区页 信息栏 类型容器 -->
            <div class="TypeContainer">
                <!-- 前台分区页 信息栏 类型 -->
                <span class="Type">类型：</span>
                <!-- 前台分区页 信息栏 类型内容 -->
                <span class="TypeContent">
                    <a href="" v-for="(item, i) in this.FilmType" :key="'Type' + i">{{ item }}</a>
                </span>
            </div>
        </div>


         <!-- 前台分区页 信息栏 导演编剧容器 -->
        <div class="DirectorWritterContainer">
            <!-- 前台分区页 信息栏 导演容器 -->
            <div class="DirectorContainer">
                <!-- 前台分区页 信息栏 导演 -->
                <span class="Director">导演：</span>
                <!-- 前台分区页 信息栏 导演内容 -->
                <span class="DirectorContent">
                    <a href="" v-for="(item, i) in this.FilmDirector" :key="'Director' + i">{{ item }}</a>
                </span>
            </div>

            <!-- 前台分区页 信息栏 编剧容器 -->
            <div class="WritterContainer">
                <!-- 前台分区页 信息栏 编剧 -->
                <span class="Writter">编剧：</span>
                <!-- 前台分区页 信息栏 编剧内容 -->
                <span class="WritterContent">
                    <a href="" v-for="(item, i) in this.FilmWritter" :key="'Writter' + i">{{ item }}</a>
                </span>
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
                            <span class="BoxOfficeValue">{{ this.FilmBOV.TheLocalBoxOffice }}</span>
                        </div>

                        <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 中国票房容器 -->
                        <div class="ChinaBoxOffice">
                            <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 名称 -->
                            <span class="BoxOfficeName">中国票房</span>
                            <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 内容 -->
                            <span class="BoxOfficeValue">{{ this.FilmBOV.ChinaBoxOffice }}</span>
                        </div>

                        <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 全球票房容器 -->
                        <div class="WorldWideBoxOffice">
                            <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 名称 -->
                            <span class="BoxOfficeName">全球票房</span>
                            <!-- 前台分区页 信息栏 票房内容 隐藏式侧边栏 本地票房容器 内容 -->
                            <span class="BoxOfficeValue">{{ this.FilmBOV.WorldWideBoxOffice }}</span>
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
                            <span class="GradeValue">{{ this.FilmGrade.IMDB }}</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄专业人士新鲜度 -->
                        <div class="TOMATOMETER">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄专业人士新鲜度 名称 -->
                            <span class="GradeName">烂番茄专业人士新鲜度</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄专业人士新鲜度 容器 -->
                            <span class="GradeValue">{{ this.FilmGrade.TOMATOMETER }} &nbsp; - &nbsp; {{ this.FilmGrade.ReviewsCounted }}</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄观众新鲜度 -->
                        <div class="AUDIENCESCORE">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄观众新鲜度 名称 -->
                            <span class="GradeName">烂番茄观众新鲜度</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 烂番茄观众新鲜度 容器 -->
                            <span class="GradeValue">{{ this.FilmGrade.AUDIENCESCORE }} &nbsp; - &nbsp; {{ this.FilmGrade.UserRatings }}</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC专业人士评分 -->
                        <div class="MetaScore">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC专业人士评分 名称 -->
                            <span class="GradeName">MTC专业人士评分</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC专业人士评分 容器 -->
                            <span class="GradeValue">{{ this.FilmGrade.MetaScore }}</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC观众评分 -->
                        <div class="UserScore">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC观众评分 名称 -->
                            <span class="GradeName">MTC观众评分</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 MTC观众评分 容器 -->
                            <span class="GradeValue">{{ this.FilmGrade.UserScore }}</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 豆瓣 -->
                        <div class="DouBan">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 豆瓣 名称 -->
                            <span class="GradeName">豆瓣</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 豆瓣 容器 -->
                            <span class="GradeValue">{{ this.FilmGrade.DouBan }}</span>
                        </div>

                        <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 时光网 -->
                        <div class="Mtime">
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 时光网 名称 -->
                            <span class="GradeName">时光网</span>
                            <!-- 前台分区页 信息栏 评分内容 隐藏式侧边栏 时光网 容器 -->
                            <span class="GradeValue">{{ this.FilmGrade.Mtime }}</span>
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
            <span class="NotesContent">{{ this.FilmNotes }}</span>
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
            // 名称
            FilmName: '影视名称',
            // 国家
            FilmCountry: ['国家'],
            // 地区
            FilmArea: ['地区'],
            // 年代
            FilmTime: '年代',
            // 类型
            FilmType: ['类型'],
            // 导演
            FilmDirector: ['导演'],
            // 编剧
            FilmWritter: ['编剧'],
            // 票房
            FilmBOV: {
                // 本地票房
                TheLocalBoxOffice: 0,
                // 中国票房
                ChinaBoxOffice: 0,
                // 全球票房
                WorldWideBoxOffice: 0
            },
            // 评分
            FilmGrade: {
                // IMDB 评分
                IMDB: 0,
                // 烂番茄专业评分
                TOMATOMETER: '0%',
                // 烂番茄专业人数
                ReviewsCounted: 0,
                // 烂番茄观众评分
                AUDIENCESCORE: '0%',
                // 烂番茄观众人数
                UserRatings: 0,
                // MTC 专业评分
                MetaScore: '0%',
                // MTC 观众评分
                UserScore: 0,
                // 豆瓣评分
                DouBan: 0,
                // 时光网评分
                Mtime: 0
            },
            // 备注
            FilmNotes: '备注',
            // 获取影视相关信息方法 延时器
            FilmInfoTime: '',
            // 延时器 时间
            FilmTimes: 2000
        }
    },
    // 方法 接口
    methods: {
        // 影视相关信息方法
        FilmInfo(Info) {
            // 名称信息
            this.FilmName = Info.Name;
            // 国家信息
            this.FilmCountry = Info.Country;
            // 地区信息
            this.FilmArea = Info.Area;
            // 年代信息
            this.FilmTime = Info.Time;
            // 类型信息
            this.FilmType = Info.type;
            // 导演信息
            this.FilmDirector = Info.Director;
            // 编剧信息
            this.FilmWritter = Info.Writter;
            // 本地票房信息
            this.FilmBOV.TheLocalBoxOffice = Info.TheLocalBoxOffice;
            // 中国票房信息
            this.FilmBOV.ChinaBoxOffice = Info.ChinaBoxOffice;
            // 世界票房信息
            this.FilmBOV.WorldWideBoxOffice = Info.WorldWideBoxOffice;
            // IMDB 评分信息
            this.FilmGrade.IMDB = Info.IMDB;
            // 烂番茄专业评分信息
            this.FilmGrade.TOMATOMETER = Info.TOMATOMETER;
            // 烂番茄专业人数信息
            this.FilmGrade.ReviewsCounted = Info.ReviewsCounted;
            // 烂番茄观众评分信息
            this.FilmGrade.AUDIENCESCORE = Info.AUDIENCESCORE;
            // 烂番茄观众人数信息
            this.FilmGrade.UserRatings = Info.UserRatings;
            // MTC 专业评分信息
            this.FilmGrade.MetaScore = Info.MetaScore;
            // MTC 观众评分信息
            this.FilmGrade.UserScore = Info.UserScore;
            // 豆瓣评分信息
            this.FilmGrade.DouBan = Info.DouBan;
            // 时光网评分信息
            this.FilmGrade.Mtime = Info.Mtime;
            // 备注信息
            this.FilmNotes = Info.Notes
        },
        // 获取 影视相关信息方法
        GetFilmInfo(Info) {
            // 添加定时器
            this.FilmInfoTime = setTimeout(this.FilmInfo, this.FilmTimes, Info)
        },
        // 清除 影视相关信息方法
        ClearFilmInfo() {
            // 清除定时器
            clearTimeout(this.FilmInfoTime)
        }
    }
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

// 前台分区页 信息栏组件 国家内容 导演内容 a标签 基本样式
.CountryContent > a, .DirectorContent > a {
    display: inline-block; color: #000000; padding: 0px 3px 0px 0px
}
// 前台分区页 信息栏组件 国家内容 导演内容 a标签 鼠标交互样式
.CountryContent > a:hover, .DirectorContent > a:hover {
    color: rgba($color: #191970, $alpha: 1.0); text-decoration: none
}


// 前台分区页 信息栏组件 地区容器 类型容器 编剧容器 评分容器 基本样式
.AreaContainer, .TypeContainer, .WritterContainer, .GradeContainer {
    display: flex; position: relative; width: 50%; height: 100%
}

// 前台分区页 信息栏组件 地区 类型 编剧 评分 基本样式
.Area, .Type, .Writter, .Grade {
    display: flex; position: relative; width: 40%; height: 100%; align-items: center; font-weight: bold
}

// 前台分区页 信息栏组件 地区内容 类型内容 编剧内容 评分内容 基本样式
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

// 前台分区页 信息栏组件 地区内容 类型内容 编剧内容 评分内容 隐藏滚动条
.AreaContent::-webkit-scrollbar, .TypeContent::-webkit-scrollbar,
.WritterContent::-webkit-scrollbar, .GradeContent::-webkit-scrollbar {
    display: none
}

// 前台分区页 信息栏组件 地区内容 类型内容 编剧内容 评分内容 鼠标交互样式
.AreaContent:hover, .TypeContent:hover, .WritterContent:hover, .GradeContent:hover {
    color: rgba($color: #191970, $alpha: 1.0); font-weight: bolder
}

// 前台分区页 信息栏组件 地区内容 类型内容 编剧内容 a标签 基本样式
.AreaContent > a, .TypeContent > a, .WritterContent > a {
    display: inline-block; color: #000000; padding: 0px 3px 0px 0px
}
// 前台分区页 信息栏组件 地区内容 类型内容 编剧内容 a标签 鼠标交互样式
.AreaContent > a:hover, .TypeContent > a:hover, .WritterContent > a:hover {
    color: rgba($color: #191970, $alpha: 1.0); text-decoration: none
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