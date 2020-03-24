// 导入 数据库 mongoDB 的第三方包
var mongoose = require('mongoose')

// 导入 第三方包 mongoose 的 数据架构模块
var Schema = mongoose.Schema

// 导入 数据库连接 实例
var db = require('./database.js')

// 设计 数据库 文档数据结构
var FilmsalonSchema = new Schema({
    /* 视频类教程 数据结构 */
    Videos: {
        // 状态码: 0 为正常，其他 为异常
        Status: {
            type: Number,
            default: 0
        },
        // 数据内容
        Message: {
            // 索引号
            ID: {
                type: Number,
                default: 0
            },
            // 名称
            Name: {
                type: String,
                required: true,
                unique: true,
                minlength: 0,
                default: '无'
            },
            // 作者
            Author: {
                type: Array,
                required: true,
                default: ['无']
            },
            // 课程时间
            Time: {
                // 课程创建时间
                createTime: {
                    type: Date,
                    default: Date.now
                },
                // 课程更新时间
                updateTime: {
                    type: Date,
                    default: Date.now
                }
            },
            // 课程内容简介
            Content: {
                type: String,
                default: '点 我 ~\(≧▽≦)/~',
                minlength: 0
            },
            // 相关作品
            Production: {
                type: Array,
                default: ['无']
            },
            // 课程目录：序号-标题
            Catalogue: {
                type: Object,
                default: { Catalogue: '无' }
            },
            // 分区
            Partition: {
                type: String,
                required: true,
                default: '无'
            },
            // 影视动漫课程热度值
            CourseValue: {
                // 搜索指数
                SearchValue: {
                    type: Number,
                    default: 0,
                    min: 0
                },
                // 标记指数
                TagValue: {
                    type: Number,
                    default: 0,
                    min: 0
                },
                // 学习指数
                learningValue: {
                    type: Number,
                    default: 0,
                    min: 0
                }
            },
            // 其他课程热度值
            OtherValue: {
                // 搜索指数
                SearchValue: {
                    type: Number,
                    default: 0,
                    min: 0
                },
                // 标记指数
                TagValue: {
                    type: Number,
                    default: 0,
                    min: 0
                },
                // 学习指数
                learningValue: {
                    type: Number,
                    default: 0,
                    min: 0
                }
            },
            // 视频课程热度值 排行榜
            Ranking: {
                type: Number,
                default: 0,
                min: 0
            },
            // 视频课程 特殊标志
            Symbol: {
                type: String,
                default: '无'
            },
            // 视频标记：
            VideoTag: {
                // 视频时间-视频时间对应：相关影视动漫+相关学术+相关课程+其他相关课程
                ScheduleTag: {
                    type: Object,
                    default: { ScheduleTag: '无' }
                },
                // 静态独立：相关影视动漫+相关学术+相关课程+其他相关课程
                Marker: {
                    type: Array,
                    default: ['无']
                }
            },
            // 评论区：昵称-评论内容-评论时间
            Comment: {
                type: Array,
                default: [{
                    NickName: '无',
                    Content: '无',
                    createTime: Date.now
                }]
            }
        }
    }

}, {
    /* 数据库 关键字段定义 */
    // 定义数据库的名字
    collection: 'Videos',
    // 数据库版本锁定
    versionKey: false,
    // 数据库操作时间设置
    // timestamps: true
    timestamps: {
        createdAt: 'createTime',
        updatedAt: 'updateTime',
    }
})

// 对外 暴露 数据库 模型构造函数
module.exports = mongoose.model('Videos', FilmsalonSchema)