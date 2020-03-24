// 导入 数据库 mongoDB 的第三方包
var mongoose = require('mongoose')

// 连接 mongoDB 数据库
// mongoDB 5.X 以后 更新了  useNewUrlParser: true
mongoose.connect('mongodb://localhost/filmsalon', { useMongoClient: true });
mongoose.Promise = global.Promise

// 获取 connection 实例
// 使用 Connetion 监听连接状态
var db = mongoose.connection

// 数据库 连接 状态监听
db.on('connected', function(error) {
    if (error) {
        console.log('Database connection failed...');
        return
    }
    console.log('Database connection successful...')
})

// 对外 暴露 数据库 connection 实例
module.exports = db