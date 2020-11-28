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
// 导入 数据库操作类
var dbHandle = require('../controllers/DataHandle.js');
// 导入 短信验证码模块
var PhoneMessage = require('../controllers/Message.js');
// 导入 redis 数据库模块
var Redis = require('../controllers/redis.js')

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
// 前台 分区页 用户数据重复性检测 绝对路径
var UserRepeat = '/repeatVerify/';
// 前台 分区页 用户注册验证码 绝对路径
var UserVerify = '/verifyPhone/';
// 前台 分区页 用户注册 绝对路径
var UserRegister = '/register/';
// 前台 分区页 用户账户修改 绝对路径
var UserModify = '/modify/account/';
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


/** 公共变量 **/
// 前台 分区页 用户注册短信验证码
var PhoneMessageInfo = {}


/** 前台 首页
 * @data 首页文件
 */
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


/** 前台首页 图片轮播区 获取图片
 * @data content[image]: 图片地址
 * @data content[link]: 图片跳转地址
 * @data content[notes]: 备注信息
 * @data status: 状态码
 * @data message: 反馈信息
 */
router.get(Scroll, async function(request, response) {
    // 设置 接收变量 为 object 对象
    let readdir = { content: [] };
    // 声明 要查询数据 对应的数据库
    let dbmodel = dbScroll;
    // 声明 查询的数据
    let db = {};
    // 声明 读取的数据
    let dbData = [];
    // 数据库实例化对象
    let dbObject = '';
    // 声明 中间变量
    let Image = [];

    try {
        // 获取 该路径下的 目录名数组
        Image = await Handle.FindDir(ScrollPath);

        // 封装 要查询的 数据
        db.$or = [];
        Image.forEach((item, index) => {
            // 初始化对象
            db.$or[index] = {};
            db.$or[index]['Name'] = item.split('.')[0]
        });
        // 封装 要读取的 数据
        dbData = ['Name', 'link', 'notes'];
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        UserData = await dbObject.Find(db, dbData);
        // 封装数据
        UserData.forEach((item, index) => {
            // 初始化对象
            readdir.content[index] = {};
            // 图片跳转地址
            readdir.content[index]['link'] = item.link;
            // 备注信息
            readdir.content[index]['notes'] = item.notes;
            // 图片地址：默认地址
            readdir.content[index]['image'] = '';
            // 查找图片地址
            Image.forEach(data => {
                if (data.split('.')[0] === item.Name) {
                    readdir.content[index]['image'] = ScrollRPath + data;
                    return
                }
            })
        });

        // 设置 前端 成功状态码
        readdir.status = 0;
        // 返回给 首页图片轮播区 目录名数组
        response.send(readdir)
    } catch (error) {
        // 设置 前端 失败状态码
        readdir.status = 1;
        // 设置 错误信息
        readdir.message = '滚动图片获取失败，请刷新网页！';
        // 返回给 首页图片轮播区 数据
        response.send(readdir)
    }
})


/** 前台首页 用户贡献榜区域 获取数据
 * @data content[NickName]: 用户名
 * @data content[ContributionValue]: 贡献值
 * @data content[Ranking]: 排行榜
 * @data content[MyHeadPortrait]: 头像
 * @data status: 状态码
 * @data message: 反馈信息
 */
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
    let UserImage = [];

    try {
        // 封装 要查询的 数据
        db = {
            'Ranking': {
                $lte: 10,
                $gte: 1
            }
        };
        // 封装 要读取的 数据
        dbData = ['NickName', 'ContributionValue', 'Ranking', 'Account'];
        // 封装 排序的 数据
        dbOption = {
            sort: 'Ranking'
        };
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        UserData = await dbObject.Find(db, dbData, dbOption);
        // 查询 对应的头像地址
        UserImage = await Handle.FindDir(UserRHeadPortrait);
        // 保存 头像地址
        UserData.forEach(item => {
            // 设置 默认图片地址：找不到图片
            item['MyHeadPortrait'] = '';
            UserImage.forEach(data => {
                if (item.Account === data.split('.')[0]) {
                    item['MyHeadPortrait'] = UserHeadPortrait + data;
                    return
                }
            });
            // 删除 账户名
            delete item.Account
        });

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


/** 前台首页 学术热度值榜区域 获取数据
 * @data content[Name]: 学术名
 * @data content[AcademicValue]: 热度值
 * @data content[Ranking]: 排行榜
 * @data content[AcadImage]: 图片 ?
 * @data status: 状态码
 * @data message: 反馈信息
 */
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


/** 前台首页 影视热度值榜区域 获取数据
 * @data content[Name]: 影视名
 * @data content[FilmsValue]: 热度值
 * @data content[Ranking]: 排行榜
 * @data content[FilmImage]: 图片 ?
 * @data status: 状态码
 * @data message: 反馈信息
 */
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


/** 前台首页 影视课程热度值榜区域 获取数据
 * @data content[Name]: 课程名
 * @data content[CourseValue]: 热度值
 * @data content[Ranking]: 排行榜
 * @data content[src]: 课程封面
 * @data content[VideoTag, ImageTextTag]: 课程标签
 * @data status: 状态码
 * @data message: 反馈信息
 */
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
                if (item.Name === result.split('.')[0]) {
                    filmCourse.content.video[index]
                        ['src'] = FilmVCourseRPath + result;
                    return
                }
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
                if (item.Name === result.split('.')[0]) {
                    filmCourse.content.imageText[index]
                        ['src'] = FilmITCourseRPath + result;
                    return
                }
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


/** 前台首页 其他课程热度值榜区域 获取数据
 * @data content[Name]: 课程名
 * @data content[OtherValue]: 热度值
 * @data content[Ranking]: 排行榜
 * @data content[src]: 课程封面
 * @data content[VideoTag, ImageTextTag]: 课程标签
 * @data status: 状态码
 * @data message: 反馈信息
 */
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
                ['OtherValue'] = item.OSearchValue + item.OTagValue + item.OlearningValue;
            // 设置 视频课程 排行榜
            otherCourse.content.video[index]
                ['Ranking'] = item.Ranking;
            // 设置 默认图片地址：找不到图片
            otherCourse.content.video[index]['src'] = '';
            // 拼接 完整 视频图片路径 绝对地址
            ImagesData.forEach(result => {
                if (item.Name === result.split('.')[0]) {
                    otherCourse.content.video[index]
                        ['src'] = OtherVCourseRPath + result;
                    return
                }
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
                ['OtherValue'] = item.OSearchValue + item.OTagValue + item.OlearningValue;
            // 设置 图文课程 排行榜
            otherCourse.content.imageText[index]
                ['Ranking'] = item.Ranking;
            // 设置 默认图片地址：找不到图片
            otherCourse.content.imageText[index]['src'] = '';
            // 拼接 完整 图文图片路径 绝对地址
            ImagesData.forEach(result => {
                if (item.Name === result.split('.')[0]) {
                    otherCourse.content.imageText[index]
                        ['src'] = OtherITCourseRPath + result;
                    return
                }
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


/** 前台分区页 用户登录
 * @data content[NickName]: 昵称
 * @data content[Account]: 账户名
 * @data content[Gender]: 性别
 * @data content[Age]: 性别
 * @data content[NativePlace]: 国家地区
 * @data content[ContributionValue]: 总贡献榜
 * @data content[MonthContributionValue]: 月贡献榜
 * @data content[DateContributionValue]: 日贡献榜
 * @data content[MyHeadPortrait]: 头像
 * @data content[token]: 手机端验证码 token
 * @data status: 状态码
 * @data message: 反馈信息
 */
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
    let token = '';
    // token 默认保存时间：7 天，单位 s
    let tokenTime = 7 * 24 * 60 * 60;

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
                if (Userdata.content.Account === item.split('.')[0]) {
                    Userdata.content.MyHeadPortrait = UserHeadPortrait + item;
                    return
                }
            });

            // 查询客户端 是否点击 保存登录状态
            (Logindata.Time === 'on') && (
                // 保存登录状态到 session 中：7天免登陆
                request.session.Account = Userdata.content.Account
            );

            // 生成 Token 字符串：手机端 身份验证
            (!Logindata.Time) && (
                token = Handle.token(),
                // 保存 Token 到 响应数据
                Userdata.content.token = token,
                // 保存 Token 到 redis 数据库：token-用户名
                Redis.setString(token, Userdata.content.Account, tokenTime)
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


/** 前台分区页 用户身份验证
 * @data content[NickName]: 昵称
 * @data content[Account]: 账户名
 * @data content[Gender]: 性别
 * @data content[Age]: 性别
 * @data content[NativePlace]: 国家地区
 * @data content[ContributionValue]: 总贡献榜
 * @data content[MonthContributionValue]: 月贡献榜
 * @data content[DateContributionValue]: 日贡献榜
 * @data content[MyHeadPortrait]: 头像
 * @data status: 状态码
 * @data message: 反馈信息
 */
router.post(UserVerification, async function(request, response) {
    // 获取手机端 token
    let token = request.body;
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
    let tokenValue = '';

    try {
        // 手机端 读取 redis 服务器 token 信息
        token.token && (tokenValue = await Redis.getString(token.token));

        // 1. 身份信息失效
        if (!request.session.Account && (!token.token || !tokenValue)) {
            // 设置 失败状态码
            verifyData.status = 2;
            response.send(verifyData);
            return
        };

        // 2. 身份信息有效
        // 封装 要查询的 数据
        db = {
            'Account': request.session.Account || tokenValue
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
            if (verifyData.content.Account === item.split('.')[0]) {
                verifyData.content.MyHeadPortrait = UserHeadPortrait + item;
                return
            }
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


/** 前台分区页 用户数据验证
 * @data status: 状态码
 * @data message: 反馈信息
 */
router.post(UserRepeat, async function(request, response) {
    // 获取 检测数据
    let repeat = request.body;
    // 声明 查询的数据
    let db = {};
    // 数据库实例化对象
    let dbObject = '';
    // 设置查询对应的数据模型
    let dbmodel = dbUsers;
    // 声明 响应数据变量
    let repeatData = {};
    // 声明 中间变量
    let UserRepeats = [];

    try {
        // 封装 要查询的 数据：昵称 账户名
        db.$or = [
            { 'NickName': repeat.NickName || '' },
            { 'Account': repeat.Account || '' },
            { 'Phone': repeat.Phone || '' }
        ];
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 查询数据
        UserRepeats = await dbObject.Find(db);

        // 1. 用户数据不重复
        // 设置状态码
        repeatData.status = 0;
        // 设置 错误信息
        repeatData.message = '用户数据可注册';

        // 2. 用户数据重复
        UserRepeats.length && (
            repeatData.status = -2,
            repeatData.message = '用户数据已存在'
        );

        // 3. 用户手机号不存在
        repeat.Phone && !UserRepeats.length && (
            repeatData.status = -1,
            repeatData.message = '手机号不存在'
        );

        // 返回数据
        response.send(repeatData)
    } catch (error) {
        // 设置 数据错误 获取失败 状态码
        repeatData.status = 1;
        // 设置 错误信息
        repeatData.message = '用户信息检测失败，请刷新网页！';
        response.send(repeatData)
    }
})


/** 前台分区页 用户注册验证码
 * @data status: 状态码
 * @data message: 反馈信息
 */
router.post(UserVerify, function(request, response) {
    // 获取注册手机号
    let phone = request.body;
    // iHuyi 账号
    let account = '账户';
    // iHuyi 密码
    let password = '密码';
    // 注册手机号
    let mobile = phone.Phone;
    // 验证码内容
    let content = '';
    // 验证码数字
    let numbers = null;
    // 实例化对象
    let dbObject = '';
    // 声明 响应数据变量
    let verifyNumber = {};

    try {
        // 封装验证码内容
        // 随机五位验证数
        numbers = parseInt(Math.random() * 100000);
        // 检验位数是否合格
        (numbers < 10000) && (numbers *= 10);
        // 完整短信内容
        content = '您的验证码是：' + numbers + '，请不要把验证码泄露给其他人。';
        // 实例化对象
        dbObject = new PhoneMessage(account, password);
        // 发送验证码数据
        dbObject.send(mobile, content, function(error, data) {
            // 发送成功
            if (data) {
                // 保存验证码
                PhoneMessageInfo[mobile] = numbers;
                // 设置 发送成功 状态码
                verifyNumber.status = 0;
                response.send(verifyNumber)
            };

            // 发送失败
            if (error) {
                // 设置 发送失败 状态码
                verifyNumber.status = 2;
                // 设置 错误信息
                verifyNumber.message = '服务器错误，请稍后尝试！';
                response.send(verifyNumber);
                // 打印错误日志
                console.log(error)
            }
        })
    } catch (error) {
        // 设置 数据错误 获取失败 状态码
        verifyNumber.status = 1;
        // 设置 错误信息
        verifyNumber.message = '验证码发送失败，请重新尝试！';
        response.send(verifyNumber)
    }
})


/** 前台分区页 用户注册
 * @data status: 状态码
 * @data message: 反馈信息
 */
router.post(UserRegister, async function(request, response) {
    // 获取 用户注册数据
    let user = request.body;
    // 声明 保存的数据
    let db = {};
    // 声明 查询的数据模型
    let dbmodel = dbUsers;
    // 数据库实例化对象
    let dbObject = '';
    // 声明 响应数据变量
    let userRegist = {};

    try {
        /* 1. 账号密码注册 */
        if (!user.hasOwnProperty('Phone')) {
            // 封装 保存数据：昵称 账户名 密码
            db = {
                'NickName': user.NickName,
                'Account': user.Account,
                'Password': user.Password
            };
            // 实例化 数据库操作对象
            dbObject = new dbHandle(dbmodel);
            // 保存数据
            await dbObject.Save(db);
            // 设置成功状态码
            userRegist.status = 0;
            // 返回数据
            response.send(userRegist);
            return
        };

        /* 2. 手机号注册 */
        if (PhoneMessageInfo[user.Phone] === Number(user.Verify)) {
            // 手机验证通过
            // 封装 保存数据：手机号 密码
            db = {
                'NickName': user.Phone,
                'Account': user.Phone,
                'Phone': Number(user.Phone),
                'Password': user.Password
            };
            // 实例化 数据库操作对象
            dbObject = new dbHandle(dbmodel);
            // 保存数据
            await dbObject.Save(db);
            // 删除用户验证码
            delete PhoneMessageInfo[user.Phone];
            // 设置成功状态码
            userRegist.status = 0;
            // 返回数据
            response.send(userRegist)
        } else {
            // 手机验证没有通过
            // 设置 手机验证失败 状态码
            userRegist.status = 2;
            // 设置 错误信息
            userRegist.message = '手机验证码错误';
            response.send(userRegist)
        }
    } catch (error) {
        // 设置 数据错误 获取失败 状态码
        userRegist.status = 1;
        // 设置 错误信息
        userRegist.message = '用户注册失败，请重新尝试！';
        response.send(userRegist)
    }
})


/** 前台分区页 账户修改
 * @data status: 状态码
 * @data message: 反馈信息
 */
router.post(UserModify, async function(request, response) {
    // 获取 用户修改数据
    let user = request.body;
    // 声明 查询的数据
    let db = {};
    // 声明 更新的数据
    let updata = {};
    // 声明 查询的数据模型
    let dbmodel = dbUsers;
    // 数据库实例化对象
    let dbObject = '';
    // 声明 响应数据变量
    let userModify = {};

    try {
        /* 1. 修改密码 */
        // 验证 验证码
        if (user.Password && user.Phone) {
            // 验证成功
            if (PhoneMessageInfo[user.Phone] === user.Verify) {
                // 封装 查询数据
                db = {
                    'Phone': user.Phone
                };
                // 封装 更新数据
                updata = {
                    'Password': user.Password
                };
                // 实例化 数据库操作对象
                dbObject = new dbHandle(dbmodel);
                // 保存数据
                await dbObject.Updata(db, updata);
                // 设置成功状态码
                userModify.status = 0;
                // 返回数据
                response.send(userModify);
                return
            };

            // 验证失败
            // 设置失败状态码
            userModify.status = 2;
            // 设置 错误信息
            userModify.message = '验证码错误';
            // 返回数据
            response.send(userModify);
            return
        };

        /* 2. 修改手机号 */
        if (user.Phone) {
            // 验证成功
            if (PhoneMessageInfo[user.Phone] === user.Verify) {
                // 封装 查询数据
                db = {
                    'Phone': user.Phone
                };
                // 封装 更新数据
                updata = {
                    'Phone': user.Phone
                };
                // 实例化 数据库操作对象
                dbObject = new dbHandle(dbmodel);
                // 保存数据
                await dbObject.Updata(db, updata);
                // 设置成功状态码
                userModify.status = 0;
                // 返回数据
                response.send(userModify);
                return
            };

            // 验证失败
            // 设置失败状态码
            userModify.status = 2;
            // 设置 错误信息
            userModify.message = '验证码错误';
            // 返回数据
            response.send(userModify);
            return
        };

        /* 3. 修改其他 */
        // 封装 查询数据
        db = {
            'Account': user.Account
        };
        // 封装 更新数据
        updata = user;
        // 实例化 数据库操作对象
        dbObject = new dbHandle(dbmodel);
        // 保存数据
        await dbObject.Updata(db, updata);
        // 设置成功状态码
        userModify.status = 0;
        // 返回数据
        response.send(userModify)
    } catch (error) {
        // 设置 数据错误 获取失败 状态码
        userModify.status = 1;
        // 设置 错误信息
        userModify.message = '用户修改失败，请重新尝试！';
        response.send(userModify)
    }
})


/** 前台分区页 资料馆 内容缩略区组件 初始化
 * @data content[totalCount]: 资源总数
 * @data content[contents][Symbol]: 特殊标志
 * @data content[contents][Director]: 导演
 * @data content[contents][Time]: 年代
 * @data content[contents][Name]: 名称
 * @data content[contents][Country]: 国家
 * @data content[contents][Area]: 地区
 * @data content[contents][type]: 类型
 * @data content[contents][Writter]: 编剧
 * @data content[contents][TheLocalBoxOffice]: 本地票房
 * @data content[contents][ChinaBoxOffice]: 中国票房
 * @data content[contents][WorldWideBoxOffice]: 世界票房
 * @data content[contents][IMDB]: IMDB 评分
 * @data content[contents][TOMATOMETER]: 烂番茄专业评分
 * @data content[contents][ReviewsCounted]: 烂番茄专业评分人数
 * @data content[contents][AUDIENCESCORE]: 烂番茄观众评分
 * @data content[contents][UserRatings]: 烂番茄观众评分人数
 * @data content[contents][MetaScore]: MTC 专业评分
 * @data content[contents][UserScore]: MTC 观众评分
 * @data content[contents][DouBan]: 豆瓣评分
 * @data content[contents][Mtime]: 时光网评分
 * @data content[contents][Notes]: 备注
 * @data content[contents][Src]: 封面图片
 * @data status: 状态码
 * @data message: 反馈信息
 */
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
                if (item.ChineseName === result.split('.')[0]) {
                    InitializeData.content.contents[index]
                        ['Src'] = FilmsLibraryCoverPath + result;
                    return
                };
                // 查询 英文名称
                if (item.EnglishName === result.split('.')[0]) {
                    InitializeData.content.contents[index]
                        ['Src'] = FilmsLibraryCoverPath + result;
                    return
                }
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


/** 前台分区页 资料馆 筛选栏组件 资源检索
 * @data content[TotalContent]: 资源总数
 * @data content[CurrentContent][Symbol]: 特殊标志
 * @data content[CurrentContent][Director]: 导演
 * @data content[CurrentContent][Time]: 年代
 * @data content[CurrentContent][Name]: 名称
 * @data content[CurrentContent][Country]: 国家
 * @data content[CurrentContent][Area]: 地区
 * @data content[CurrentContent][type]: 类型
 * @data content[CurrentContent][Writter]: 编剧
 * @data content[CurrentContent][TheLocalBoxOffice]: 本地票房
 * @data content[CurrentContent][ChinaBoxOffice]: 中国票房
 * @data content[CurrentContent][WorldWideBoxOffice]: 世界票房
 * @data content[CurrentContent][IMDB]: IMDB 评分
 * @data content[CurrentContent][TOMATOMETER]: 烂番茄专业评分
 * @data content[CurrentContent][ReviewsCounted]: 烂番茄专业评分人数
 * @data content[CurrentContent][AUDIENCESCORE]: 烂番茄观众评分
 * @data content[CurrentContent][UserRatings]: 烂番茄观众评分人数
 * @data content[CurrentContent][MetaScore]: MTC 专业评分
 * @data content[CurrentContent][UserScore]: MTC 观众评分
 * @data content[CurrentContent][DouBan]: 豆瓣评分
 * @data content[CurrentContent][Mtime]: 时光网评分
 * @data content[CurrentContent][Notes]: 备注
 * @data content[CurrentContent][Src]: 封面图片
 * @data status: 状态码
 * @data message: 反馈信息
 */
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
            FilterData.content.CurrentContent[index]
                ['Country'] = item.Country;
            // 封装 内容缩略区组件 地区信息
            FilterData.content.CurrentContent[index]
                ['Area'] = item.Area;
            // 封装 内容缩略区组件 类型信息
            FilterData.content.CurrentContent[index]
                ['type'] = item.type;
            // 封装 内容缩略区组件 编剧信息
            FilterData.content.CurrentContent[index]
                ['Writter'] = item.Writter;
            // 封装 内容缩略区组件 本地票房信息
            FilterData.content.CurrentContent[index]
                ['TheLocalBoxOffice'] = item.TheLocalBoxOffice;
            // 封装 内容缩略区组件 中国票房信息
            FilterData.content.CurrentContent[index]
                ['ChinaBoxOffice'] = item.ChinaBoxOffice;
            // 封装 内容缩略区组件 世界票房信息
            FilterData.content.CurrentContent[index]
                ['WorldWideBoxOffice'] = item.WorldWideBoxOffice;
            // 封装 内容缩略区组件 IMDB 评分信息
            FilterData.content.CurrentContent[index]
                ['IMDB'] = item.IMDB;
            // 封装 内容缩略区组件 烂番茄专业评分信息
            FilterData.content.CurrentContent[index]
                ['TOMATOMETER'] = item.TOMATOMETER;
            // 封装 内容缩略区组件 烂番茄专业人数信息
            FilterData.content.CurrentContent[index]
                ['ReviewsCounted'] = item.ReviewsCounted;
            // 封装 内容缩略区组件 烂番茄观众评分信息
            FilterData.content.CurrentContent[index]
                ['AUDIENCESCORE'] = item.AUDIENCESCORE;
            // 封装 内容缩略区组件 烂番茄观众人数信息
            FilterData.content.CurrentContent[index]
                ['UserRatings'] = item.UserRatings;
            // 封装 内容缩略区组件 MTC 专业评分信息
            FilterData.content.CurrentContent[index]
                ['MetaScore'] = item.MetaScore;
            // 封装 内容缩略区组件 MTC 观众评分信息
            FilterData.content.CurrentContent[index]
                ['UserScore'] = item.UserScore;
            // 封装 内容缩略区组件 豆瓣评分信息
            FilterData.content.CurrentContent[index]
                ['DouBan'] = item.DouBan;
            // 封装 内容缩略区组件 时光网评分信息
            FilterData.content.CurrentContent[index]
                ['Mtime'] = item.Mtime;
            // 封装 内容缩略区组件 备注信息
            FilterData.content.CurrentContent[index]
                ['Notes'] = item.Notes;
            // 设置 默认 封面地址
            FilterData.content.CurrentContent[index]
                ['Src'] = '';
            // 封装 内容缩略区组件 封面地址
            FilImage.forEach(result => {
                // 查询 中文名称
                if (item.ChineseName === result.split('.')[0]) {
                    FilterData.content.CurrentContent[index]
                        ['Src'] = FilmsLibraryCoverPath + result;
                    return
                };
                // 查询 英文名称
                if (item.EnglishName === result.split('.')[0]) {
                    FilterData.content.CurrentContent[index]
                        ['Src'] = FilmsLibraryCoverPath + result;
                    return
                }
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


/** 前台分区页 资料馆 内容缩略区组件 分页获取资源
 * @data content[Symbol]: 特殊标志
 * @data content[Director]: 导演
 * @data content[Time]: 年代
 * @data content[Name]: 名称
 * @data content[Country]: 国家
 * @data content[Area]: 地区
 * @data content[type]: 类型
 * @data content[Writter]: 编剧
 * @data content[TheLocalBoxOffice]: 本地票房
 * @data content[ChinaBoxOffice]: 中国票房
 * @data content[WorldWideBoxOffice]: 世界票房
 * @data content[IMDB]: IMDB 评分
 * @data content[TOMATOMETER]: 烂番茄专业评分
 * @data content[ReviewsCounted]: 烂番茄专业评分人数
 * @data content[AUDIENCESCORE]: 烂番茄观众评分
 * @data content[UserRatings]: 烂番茄观众评分人数
 * @data content[MetaScore]: MTC 专业评分
 * @data content[UserScore]: MTC 观众评分
 * @data content[DouBan]: 豆瓣评分
 * @data content[Mtime]: 时光网评分
 * @data content[Notes]: 备注
 * @data content[Src]: 封面图片
 * @data status: 状态码
 * @data message: 反馈信息
 */
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
                if (item.ChineseName === result.split('.')[0]) {
                    PageData.content[index]
                        ['Src'] = FilmsLibraryCoverPath + result;
                    return
                };
                // 查询 英文名称
                if (item.EnglishName === result.split('.')[0]) {
                    PageData.content[index]
                        ['Src'] = FilmsLibraryCoverPath + result;
                    return
                }
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
    // 对外 暴露 路由接口
module.exports = router