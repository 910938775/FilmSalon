// 导入 数据库 mongoDB 的第三方包
var mongoose = require('mongoose')

// 导入 第三方包 mongoose 的 数据架构模块
var Schema = mongoose.Schema

// 导入 数据库连接 实例
var db = require('./database.js')

// 设计 数据库 文档数据结构
var FilmsalonSchema = new Schema({
    /* 首页滚动栏 数据结构 */
    Scroll: {
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
            // 链接
            link: {
                type: String,
                require: true,
                unique: true,
                minlength: 0,
                default: '无'
            },
            // 备注信息
            notes: {
                type: String,
                require: true,
                minlength: 0,
                default: '无'
            }
        }
    }

}, {
    /* 数据库 关键字段定义 */
    // 定义数据库的名字
    collection: 'Scroll',
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
module.exports = mongoose.model('Scroll', FilmsalonSchema)