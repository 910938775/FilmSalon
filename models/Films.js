// 导入 数据库 mongoDB 的第三方包
var mongoose = require('mongoose')

// 导入 第三方包 mongoose 的 数据架构模块
var Schema = mongoose.Schema

// 导入 数据库连接 实例
var db = require('./database.js')

// 设计 数据库 文档数据结构
var FilmsalonSchema = new Schema({
    /* 资料馆 数据结构 */
    Films: {
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
            // 年代
            Time: {
                type: Date,
                default: Date.now
            },
            // 类型
            type: {
                type: Array,
                default: ['无']
            },
            // 导演
            Director: {
                type: Array,
                default: ['无']
            },
            // 编剧
            Writter: {
                type: Array,
                default: ['无']
            },
            // 票房
            BoxOffice: {
                // 本地票房
                TheLocalBoxOffice: {
                    type: Number,
                    min: 0,
                    default: 0
                },
                // 中国票房
                ChinaBoxOffice: {
                    type: Number,
                    min: 0,
                    default: 0
                },
                // 全球票房
                WorldWideBoxOffice: {
                    type: Number,
                    min: 0,
                    default: 0
                }
            },
            // 评分
            Grade: {
                // IMDB评分（10）
                IMDB: {
                    type: Number,
                    min: 0,
                    default: 0
                },
                // 烂番茄评分
                ROTTENTOMATOES: {
                    // 烂番茄专业人士新鲜度（100%）
                    TOMATOMETER: {
                        type: String,
                        minlength: 1,
                        default: '0%'
                    },
                    // 烂番茄专业人士人数
                    ReviewsCounted: {
                        type: Number,
                        min: 0,
                        default: 0
                    },
                    // 烂番茄观众新鲜度（100%）
                    AUDIENCESCORE: {
                        type: String,
                        minlength: 1,
                        default: '0%'
                    },
                    // 烂番茄观众人数
                    UserRatings: {
                        type: Number,
                        min: 0,
                        default: 0
                    }
                },
                // MTC评分
                MTC: {
                    // MTC专业人士评分（100%）
                    MetaScore: {
                        type: String,
                        minlength: 1,
                        default: '0%'
                    },
                    // MTC观众评分（10）
                    UserScore: {
                        type: Number,
                        min: 0,
                        default: 0
                    }
                },
                // 豆瓣（10）
                DouBan: {
                    type: Number,
                    min: 0,
                    default: 0
                },
                // 时光网（10）
                Mtime: {
                    type: Number,
                    min: 0,
                    default: 0
                }
            },
            // 剧情简介
            Plot: {
                type: String,
                minlength: 0,
                default: '无'
            },
            // 演职员表
            Performers: {
                // 演员表
                Cast: {
                    // 领衔主演
                    Starring: {
                        type: Array,
                        default: ['无']
                    },
                    // 主演
                    Protagonist: {
                        type: Array,
                        default: ['无']
                    },
                    // 友情演出
                    GuestAppearance: {
                        type: Array,
                        default: ['无']
                    },
                    // 特别介绍
                    SpecialSuggestion: {
                        type: Array,
                        default: ['无']
                    },
                    // 角色表
                    Actor: {
                        // 角色: 演员
                        Role: {
                            type: Object,
                            default: { Role: '无' }
                        }
                    }
                },
                // 职员表
                Staff: {
                    // 制片人
                    Producer: {
                        type: Array,
                        default: ['无']
                    },
                    // 出品人
                    Present: {
                        type: Array,
                        default: ['无']
                    },
                    // 艺术指导
                    ProductionDesigner: {
                        type: Array,
                        default: ['无']
                    },
                    // 美术指导
                    ArtDirector: {
                        type: Array,
                        default: ['无']
                    },
                    // 服装指导
                    DirectorOfClothing: {
                        type: Array,
                        default: ['无']
                    },
                    // 摄影指导
                    DirectorOfPhotography: {
                        type: Array,
                        default: ['无']
                    },
                    // 灯光指导
                    Gaffer: {
                        type: Array,
                        default: ['无']
                    },
                    // 武术指导
                    FightDirector: {
                        type: Array,
                        default: ['无']
                    },
                    // 原创音乐
                    OriginalMusic: {
                        type: Array,
                        default: ['无']
                    },
                    // 原著
                    OriginalStory: {
                        type: Array,
                        default: ['无']
                    },
                    // 场务
                    ScriptGirl: {
                        type: Array,
                        default: ['无']
                    },
                    // 剪辑
                    Montage: {
                        type: Array,
                        default: ['无']
                    },
                    // 剧务
                    StageManager: {
                        type: Array,
                        default: ['无']
                    },
                    // 道具
                    Property: {
                        type: Array,
                        default: ['无']
                    },
                    // 化妆师
                    MakeUp: {
                        type: Array,
                        default: ['无']
                    },
                    // 录音师
                    ProductionSoundMixers: {
                        type: Array,
                        default: ['无']
                    },
                    // 发型师
                    HairDresser: {
                        type: Array,
                        default: ['无']
                    },
                    // 视觉效果
                    VisualEffect: {
                        type: Array,
                        default: ['无']
                    }
                }
            },
            // 出品宣发公司
            Corporation: {
                type: Array,
                default: ['无']
            },
            // 荣誉成就
            Achievement: {
                type: Array,
                default: ['无']
            },
            // 备注
            Notes: {
                type: String,
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
            // 资料馆热度值
            FilmsValue: {
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
                // 观看指数
                WatchValue: {
                    type: Number,
                    default: 0,
                    min: 0
                }
            },
            // 影视热度值 排行榜
            Ranking: {
                type: Number,
                default: 0,
                min: 0
            },
            // 影视 特殊标志
            Symbol: {
                type: String,
                default: '无'
            },
            // 影视标签
            FilmsTag: {
                type: Array,
                default: ['无']
            }
        }
    }

}, {
    /* 数据库 关键字段定义 */
    // 定义数据库的名字
    collection: 'Films',
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
module.exports = mongoose.model('Films', FilmsalonSchema)