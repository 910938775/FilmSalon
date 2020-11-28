// 导入 redis 操作模块
const redis = require('redis')


// 设置 redis 相关参数
const port = 6379;
const host = 'localhost';
const password = ''


// 连接 数据库
const client = redis.createClient(port, host, password)


// 曝光模块
module.exports = client