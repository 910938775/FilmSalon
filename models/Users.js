// 导入 数据库 mongoDB 的第三方包
var mongoose = require('mongoose')

// 导入 第三方包 mongoose 的 数据架构模块
var Schema = mongoose.Schema

// 导入 数据库连接 实例
var db = require('./database.js')

// 设计 数据库 文档数据结构
var FilmsalonSchema = new Schema({
    /* 用户 数据结构 */
    Users: {
        // 状态码：0 为正常，其他 为异常
        Status: {
            type: Number,
            // 必须存在 的数据类型
            //required: true,
            default: 0
        },
        // 数据内容
        Message: {
            // 索引号
            ID: {
                type: Number,
                //required: true,
                // 保证索引的 唯一性
                //unique: true,
                default: 0
            },
            // 昵称
            NickName: {
                type: String,
                required: true,
                unique: true,
                // string 数据长度：1-15
                minlength: 1,
                maxlength: 15,
                default: '无'
            },
            // 性别
            Gender: {
                type: Number,
                // 数据范围：-1 女性，0 保密，1 男性
                enum: [-1, 0, 1],
                // 默认 数据值
                default: 0
            },
            // 年龄
            Age: {
                type: Number,
                // number 数据范围：1-100
                min: 1,
                max: 100,
                default: 1
            },
            // 出生年月
            Birthdate: {
                type: Date,
                default: Date.now
            },
            // 籍贯
            NativePlace: {
                type: String,
                default: '无'
            },
            // 爱好
            Hobby: {
                type: Array,
                default: ['无']
            },
            // 个人简介
            Introduction: {
                type: String,
                default: '这个懒鬼什么都没有留下╮(╯_╰)╭',
                minlength: 1,
                maxlength: 50
            },
            // 账户名
            Account: {
                type: String,
                required: true,
                unique: true,
                // 账户名 匹配规则：数字 字母 下划线 组成的 6-15 位字符，且不能以 数字 开头
                match: /^[a-zA-Z_]\w{5,14}$/,
                default: '_12345'
            },
            // 密码
            Password: {
                type: String,
                required: true,
                // 密码 匹配规则：6-15 位字符组成
                minlength: 6,
                maxlength: 16,
                default: '123456'
            },
            // 邮箱
            Email: {
                type: String,
                // 邮箱 匹配规则：xxx@xxx.com 格式
                match: /(.*)@(.*)\.com/,
                default: 'xxx@xxx.com'
            },
            // 手机号
            Phone: {
                type: Number,
                // 手机号 匹配规则
                match: /^1[0-9]{10}$/,
                default: 10000000000
            },
            // 总贡献值
            ContributionValue: {
                type: Number,
                default: 0,
                min: 0
            },
            // 贡献值 排行榜
            Ranking: {
                type: Number,
                default: 0,
                min: 0
            },
            // 用户 特殊标志
            Symbol: {
                type: String,
                default: '无'
            },
            // 月贡献值
            MonthContributionValue: {
                type: Number,
                default: 0,
                min: 0
            },
            // 日贡献值
            DateContributionValue: {
                type: Number,
                default: 0,
                min: 0
            },
            // 影视贡献值
            FilmsContributionValue: {
                type: Number,
                default: 0,
                min: 0
            },
            // 影视编辑量
            FilmsEditValue: {
                type: Number,
                default: 0,
                min: 0
            },
            // 学术贡献值
            AcademicContributionValue: {
                type: Number,
                default: 0,
                min: 0
            },
            // 学术编辑量
            AcademicEditValue: {
                type: Number,
                default: 0,
                min: 0
            },
            // 课程贡献值
            CourseContributionValue: {
                type: Number,
                default: 0,
                min: 0
            },
            // 课程投稿量
            CourseEditValue: {
                type: Number,
                default: 0,
                min: 0
            },
            // 其他贡献值
            OtherContributionValue: {
                type: Number,
                default: 0,
                min: 0
            },
            // 其他投稿量
            OtherEditValue: {
                type: Number,
                default: 0,
                min: 0
            }
        }
    }

}, {
    /* 数据库 关键字段定义 */
    // 定义数据库的名字
    collection: 'Users',
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
module.exports = mongoose.model('Users', FilmsalonSchema)