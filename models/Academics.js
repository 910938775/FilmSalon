// 导入 数据库 mongoDB 的第三方包
var mongoose = require('mongoose')

// 导入 第三方包 mongoose 的 数据架构模块
var Schema = mongoose.Schema

// 导入 数据库连接 实例
var db = require('./database.js')

// 设计 数据库 文档数据结构
var FilmsalonSchema = new Schema({
    /* 学术室 数据结构 */
    Academics: {
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
                // 中文名称
                ChineseName: {
                    type: String,
                    required: true,
                    default: '无'
                },
                // 英文名称
                EnglishName: {
                    type: String,
                    required: true,
                    default: 'no'
                }
            },
            // 提出者
            Presenter: {
                type: Array,
                default: ['无']
            },
            // 年代
            Time: {
                type: Date,
                default: Date.now
            },
            // 国家
            Country: {
                type: Array,
                default: ['无']
            },
            // 地区
            Area: {
                type: Array,
                default: ['无']
            },
            // 诞生作品
            Production: {
                type: Array,
                default: ['无']
            },
            // 基本释义
            Explain: {
                type: String,
                required: true,
                minlength: 0,
                default: '无'
            },
            // 编辑次数
            EditNumber: {
                type: Number,
                default: 0,
                min: 0
            },
            // 编辑用户
            EditUsers: {
                type: Array,
                default: ['无']
            },
            // 学术案例
            AcademicCase: {
                // 学术案例名称: 学术相关内容
                CaseName: {
                    type: Object,
                    default: { CaseName: '无' }
                }
            },
            // 学术室热度值
            AcademicValue: {
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
                // 点击指数
                ClickValue: {
                    type: Number,
                    default: 0,
                    min: 0
                }
            },
            // 学术热度值 排行榜
            Ranking: {
                type: Number,
                default: 0,
                min: 0
            },
            // 学术 特殊标志
            Symbol: {
                type: String,
                default: '无'
            },
            // 学术标签
            AcademicTag: {
                type: Array,
                default: ['无']
            }
        }
    }

}, {
    /* 数据库 关键字段定义 */
    // 定义数据库的名字
    collection: 'Academics',
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
module.exports = mongoose.model('Academics', FilmsalonSchema)