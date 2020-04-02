// 导入 express 后端框架
var express = require('express')

// 导入 node.js 路径操作 模块
var path = require('path');
// 导入 node.js 文件操作 模块
var fs = require('fs')

// 导入 vue 前端框架
var Vue = require('vue');
// 导入 vue 服务器渲染 模板 插件
var renderer = require('vue-server-renderer').createRenderer()

// 导入 MD5 数据加密中间件
var MD5 = require('blueimp-md5')

// 导入 express 文件上传下载 中间件
var multer = require('multer')

// 创建 express 路由容器
var router = express.Router()

// 导入 后端数据处理 方法
var Handle = require('../controllers/Handle.js');
// 数据库操作类
var dbHandle = require('../controllers/DataHandle.js')

// 导入 后台数据库 模型函数
// 用户数据模型
var dbUsers = require('../models/Users.js');
// 资料馆数据模型
var dbFilms = require('../models/Films.js');
// 学术室数据模型
var dbAcademics = require('../models/Academics.js');
// 视频课程数据模型
var dbVideos = require('../models/Videos.js');
// 图文课程数据模型
var dbImageText = require('../models/ImageText.js');
// 首页滚动栏数据模型
var dbScroll = require('../models/Scroll.js')


/**  路由表 区域  **/

/* 设置 公共路径 */

// 前后台路径根地址
var rootPath = 'http://localhost:3000';

// 前台 首页 相对路径
var Index = path.join(__dirname, '../dist/index.html/');
// 前台 首页 图片轮播区 绝对路径
var Scroll = '/public/images/Scroll/';
// 前台 首页 图片轮播区 相对路径
var ScrollPath = path.join(__dirname, '../public/images/Scroll/');
// 前台 首页 图片轮播区 图片 绝对路径
var ScrollRPath = rootPath + '/public/images/Scroll/';
// 前台 首页 用户贡献榜区域 绝对路径
var UsersContributionPath = '/index/contribution/';
// 前台 首页 学术热度值榜区域 绝对路径
var AcademicPath = '/index/academic/';
// 前台 首页 影视热度值榜区域 绝对路径
var FilmPath = '/index/film/';
// 前台 首页 影视课程热度值榜区域 绝对路径
var FilmCoursePath = '/index/filmCourse/';
// 前台 首页 影视课程 视频类图片 相对路径
var FilmVCoursePath = path.join(__dirname, '../public/images/Course/Videos/');
// 前台 首页 影视课程 视频类图片 绝对路径
var FilmVCourseRPath = rootPath + '/public/images/Course/Videos/';
// 前台 首页 影视课程 图文类图片 相对路径
var FilmITCoursePath = path.join(__dirname, '../public/images/Course/ImageText/');
// 前台 首页 影视课程 图文类图片 绝对路径
var FilmITCourseRPath = rootPath + '/public/images/Course/ImageText/';
// 前台 首页 其他课程热度值榜区域 绝对路径
var OtherCoursePath = '/index/otherCourse/';
// 前台 首页 其他课程 视频类图片 相对路径
var OtherVCoursePath = path.join(__dirname, '../public/images/Other/Videos/');
// 前台 首页 其他课程 视频类图片 绝对路径
var OtherVCourseRPath = rootPath + '/public/images/Other/Videos/';
// 前台 首页 其他课程 图文类图片 相对路径
var OtherITCoursePath = path.join(__dirname, '../public/images/Other/ImageText/');
// 前台 首页 其他课程 图文类图片 绝对路径
var OtherITCourseRPath = rootPath + '/public/images/Other/ImageText/';

// 前台 分区页 用户登录 绝对路径
var UserLogin = '/login/';
// 前台 分区页 用户头像 相对路径
var UserRHeadPortrait = path.join(__dirname, '../public/images/Person/');
// 前台 分区页 用户头像 绝对路径
var UserHeadPortrait = rootPath + '/public/images/Person/';
// 前台 分区页 用户身份验证 绝对路径
var UserVerification = '/verify/';
// 前台 分区页 资料馆 内容缩略区组件 初始化 绝对路径
var InitializeContentPath = '/FilmsLibrary/content/';
// 前台 分区页 资料馆 内容缩略区组件 分页 绝对路径
var PagingContentPath = '/FilmsLibrary/content/paging/';
// 前台 分区页 资料馆 内容缩略区组件 封面 相对路径
var FilmsLibraryCoverRPath = path.join(__dirname, '../public/images/FilmsLibrary/cover/');
// 前台 分区页 资料馆 内容缩略区组件 封面 绝对路径
var FilmsLibraryCoverPath = rootPath + '/public/images/FilmsLibrary/cover/';
// 前台 分区页 资料馆 筛选栏组件 资源检索 绝对路径
var RFilterPath = '/FilmsLibrary/filter/';

// 后台 首页 绝对路径
var ManagePath = '/management/';
// 后台 首页 表单 绝对路径
var ManageIndexForm = '/management/scroll/';
// 后台 首页 表单 文件储存路径
var MIndexFormFile = path.join(__dirname, '../public/images/Scroll/');
// 后台 首页 表单 删除文件数据
var MIndexFormRemove = '/management/scroll/remove/'


/* 前台 首页 */
router.get('/', function(request, response) {
    // 读取 webpack 打包好的 dist/index.html 文件
    // 服务器渲染 响应给 前端首页
    Handle.ReadFile(Index)

    .then(
        // 数据读取成功
        function(data) {
            // 发送 前台首页 到 前端
            response.send(data)
        })

    .catch(
        // 捕获错误
        function(error) {
            console.log('前台首页文件读取失败！');
            throw error
        })
})


/* 前台首页 图片轮播区 获取图片 */
router.get(Scroll, function(request, response) {
    // 设置 接收变量 为 object 对象
    let readdir = { content: [] };

    // 获取 该路径下的 目录名数组
    Handle.FindDir(ScrollPath)

    .then(
        // 图片获取成功
        function(data) {
            // 封装 图片完整地址
            data.forEach(item => {
                readdir.content.push(
                    ScrollRPath + item
                )
            });
            // 设置 前端 成功状态码
            readdir.status = 0;
            // 返回给 首页图片轮播区 目录名数组
            response.send(readdir)
        })

    .catch(
        // 捕获错误
        function(error) {
            // 设置 前端 失败状态码
            readdir.status = 1;
            // 设置 错误信息
            readdir.message = '滚动图片获取失败，请刷新网页！';
            // 返回给 首页图片轮播区 数据
            response.send(readdir)
        })
})


/* 前台首页 用户贡献榜区域 获取数据 */
router.get(UsersContributionPath, async function(request, response) {
    // 声明 要查询数据 对应的数据库
    let dbmodel = dbUsers;
    // 声明 查询的数据
    let db = {};
    // 声明 读取的数据
    let dbData = [];
    // 声明 排序的数据
    let dbOption = {};
    // 数据库实例化对象
    let dbObject = '';
    // 声明 要接收数据的 变量
    let Users = { content: [] };
    // 声明 数据接收中间变量
    let UserData = [];

    try {
        // 封装 要查询的 数据
        db = {
            'Ranking': {
                $lte: 10,
                $gte: 1
            }
        };
        // 封装 要读取的 数据
        dbData = ['NickName', 'ContributionValue', 'Ranking'];
        // 封装 排序的 数据
        dbOption = {
            sort: 'Ranking'
        };
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        UserData = await dbObject.Find(db, dbData, dbOption);
        // 封装响应数据
        Users.content = UserData;
        // 设置 数据获取成功 状态码
        Users.status = 0;
        // 返回数据 给 前端
        response.send(Users)
    } catch (error) {
        // 设置 数据获取失败 状态码
        Users.status = 1;
        // 设置 错误信息
        Users.message = '用户贡献值数据获取失败，请刷新网页！';
        // 返回数据 给 前端
        response.send(Users)
    }
})


/* 前台首页 学术热度值榜区域 获取数据 */
router.get(AcademicPath, async function(request, response) {
    // 声明 要查询数据 对应的数据库
    let dbmodel = dbAcademics;
    // 声明 查询的数据
    let db = {};
    // 声明 读取的数据
    let dbData = [];
    // 声明 排序的数据
    let dbOption = {};
    // 数据库实例化对象
    let dbObject = '';
    // 声明 要接收数据的 变量
    let academics = { content: [] };
    // 声明 数据接收 中间变量
    let academicFun = [];

    try {
        // 封装 要查询的 数据
        db = {
            'Ranking': {
                $lte: 10,
                $gte: 1
            }
        };
        // 封装 要读取的 数据
        dbData = ['ChineseName', 'EnglishName', 'SearchValue', 'TagValue', 'ClickValue', 'Ranking'];
        // 封装 排序的 数据
        dbOption = {
            sort: 'Ranking'
        };
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        academicFun = await dbObject.Find(db, dbData, dbOption);
        // 封装响应数据
        academicFun.forEach((item, index) => {
            // 初始化对象
            academics.content[index] = {};
            // 获取 学术 名称
            academics.content[index]
                ['Name'] = item.ChineseName + '(' + item.EnglishName + ')';
            // 获取 学术 热度值
            academics.content[index]
                ['AcademicValue'] = item.SearchValue + item.TagValue + item.ClickValue;
            // 设置 对应的 排名
            academics.content[index]
                ['Ranking'] = item.Ranking
        });
        // 设置 数据获取成功 状态码
        academics.status = 0;
        // 返回数据 给 前端
        response.send(academics)
    } catch (error) {
        // 设置 数据获取失败 状态码
        academics.status = 1;
        // 设置 错误信息
        academics.message = '学术热度值数据获取失败，请刷新网页！';
        // 返回数据 给 前端
        response.send(academics)
    }
})


/* 前台首页 影视热度值榜区域 获取数据 */
router.get(FilmPath, async function(request, response) {
    // 声明 要查询数据 对应的数据库
    let dbmodel = dbFilms;
    // 声明 查询的数据
    let db = {};
    // 声明 读取的数据
    let dbData = [];
    // 声明 排序的数据
    let dbOption = {};
    // 数据库实例化对象
    let dbObject = '';
    // 声明 要接收数据的 变量
    let films = { content: [] };
    // 声明 数据接收 中间变量
    let filmFun = [];

    try {
        // 封装 要查询的 数据
        db = {
            'Ranking': {
                $lte: 10,
                $gte: 1
            }
        };
        // 封装 要读取的 数据
        dbData = ['ChineseName', 'EnglishName', 'SearchValue', 'TagValue', 'WatchValue', 'Ranking'];
        // 封装 排序的 数据
        dbOption = {
            sort: 'Ranking'
        };
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        filmFun = await dbObject.Find(db, dbData, dbOption);
        // 封装响应数据
        filmFun.forEach((item, index) => {
            // 初始化对象
            films.content[index] = {};
            // 获取 学术 名称
            films.content[index]
                ['Name'] = item.ChineseName + '(' + item.EnglishName + ')';
            // 获取 学术 热度值
            films.content[index]
                ['FilmsValue'] = item.SearchValue + item.TagValue + item.WatchValue;
            // 设置 对应的 排名
            films.content[index]
                ['Ranking'] = item.Ranking
        });
        // 设置 数据获取成功 状态码
        films.status = 0;
        // 返回数据 给 前端
        response.send(films)
    } catch (error) {
        // 设置 数据获取失败 状态码
        films.status = 1;
        // 设置 错误信息
        films.message = '影视热度值数据获取失败，请刷新网页！';
        // 返回数据 给 前端
        response.send(films)
    }
})


/* 前台首页 影视课程热度值榜区域 获取数据 */
router.get(FilmCoursePath, async function(request, response) {
    // 声明存放 数据 的变量
    let filmCourse = { content: { video: [], imageText: [] } };
    // 声明 对应的 数据模型
    let dbVmodel = dbVideos;
    let dbITmodel = dbImageText;
    // 声明 查询的数据
    let db = {};
    // 声明 读取的数据
    let dbData = [];
    // 声明 排序的数据
    let dbOption = {};
    // 数据库实例化对象
    let dbObject = '';
    // 声明 数据接收 中间变量
    let CourseFun = [];
    let CourseData = [];

    try {
        // 1. 获取 视频课程 数据
        // 封装 要查询的 数据
        db = {
            'Ranking': {
                $lte: 10,
                $gte: 1
            },
            'Partition': 'Course'
        };
        // 封装 要读取的 数据
        dbData = ['Name', 'CSearchValue', 'CTagValue', 'ClearningValue', 'Ranking', 'Marker'];
        // 封装 排序的 数据
        dbOption = {
            sort: 'Ranking'
        };
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbVmodel);
        // 查询数据
        CourseFun = await dbObject.Find(db, dbData, dbOption);

        // 2. 获取 视频课程 图片
        CourseData = await Handle.FindDir(FilmVCoursePath);
        // 封装 视频课程 数据
        CourseFun.forEach((item, index) => {
            // 初始化对象
            filmCourse.content.video[index] = {};
            // 获取 视频课程 名称
            filmCourse.content.video[index]
                ['Name'] = item.Name;
            // 获取 视频课程 热度值
            filmCourse.content.video[index]
                ['CourseValue'] = item.CSearchValue + item.CTagValue + item.ClearningValue;
            // 设置 视频课程 排行榜
            filmCourse.content.video[index]
                ['Ranking'] = item.Ranking;
            // 设置 默认图片地址：找不到图片
            filmCourse.content.video[index]['src'] = '';
            // 拼接 完整 视频图片路径 绝对地址
            CourseData.forEach(result => {
                (item.Name === result.split('.')[0]) && (
                    filmCourse.content.video[index]
                    ['src'] = FilmVCourseRPath + result
                )
            });
            // 拼接 完整 视频课程 标签
            filmCourse.content.video[index]
                ['VideoTag'] = item.Marker
        });

        // 3. 获取 图文课程 数据
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbITmodel);
        // 查询数据
        CourseFun = await dbObject.Find(db, dbData, dbOption);

        // 4. 获取 图文课程 图片
        CourseData = await Handle.FindDir(FilmITCoursePath);
        // 封装 图文课程 数据
        CourseFun.forEach((item, index) => {
            // 初始化对象
            filmCourse.content.imageText[index] = {};
            // 获取 图文课程 名称
            filmCourse.content.imageText[index]
                ['Name'] = item.Name;
            // 获取 图文课程 热度值
            filmCourse.content.imageText[index]
                ['CourseValue'] = item.OSearchValue + item.OTagValue + item.OlearningValue;
            // 设置 图文课程 排行榜
            filmCourse.content.imageText[index]
                ['Ranking'] = item.Ranking;
            // 设置 默认图片地址：找不到图片
            filmCourse.content.imageText[index]['src'] = '';
            // 拼接 完整 图文图片路径 绝对地址
            CourseData.forEach(result => {
                (item.Name === result.split('.')[0]) && (
                    filmCourse.content.imageText[index]
                    ['src'] = FilmITCourseRPath + result
                )
            });
            // 拼接 完整 图文课程 标签
            filmCourse.content.imageText[index]
                ['ImageTextTag'] = item.Marker
        });

        // 5. 数据响应
        // 设置 影视课程 数据 封装成功 状态码
        filmCourse.status = 0;
        response.send(filmCourse)
    } catch (error) {
        // 设置 影视课程 数据 获取失败 状态码
        filmCourse.status = 1;
        // 设置 错误信息
        films.message = '影视课程热度值数据获取失败，请刷新网页！';
        response.send(filmCourse)
    }
})


/* 前台首页 其他课程热度值榜区域 获取数据 */
router.get(OtherCoursePath, async function(request, response) {
    // 声明存放 数据 的变量
    let otherCourse = { content: { video: [], imageText: [] } };
    // 声明 对应的 数据模型
    let dbVmodel = dbVideos;
    let dbITmodel = dbImageText;
    // 声明 查询的数据
    let db = {};
    // 声明 读取的数据
    let dbData = [];
    // 声明 排序的数据
    let dbOption = {};
    // 数据库实例化对象
    let dbObject = '';
    // 声明 数据接收 中间变量
    let ImagesFun = [];
    let ImagesData = [];

    try {
        // 1. 获取 视频课程 数据
        // 封装 要查询的 数据
        db = {
            'Ranking': {
                $lte: 10,
                $gte: 1
            },
            'Partition': 'Other'
        };
        // 封装 要读取的 数据
        dbData = ['Name', 'OSearchValue', 'OTagValue', 'OlearningValue', 'Ranking', 'Marker'];
        // 封装 排序的 数据
        dbOption = {
            sort: 'Ranking'
        };
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbVmodel);
        // 查询数据
        ImagesFun = await dbObject.Find(db, dbData, dbOption);

        // 2. 获取 视频课程 图片
        ImagesData = await Handle.FindDir(OtherVCoursePath);
        // 封装 视频课程 数据
        ImagesFun.forEach((item, index) => {
            // 初始化对象
            otherCourse.content.video[index] = {};
            // 获取 视频课程 名称
            otherCourse.content.video[index]
                ['Name'] = item.Name;
            // 获取 视频课程 热度值
            otherCourse.content.video[index]
                ['CourseValue'] = item.OSearchValue + item.OTagValue + item.OlearningValue;
            // 设置 视频课程 排行榜
            otherCourse.content.video[index]
                ['Ranking'] = item.Ranking;
            // 设置 默认图片地址：找不到图片
            otherCourse.content.video[index]['src'] = '';
            // 拼接 完整 视频图片路径 绝对地址
            ImagesData.forEach(result => {
                (item.Name === result.split('.')[0]) && (
                    otherCourse.content.video[index]
                    ['src'] = OtherVCourseRPath + result
                )
            });
            // 拼接 完整 视频课程 标签
            otherCourse.content.video[index]
                ['VideoTag'] = item.Marker
        });

        // 3. 获取 图文课程 数据
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbITmodel);
        // 查询数据
        ImagesFun = await dbObject.Find(db, dbData, dbOption);

        // 4. 获取 图文课程 图片
        ImagesData = await Handle.FindDir(OtherITCoursePath);
        // 封装 图文课程 数据
        ImagesFun.forEach((item, index) => {
            // 初始化对象
            otherCourse.content.imageText[index] = {};
            // 获取 图文课程 名称
            otherCourse.content.imageText[index]
                ['Name'] = item.Name;
            // 获取 图文课程 热度值
            otherCourse.content.imageText[index]
                ['CourseValue'] = item.OSearchValue + item.OTagValue + item.OlearningValue;
            // 设置 图文课程 排行榜
            otherCourse.content.imageText[index]
                ['Ranking'] = item.Ranking;
            // 设置 默认图片地址：找不到图片
            otherCourse.content.imageText[index]['src'] = '';
            // 拼接 完整 图文图片路径 绝对地址
            ImagesData.forEach(result => {
                (item.Name === result.split('.')[0]) && (
                    otherCourse.content.imageText[index]
                    ['src'] = OtherITCourseRPath + result
                )
            });
            // 拼接 完整 图文课程 标签
            otherCourse.content.imageText[index]
                ['ImageTextTag'] = item.Marker
        });

        // 5. 数据响应
        // 设置 影视课程 数据 封装成功 状态码
        otherCourse.status = 0;
        response.send(otherCourse)
    } catch (error) {
        // 设置 影视课程 数据 获取失败 状态码
        otherCourse.status = 1;
        // 设置 错误信息
        otherCourse.message = '其他课程热度值数据获取失败，请刷新网页！';
        response.send(otherCourse)
    }
})


/* 前台分区页 用户登录 */
router.post(UserLogin, async function(request, response) {
    // 获取 前台分区页 用户登录 数据
    let Logindata = request.body;
    // 声明 查询的数据
    let db = {};
    // 声明 读取的数据
    let dbData = [];
    // 数据库实例化对象
    let dbObject = '';
    // 设置查询对应的数据模型
    let dbmodel = dbUsers;
    // 声明 响应数据变量
    let Userdata = { content: {} };
    // 声明 数据接收 中间变量
    let UserFun = [];
    let UserImage = [];

    try {
        // 封装 要查询的 数据
        db = {
            'Account': Logindata.Account
        };
        // 封装 要读取的 数据
        dbData = [
            'NickName', 'Account', 'Password', 'Gender', 'Age', 'NativePlace',
            'ContributionValue', 'MonthContributionValue', 'DateContributionValue'
        ];
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        UserFun = await dbObject.Find(db, dbData);
        // 1. 验证通过：用户存在 密码正确
        if (
            UserFun.length &&
            (Logindata.Password === UserFun[0].Password)
        ) {
            // 验证通过 设置状态码
            Userdata.status = 0;
            // 保存 昵称
            Userdata.content.NickName = UserFun[0].NickName;
            // 保存 账户名
            Userdata.content.Account = UserFun[0].Account;
            // 保存 性别
            Userdata.content.Gender = UserFun[0].Gender;
            // 保存 年龄
            Userdata.content.Age = UserFun[0].Age;
            // 保存 国家地区
            Userdata.content.NativePlace = UserFun[0].NativePlace;
            // 保存 总贡献榜
            Userdata.content.ContributionValue = UserFun[0].ContributionValue;
            // 保存 月贡献榜
            Userdata.content.MonthContributionValue = UserFun[0].MonthContributionValue;
            // 保存 日贡献榜
            Userdata.content.DateContributionValue = UserFun[0].DateContributionValue;

            // 查询 对应的头像地址
            UserImage = await Handle.FindDir(UserRHeadPortrait);
            // 设置 默认图片地址：找不到图片
            Userdata.content.MyHeadPortrait = '';
            // 保存 头像地址
            UserImage.forEach(item => {
                (Userdata.content.Account === item.split('.')[0]) && (
                    Userdata.content.MyHeadPortrait = UserHeadPortrait + item
                )
            });

            // 查询客户端 是否点击 保存登录状态
            (Logindata.Time === 'on') && (
                // 保存登录状态到 session 中：7天免登陆
                request.session.Account = Userdata.content.Account
            )
        };

        // 2. 账户名不存在
        !UserFun.length && (
            // 设置 状态码
            Userdata.status = -1,
            // 设置 提示信息
            Userdata.message = '账户名不存在，请重新输入！'
        );

        // 3. 密码错误
        UserFun.length && (Logindata.Password !== UserFun[0].Password) && (
            // 设置 状态码
            Userdata.status = 2,
            // 设置 提示信息
            Userdata.message = '密码错误，请重新尝试！'
        );

        // 返回数据
        response.send(Userdata)
    } catch (error) {
        // 设置 数据错误 获取失败 状态码
        Userdata.status = 1;
        // 设置 错误信息
        Userdata.message = '用户登录信息获取失败，请刷新网页！';
        response.send(Userdata)
    }
})


/* 前台分区页 用户身份验证 */
router.get(UserVerification, async function(request, response) {
    // 声明 查询的数据
    let db = {};
    // 声明 读取的数据
    let dbData = [];
    // 数据库实例化对象
    let dbObject = '';
    // 设置查询对应的数据模型
    let dbmodel = dbUsers;
    // 声明 响应数据变量
    let verifyData = { content: {} };
    // 声明 数据接收 中间变量
    let UserFun = [];
    let UserImage = [];

    try {
        // 1. 身份信息失效
        if (!request.session.Account) {
            // 设置 失败状态码
            verifyData.status = 2;
            response.send(verifyData);
            return
        };

        // 2. 身份信息有效
        // 封装 要查询的 数据
        db = {
            'Account': request.session.Account
        };
        // 封装 要读取的 数据
        dbData = [
            'NickName', 'Account', 'Password', 'Gender', 'Age', 'NativePlace',
            'ContributionValue', 'MonthContributionValue', 'DateContributionValue'
        ];
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        UserFun = await dbObject.Find(db, dbData);
        // 设置成功状态码
        verifyData.status = 0;
        // 保存 昵称
        verifyData.content.NickName = UserFun[0].NickName;
        // 保存 账户名
        verifyData.content.Account = UserFun[0].Account;
        // 保存 性别
        verifyData.content.Gender = UserFun[0].Gender;
        // 保存 年龄
        verifyData.content.Age = UserFun[0].Age;
        // 保存 国家地区
        verifyData.content.NativePlace = UserFun[0].NativePlace;
        // 保存 总贡献榜
        verifyData.content.ContributionValue = UserFun[0].ContributionValue;
        // 保存 月贡献榜
        verifyData.content.MonthContributionValue = UserFun[0].MonthContributionValue;
        // 保存 日贡献榜
        verifyData.content.DateContributionValue = UserFun[0].DateContributionValue;

        // 查询 对应的头像地址
        UserImage = await Handle.FindDir(UserRHeadPortrait);
        // 设置 默认图片地址：找不到图片
        verifyData.content.MyHeadPortrait = '';
        // 保存 头像地址
        UserImage.forEach(item => {
            (verifyData.content.Account === item.split('.')[0]) && (
                verifyData.content.MyHeadPortrait = UserHeadPortrait + item
            )
        });

        // 返回数据
        response.send(verifyData)
    } catch (error) {
        // 设置 数据错误 获取失败 状态码
        verifyData.status = 1;
        // 设置 错误信息
        verifyData.message = '用户信息获取失败，请刷新网页！';
        response.send(verifyData)
    }
})


/* 前台分区页 资料馆 内容缩略区组件 初始化 */
router.post(InitializeContentPath, async function(request, response) {
    // 获取 内容缩略区组件 每页资源数量
    let count = request.body.CurrentCount;
    // 声明 查询的数据
    let db = {};
    // 声明 查询的数据模型
    let dbmodel = dbFilms;
    // 声明 读取的数据
    let dbData = [];
    // 声明 排序的数据
    let dbOption = {};
    // 数据库实例化对象
    let dbObject = '';
    // 声明 响应数据变量
    let InitializeData = { content: { totalCount: '', contents: [] } };
    // 声明 数据接收中间变量
    let FilmData = [];
    let FilmImage = [];

    try {
        // 封装 要读取的 数据
        dbData = [
            'Symbol', 'Director', 'Time', 'ChineseName', 'EnglishName',
            'Country', 'Area', 'type', 'Writter', 'TheLocalBoxOffice',
            'ChinaBoxOffice', 'WorldWideBoxOffice', 'IMDB', 'TOMATOMETER',
            'ReviewsCounted', 'AUDIENCESCORE', 'UserRatings', 'MetaScore',
            'UserScore', 'DouBan', 'Mtime', 'Notes'
        ];
        // 封装 要排序的 数据
        dbOption = {
            limit: count,
            skip: 0
        };
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        FilmData = await dbObject.Find(db, dbData, dbOption);
        // 查询 资料馆资源总量
        InitializeData.content.totalCount = await dbObject.Count(db);
        // 查询 资料馆封面图片
        FilmImage = await Handle.FindDir(FilmsLibraryCoverRPath);
        // 数据封装
        FilmData.forEach((item, index) => {
            // 初始化对象
            InitializeData.content.contents[index] = {};
            // 封装 内容缩略区组件 特殊标志
            InitializeData.content.contents[index]
                ['Symbol'] = item.Symbol;
            // 封装 内容缩略区组件 导演信息
            InitializeData.content.contents[index]
                ['Director'] = item.Director;
            // 封装 内容缩略区组件 年代信息
            InitializeData.content.contents[index]
                ['Time'] = item.Time;
            // 封装 内容缩略区组件 名称信息
            InitializeData.content.contents[index]
                ['Name'] = item.ChineseName + '[' + item.EnglishName + ']';
            // 封装 内容缩略区组件 国家信息
            InitializeData.content.contents[index]
                ['Country'] = item.Country;
            // 封装 内容缩略区组件 地区信息
            InitializeData.content.contents[index]
                ['Area'] = item.Area;
            // 封装 内容缩略区组件 类型信息
            InitializeData.content.contents[index]
                ['type'] = item.type;
            // 封装 内容缩略区组件 编剧信息
            InitializeData.content.contents[index]
                ['Writter'] = item.Writter;
            // 封装 内容缩略区组件 本地票房信息
            InitializeData.content.contents[index]
                ['TheLocalBoxOffice'] = item.TheLocalBoxOffice;
            // 封装 内容缩略区组件 中国票房信息
            InitializeData.content.contents[index]
                ['ChinaBoxOffice'] = item.ChinaBoxOffice;
            // 封装 内容缩略区组件 世界票房信息
            InitializeData.content.contents[index]
                ['WorldWideBoxOffice'] = item.WorldWideBoxOffice;
            // 封装 内容缩略区组件 IMDB 评分信息
            InitializeData.content.contents[index]
                ['IMDB'] = item.IMDB;
            // 封装 内容缩略区组件 烂番茄专业评分信息
            InitializeData.content.contents[index]
                ['TOMATOMETER'] = item.TOMATOMETER;
            // 封装 内容缩略区组件 烂番茄专业人数信息
            InitializeData.content.contents[index]
                ['ReviewsCounted'] = item.ReviewsCounted;
            // 封装 内容缩略区组件 烂番茄观众评分信息
            InitializeData.content.contents[index]
                ['AUDIENCESCORE'] = item.AUDIENCESCORE;
            // 封装 内容缩略区组件 烂番茄观众人数信息
            InitializeData.content.contents[index]
                ['UserRatings'] = item.UserRatings;
            // 封装 内容缩略区组件 MTC 专业评分信息
            InitializeData.content.contents[index]
                ['MetaScore'] = item.MetaScore;
            // 封装 内容缩略区组件 MTC 观众评分信息
            InitializeData.content.contents[index]
                ['UserScore'] = item.UserScore;
            // 封装 内容缩略区组件 豆瓣评分信息
            InitializeData.content.contents[index]
                ['DouBan'] = item.DouBan;
            // 封装 内容缩略区组件 时光网评分信息
            InitializeData.content.contents[index]
                ['Mtime'] = item.Mtime;
            // 封装 内容缩略区组件 备注信息
            InitializeData.content.contents[index]
                ['Notes'] = item.Notes;
            // 设置 默认 封面地址
            InitializeData.content.contents[index]
                ['Src'] = '';
            // 封装 内容缩略区组件 封面地址
            FilmImage.forEach(result => {
                // 查询 中文名称
                (item.ChineseName === result.split('.')[0]) && (
                    InitializeData.content.contents[index]
                    ['Src'] = FilmsLibraryCoverPath + result
                );
                // 查询 英文名称
                (item.EnglishName === result.split('.')[0]) && (
                    InitializeData.content.contents[index]
                    ['Src'] = FilmsLibraryCoverPath + result
                )
            })
        });

        // 设置 数据获取成功状态码
        InitializeData.status = 0;
        response.send(InitializeData)
    } catch (error) {
        // 设置 数据错误 获取失败 状态码
        InitializeData.status = 1;
        // 设置 错误信息
        InitializeData.message = '资源内容获取失败，请刷新网页！';
        response.send(InitializeData)
    }
})


/* 前台分区页 资料馆 筛选栏组件 资源检索 */
router.post(RFilterPath, async function(request, response) {
    // 获取 筛选栏组件 检索关键字
    let keyWord = request.body;
    // 声明 查询的数据模型
    let dbmodel = dbFilms;
    // 声明 查询的数据
    let db = {};
    // 声明 读取的数据
    let dbData = [];
    // 声明 排序的数据
    let dbOption = {};
    // 数据库实例化对象
    let dbObject = '';
    // 声明 响应数据变量
    let FilterData = { content: { TotalContent: '', CurrentContent: [] } };
    // 声明 数据接收中间变量
    let FilData = [];
    let FilImage = [];
    let time = '';
    // 设置 每页资源数
    let count = keyWord.count;

    try {
        // 解析 要查询的 数据
        // 国家地区
        keyWord.CountryArea && (
            db.$or = [
                { Country: { $all: [keyWord.CountryArea] } },
                { Area: { $all: [keyWord.CountryArea] } }
            ]
        );
        // 年代
        switch (keyWord.Time) {
            case '2013-2011':
                db.Time = {
                    $lte: new Date(keyWord.Time.split('-')[0]).toJSON(),
                    $gte: new Date(keyWord.Time.split('-')[1]).toJSON()
                };
                break;
            case '2010-2006':
                db.Time = {
                    $lte: new Date(keyWord.Time.split('-')[0]).toJSON(),
                    $gte: new Date(keyWord.Time.split('-')[1]).toJSON()
                };
                break;
            case '2005-2000':
                db.Time = {
                    $lte: new Date(keyWord.Time.split('-')[0]).toJSON(),
                    $gte: new Date(keyWord.Time.split('-')[1]).toJSON()
                };
                break;
            case '90年代':
                db.Time = {
                    $lte: new Date('2000').toJSON(),
                    $gte: new Date('1990').toJSON()
                };
                break;
            case '80年代':
                db.Time = {
                    $lte: new Date('1990').toJSON(),
                    $gte: new Date('1980').toJSON()
                };
                break;
            case '其他':
                db.Time = {
                    $not: { $gte: new Date('1980').toJSON() }
                };
                break;
            case '':
                break;
            default:
                time = (Number(keyWord.Time) + 1).toString();
                db.Time = {
                    $lte: new Date(time).toJSON(),
                    $gte: new Date(keyWord.Time).toJSON()
                };
                break
        };
        // 类型
        keyWord.Type && (
            db.type = {
                $all: [keyWord.type]
            }
        );
        // 封装 要读取的 数据
        dbData = [
            'Symbol', 'Director', 'Time', 'ChineseName', 'EnglishName',
            'Country', 'Area', 'type', 'Writter', 'TheLocalBoxOffice',
            'ChinaBoxOffice', 'WorldWideBoxOffice', 'IMDB', 'TOMATOMETER',
            'ReviewsCounted', 'AUDIENCESCORE', 'UserRatings', 'MetaScore',
            'UserScore', 'DouBan', 'Mtime', 'Notes'
        ];
        // 封装 要排序的 数据
        switch (keyWord.Other) {
            case '热度值':
                dbOption = {
                    limit: count,
                    skip: 0,
                    sort: '-Ranking'
                };
                break;
            default:
                dbOption = {
                    limit: count,
                    skip: 0
                };
                break
        };
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        FilData = await dbObject.Find(db, dbData, dbOption);
        // 查询 资料馆资源总量
        FilterData.content.TotalContent = await dbObject.Count(db);
        // 查询 资料馆封面图片
        FilImage = await Handle.FindDir(FilmsLibraryCoverRPath);
        // 数据封装
        FilData.forEach((item, index) => {
            // 初始化对象
            FilterData.content.CurrentContent[index] = {};
            // 封装 内容缩略区组件 特殊标志
            FilterData.content.CurrentContent[index]
                ['Symbol'] = item.Symbol;
            // 封装 内容缩略区组件 导演信息
            FilterData.content.CurrentContent[index]
                ['Director'] = item.Director;
            // 封装 内容缩略区组件 年代信息
            FilterData.content.CurrentContent[index]
                ['Time'] = item.Time;
            // 封装 内容缩略区组件 名称信息
            FilterData.content.CurrentContent[index]
                ['Name'] = item.ChineseName + '[' + item.EnglishName + ']';
            // 封装 内容缩略区组件 国家信息
            FilterData.content.contents[index]
                ['Country'] = item.Country;
            // 封装 内容缩略区组件 地区信息
            FilterData.content.contents[index]
                ['Area'] = item.Area;
            // 封装 内容缩略区组件 类型信息
            FilterData.content.contents[index]
                ['type'] = item.type;
            // 封装 内容缩略区组件 编剧信息
            FilterData.content.contents[index]
                ['Writter'] = item.Writter;
            // 封装 内容缩略区组件 本地票房信息
            FilterData.content.contents[index]
                ['TheLocalBoxOffice'] = item.TheLocalBoxOffice;
            // 封装 内容缩略区组件 中国票房信息
            FilterData.content.contents[index]
                ['ChinaBoxOffice'] = item.ChinaBoxOffice;
            // 封装 内容缩略区组件 世界票房信息
            FilterData.content.contents[index]
                ['WorldWideBoxOffice'] = item.WorldWideBoxOffice;
            // 封装 内容缩略区组件 IMDB 评分信息
            FilterData.content.contents[index]
                ['IMDB'] = item.IMDB;
            // 封装 内容缩略区组件 烂番茄专业评分信息
            FilterData.content.contents[index]
                ['TOMATOMETER'] = item.TOMATOMETER;
            // 封装 内容缩略区组件 烂番茄专业人数信息
            FilterData.content.contents[index]
                ['ReviewsCounted'] = item.ReviewsCounted;
            // 封装 内容缩略区组件 烂番茄观众评分信息
            FilterData.content.contents[index]
                ['AUDIENCESCORE'] = item.AUDIENCESCORE;
            // 封装 内容缩略区组件 烂番茄观众人数信息
            FilterData.content.contents[index]
                ['UserRatings'] = item.UserRatings;
            // 封装 内容缩略区组件 MTC 专业评分信息
            FilterData.content.contents[index]
                ['MetaScore'] = item.MetaScore;
            // 封装 内容缩略区组件 MTC 观众评分信息
            FilterData.content.contents[index]
                ['UserScore'] = item.UserScore;
            // 封装 内容缩略区组件 豆瓣评分信息
            FilterData.content.contents[index]
                ['DouBan'] = item.DouBan;
            // 封装 内容缩略区组件 时光网评分信息
            FilterData.content.contents[index]
                ['Mtime'] = item.Mtime;
            // 封装 内容缩略区组件 备注信息
            FilterData.content.contents[index]
                ['Notes'] = item.Notes;
            // 设置 默认 封面地址
            FilterData.content.CurrentContent[index]
                ['Src'] = '';
            // 封装 内容缩略区组件 封面地址
            FilImage.forEach(result => {
                // 查询 中文名称
                (item.ChineseName === result.split('.')[0]) && (
                    FilterData.content.CurrentContent[index]
                    ['Src'] = FilmsLibraryCoverPath + result
                );
                // 查询 英文名称
                (item.EnglishName === result.split('.')[0]) && (
                    FilterData.content.CurrentContent[index]
                    ['Src'] = FilmsLibraryCoverPath + result
                )
            })
        });

        // 设置 数据获取成功状态码
        FilterData.status = 0;
        response.send(FilterData)
    } catch (error) {
        // 设置 数据错误 获取失败 状态码
        FilterData.status = 1;
        // 设置 错误信息
        FilterData.message = '资源内容检索失败，请刷新网页！';
        response.send(FilterData)
    }
})


/* 前台分区页 资料馆 内容缩略区组件 分页获取资源 */
router.post(PagingContentPath, async function(request, response) {
    // 获取 内容缩略区组件 每页资源数量
    let CurrentCount = request.body.CurrentCount;
    // 获取 当前分页的页码数
    let page = request.body.Count;
    // 获取 筛选关键字
    let keyWord = request.body;
    // 声明 查询的数据
    let db = {};
    // 声明 查询的数据模型
    let dbmodel = dbFilms;
    // 声明 读取的数据
    let dbData = [];
    // 声明 排序的数据
    let dbOption = {};
    // 数据库实例化对象
    let dbObject = '';
    // 声明 响应数据变量
    let PageData = { content: [] };
    // 声明 数据接收中间变量
    let FilmData = [];
    let FilmImage = [];
    let time = '';

    try {
        // 解析 要查询的 数据
        // 国家地区
        keyWord.CountryArea && (
            db.$or = [
                { Country: { $all: [keyWord.CountryArea] } },
                { Area: { $all: [keyWord.CountryArea] } }
            ]
        );
        // 年代
        switch (keyWord.Time) {
            case '2013-2011':
                db.Time = {
                    $lte: new Date(keyWord.Time.split('-')[0]).toJSON(),
                    $gte: new Date(keyWord.Time.split('-')[1]).toJSON()
                };
                break;
            case '2010-2006':
                db.Time = {
                    $lte: new Date(keyWord.Time.split('-')[0]).toJSON(),
                    $gte: new Date(keyWord.Time.split('-')[1]).toJSON()
                };
                break;
            case '2005-2000':
                db.Time = {
                    $lte: new Date(keyWord.Time.split('-')[0]).toJSON(),
                    $gte: new Date(keyWord.Time.split('-')[1]).toJSON()
                };
                break;
            case '90年代':
                db.Time = {
                    $lte: new Date('2000').toJSON(),
                    $gte: new Date('1990').toJSON()
                };
                break;
            case '80年代':
                db.Time = {
                    $lte: new Date('1990').toJSON(),
                    $gte: new Date('1980').toJSON()
                };
                break;
            case '其他':
                db.Time = {
                    $not: { $gte: new Date('1980').toJSON() }
                };
                break;
            case '':
                break;
            case undefined:
                break;
            default:
                time = (Number(keyWord.Time) + 1).toString();
                db.Time = {
                    $lte: new Date(time).toJSON(),
                    $gte: new Date(keyWord.Time).toJSON()
                };
                break
        };
        // 类型
        keyWord.Type && (
            db.type = {
                $all: [keyWord.type]
            }
        );
        // 封装 要排序的 数据
        switch (keyWord.Other) {
            case '热度值':
                dbOption = {
                    limit: CurrentCount,
                    skip: (page - 1) * CurrentCount,
                    sort: '-Ranking'
                };
                break;
            default:
                dbOption = {
                    limit: CurrentCount,
                    skip: (page - 1) * CurrentCount
                };
                break
        };
        // 封装 要读取的 数据
        dbData = [
            'Symbol', 'Director', 'Time', 'ChineseName', 'EnglishName',
            'Country', 'Area', 'type', 'Writter', 'TheLocalBoxOffice',
            'ChinaBoxOffice', 'WorldWideBoxOffice', 'IMDB', 'TOMATOMETER',
            'ReviewsCounted', 'AUDIENCESCORE', 'UserRatings', 'MetaScore',
            'UserScore', 'DouBan', 'Mtime', 'Notes'
        ];
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        FilmData = await dbObject.Find(db, dbData, dbOption);
        // 查询 资料馆封面图片
        FilmImage = await Handle.FindDir(FilmsLibraryCoverRPath);
        // 数据封装
        FilmData.forEach((item, index) => {
            // 初始化对象
            PageData.content[index] = {};
            // 封装 内容缩略区组件 特殊标志
            PageData.content[index]
                ['Symbol'] = item.Symbol;
            // 封装 内容缩略区组件 导演信息
            PageData.content[index]
                ['Director'] = item.Director;
            // 封装 内容缩略区组件 年代信息
            PageData.content[index]
                ['Time'] = item.Time;
            // 封装 内容缩略区组件 名称信息
            PageData.content[index]
                ['Name'] = item.ChineseName + '[' + item.EnglishName + ']';
            // 封装 内容缩略区组件 国家信息
            PageData.content[index]
                ['Country'] = item.Country;
            // 封装 内容缩略区组件 地区信息
            PageData.content[index]
                ['Area'] = item.Area;
            // 封装 内容缩略区组件 类型信息
            PageData.content[index]
                ['type'] = item.type;
            // 封装 内容缩略区组件 编剧信息
            PageData.content[index]
                ['Writter'] = item.Writter;
            // 封装 内容缩略区组件 本地票房信息
            PageData.content[index]
                ['TheLocalBoxOffice'] = item.TheLocalBoxOffice;
            // 封装 内容缩略区组件 中国票房信息
            PageData.content[index]
                ['ChinaBoxOffice'] = item.ChinaBoxOffice;
            // 封装 内容缩略区组件 世界票房信息
            PageData.content[index]
                ['WorldWideBoxOffice'] = item.WorldWideBoxOffice;
            // 封装 内容缩略区组件 IMDB 评分信息
            PageData.content[index]
                ['IMDB'] = item.IMDB;
            // 封装 内容缩略区组件 烂番茄专业评分信息
            PageData.content[index]
                ['TOMATOMETER'] = item.TOMATOMETER;
            // 封装 内容缩略区组件 烂番茄专业人数信息
            PageData.content[index]
                ['ReviewsCounted'] = item.ReviewsCounted;
            // 封装 内容缩略区组件 烂番茄观众评分信息
            PageData.content[index]
                ['AUDIENCESCORE'] = item.AUDIENCESCORE;
            // 封装 内容缩略区组件 烂番茄观众人数信息
            PageData.content[index]
                ['UserRatings'] = item.UserRatings;
            // 封装 内容缩略区组件 MTC 专业评分信息
            PageData.content[index]
                ['MetaScore'] = item.MetaScore;
            // 封装 内容缩略区组件 MTC 观众评分信息
            PageData.content[index]
                ['UserScore'] = item.UserScore;
            // 封装 内容缩略区组件 豆瓣评分信息
            PageData.content[index]
                ['DouBan'] = item.DouBan;
            // 封装 内容缩略区组件 时光网评分信息
            PageData.content[index]
                ['Mtime'] = item.Mtime;
            // 封装 内容缩略区组件 备注信息
            PageData.content[index]
                ['Notes'] = item.Notes;
            // 设置 默认 封面地址
            PageData.content[index]
                ['Src'] = '';
            // 封装 内容缩略区组件 封面地址
            FilmImage.forEach(result => {
                // 查询 中文名称
                (item.ChineseName === result.split('.')[0]) && (
                    PageData.content[index]
                    ['Src'] = FilmsLibraryCoverPath + result
                );
                // 查询 英文名称
                (item.EnglishName === result.split('.')[0]) && (
                    PageData.content[index]
                    ['Src'] = FilmsLibraryCoverPath + result
                )
            })
        });

        // 设置 数据获取成功状态码
        PageData.status = 0;
        response.send(PageData)
    } catch (error) {
        // 设置 数据错误 获取失败 状态码
        PageData.status = 1;
        // 设置 错误信息
        PageData.message = '分页资源内容获取失败，请刷新网页！';
        response.send(PageData)
    }
})


/* 后台 首页 */
router.get(ManagePath, function(request, response) {
    // 获取 该路径下的 目录名数组
    Handle.FindDir(ScrollPath).then(function(data) {
            // 设置 外部接收变量 为 数组 集合
            var readdir = [];
            // 设置 数据对应的 模型
            var dbmodel = dbScroll;
            // 封装 异步函数
            // 获取 滚动栏 图片 后台数据
            function ManageScroll(index, callback) {
                Handle.FindDB(db, dbmodel).then(function(dbdata) {
                        // 设置 内部接收变量 为 object 对象
                        var value = {};
                        // 拼接完整的 图片绝对地址
                        value.message = Scroll + data[index];
                        // 获取 图片名称 对象
                        value.name = dbdata[0].Scroll[0].Message[0].Name;
                        // 获取 图片链接 对象
                        value.link = dbdata[0].Scroll[0].Message[0].link;
                        // 获取 图片备注 对象
                        value.notes = dbdata[0].Scroll[0].Message[0].notes;
                        // 封装 外部数组
                        readdir.push(value);
                        // 回调 数据
                        callback(readdir)
                    },
                    // 数据查询失败
                    function(dbdata) {
                        // 设置 后台 失败状态码
                        readdir.status = 1;
                        response.status(500)
                    })
            };
            // 设置 后台 成功状态码
            readdir.status = 0;
            // 封装 完整的 数据结构
            // 循环 调用异步操作 查询到所有结果 并封装回调
            for (let index = 0; index < data.length; index++) {
                // 获取 图片名称
                var name = data[index].split('.')[0];
                // 设置 数据库查询 数据
                var db = {
                    "Scroll.Message.Name": name.toString()
                };
                // 调用 查询数据 异步函数
                ManageScroll(index, function(dbdata) {
                    // 限制 循环操作 对内部的影响
                    // 完成 所有循环操作 才能执行
                    if (index == data.length - 1) {
                        // 服务端渲染 后台管路系统 首页模板
                        response.render('index.html', {
                            scroll: dbdata
                        })
                    }
                })
            }
        },
        // 数据 获取失败
        function(data) {
            // 设置 后台 失败状态码
            readdir.status = 1;
            response.status(500)
        })
})


/* 后台 首页 表单提交 */
router.post(ManageIndexForm, multer({
    // 设置 文件 储存路径
    dest: MIndexFormFile
}).array('file', 5), function(request, response) {
    // 获取 后台 首页表单 发来的数据
    var data = request.body;
    // 获取 后台 首页表单 发来的文件
    var files = request.files;
    // 格式化 查询数据
    // 去除掉文件名中的 后缀名
    if (data.ProjectName.search(/\./) > 0) {
        data.ProjectName = data.ProjectName.split('.')[0]
    };
    // 声明 查询的 数据
    var Fdb = {
        "Scroll.Message.Name": data.ProjectName
    };
    // 声明 保存到 数据库 的数据
    var db = {
        Scroll: [{
            Message: [{
                Name: data.ProjectName,
                link: data.ProjectLink,
                notes: data.ProjectNotes
            }]
        }]
    };
    // 声明 对应数据库的 模型
    var dbmodel = dbScroll;

    // * 1.只有 数据 发送 *
    if (Object.keys(data).length !== 0 && files.length === 0) {
        // 1.先 查询 数据存不存在
        // 2.存在 则 更新
        // 3.不存在 则 保存
        Handle.UpdataDB(Fdb, db, dbmodel).then(function(data) {
                // 数据更新或保存成功
                // 设置 http code 表示 请求数据成功
                response.status(200).json({
                    // 向 后台首页 发送 json 数据
                    code: 200,
                    // 返回文件信息
                    message: '数据保存或更新成功！'
                })
            },
            // 数据更新或保存失败
            function(data) {
                // 设置 http code 表示 请求数据错误
                response.status(400).json({
                    // 向 后台首页 发送 json 数据
                    err_code: 400,
                    message: '数据格式错误，请重新输入！'
                })
            })
    }

    // * 2.数据 文件 都有发送 *
    if (Object.keys(data).length !== 0 && files.length !== 0) {
        // 1.先 查询 数据存不存在
        // 2.存在 则 更新
        // 3.不存在 则 保存
        Handle.UpdataDB(Fdb, db, dbmodel).then(function(data) {
                // 1.数据更新或保存成功
                // 2.处理 文件上传 操作
                Handle.FileDB(files, MIndexFormFile, function(info) {
                    // 设置 http code 表示 请求数据成功
                    response.status(200).json({
                        // 向 后台首页 发送 json 数据
                        code: 200,
                        // 返回文件信息
                        message: {
                            file: info,
                            data: '文件数据保存或更新成功！'
                        }
                    })
                })
            },
            function(data) {
                // 1.数据更新或保存失败
                // 2.处理 文件上传 操作
                Handle.FileDB(files, MIndexFormFile, function(info) {
                    // 设置 http code 表示 请求数据错误
                    response.status(400).json({
                        // 向 后台首页 发送 json 数据
                        err_code: 400,
                        message: {
                            file: info,
                            data: '数据格式错误，请重新输入！'
                        }
                    })
                })
            })
    }

    // * 3.数据 文件 都没有发送 *
    if ((Object.keys(data).length === 0 && files.length === 0) || (Object.keys(data).length === 0 && files.length !== 0)) {
        // 数据不存在
        // 设置 http code 表示 请求数据错误
        response.status(400).json({
            // 向 后台首页 发送 json 数据
            err_code: 400,
            message: '文件与数据不存在或错误，请重新上传！'
        })
    }
})


/* 后台 首页 表单 文件数据删除 */
router.post(MIndexFormRemove, multer({
    // 设置 文件 储存路径
    dest: MIndexFormFile
}).array('file', 5), function(request, response) {
    // 获取后台管理系统数据
    var data = request.body;
    // 提取 文件名
    data = data.ProjectName;
    // 声明 查询的 数据
    var db = {
        'Scroll.Message.Name': data
    };
    // 声明 对应数据库的 模型
    var dbmodel = dbScroll;

    // 1.该文件数据是上传文件的预览
    if (data.search(/\./) > 0) {
        response.status(200).json({
            code: 200,
            message: '预览文件已删除！'
        });
        return
    };

    // 2.该文件为数据库文件
    // 声明 文件夹路径
    Handle.FindDir(ScrollPath).then(function(Fdata) {
            // 文件夹读取成功
            for (var i in Fdata) {
                if (Fdata[i].split('.')[0] == data) {
                    var path = Fdata[i]
                }
            };
            // 合成 文件夹路径
            path = MIndexFormFile + path;
            // 删除对应数据
            Handle.RemoveDB(db, dbmodel).then(function(Rdata) {
                    // 数据删除成功
                    // 删除对应文件
                    Handle.RemoveFile(path).then(function(data) {
                            // 文件删除成功
                            response.status(200).json({
                                code: 200,
                                message: {
                                    file: data,
                                    data: '文件数据删除成功！'
                                }
                            })
                        },
                        function(data) {
                            // 文件删除失败
                            response.status(500).json({
                                err_code: 500,
                                message: {
                                    file: data,
                                    data: '数据删除成功，文件删除异常，请重新尝试！'
                                }
                            })
                        })
                },
                function(Rdata) {
                    // 数据删除失败
                    // 删除对应文件
                    Handle.RemoveFile(path).then(function(data) {
                            // 文件删除成功
                            response.status(200).json({
                                code: 200,
                                message: {
                                    file: data,
                                    data: '文件删除成功，数据删除异常，请重新尝试！'
                                }
                            })
                        },
                        function(data) {
                            // 文件删除失败
                            response.status(500).json({
                                err_code: 500,
                                message: {
                                    file: data,
                                    data: '文件数据删除异常，请重新尝试！'
                                }
                            })
                        })
                })
        },
        function(Fdata) {
            // 文件夹读取失败
            response.status(500).json({
                err_code: 500,
                message: '文件数据读取异常，请重新尝试！'
            })
        })
})


// 对外 暴露 路由接口
module.exports = router